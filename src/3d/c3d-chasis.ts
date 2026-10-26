// Chasis portacontenedor con cuello de ganso, enganchado a un tractocamión PERCONSUR (quinta rueda).
import * as THREE from 'three';
import { azar, lienzo, fusion, rueda, comunes, V, uvMundoEn } from './c3d-comun';
import { MEDIDAS, type Size } from './c3d-contenedor';
import { crearTracto } from './c3d-tracto';

export const ALTO_CHASIS = 1.32;    // cara superior de las mesas, donde asienta el contenedor
const Y_PERNO = 1.15;               // placa del perno rey, sobre la quinta rueda

function texReflejante() {   // cinta reflejante roja y blanca
  return lienzo(256, 16, g => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f2f2f2' : '#d2231b'; g.fillRect(i * 32, 0, 32, 16); } }, [6, 1]);
}
// acero con pintura negra de trabajo: moteado, polvo, despostilladuras y escurrimientos de óxido.
// Devuelve el color y la rugosidad del mismo patrón (el óxido es más áspero, el metal expuesto más liso).
// El lienzo cubre 2 × 2 m con UV en metros.
function texAcero(semilla: number) {
  const pinta = (g: CanvasRenderingContext2D, rugo: boolean) => {
    const r = azar(semilla), N = 512;
    g.fillStyle = rugo ? '#969696' : '#2b2d31'; g.fillRect(0, 0, N, N);
    for (let i = 0; i < 1400; i++) {
      const c = r() < 0.5 ? 255 : 0, a = 0.012 + r() * 0.025;
      g.fillStyle = `rgba(${c},${c},${c},${a})`; g.beginPath(); g.arc(r() * N, r() * N, 3 + r() * 22, 0, Math.PI * 2); g.fill();
    }
    for (let i = 0; i < 60; i++) {   // polvo del camino, café grisáceo
      const x = r() * N, y = r() * N, rad = 20 + r() * 60, grd = g.createRadialGradient(x, y, 0, x, y, rad);
      grd.addColorStop(0, rugo ? 'rgba(220,220,220,0.14)' : 'rgba(110,96,80,0.09)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grd; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    for (let i = 0; i < 22; i++) {   // óxido: mancha con escurrimiento hacia abajo
      const x = r() * N, y = r() * N, rad = 2 + r() * 9, l = 20 + r() * 110;
      const esc = g.createLinearGradient(0, y, 0, y + l);
      esc.addColorStop(0, rugo ? 'rgba(235,235,235,0.55)' : 'rgba(122,58,24,0.5)'); esc.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = esc; g.fillRect(x - rad * 0.35, y, rad * 0.7, l);
      const m = g.createRadialGradient(x, y, 0, x, y, rad);
      m.addColorStop(0, rugo ? 'rgba(245,245,245,0.95)' : 'rgba(150,72,28,0.95)'); m.addColorStop(0.6, rugo ? 'rgba(235,235,235,0.6)' : 'rgba(105,50,22,0.6)'); m.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = m; g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
    }
    for (let i = 0; i < 160; i++) {   // despostilladuras: primario gris y acero brillante en el centro
      const x = r() * N, y = r() * N, a = 0.6 + r() * 1.8;
      g.fillStyle = rugo ? '#7a7a7a' : '#44474c'; g.beginPath(); g.ellipse(x, y, a * 1.4, a * 0.8, r() * 3, 0, Math.PI * 2); g.fill();
      if (a > 1.6) { g.fillStyle = rugo ? '#5a5a5a' : '#6e7379'; g.beginPath(); g.arc(x, y, a * 0.5, 0, Math.PI * 2); g.fill(); }
    }
  };
  return { map: lienzo(512, 512, g => pinta(g, false), [0.5, 0.5]), rugosidad: lienzo(512, 512, g => pinta(g, true), [0.5, 0.5], false) };
}
// galvanizado por inmersión: cristales de zinc ("lentejuelas") de tonos distintos y manchas de óxido blanco.
// El lienzo cubre 0.5 × 0.5 m.
function texGalvanizado() {
  const N = 256, r = azar(31), pts = Array.from({ length: 80 }, () => [r() * N, r() * N, 150 + r() * 70, r() * 6.28]);
  return lienzo(N, N, g => {
    const img = g.createImageData(N, N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      let best = 1e9, sel = pts[0];
      for (const p of pts) {
        const dx = Math.min(Math.abs(x - p[0]), N - Math.abs(x - p[0])), dy = Math.min(Math.abs(y - p[1]), N - Math.abs(y - p[1])), d = dx * dx + dy * dy;
        if (d < best) { best = d; sel = p; }
      }
      const v = sel[2] + Math.sin((x * Math.cos(sel[3]) + y * Math.sin(sel[3])) * 0.35) * 6, o = (y * N + x) * 4;
      img.data[o] = v; img.data[o + 1] = v + 2; img.data[o + 2] = v + 5; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (let i = 0; i < 18; i++) { g.fillStyle = `rgba(235,236,232,${0.1 + r() * 0.15})`; g.beginPath(); g.arc(r() * N, r() * N, 4 + r() * 16, 0, Math.PI * 2); g.fill(); }
  }, [2, 2]);
}
// placa de servicio público federal
function texPlaca() {
  return lienzo(512, 256, g => {
    g.fillStyle = '#f4f5f2'; g.fillRect(0, 0, 512, 256);
    g.strokeStyle = '#1f2a44'; g.lineWidth = 10; g.strokeRect(10, 10, 492, 236);
    g.fillStyle = '#1f2a44'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '600 30px "Inter", Arial, sans-serif'; g.fillText('SERVICIO PÚBLICO FEDERAL', 256, 46);
    g.font = '700 118px "Inter", Arial, sans-serif'; g.fillText('98-AE-3P', 256, 148);
    g.font = '600 26px "Inter", Arial, sans-serif'; g.fillText('MÉXICO', 256, 222);
  });
}

let MAT: ReturnType<typeof crear> | null = null;
function crear() {
  const acero = texAcero(8);
  return {
    chasis: new THREE.MeshStandardMaterial({ map: acero.map, roughnessMap: acero.rugosidad, roughness: 1, metalness: 0.35 }),
    galv: new THREE.MeshStandardMaterial({ map: texGalvanizado(), metalness: 0.85, roughness: 0.4 }),
    reflejante: new THREE.MeshStandardMaterial({ map: texReflejante(), roughness: 0.3, emissive: 0x220000 }),
    placa: new THREE.MeshStandardMaterial({ map: texPlaca(), roughness: 0.35, metalness: 0.2 }),
    mangueraR: new THREE.MeshStandardMaterial({ color: 0xc8281f, roughness: 0.5 }),
    mangueraA: new THREE.MeshStandardMaterial({ color: 0x2f5fc8, roughness: 0.5 }),
  };
}
const mats = () => MAT ?? (MAT = crear());

// ---------- chasis ----------
export function crearChasis(size: Size) {
  const M = mats(), C = comunes();
  const { L, W } = MEDIDAS[size];
  const g = new THREE.Group(); g.name = 'chasis';
  const f = fusion();
  const y = ALTO_CHASIS, frente = -L / 2 - 0.05, zG = -L / 2 + (size === '20' ? 1.9 : 3.25), fin = L / 2 + 0.08;
  const king = -L / 2 + 0.9;
  for (const sx of [-1, 1]) {
    // cuello de ganso (bajo) al frente, largueros en I de peralte completo atrás y la transición inclinada
    const x = sx * 0.5;
    f.caja(M.chasis, 0.012, 0.15, zG - frente, x, Y_PERNO + 0.075, (frente + zG) / 2);
    f.caja(M.chasis, 0.16, 0.02, zG - frente, x, Y_PERNO + 0.15, (frente + zG) / 2);
    f.caja(M.chasis, 0.16, 0.02, zG - frente, x, Y_PERNO, (frente + zG) / 2);
    f.caja(M.chasis, 0.012, 0.36, fin - zG - 0.4, x, y - 0.33, (zG + 0.4 + fin) / 2);
    f.caja(M.chasis, 0.16, 0.02, fin - zG - 0.4, x, y - 0.15, (zG + 0.4 + fin) / 2);
    f.viga(M.chasis, V(x, Y_PERNO + 0.15, zG), V(x, y - 0.15, zG + 0.4), 0.16, 0.02);
    f.caja(M.chasis, 0.16, 0.02, fin - zG - 0.4, x, y - 0.51, (zG + 0.4 + fin) / 2);
    f.viga(M.chasis, V(x, Y_PERNO, zG), V(x, y - 0.51, zG + 0.4), 0.16, 0.02);
    f.caja(M.reflejante, 0.004, 0.06, fin - zG - 0.6, sx * 0.585, y - 0.3, (zG + 0.6 + fin) / 2);
    for (const k of [0.3, 0.55, 0.8]) f.caja(C.ambar, 0.03, 0.04, 0.07, sx * 0.59, y - 0.38, -L / 2 + k * L);
  }
  // travesaños en I entre los largueros
  for (let z = zG + 0.7; z < L / 2 - 0.3; z += 1.25) {
    f.caja(M.chasis, 0.99, 0.15, 0.01, 0, y - 0.32, z);
    for (const dy of [-0.075, 0.075]) f.caja(M.chasis, 0.99, 0.012, 0.08, 0, y - 0.32 + dy, z);
  }
  // mesas con candados giratorios donde asientan las esquineras
  for (const z of [-L / 2 + 0.08, L / 2 - 0.08]) {
    f.caja(M.chasis, W, 0.15, 0.22, 0, y - 0.075, z);
    for (const sx of [-1, 1]) {
      f.caja(M.galv, 0.17, 0.04, 0.17, sx * (W / 2 - 0.09), y - 0.02, z);
      f.geo(M.galv, new THREE.CylinderGeometry(0.03, 0.05, 0.07, 8), sx * (W / 2 - 0.09), y + 0.035, z);
      f.caja(M.galv, 0.03, 0.03, 0.14, sx * (W / 2 + 0.02), y - 0.05, z);
      f.caja(C.rojo, 0.035, 0.035, 0.035, sx * (W / 2 + 0.02), y - 0.05, z + 0.08);   // perilla de la palanca   // palanca del candado
    }
  }
  // placa superior con perno rey, conexiones de aire y luz al frente
  f.caja(M.chasis, 1.2, 0.025, 1.4, 0, Y_PERNO + 0.012, king);
  f.cil(C.acero, 0.045, 0.09, 0, Y_PERNO - 0.07, king);
  f.caja(M.mangueraR, 0.08, 0.06, 0.05, 0.12, y - 0.08, frente - 0.02);
  f.caja(M.mangueraA, 0.08, 0.06, 0.05, -0.12, y - 0.08, frente - 0.02);
  f.caja(C.negro, 0.12, 0.12, 0.06, 0.0, y - 0.08, frente - 0.02);
  // patas de apoyo levantadas (el chasis va enganchado)
  const zPatas = zG + (size === '20' ? 1.1 : 0.6);
  for (const sx of [-1, 1]) {
    f.caja(M.chasis, 0.12, 0.6, 0.12, sx * 0.62, 0.62, zPatas);
    f.caja(M.galv, 0.09, 0.4, 0.09, sx * 0.62, 0.32, zPatas);
    f.caja(M.chasis, 0.3, 0.04, 0.3, sx * 0.62, 0.12, zPatas);
    f.viga(M.chasis, V(sx * 0.62, 0.8, zPatas), V(sx * 0.5, y - 0.5, zPatas + 0.7), 0.06);
  }
  f.caja(M.chasis, 1.3, 0.05, 0.05, 0, 0.75, zPatas);
  f.cil(M.galv, 0.015, 0.3, 0.78, 0.7, zPatas, 'x');
  f.cil(M.galv, 0.012, 0.25, 0.93, 0.6, zPatas, 'y');   // manivela
  f.caja(M.chasis, 0.2, 0.18, 0.14, 0.62, 0.78, zPatas + 0.12);   // caja de engranes
  // tándem: colgantes, muelles, ejes y tanque de aire
  const zEjes = size === '20' ? [L / 2 - 1.0, L / 2 - 2.25] : [L / 2 - 1.1, L / 2 - 2.35];
  for (const z of zEjes) {
    f.cil(C.negro, 0.07, 2.0, 0, 0.5, z, 'x');
    for (const sx of [-1, 1]) {
      f.caja(C.negro, 0.09, 0.08, 1.0, sx * 0.5, 0.64, z); f.caja(M.chasis, 0.1, 0.3, 0.12, sx * 0.5, 0.8, z - 0.55);
      // cámara de freno de doble diafragma, vástago y matraca
      f.cil(C.negro, 0.095, 0.1, sx * 0.34, 0.5, z - 0.3, 'z', 20); f.cil(C.negro, 0.085, 0.12, sx * 0.34, 0.5, z - 0.41, 'z', 20);
      f.cil(M.galv, 0.012, 0.22, sx * 0.34, 0.5, z - 0.15, 'z', 8);
      f.caja(M.galv, 0.03, 0.16, 0.04, sx * 0.34, 0.45, z - 0.04);
    }
  }
  f.cil(M.chasis, 0.17, 1.1, 0, 0.72, (zEjes[0] + zEjes[1]) / 2, 'x', 24);
  for (const sx of [-1, 1]) f.cil(M.chasis, 0.172, 0.03, sx * 0.48, 0.72, (zEjes[0] + zEjes[1]) / 2, 'x', 24);
  // defensa trasera, calaveras y loderas
  f.caja(M.chasis, W - 0.25, 0.1, 0.1, 0, 0.56, fin + 0.04);
  f.caja(M.reflejante, W - 0.3, 0.05, 0.004, 0, 0.56, fin + 0.092);
  for (const sx of [-1, 1]) {
    f.caja(M.chasis, 0.07, 0.62, 0.07, sx * 0.8, 0.87, fin + 0.04);
    for (const [dx, m] of [[0.2, C.rojo], [0.38, C.rojo], [0.56, C.ambar]] as const) {
      f.cil(C.negro, 0.07, 0.03, sx * (W / 2 - dx), y - 0.11, L / 2 + 0.03, 'z', 24);
      f.geo(m, new THREE.CircleGeometry(0.058, 24), sx * (W / 2 - dx), y - 0.11, L / 2 + 0.047);
    }
    f.caja(C.hule, 0.6, 0.55, 0.012, sx * 0.87, 0.6, zEjes[0] + 0.72);
  }
  for (const dx of [-0.12, 0, 0.12]) f.geo(C.rojo, new THREE.CircleGeometry(0.025, 16), dx, y - 0.11, L / 2 + 0.047);   // luces de identificación
  f.geo(M.placa, new THREE.PlaneGeometry(0.3, 0.15), 0.62, 0.86, fin + 0.086);
  f.caja(M.chasis, 0.34, 0.19, 0.01, 0.62, 0.86, fin + 0.08);
  f.cerrar(g);
  uvMundoEn(g, [M.chasis, M.galv]);
  const ruedas: THREE.Object3D[] = [];
  for (const z of zEjes) for (const x of [-1.0, -0.71, 0.71, 1.0]) {
    const r = rueda(0.5, 0.27, false); r.position.set(x, 0.5, z); g.add(r); ruedas.push(r);
  }
  // el tractocamión, enganchado por el perno rey
  const tracto = crearTracto(); tracto.g.position.z = king; g.add(tracto.g);
  ruedas.push(...tracto.ruedas);
  return { g, ruedas };
}
