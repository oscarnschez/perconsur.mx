// Visor 3D del contenedor (img2threejs): 20', 40' y 40' HC, arrastrar para girar, abrir puertas.
import * as THREE from 'three';
import * as C20 from './container20';
import * as C40 from './container40';
import * as C40HC from './container40hc';
import { mountDoorHinges } from './containerRuntime';

type Size = '20' | '40' | '40hc';
const FACT: Record<Size, any> = { '20': C20, '40': C40, '40hc': C40HC };
const CODE: Record<Size, string> = { '20': '22G1', '40': '42G1', '40hc': '45G1' };
const pick = (mod: any, test: (k: string) => boolean) => mod[Object.keys(mod).find(test)!];

function sizeCodeDecal(code: string, wallX: number, y: number, z: number, side: 1 | -1): THREE.Mesh {
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 96;
  const g = cv.getContext('2d')!; g.fillStyle = '#F4F5F4';
  g.font = '600 54px "Inter", Arial, sans-serif'; g.textAlign = 'right'; g.fillText(code, 246, 58);
  g.fillRect(96, 72, 150, 6);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.23), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.55 }));
  m.position.set(wallX + side * 0.045, y, z); m.rotation.y = side * Math.PI / 2; m.name = 'size-type-code';
  return m;
}

export function mount(host: HTMLElement, opts: { reduce: boolean; onReady?: () => void }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  pick(C40, k => k.startsWith('configure'))(renderer);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.environment = pick(C40, k => k.endsWith('Environment'))(renderer);
  scene.add(pick(C40, k => k.endsWith('LookDevLights'))('neutral'));
  const cam = new THREE.PerspectiveCamera(24, 1, 0.1, 200);
  const turn = new THREE.Group(); scene.add(turn);
  let model: THREE.Group | null = null, setDoors = (_: number) => {}, doors = 0, doorsTarget = 0;
  let yaw = -0.62, size: Size = '40';

  function build(s: Size) {
    if (model) { turn.remove(model); model.traverse((o: any) => { if (o.isMesh) { o.geometry.dispose(); } }); }
    size = s;
    model = pick(FACT[s], k => k.startsWith('create') && k.endsWith('Model'))({});
    const box = new THREE.Box3().setFromObject(model!);
    const L = box.max.z - box.min.z, H = box.max.y - box.min.y, W = box.max.x - box.min.x;
    for (const side of [1, -1] as const) model!.add(sizeCodeDecal(CODE[s], side * W / 2, H - 0.42, L / 2 - 0.75, side));
    model!.position.z = -(box.max.z + box.min.z) / 2;
    turn.add(model!); setDoors = mountDoorHinges(model!); setDoors(doors);
    frame();
  }
  function frame() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); cam.aspect = w / h;
    // encuadre fijo por el 40' para que los tamaños se comparen a la misma escala
    const span = 12.6, dist = (span / 2) / Math.tan((cam.fov * Math.PI / 180) / 2) / Math.min(1, cam.aspect) * 0.62;
    cam.position.set(0, dist * 0.42, dist); cam.lookAt(0, 1.0, 0); cam.updateProjectionMatrix();
  }
  // Movimiento físico, medido en tiempo y no en cuadros:
  //  - arrastre 1:1 con el dedo (sin suavizado que lo retrase)
  //  - al soltar, el giro conserva la velocidad del gesto y se frena solo (inercia)
  //  - teclado y puertas: resorte con amortiguamiento crítico (sin rebote), respuesta ~0.4 s
  //  - todo se puede interrumpir: tocar el modelo en movimiento lo detiene en su valor actual
  let raf = 0, visible = true, last = 0;
  let yawVel = 0, yawGoal: number | null = null, doorsVel = 0, dragging = false;
  const spring = (x: number, v: number, goal: number, response: number, dt: number) => {
    const w = (2 * Math.PI) / response;
    const a = w * w * (goal - x) - 2 * w * v;
    v += a * dt; return [x + v * dt, v];
  };
  const loop = (t: number) => {
    raf = 0;
    const dt = last ? Math.min(0.05, (t - last) / 1000) : 1 / 60; last = t;
    let moving = false;
    if (!dragging) {
      if (yawGoal !== null) {
        if (opts.reduce) { yaw = yawGoal; yawVel = 0; }
        else [yaw, yawVel] = spring(yaw, yawVel, yawGoal, 0.4, dt);
        if (Math.abs(yawGoal - yaw) < 0.0005 && Math.abs(yawVel) < 0.002) { yaw = yawGoal; yawGoal = null; yawVel = 0; } else moving = true;
      } else if (yawVel !== 0) {
        yaw += yawVel * dt;
        yawVel *= Math.pow(0.996, dt * 1000);   // deceleración exponencial, como el desplazamiento
        if (Math.abs(yawVel) < 0.02) yawVel = 0; else moving = true;
      }
    }
    if (opts.reduce) doors = doorsTarget;
    else { [doors, doorsVel] = spring(doors, doorsVel, doorsTarget, 0.5, dt); }
    if (Math.abs(doorsTarget - doors) < 0.001 && Math.abs(doorsVel) < 0.002) { doors = doorsTarget; doorsVel = 0; } else moving = true;
    turn.rotation.y = yaw; setDoors(doors);
    renderer.render(scene, cam);
    if (visible && moving) raf = requestAnimationFrame(loop); else last = 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
  // arrastrar para girar (ratón, dedo o pluma); el scroll vertical sigue funcionando en móvil (touch-action: pan-y)
  const gain = () => (Math.PI * 1.6) / Math.max(320, host.clientWidth);   // un ancho del visor ≈ 290°
  let lastX = 0, hist: { x: number; t: number }[] = [];
  host.addEventListener('pointerdown', e => {
    dragging = true; yawGoal = null; yawVel = 0;   // atrapar el modelo a medio giro lo detiene donde está
    lastX = e.clientX; hist = [{ x: e.clientX, t: e.timeStamp }];
    host.setPointerCapture(e.pointerId); host.classList.add('arrastrando');
  });
  host.addEventListener('pointermove', e => {
    if (!dragging) return;
    yaw += (e.clientX - lastX) * gain(); lastX = e.clientX;
    hist.push({ x: e.clientX, t: e.timeStamp }); if (hist.length > 6) hist.shift();
    kick();   // el ángulo sigue al dedo 1:1; el dibujo se agrupa en un cuadro por refresco
  });
  const end = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false; host.classList.remove('arrastrando');
    // velocidad del gesto en los últimos ~100 ms: el giro continúa a esa misma velocidad
    const recent = hist.filter(h => e.timeStamp - h.t < 100);
    if (!opts.reduce && recent.length > 1) {
      const a = recent[0], b = recent[recent.length - 1], span = (b.t - a.t) / 1000;
      if (span > 0) yawVel = Math.max(-12, Math.min(12, ((b.x - a.x) / span) * gain()));
    }
    kick();
  };
  host.addEventListener('pointerup', end); host.addEventListener('pointercancel', end);
  host.addEventListener('keydown', e => {
    const d = e.key === 'ArrowLeft' ? -0.35 : e.key === 'ArrowRight' ? 0.35 : 0;
    if (!d) return;
    e.preventDefault();   // el resorte parte de la velocidad actual: sin frenazos
    yawGoal = (yawGoal ?? yaw) + d; kick();
  });
  new ResizeObserver(() => { frame(); kick(); }).observe(host);
  new IntersectionObserver(es => { visible = es.some(x => x.isIntersecting); if (visible) kick(); }).observe(host);
  build('40'); kick(); opts.onReady?.();
  return {
    setSize(s: Size) { if (s !== size) { build(s); kick(); } },
    setDoors(open: boolean) { doorsTarget = open ? 1 : 0; kick(); },
    rotate(d: number) { yawGoal = (yawGoal ?? yaw) + d; kick(); },
  };
}
