// Visor 3D del contenedor: 20', 40' y 40' HC, de distintos colores y con distinta carga. Se gira arrastrando,
// se abren las puertas y una grúa de patio lo toma de la estiba y lo asienta en el chasis de un tractocamión.
import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import * as C40 from './container40';
import { crearContenedor, colorear, MEDIDAS, type Size } from './c3d-contenedor';
import { crearCarga, type Carga } from './c3d-carga';
import { crearChasis, ALTO_CHASIS } from './c3d-chasis';
import { crearGrua } from './c3d-grua';

const pick = (mod: any, test: (k: string) => boolean) => mod[Object.keys(mod).find(test)!];

// maniobra de la grúa: fracciones del tiempo total, de la llegada de la grúa y el camión a soltar el contenedor
const CARRIL = 3.1, CENTRO = CARRIL / 2;   // x del chasis; la grúa queda entre la estiba (x = 0) y el chasis
const T: Record<string, [number, number]> = {
  entra: [0, 0.16], baja: [0.16, 0.27], traba: [0.27, 0.31], sube: [0.31, 0.43],
  cruza: [0.43, 0.6], asienta: [0.6, 0.79], suelta: [0.79, 0.84], libera: [0.84, 1],
};
const DURACION = 12, PARQUE = 6.4, ALZA = 2.5;
const YAW_SOLO = -0.62, YAW_GRUA = 2.45;   // con la grúa, vista de tres cuartos por el frente del camión
const tramo = (p: number, [a, b]: [number, number]) => Math.min(1, Math.max(0, (p - a) / (b - a)));
const suave = (t: number) => t * t * (3 - 2 * t);
const frena = (t: number) => 1 - Math.pow(1 - t, 3);   // llega despacio: el contenedor asienta sin golpe

