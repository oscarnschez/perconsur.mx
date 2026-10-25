// Chasis portacontenedor con cuello de ganso, enganchado a un tractocamión PERCONSUR (quinta rueda).
import * as THREE from 'three';
import { azar, lienzo, caja, fusion, rueda, comunes, V, texDesgaste } from './c3d-comun';
import { MEDIDAS, type Size } from './c3d-contenedor';

export const ALTO_CHASIS = 1.32;    // cara superior de las mesas, donde asienta el contenedor
const Y_PERNO = 1.15;               // placa del perno rey, sobre la quinta rueda

function texReflejante() {   // cinta reflejante roja y blanca
  return lienzo(256, 16, g => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f2f2f2' : '#d2231b'; g.fillRect(i * 32, 0, 32, 16); } }, [6, 1]);
}
function texRejilla() {
  return lienzo(256, 128, g => {
    g.fillStyle = '#0f1013'; g.fillRect(0, 0, 256, 128);
    for (let y = 6; y < 128; y += 12) { const grd = g.createLinearGradient(0, y, 0, y + 7); grd.addColorStop(0, '#f5f7f9'); grd.addColorStop(1, '#7d838a'); g.fillStyle = grd; g.fillRect(4, y, 248, 6); }
  });
}
function texLetrero(texto: string, w = 512, h = 96) {
  return lienzo(w, h, g => {
    g.fillStyle = '#ffffff'; g.font = `600 ${Math.round(h * 0.56)}px "Inter", Arial, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    (g as any).letterSpacing = `${Math.round(h * 0.12)}px`; g.fillText(texto, w / 2, h / 2 + 2);
  });
}

let MAT: ReturnType<typeof crear> | null = null;
function crear() {
  const pintura = new THREE.MeshPhysicalMaterial({ color: 0x2b49a6, metalness: 0.45, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.07 });
  return {
    pintura,
    pinturaOsc: new THREE.MeshPhysicalMaterial({ color: 0x1d3478, metalness: 0.45, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.08 }),
    chasis: new THREE.MeshStandardMaterial({ color: 0x1c1e22, map: texDesgaste(8, 0.6, [1 / 2, 1 / 2]), roughness: 0.55, metalness: 0.4 }),
    reflejante: new THREE.MeshStandardMaterial({ map: texReflejante(), roughness: 0.3, emissive: 0x220000 }),
    rejilla: new THREE.MeshStandardMaterial({ map: texRejilla(), metalness: 0.8, roughness: 0.25 }),
    letrero: new THREE.MeshStandardMaterial({ map: texLetrero('PERCONSUR'), transparent: true, roughness: 0.35, polygonOffset: true, polygonOffsetFactor: -2 }),
    plastico: new THREE.MeshStandardMaterial({ color: 0x16171a, roughness: 0.7 }),
    mangueraR: new THREE.MeshStandardMaterial({ color: 0xc8281f, roughness: 0.5 }),
    mangueraA: new THREE.MeshStandardMaterial({ color: 0x2f5fc8, roughness: 0.5 }),
  };
}
const mats = () => MAT ?? (MAT = crear());

// perfil en el plano (z, y) extruido a lo ancho (x), centrado en x
function perfil(dibuja: (s: THREE.Shape) => void, ancho: number, bisel = 0.05) {
  const s = new THREE.Shape(); dibuja(s);
  const geo = new THREE.ExtrudeGeometry(s, { depth: ancho - 2 * bisel, bevelEnabled: bisel > 0, bevelThickness: bisel, bevelSize: bisel, bevelSegments: 4, curveSegments: 18 });
  geo.rotateY(-Math.PI / 2); geo.translate((ancho - 2 * bisel) / 2, 0, 0);
  return geo;
}
// arco de salpicadera alrededor de una rueda (centro en z, y), extruido a lo ancho
function salpicadera(z: number, y: number, rIn: number, rOut: number, ancho: number, desde = 0, hasta = Math.PI) {
  return perfil(s => {
    s.absarc(z, y, rOut, desde, hasta, false);
    s.absarc(z, y, rIn, hasta, desde, true);
  }, ancho, 0.015);
}

// ---------- tractocamión ----------
// Origen en el perno rey (centro de la quinta rueda), frente hacia −z.
export function crearTracto() {
  const M = mats(), C = comunes();
  const g = new THREE.Group(); g.name = 'tractocamion';
  const f = fusion();
  // bastidor, quinta rueda y plataforma
  for (const sx of [-1, 1]) { f.caja(M.chasis, 0.012, 0.3, 8.2, sx * 0.42, 0.93, -2.85); f.caja(M.chasis, 0.08, 0.012, 8.2, sx * 0.38, 1.08, -2.85); f.caja(M.chasis, 0.08, 0.012, 8.2, sx * 0.38, 0.78, -2.85); }
  for (const z of [-6.6, -5.2, -3.6, -1.8, -0.7, 0.5, 1.2]) f.caja(M.chasis, 0.84, 0.18, 0.08, 0, 0.93, z);
  f.caja(C.negro, 1.05, 0.07, 1.0, 0, Y_PERNO - 0.035, 0.05);
  f.caja(C.negroMate, 0.12, 0.072, 0.5, 0, Y_PERNO - 0.034, 0.32);
  for (const sx of [-1, 1]) f.caja(C.negro, 0.12, 0.1, 0.5, sx * 0.4, 1.05, 0.05);
  f.caja(C.diamante, 0.9, 0.03, 0.75, 0, 1.1, -1.05);
  // salpicaderas traseras (cuartos) y loderas
  for (const sx of [-1, 1]) {
    f.geo(M.plastico, salpicadera(-0.35, 0.52, 0.56, 0.6, 0.62, Math.PI * 0.15, Math.PI * 0.85), sx * 0.88, 0, 0);
    f.geo(M.plastico, salpicadera(0.95, 0.52, 0.56, 0.6, 0.62, Math.PI * 0.15, Math.PI * 0.85), sx * 0.88, 0, 0);
    f.caja(C.hule, 0.62, 0.6, 0.012, sx * 0.88, 0.55, 1.65);
  }
  // cofre con salpicaderas delanteras
  f.geo(M.pintura, perfil(s => {
    s.moveTo(-4.4, 0.85); s.lineTo(-4.4, 2.02); s.quadraticCurveTo(-5.6, 2.0, -6.55, 1.78);
    s.quadraticCurveTo(-6.98, 1.66, -7.0, 1.4); s.lineTo(-7.0, 0.85); s.closePath();
  }, 1.78, 0.08));
  for (const sx of [-1, 1]) {
    f.geo(M.pintura, salpicadera(-5.3, 0.6, 0.6, 0.7, 0.36, -0.05, Math.PI + 0.05), sx * 0.98, 0, 0);
    f.caja(M.pintura, 0.36, 0.12, 0.95, sx * 0.98, 0.62, -6.5);      // faldón hasta la defensa
    f.caja(M.pintura, 0.36, 0.12, 0.25, sx * 0.98, 0.62, -4.5);
  }
  // parrilla, defensa, faros y emblema
  f.caja(C.cromo, 1.18, 0.86, 0.05, 0, 1.25, -7.1);
  f.caja(M.rejilla, 1.04, 0.74, 0.02, 0, 1.25, -7.13);
  f.caja(C.cromo, 2.42, 0.36, 0.28, 0, 0.6, -7.1);
  f.caja(C.negroMate, 2.3, 0.08, 0.2, 0, 0.42, -7.12);
  for (const sx of [-1, 1]) {
    f.caja(C.cromo, 0.36, 0.22, 0.12, sx * 0.98, 1.0, -7.06, sx * 0.2);
    f.caja(C.faro, 0.3, 0.16, 0.02, sx * 0.98, 1.0, -7.13, sx * 0.2);
    f.caja(C.ambar, 0.1, 0.07, 0.02, sx * 1.12, 0.86, -7.08, sx * 0.3);
    f.caja(C.faro, 0.16, 0.1, 0.03, sx * 0.85, 0.6, -7.25);
  }
  // cabina con dormitorio y techo aerodinámico
  f.geo(M.pintura, perfil(s => {
    s.moveTo(-1.45, 1.18); s.lineTo(-4.42, 1.18); s.lineTo(-4.42, 2.12);
    s.lineTo(-3.92, 3.08); s.quadraticCurveTo(-3.8, 3.24, -3.55, 3.27);
    s.quadraticCurveTo(-2.95, 3.32, -2.55, 3.72); s.quadraticCurveTo(-2.3, 3.93, -1.9, 3.95);
    s.lineTo(-1.45, 3.95); s.closePath();
  }, 2.36, 0.07));
  f.caja(M.pinturaOsc, 2.36, 0.12, 2.95, 0, 1.18, -2.93);
  // parabrisas en dos piezas y ventanas laterales
  const parab = new THREE.PlaneGeometry(2.1, Math.hypot(0.5, 0.96)); parab.rotateX(-Math.atan2(0.5, 0.96)); parab.rotateY(Math.PI);
  f.geo(C.vidrio, parab, 0, 2.64, -4.245);
  f.caja(M.pinturaOsc, 0.07, 1.06, 0.05, 0, 2.64, -4.25, 0, -Math.atan2(0.5, 0.96));
  const ventana = new THREE.Shape(); ventana.moveTo(-4.3, 2.22); ventana.lineTo(-3.92, 2.98); ventana.lineTo(-3.3, 2.98); ventana.lineTo(-3.3, 2.22); ventana.closePath();
  const geoV = new THREE.ShapeGeometry(ventana);
  for (const sx of [-1, 1]) {
    const v = geoV.clone(); v.rotateY(-Math.PI / 2); if (sx > 0) v.scale(-1, 1, 1);   // plano x = cte, mirando hacia afuera
    f.geo(C.vidrio, v, sx * 1.192, 0, 0);
    f.caja(C.vidrio, 0.01, 0.28, 0.42, sx * 1.192, 2.95, -2.15);              // ventanita del dormitorio
    // contorno de la puerta, manija, escalones, tanque y espejo
    f.caja(C.negroMate, 0.006, 1.86, 0.012, sx * 1.19, 2.1, -3.22);
    f.caja(C.negroMate, 0.006, 0.012, 1.1, sx * 1.19, 1.2 + 0.02, -3.77);
    f.caja(C.cromo, 0.03, 0.04, 0.2, sx * 1.205, 2.05, -3.45);
    for (const [y, z] of [[0.58, -3.8], [0.93, -3.8]]) f.caja(C.diamante, 0.32, 0.03, 0.45, sx * 1.02, y, z);
    f.cil(C.aluminio, 0.31, 1.25, sx * 0.86, 0.68, -2.55, 'z', 28);
    for (const z of [-3.0, -2.1]) f.cil(C.negroMate, 0.325, 0.06, sx * 0.86, 0.68, z, 'z', 28);
    f.viga(C.cromo, V(sx * 1.18, 2.35, -4.25), V(sx * 1.48, 2.45, -4.35), 0.035);
    f.viga(C.cromo, V(sx * 1.18, 2.95, -4.0), V(sx * 1.48, 2.95, -4.35), 0.035);
    f.caja(C.negro, 0.1, 0.5, 0.22, sx * 1.5, 2.72, -4.36);
    f.caja(C.cromo, 0.1, 0.5, 0.02, sx * 1.5, 2.72, -4.25);
    // extensiones laterales y escapes cromados detrás de la cabina
    f.caja(M.pintura, 0.04, 2.4, 0.32, sx * 1.17, 2.55, -1.3);
    f.cil(C.cromo, 0.065, 2.9, sx * 1.08, 2.7, -1.25, 'y', 20);
    f.cil(C.negroMate, 0.075, 0.9, sx * 1.08, 2.0, -1.25, 'y', 20);
  }
  for (let k = 0; k < 5; k++) f.caja(C.ambar, 0.1, 0.05, 0.06, -0.5 + k * 0.25, 3.31, -3.48);
  f.cerrar(g);
  // letrero PERCONSUR en las puertas
  for (const sx of [-1, 1]) {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.19), M.letrero);
    l.position.set(sx * 1.197, 1.72, -3.78); l.rotation.y = sx * Math.PI / 2; g.add(l);
  }
  // mangueras de aire (roja y azul) de la cabina al chasis
  for (const [sx, m] of [[0.15, M.mangueraR], [-0.15, M.mangueraA]] as const) {
    const curva = new THREE.CatmullRomCurve3([V(sx, 2.3, -1.4), V(sx * 1.3, 1.75, -1.25), V(sx, 1.38, -1.0), V(sx * 0.8, 1.3, -0.9)]);
    const tubo = new THREE.Mesh(new THREE.TubeGeometry(curva, 24, 0.018, 6), m); g.add(tubo);
  }
  // ruedas: direccional con rin de aluminio y tándem de tracción con llantas dobles
  const ruedas: THREE.Object3D[] = [];
  const pon = (x: number, z: number) => { const r = rueda(0.52, 0.28, true); r.position.set(x, 0.52, z); g.add(r); ruedas.push(r); };
  for (const sx of [-1, 1]) { pon(sx * 1.05, -5.3); for (const z of [-0.35, 0.95]) { pon(sx * 1.03, z); pon(sx * 0.73, z); } }
  for (const z of [-5.3, -0.35, 0.95]) { const e = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.9, 12), C.negro); e.rotation.z = Math.PI / 2; e.position.set(0, 0.52, z); g.add(e); }
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { g, ruedas };
}

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
  for (let z = zG + 0.7; z < L / 2 - 0.3; z += 1.25) f.caja(M.chasis, 1.0, 0.14, 0.08, 0, y - 0.32, z);
  // mesas con candados giratorios donde asientan las esquineras
  for (const z of [-L / 2 + 0.08, L / 2 - 0.08]) {
    f.caja(M.chasis, W, 0.15, 0.22, 0, y - 0.075, z);
    for (const sx of [-1, 1]) {
      f.caja(C.acero, 0.17, 0.04, 0.17, sx * (W / 2 - 0.09), y - 0.02, z);
      f.geo(C.acero, new THREE.ConeGeometry(0.045, 0.07, 8), sx * (W / 2 - 0.09), y + 0.035, z);
      f.caja(C.acero, 0.03, 0.03, 0.14, sx * (W / 2 + 0.02), y - 0.05, z);   // palanca del candado
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
    f.caja(M.chasis, 0.09, 0.4, 0.09, sx * 0.62, 0.32, zPatas);
    f.caja(M.chasis, 0.3, 0.04, 0.3, sx * 0.62, 0.12, zPatas);
    f.viga(M.chasis, V(sx * 0.62, 0.8, zPatas), V(sx * 0.5, y - 0.5, zPatas + 0.7), 0.06);
  }
  f.caja(M.chasis, 1.3, 0.05, 0.05, 0, 0.75, zPatas);
  f.cil(C.acero, 0.015, 0.3, 0.78, 0.7, zPatas, 'x');
  // tándem: colgantes, muelles, ejes y tanque de aire
  const zEjes = size === '20' ? [L / 2 - 1.0, L / 2 - 2.25] : [L / 2 - 1.1, L / 2 - 2.35];
  for (const z of zEjes) {
    f.cil(C.negro, 0.07, 2.0, 0, 0.5, z, 'x');
    for (const sx of [-1, 1]) { f.caja(C.negro, 0.09, 0.08, 1.0, sx * 0.5, 0.64, z); f.caja(M.chasis, 0.1, 0.3, 0.12, sx * 0.5, 0.8, z - 0.55); }
  }
  f.cil(C.acero, 0.17, 1.1, 0, 0.72, (zEjes[0] + zEjes[1]) / 2, 'x', 18);
  // defensa trasera, calaveras y loderas
  f.caja(M.chasis, W - 0.25, 0.1, 0.1, 0, 0.56, fin + 0.04);
  f.caja(M.reflejante, W - 0.3, 0.05, 0.004, 0, 0.56, fin + 0.092);
  for (const sx of [-1, 1]) {
    f.caja(M.chasis, 0.07, 0.62, 0.07, sx * 0.8, 0.87, fin + 0.04);
    f.caja(C.rojo, 0.2, 0.1, 0.03, sx * (W / 2 - 0.22), y - 0.09, L / 2 + 0.03);
    f.caja(C.ambar, 0.08, 0.1, 0.03, sx * (W / 2 - 0.4), y - 0.09, L / 2 + 0.03);
    f.caja(C.hule, 0.6, 0.55, 0.012, sx * 0.87, 0.6, zEjes[0] + 0.72);
  }
  f.cerrar(g);
  const ruedas: THREE.Object3D[] = [];
  for (const z of zEjes) for (const x of [-1.0, -0.71, 0.71, 1.0]) {
    const r = rueda(0.5, 0.27, false); r.position.set(x, 0.5, z); g.add(r); ruedas.push(r);
  }
  // el tractocamión, enganchado por el perno rey
  const tracto = crearTracto(); tracto.g.position.z = king; g.add(tracto.g);
  ruedas.push(...tracto.ruedas);
  return { g, ruedas };
}
