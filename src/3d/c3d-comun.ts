// Utilidades compartidas por los modelos del visor del puerto: geometría, texturas en canvas,
// materiales comunes (llantas, rines, cromo, vidrio, luces) y fusión de piezas estáticas.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export function azar(semilla: number) { let s = semilla; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
export function lienzo(w: number, h: number, pinta: (g: CanvasRenderingContext2D) => void, rep: [number, number] = [1, 1], color = true) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  pinta(cv.getContext('2d')!);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]);
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export function caja(g: THREE.Object3D, w: number, h: number, d: number, m: THREE.Material | THREE.Material[], x: number, y: number, z: number) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z); g.add(mesh); return mesh;
}
export function geoCil(r: number, h: number, eje: 'x' | 'y' | 'z' = 'y', seg = 16, r2 = r) {
  const geo = new THREE.CylinderGeometry(r, r2, h, seg);
  if (eje === 'x') geo.rotateZ(Math.PI / 2); else if (eje === 'z') geo.rotateX(Math.PI / 2);
  return geo;
}
export function cilindro(g: THREE.Object3D, r: number, h: number, m: THREE.Material | THREE.Material[], x: number, y: number, z: number, eje: 'x' | 'y' | 'z' = 'y', seg = 16) {
  const mesh = new THREE.Mesh(geoCil(r, h, eje, seg), m); mesh.position.set(x, y, z); g.add(mesh); return mesh;
}
// geometría de una viga entre dos puntos
export function geoViga(a: THREE.Vector3, b: THREE.Vector3, ancho: number, alto = ancho) {
  const geo = new THREE.BoxGeometry(ancho, a.distanceTo(b), alto);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  geo.applyQuaternion(q); const c = a.clone().add(b).multiplyScalar(0.5); geo.translate(c.x, c.y, c.z);
  return geo;
}
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
export { V };

// Junta las piezas estáticas por material: muchas cajas, una sola llamada de dibujo por material.
export function fusion() {
  const porMat = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const add = (m: THREE.Material, geo: THREE.BufferGeometry) => { if (!porMat.has(m)) porMat.set(m, []); porMat.get(m)!.push(geo.index ? geo.toNonIndexed() : geo); };
  const api = {
    geo(m: THREE.Material, geo: THREE.BufferGeometry, x = 0, y = 0, z = 0) { geo.translate(x, y, z); add(m, geo); return api; },
    caja(m: THREE.Material, w: number, h: number, d: number, x: number, y: number, z: number, rotY = 0, rotX = 0, rotZ = 0) {
      const geo = new THREE.BoxGeometry(w, h, d);
      if (rotX) geo.rotateX(rotX); if (rotY) geo.rotateY(rotY); if (rotZ) geo.rotateZ(rotZ);
      geo.translate(x, y, z); add(m, geo); return api;
    },
    cil(m: THREE.Material, r: number, h: number, x: number, y: number, z: number, eje: 'x' | 'y' | 'z' = 'y', seg = 16) {
      const geo = geoCil(r, h, eje, seg); geo.translate(x, y, z); add(m, geo); return api;
    },
    viga(m: THREE.Material, a: THREE.Vector3, b: THREE.Vector3, ancho: number, alto = ancho) { add(m, geoViga(a, b, ancho, alto)); return api; },
    cerrar(padre: THREE.Object3D, sombra = true) {
      for (const [m, gs] of porMat) {
        for (const g of gs) for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
        const mesh = new THREE.Mesh(mergeGeometries(gs)!, m); mesh.castShadow = sombra; mesh.receiveShadow = true; padre.add(mesh);
      }
      porMat.clear();
    },
  };
  return api;
}