export function mount(host: HTMLElement, opts: { reduce: boolean; onReady?: () => void; onBloqueo?: (b: boolean) => void }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  pick(C40, k => k.startsWith('configure'))(renderer);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.environment = pick(C40, k => k.endsWith('Environment'))(renderer);
  // entorno fotográfico (HDRI de Polyhaven, CC0): reflejos reales en pintura, cromo y vidrio
  new EXRLoader().load(new URL('../img/entorno-ciudad.exr', import.meta.url).href, tex => {
    tex.mapping = THREE.EquirectangularReflectionMapping;
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromEquirectangular(tex).texture; scene.environmentIntensity = 1.25;
    tex.dispose(); pm.dispose(); kick();
  }, undefined, () => { /* sin HDRI: queda el entorno neutro */ });
  const luces: THREE.Group = pick(C40, k => k.endsWith('LookDevLights'))('neutral'); scene.add(luces);
  const sol = luces.children.find((o: any) => o.isDirectionalLight && o.castShadow) as THREE.DirectionalLight | undefined;
  const cam = new THREE.PerspectiveCamera(24, 1, 0.1, 400);
  const turn = new THREE.Group(); scene.add(turn);
  const mundo = new THREE.Group(); turn.add(mundo);   // en la vista de la grúa se corre para centrar la escena

  let cont: ReturnType<typeof crearContenedor>;
  let chasis: ReturnType<typeof crearChasis> | null = null, grua: ReturnType<typeof crearGrua> | null = null;
  let size: Size = '40', carga: Carga = 'cajas', yaw = YAW_SOLO, doors = 0, doorsTarget = 0, doorsVel = 0;
  let gruaOn = false, modo = 0, modoVel = 0, p = 0, bloqueado = false;

  const libera = (g: THREE.Object3D) => g.traverse((o: any) => { if (o.isMesh) o.geometry.dispose(); });
  function cargar(t: Carga) {
    carga = t;
    for (const c of [...cont.carga.children]) { cont.carga.remove(c); libera(c); }
    cont.carga.add(crearCarga(t, cont.L, cont.W, cont.H));
  }
  function build(s: Size) {
    if (cont) { mundo.remove(cont.g); libera(cont.g); }
    size = s; cont = crearContenedor(s); mundo.add(cont.g); cont.puertas(doors); cargar(carga);
    if (chasis) { mundo.remove(chasis.g); libera(chasis.g); chasis = crearChasis(s); mundo.add(chasis.g); }
    grua?.ajusta(MEDIDAS[s].L);
    aplica(); frame();
  }
  function asegurarGrua() {
    if (grua) return;
    grua = crearGrua(); mundo.add(grua.g); grua.ajusta(MEDIDAS[size].L);
    chasis = crearChasis(size); mundo.add(chasis.g);
  }
  // coloca grúa, camión y contenedor según el avance p de la maniobra
  function aplica() {
    mundo.position.x = -CENTRO * modo;
    if (!grua || !chasis) { cont.g.position.set(0, 0, 0); return; }
    const { H } = MEDIDAS[size];
    grua.g.visible = chasis.g.visible = modo > 0.001 || p > 0;
    const e = suave(tramo(p, T.entra));
    grua.g.position.set(CENTRO, 0, (1 - e) * 24);            // la grúa avanza por el pasillo de la estiba
    chasis.g.position.set(CARRIL, 0, (1 - e) * 34);          // el camión llega de frente hasta quedar bajo la grúa
    for (const r of chasis.ruedas) r.rotation.x = (1 - e) * 34 / 0.5;
    for (const r of grua.ruedas) r.rotation.x = (1 - e) * 24 / 0.6;
    const c = tramo(p, T.cruza), xT = -CENTRO + suave(c) * CARRIL;
    grua.trole.position.x = xT;
    const vaiven = Math.sin(c * Math.PI * 2.5) * Math.sin(c * Math.PI) * 0.16;   // balanceo al cruzar
    let y: number;
    if (p <= T.baja[1]) y = PARQUE + (H - PARQUE) * suave(tramo(p, T.baja));
    else if (p <= T.sube[0]) y = H;
    else if (p <= T.sube[1]) y = H + ALZA * suave(tramo(p, T.sube));
    else if (p <= T.asienta[0]) y = H + ALZA;
    else if (p <= T.asienta[1]) y = H + ALZA + (ALTO_CHASIS - ALZA) * frena(tramo(p, T.asienta));
    else if (p <= T.libera[0]) y = H + ALTO_CHASIS;
    else y = H + ALTO_CHASIS + (PARQUE + 0.8 - H - ALTO_CHASIS) * suave(tramo(p, T.libera));
    grua.coloca(y, vaiven);
    const enganchado = p > (T.traba[0] + T.traba[1]) / 2 && p < (T.suelta[0] + T.suelta[1]) / 2;
    if (enganchado) cont.g.position.set(CENTRO + xT + vaiven, y - H, 0);
    else if (p >= T.suelta[0]) cont.g.position.set(CARRIL, ALTO_CHASIS, 0);
    else cont.g.position.set(0, 0, 0);
  }
  let sombraAmplia = false;
  function camara() {
    const v = (cam.fov * Math.PI) / 360, a = cam.aspect;
    const d0 = (12.6 / 2) / Math.tan(v) / Math.min(1, a) * 0.62;                       // encuadre del 40' solo
    const d1 = Math.max(12.2 / (Math.tan(v) * a), 9.4 / Math.tan(v)) * 1.08;           // grúa y camión completos
    const d = d0 + (d1 - d0) * modo, ty = 1.0 + 4.3 * modo, el = 0.42 - 0.12 * modo;
    cam.position.set(0, d * el, d); cam.lookAt(0, ty, 0); cam.updateProjectionMatrix();
    const amplia = modo > 0.3;
    if (sol && amplia !== sombraAmplia) {
      sombraAmplia = amplia; const s = amplia ? 22 : 9, sc = sol.shadow.camera;
      sc.left = -s; sc.right = s; sc.top = s; sc.bottom = -s; sc.far = amplia ? 100 : 60; sc.updateProjectionMatrix();
    }
  }
  function frame() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); cam.aspect = w / h; camara();
  }
  // Movimiento físico, medido en tiempo y no en cuadros:
  //  - arrastre 1:1 con el dedo (sin suavizado que lo retrase)
  //  - al soltar, el giro conserva la velocidad del gesto y se frena solo (inercia)
  //  - teclado, puertas y encuadre: resorte con amortiguamiento crítico (sin rebote)
  //  - todo se puede interrumpir: la maniobra de la grúa se invierte desde donde va
  let raf = 0, visible = true, last = 0;
  let yawVel = 0, yawGoal: number | null = null, dragging = false;
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
        else [yaw, yawVel] = spring(yaw, yawVel, yawGoal, gruaOn || modo > 0 ? 1.2 : 0.4, dt);
        if (Math.abs(yawGoal - yaw) < 0.0005 && Math.abs(yawVel) < 0.002) { yaw = yawGoal; yawGoal = null; yawVel = 0; } else moving = true;
      } else if (yawVel !== 0) {
        yaw += yawVel * dt;
        yawVel *= Math.pow(0.996, dt * 1000);   // deceleración exponencial, como el desplazamiento
        if (Math.abs(yawVel) < 0.02) yawVel = 0; else moving = true;
      }
    }
    if (opts.reduce) doors = doorsTarget;
    else { [doors, doorsVel] = spring(doors, doorsVel, doorsTarget, 0.6, dt); }
    if (Math.abs(doorsTarget - doors) < 0.001 && Math.abs(doorsVel) < 0.002) { doors = doorsTarget; doorsVel = 0; } else moving = true;
    // grúa: primero se cierran las puertas y se abre el encuadre, luego corre la maniobra; al quitarla, al revés
    const cerradas = doorsTarget === 0 && doors < 0.01;
    let pMeta = gruaOn && modo > 0.6 ? 1 : 0;
    if (!cerradas) pMeta = p;
    if (opts.reduce) p = pMeta;
    else if (p < pMeta) p = Math.min(pMeta, p + dt / DURACION);
    else if (p > pMeta) p = Math.max(pMeta, p - dt / (DURACION * 0.75));
    const modoMeta = gruaOn || p > 0 ? 1 : 0;
    if (opts.reduce) modo = modoMeta;
    else [modo, modoVel] = spring(modo, modoVel, modoMeta, 1.1, dt);
    if (Math.abs(modoMeta - modo) < 0.0005 && Math.abs(modoVel) < 0.001) { modo = modoMeta; modoVel = 0; } else moving = true;
    if (p !== pMeta || (gruaOn && p < 1) || (!gruaOn && p > 0)) moving = true;
    // puertas bloqueadas mientras el contenedor no esté en piso o asentado en el chasis
    const b = gruaOn ? p < 1 : p > 0;
    if (b !== bloqueado) { bloqueado = b; opts.onBloqueo?.(b); }
    turn.rotation.y = yaw; cont.puertas(doors); aplica(); camara();
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
    setDoors(open: boolean) { if (open && bloqueado) return false; doorsTarget = open ? 1 : 0; kick(); return true; },
    setColor(nombre: string) { colorear(nombre); kick(); },
    setCarga(t: Carga) { if (t !== carga) { cargar(t); kick(); } },
    setCrane(on: boolean) {
      if (on) asegurarGrua();
      if (on !== gruaOn) {
        doorsTarget = 0;   // el contenedor se mueve con las puertas cerradas
        const base = on ? YAW_GRUA : YAW_SOLO, actual = yawGoal ?? yaw;
        yawGoal = base + Math.round((actual - base) / (2 * Math.PI)) * 2 * Math.PI; yawVel = 0;
        if (!bloqueado) { bloqueado = true; opts.onBloqueo?.(true); }
      }
      gruaOn = on; kick();
    },
    rotate(d: number) { yawGoal = (yawGoal ?? yaw) + d; kick(); },
  };
}
