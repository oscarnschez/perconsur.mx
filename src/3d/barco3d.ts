// Encabezado de la División Puerto: un buque portacontenedores navega rumbo a Manzanillo sobre mar abierto.
// El mar es una malla con olas de Gerstner calculadas en el sombreador y rizos en un mapa de normales que se
// desplaza; el cielo es un degradado que también sirve de entorno para los reflejos. El buque es un modelo
// glTF ("Container Ship" de RM02, CC BY 4.0) al que se le quitaron los letreros y logotipos.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { azar, lienzo } from './c3d-comun';

const HORIZONTE = new THREE.Color(0xdce5ec), CENIT = new THREE.Color(0x7fa6c6);
const G = 3.0;   // gravedad en unidades del modelo (el buque mide 91 u, unos 300 m)
// olas: dirección, pendiente y longitud de onda
const OLAS: [number, number, number, number][] = [
  [1, 0.35, 0.09, 72], [0.55, 1, 0.07, 41], [-0.45, 0.9, 0.06, 23], [1, -0.6, 0.05, 13], [0.2, -1, 0.04, 8],
];

function cielo() {
  const geo = new THREE.SphereGeometry(1500, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { cHor: { value: HORIZONTE }, cCen: { value: CENIT }, sol: { value: new THREE.Vector3(-0.55, 0.32, -0.77).normalize() } },
    vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: `uniform vec3 cHor, cCen, sol; varying vec3 vDir;
      void main(){
        float h = max(vDir.y, 0.0);
        vec3 c = mix(cHor, cCen, pow(h, 0.55));
        float s = max(dot(normalize(vDir), sol), 0.0);
        c += vec3(1.0, 0.93, 0.8) * (pow(s, 600.0) * 4.0 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  return new THREE.Mesh(geo, mat);
}

// rizos finos: mapa de normales repetible hecho con ondas aleatorias
function texRizos() {
  const N = 256, r = azar(91), h = new Float32Array(N * N);
  for (let k = 0; k < 40; k++) {
    const fx = Math.round((r() - 0.5) * 16), fy = Math.round((r() - 0.5) * 16), a = 1 / (1 + Math.hypot(fx, fy)), ph = r() * 6.28;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) h[y * N + x] += a * Math.sin(((fx * x + fy * y) / N) * 6.2832 + ph);
  }
  return lienzo(N, N, g => {
    const img = g.createImageData(N, N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const dx = h[y * N + (x + 1) % N] - h[y * N + (x - 1 + N) % N], dy = h[((y + 1) % N) * N + x] - h[((y - 1 + N) % N) * N + x];
      const nx = -dx * 2.2, ny = -dy * 2.2, l = Math.hypot(nx, ny, 1), o = (y * N + x) * 4;
      img.data[o] = (nx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[o + 2] = (1 / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }, [32, 32], false);
}

function mar(tiempo: { value: number }, flujo: { value: THREE.Vector2 }) {
  const geo = new THREE.PlaneGeometry(1400, 1400, 320, 320); geo.rotateX(-Math.PI / 2);
  const rizos = texRizos();
  const mat = new THREE.MeshStandardMaterial({ color: 0x0a3044, roughness: 0.16, metalness: 0, normalMap: rizos, normalScale: new THREE.Vector2(0.13, 0.13), envMapIntensity: 0.85 });
  const ondas = OLAS.map(([dx, dz, s, L]) => { const l = Math.hypot(dx, dz); return `ola(vec2(${(dx / l).toFixed(4)}, ${(dz / l).toFixed(4)}), ${s.toFixed(3)}, ${L.toFixed(1)}, p, d, t, b);`; }).join('\n');
  mat.onBeforeCompile = sh => {
    sh.uniforms.uTiempo = tiempo; sh.uniforms.uFlujo = flujo;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uTiempo; uniform vec2 uFlujo;
        void ola(vec2 dir, float s, float L, vec2 p, inout vec3 d, inout vec3 t, inout vec3 b) {
          float k = 6.2831853 / L, c = sqrt(${G.toFixed(2)} / k), a = s / k;
          float f = k * (dot(dir, p) - c * uTiempo);
          float sf = sin(f), cf = cos(f);
          d += vec3(dir.x * a * cf, a * sf, dir.y * a * cf);
          t += vec3(-dir.x * dir.x * s * sf, dir.x * s * cf, -dir.x * dir.y * s * sf);
          b += vec3(-dir.x * dir.y * s * sf, dir.y * s * cf, -dir.y * dir.y * s * sf);
        }`)
      .replace('#include <beginnormal_vertex>', `
        vec2 p = position.xz + uFlujo; vec3 d = vec3(0.0), t = vec3(1.0, 0.0, 0.0), b = vec3(0.0, 0.0, 1.0);
        float atenua = 1.0 - smoothstep(380.0, 650.0, length(position.xz));
        ${ondas}
        d *= atenua;
        vec3 objectNormal = normalize(mix(vec3(0.0, 1.0, 0.0), normalize(cross(b, t)), atenua));
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(1.0, 0.0, 0.0);
        #endif`)
      .replace('#include <begin_vertex>', 'vec3 transformed = position + d;');
  };
  const m = new THREE.Mesh(geo, mat);
  return { m, rizos };
}