// Lámina corrugada trapezoidal de U × V (u a lo largo del perfil, v a lo alto, relieve hacia +z), uv en metros.
export function lamina(U: number, V: number, paso: number, prof: number, plano: number, valle: number) {
  const s = (paso - plano - valle) / 2;
  const f = (t: number) => {
    t = ((t % paso) + paso) % paso;
    if (t < valle) return 0;
    if (t < valle + s) return prof * (t - valle) / s;
    if (t < valle + s + plano) return prof;
    return prof * (1 - (t - valle - s - plano) / s);
  };
  const us: number[] = [-U / 2];
  for (let b = 0; b < U; b += paso) for (const o of [valle, valle + s, valle + s + plano, paso]) if (b + o < U - 1e-6) us.push(-U / 2 + b + o);
  us.push(U / 2);
  const pos: number[] = [], uv: number[] = [];
  for (let i = 0; i < us.length - 1; i++) {
    const u0 = us[i], u1 = us[i + 1], d0 = f(u0 + U / 2), d1 = f(u1 + U / 2);
    pos.push(u0, -V / 2, d0, u1, -V / 2, d1, u1, V / 2, d1, u0, -V / 2, d0, u1, V / 2, d1, u0, V / 2, d0);
    uv.push(u0, 0, u1, 0, u1, V, u0, 0, u1, V, u0, V);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  return geo;
}

// ---------- texturas compartidas ----------
// desgaste de pintura (blanco que multiplica al color): manchas, escurrimientos y polvo abajo; uv en metros
export function texDesgaste(semilla = 5, fuerza = 1, rep: [number, number] = [1 / 3, 1 / 2.6]) {
  const r = azar(semilla);
  return lienzo(512, 512, g => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 900; i++) {
      g.fillStyle = r() < 0.7 ? `rgba(40,25,15,${(0.01 + r() * 0.022) * fuerza})` : `rgba(255,255,255,${(0.015 + r() * 0.03) * fuerza})`;
      g.beginPath(); g.arc(r() * 512, r() * 512, 2 + r() * 14, 0, Math.PI * 2); g.fill();
    }
    for (let i = 0; i < 26; i++) {
      const x = r() * 512, y0 = r() * 300, l = 60 + r() * 200, w = 1 + r() * 3;
      const grd = g.createLinearGradient(0, y0, 0, y0 + l);
      grd.addColorStop(0, `rgba(70,40,20,${0.16 * fuerza})`); grd.addColorStop(1, 'rgba(70,40,20,0)');
      g.fillStyle = grd; g.fillRect(x, y0, w, l);
    }
    const suelo = g.createLinearGradient(0, 380, 0, 512);
    suelo.addColorStop(0, 'rgba(60,45,35,0)'); suelo.addColorStop(1, `rgba(60,45,35,${0.22 * fuerza})`);
    g.fillStyle = suelo; g.fillRect(0, 380, 512, 132);
  }, rep);
}
// franjas de advertencia amarillo y negro
export function texRayas(rep: [number, number] = [1, 1]) {
  return lienzo(256, 256, g => {
    g.fillStyle = '#f0b416'; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#17181a';
    for (let k = -4; k < 8; k++) { g.beginPath(); g.moveTo(k * 64, 0); g.lineTo(k * 64 + 32, 0); g.lineTo(k * 64 + 32 + 256, 256); g.lineTo(k * 64 + 256, 256); g.closePath(); g.fill(); }
  }, rep);
}
// placa antiderrapante de acero (pasillos, escalones)
export function texDiamante(rep: [number, number] = [4, 4]) {
  return lienzo(128, 128, g => {
    g.fillStyle = '#8d9297'; g.fillRect(0, 0, 128, 128);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      g.save(); g.translate(x * 32 + (y % 2) * 16 + 8, y * 32 + 16); g.rotate((y + x) % 2 ? 0.8 : -0.8);
      g.fillStyle = '#c3c7cb'; g.fillRect(-9, -2.5, 18, 5); g.fillStyle = '#5d6166'; g.fillRect(-9, 2.5, 18, 1.5); g.restore();
    }
  }, rep);
}
// banda de rodamiento: ranuras longitudinales y bloques (u alrededor, v a lo ancho)
function texBanda(color: boolean) {
  const r = azar(21);
  return lienzo(1024, 128, g => {
    g.fillStyle = color ? '#232427' : '#808080'; g.fillRect(0, 0, 1024, 128);
    for (let i = 0; i < 3000; i++) { g.fillStyle = color ? `rgba(255,255,255,${r() * 0.04})` : `rgba(${r() < 0.5 ? 0 : 255},${r() < 0.5 ? 0 : 255},${r() < 0.5 ? 0 : 255},0.05)`; g.fillRect(r() * 1024, r() * 128, 2, 2); }
    const ranura = color ? '#0d0d0f' : '#1a1a1a';
    g.fillStyle = ranura;
    for (const v of [26, 52, 76, 102]) g.fillRect(0, v - 4, 1024, 8);
    for (let u = 0; u < 1024; u += 16) { g.fillRect(u, 0, 4, 22); g.fillRect(u + 8, 56, 3, 16); g.fillRect(u, 106, 4, 22); }
    g.fillStyle = color ? '#2b2c30' : '#9a9a9a'; g.fillRect(0, 0, 1024, 3); g.fillRect(0, 125, 1024, 3);
  }, [1, 1], color);
}
function texCostado() {
  return lienzo(256, 256, g => {
    const grd = g.createRadialGradient(128, 128, 60, 128, 128, 128);
    grd.addColorStop(0, '#1a1b1d'); grd.addColorStop(0.75, '#26272a'); grd.addColorStop(1, '#1d1e20');
    g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
    g.strokeStyle = 'rgba(255,255,255,0.06)'; g.lineWidth = 2;
    for (const rad of [92, 104, 118]) { g.beginPath(); g.arc(128, 128, rad, 0, Math.PI * 2); g.stroke(); }
    g.fillStyle = 'rgba(255,255,255,0.08)'; g.font = 'bold 14px Arial'; g.textAlign = 'center';
    for (let k = 0; k < 2; k++) { g.save(); g.translate(128, 128); g.rotate(k * Math.PI); g.fillText('295/80R22.5', 0, -106); g.restore(); }
  });
}
// rin de aluminio pulido con 10 perforaciones; o de acero pintado
function texRin(aluminio: boolean) {
  return lienzo(256, 256, g => {
    const grd = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    if (aluminio) { grd.addColorStop(0, '#9da3a9'); grd.addColorStop(0.35, '#eef1f4'); grd.addColorStop(0.7, '#c9ced3'); grd.addColorStop(1, '#f5f7f9'); }
    else { grd.addColorStop(0, '#8a8d91'); grd.addColorStop(0.5, '#d9dadc'); grd.addColorStop(1, '#bfc1c4'); }
    g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#16171a';
    for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; g.save(); g.translate(128 + Math.cos(a) * 80, 128 + Math.sin(a) * 80); g.rotate(a); g.beginPath(); g.ellipse(0, 0, 13, 20, 0, 0, Math.PI * 2); g.fill(); g.restore(); }
    g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 3; g.beginPath(); g.arc(128, 128, 112, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.arc(128, 128, 48, 0, Math.PI * 2); g.stroke();
  });
}