// estela de espuma detrás de la popa
function texEspuma() {
  const r = azar(23);
  return lienzo(256, 512, g => {
    g.clearRect(0, 0, 256, 512);
    for (let i = 0; i < 2600; i++) {
      const y = r() * 512, x = 128 + (r() - 0.5) * 256 * (0.25 + 0.75 * y / 512) * (0.4 + 0.6 * r());
      const a = 0.05 + 0.2 * r() * (1 - y / 512);
      g.fillStyle = `rgba(255,255,255,${a})`; g.beginPath(); g.arc(x, y, 1 + r() * 5, 0, 6.2832); g.fill();
    }
  });
}

export function mount(host: HTMLElement, opts: { onReady?: () => void }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(HORIZONTE, 0.0028);
  const sky = cielo(); scene.add(sky);
  // el mismo cielo, prefiltrado, da los reflejos del agua y del buque
  const pm = new THREE.PMREMGenerator(renderer), escenaCielo = new THREE.Scene(); escenaCielo.add(cielo());
  scene.environment = pm.fromScene(escenaCielo, 0.02).texture; pm.dispose();
  scene.environmentIntensity = 0.9;
  const sol = new THREE.DirectionalLight(0xfff1dc, 2.2); sol.position.set(-55, 32, -77); scene.add(sol);
  scene.add(new THREE.HemisphereLight(0xdfe9f2, 0x1d3a4a, 0.7));

  const tiempo = { value: 0 }, flujo = { value: new THREE.Vector2() };
  const oceano = mar(tiempo, flujo); scene.add(oceano.m);

  const camara = new THREE.PerspectiveCamera(30, 2, 1, 3000);
  const buque = new THREE.Group(); scene.add(buque);
  const espuma = new THREE.Mesh(new THREE.PlaneGeometry(26, 130).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: texEspuma(), transparent: true, depthWrite: false, opacity: 0.85 }));
  espuma.visible = false; scene.add(espuma);

  let listo = false, visible = true, raf = 0, ultimo = 0, t0 = performance.now();
  const RUMBO = new THREE.Vector2(1, 0);   // el agua corre de proa a popa (el buque avanza hacia +x)
  function encuadre() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camara.aspect = w / h;
    // en pantallas angostas la cámara se aleja para que quepa el buque completo
    camara.fov = w / h < 1.6 ? 40 : 30; camara.updateProjectionMatrix();
  }
  function cuadro(ahora: number) {
    const t = (ahora - t0) / 1000;
    tiempo.value = t; flujo.value.set(RUMBO.x * t * 2.2, RUMBO.y * t * 2.2);
    oceano.rizos.offset.set(-t * 0.0045, t * 0.0012);
    if (buque.children.length) {
      buque.position.y = Math.sin(t * 0.45) * 0.22;
      buque.rotation.z = Math.sin(t * 0.38 + 1) * 0.006;   // cabeceo
      buque.rotation.x = Math.sin(t * 0.31) * 0.012;       // balanceo
      (espuma.material as THREE.MeshBasicMaterial).map!.offset.y = -t * 0.05;
    }
    const a = Math.sin(t * 0.05) * 0.12;   // la cámara se mece despacio alrededor de la proa
    camara.position.set(Math.cos(0.8 + a) * 104 + 10, 15 + Math.sin(t * 0.07) * 1.2, Math.sin(0.8 + a) * 104);
    camara.lookAt(6, 5, 0);
    renderer.render(scene, camara);
  }
  function bucle(ahora: number) {
    raf = 0;
    if (!visible || document.hidden) return;
    if (ahora - ultimo > 30) { ultimo = ahora; cuadro(ahora); }   // ~30 cuadros por segundo bastan
    raf = requestAnimationFrame(bucle);
  }
  const arranca = () => { if (listo && visible && !raf) raf = requestAnimationFrame(bucle); };
  encuadre();
  const ro = new ResizeObserver(() => { encuadre(); if (listo) cuadro(performance.now()); }); ro.observe(host);
  const io = new IntersectionObserver(es => { visible = es.some(e => e.isIntersecting); arranca(); }); io.observe(host);
  document.addEventListener('visibilitychange', arranca);

  new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(new URL('../modelos/barco.glb', import.meta.url).href, gltf => {
    const m = gltf.scene;
    // proa hacia +x, centrado a lo largo y con la línea de flotación en y = 0
    const caja = new THREE.Box3().setFromObject(m), c = caja.getCenter(new THREE.Vector3());
    m.position.set(-c.x, -caja.min.y - 5.6, -c.z);
    m.traverse((o: any) => { if (o.isMesh) { o.frustumCulled = false; } });
    buque.add(m);
    const L = caja.max.x - caja.min.x;
    espuma.position.set(-L / 2 - 62, 0.35, 0); espuma.rotation.y = Math.PI / 2; espuma.visible = true;
    listo = true; cuadro(performance.now()); opts.onReady?.(); arranca();
  });

  return {
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange', arranca);
      renderer.dispose(); renderer.domElement.remove();
    },
  };
}