let MC: ReturnType<typeof crear> | null = null;
export function comunes() { return MC ?? (MC = crear()); }
function crear() {
  const banda = texBanda(true), bandaB = texBanda(false);
  return {
    banda: new THREE.MeshStandardMaterial({ map: banda, bumpMap: bandaB, bumpScale: 4, roughness: 0.92 }),
    costado: new THREE.MeshStandardMaterial({ map: texCostado(), roughness: 0.85 }),
    rinAl: new THREE.MeshStandardMaterial({ map: texRin(true), metalness: 0.9, roughness: 0.18 }),
    rinAcero: new THREE.MeshStandardMaterial({ map: texRin(false), metalness: 0.45, roughness: 0.45 }),
    rinLado: new THREE.MeshStandardMaterial({ color: 0xc9cdd2, metalness: 0.85, roughness: 0.3 }),
    cromo: new THREE.MeshStandardMaterial({ color: 0xf2f4f6, metalness: 1, roughness: 0.07 }),
    aluminio: new THREE.MeshStandardMaterial({ color: 0xd8dce0, metalness: 0.95, roughness: 0.22 }),
    vidrio: new THREE.MeshPhysicalMaterial({ color: 0x141b26, metalness: 0.1, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.4 }),
    negro: new THREE.MeshStandardMaterial({ color: 0x1f2125, roughness: 0.6, metalness: 0.35 }),
    negroMate: new THREE.MeshStandardMaterial({ color: 0x141516, roughness: 0.9 }),
    hule: new THREE.MeshStandardMaterial({ color: 0x18191b, roughness: 0.88 }),
    acero: new THREE.MeshStandardMaterial({ color: 0x8a9096, roughness: 0.42, metalness: 0.7, envMapIntensity: 0.6 }),
    rojo: new THREE.MeshStandardMaterial({ color: 0xd42a20, emissive: 0x6a0c06, roughness: 0.3 }),
    ambar: new THREE.MeshStandardMaterial({ color: 0xf5a321, emissive: 0x5a3000, roughness: 0.3 }),
    faro: new THREE.MeshStandardMaterial({ color: 0xf6f8fb, emissive: 0x8a8f96, roughness: 0.1, metalness: 0.4 }),
    diamante: new THREE.MeshStandardMaterial({ map: texDiamante(), metalness: 0.75, roughness: 0.38 }),
    rayas: new THREE.MeshStandardMaterial({ map: texRayas([2, 1]), roughness: 0.5 }),
  };
}

// Rueda con eje en x: llanta con banda y costados, rin de aluminio o de acero, maza y birlos.
const cacheRueda = new Map<string, THREE.BufferGeometry[]>();
export function rueda(r: number, ancho: number, aluminio = true): THREE.Group {
  const M = comunes(), k = `${r}-${ancho}`;
  if (!cacheRueda.has(k)) {
    const llanta = new THREE.CylinderGeometry(r, r, ancho, 48, 1); llanta.rotateZ(Math.PI / 2);
    const rin = new THREE.CylinderGeometry(r * 0.58, r * 0.58, ancho + 0.006, 36, 1); rin.rotateZ(Math.PI / 2);
    const maza = new THREE.CylinderGeometry(r * 0.15, r * 0.18, ancho + 0.08, 20); maza.rotateZ(Math.PI / 2);
    const birlos: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI * 2, b = new THREE.CylinderGeometry(0.016, 0.016, ancho + 0.05, 6); b.rotateZ(Math.PI / 2);
      b.translate(0, Math.cos(a) * r * 0.27, Math.sin(a) * r * 0.27); birlos.push(b);
    }
    cacheRueda.set(k, [llanta, rin, maza, mergeGeometries(birlos)!]);
  }
  const [llanta, rin, maza, birlos] = cacheRueda.get(k)!;
  const g = new THREE.Group(); g.name = 'rueda';
  g.add(new THREE.Mesh(llanta, [M.banda, M.costado, M.costado]));
  const cara = aluminio ? M.rinAl : M.rinAcero;
  g.add(new THREE.Mesh(rin, [M.rinLado, cara, cara]));
  g.add(new THREE.Mesh(maza, aluminio ? M.cromo : M.acero));
  g.add(new THREE.Mesh(birlos, M.cromo));
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}
