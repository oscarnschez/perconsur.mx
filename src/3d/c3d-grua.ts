// Grúa de patio sobre neumáticos (RTG): dos marcos en portal, vigas con pasillos y barandales,
// escalera con jaula, cuarto del generador, carro (trole) con tambores, cabina y spreader telescópico.
import * as THREE from 'three';
import { lienzo, caja, fusion, rueda, comunes, V, texDesgaste, geoCil } from './c3d-comun';

export const GRUA = { claro: 8.3, base: 6.6, alto: 11.6 };

function texPersiana(rep: [number, number]) {   // rejillas de ventilación del cuarto de máquinas
  return lienzo(128, 128, g => {
    g.fillStyle = '#e9ecef'; g.fillRect(0, 0, 128, 128);
    for (let y = 8; y < 120; y += 9) { g.fillStyle = '#7d848c'; g.fillRect(10, y, 108, 4); g.fillStyle = '#ffffff'; g.fillRect(10, y + 4, 108, 2); }
    g.strokeStyle = '#a2a8af'; g.lineWidth = 3; g.strokeRect(6, 4, 116, 120);
  }, rep);
}
function texNumero(t: string) {
  return lienzo(256, 128, g => { g.fillStyle = '#16171a'; g.font = '800 104px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, 128, 70); });
}

let MAT: ReturnType<typeof crear> | null = null;
function crear() {
  const sucio = texDesgaste(13, 1.1, [1 / 3, 1 / 3]);
  return {
    amarillo: new THREE.MeshStandardMaterial({ color: 0xf1b51c, map: sucio, roughness: 0.5, metalness: 0.25 }),
    amarilloOsc: new THREE.MeshStandardMaterial({ color: 0xc58e12, map: sucio, roughness: 0.55, metalness: 0.3 }),
    blanco: new THREE.MeshStandardMaterial({ color: 0xeceff1, map: sucio, roughness: 0.5, metalness: 0.1 }),
    persiana: new THREE.MeshStandardMaterial({ map: texPersiana([2, 2]), roughness: 0.5, metalness: 0.3 }),
    gris: new THREE.MeshStandardMaterial({ color: 0x5d6268, roughness: 0.5, metalness: 0.5 }),
    numero: new THREE.MeshStandardMaterial({ map: texNumero('07'), transparent: true, roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -2 }),
    cable: new THREE.MeshStandardMaterial({ color: 0x3a3c40, roughness: 0.35, metalness: 0.85 }),
  };
}
const mats = () => MAT ?? (MAT = crear());

// prisma cuadrado que se angosta hacia arriba (pata de la grúa)
function geoPata(abajo: number, arriba: number, alto: number) {
  const geo = new THREE.CylinderGeometry(arriba / Math.SQRT2, abajo / Math.SQRT2, alto, 4, 1); geo.rotateY(Math.PI / 4);
  return geo.toNonIndexed();
}

export function crearGrua() {
  const M = mats(), C = comunes();
  const g = new THREE.Group(); g.name = 'grua-rtg';
  const X = GRUA.claro / 2, Z = GRUA.base / 2, A = GRUA.alto;
  const f = fusion();
  const ruedas: THREE.Object3D[] = [];
  for (const sx of [-1, 1]) {
    // viga inferior con franjas en las puntas y boggies de dos llantas en cada esquina
    f.caja(M.amarillo, 0.8, 0.9, 2 * Z + 1.6, sx * X, 0.95, 0);
    for (const sz of [-1, 1]) {
      f.caja(C.rayas, 0.82, 0.62, 0.02, sx * X, 0.95, sz * (Z + 0.81));
      f.caja(M.amarilloOsc, 0.62, 0.42, 1.65, sx * X, 0.55, sz * (Z + 0.15));
      f.caja(C.hule, 0.4, 0.3, 0.16, sx * X, 0.6, sz * (Z + 1.05));     // tope de hule
      for (const dz of [-0.48, 0.48]) {
        const r = rueda(0.6, 0.42, false); r.position.set(sx * X, 0.6, sz * (Z + 0.15) + dz); g.add(r); ruedas.push(r);
      }
      // patas que se angostan, con cartelas al pie y en la viga superior
      f.geo(M.amarillo, geoPata(0.82, 0.58, A - 1.4), sx * X, 1.4 + (A - 1.4) / 2, sz * Z);
      f.viga(M.amarillo, V(sx * X, 1.4, sz * Z - sz * 0.9), V(sx * X, 3.1, sz * Z), 0.18, 0.5);
      f.viga(M.amarillo, V(sx * X - sx * 1.0, A - 0.2, sz * Z), V(sx * X, A - 1.7, sz * Z), 0.5, 0.2);
    }
    // arriostramiento del marco lateral: tirante a media altura y diagonales en V
    const ym = A * 0.52;
    f.caja(M.amarillo, 0.42, 0.48, 2 * Z, sx * X, ym, 0);
    for (const sz of [-1, 1]) {
      f.viga(M.amarillo, V(sx * X, 1.5, sz * (Z - 0.3)), V(sx * X, ym - 0.2, 0), 0.3);
      f.viga(M.amarillo, V(sx * X, ym + 0.2, 0), V(sx * X, A - 0.45, sz * (Z - 0.3)), 0.3);
    }
    // viga superior longitudinal con pasillo y barandal por fuera
    f.caja(M.amarillo, 0.6, 0.85, 2 * Z + 0.7, sx * X, A + 0.4, 0);
    f.caja(C.diamante, 0.7, 0.04, 2 * Z + 0.5, sx * (X + 0.62), A + 0.1, 0);
    for (let z = -Z - 0.2; z <= Z + 0.2; z += 0.9) f.cil(M.amarillo, 0.02, 1.05, sx * (X + 0.95), A + 0.62, z, 'y', 6);
    for (const yy of [A + 0.62, A + 1.12]) f.cil(M.amarillo, 0.022, 2 * Z + 0.5, sx * (X + 0.95), yy, 0, 'z', 6);
  }
  // vigas del portal (a lo ancho) con pasillo encima, rieles del carro y reflectores
  for (const sz of [-1, 1]) {
    f.caja(M.amarillo, 2 * X + 1.3, 1.15, 0.75, 0, A + 0.32, sz * Z);
    f.caja(C.diamante, 2 * X + 0.6, 0.04, 0.55, 0, A + 0.92, sz * (Z + 0.68));
    f.caja(M.amarillo, 2 * X + 0.6, 0.12, 0.08, 0, A + 0.9, sz * (Z + 0.4));
    for (let x = -X; x <= X; x += 1.0) f.cil(M.amarillo, 0.02, 1.05, x, A + 1.42, sz * (Z + 0.93), 'y', 6);
    for (const yy of [A + 1.42, A + 1.92]) f.cil(M.amarillo, 0.022, 2 * X + 0.4, 0, yy, sz * (Z + 0.93), 'x', 6);
    f.caja(C.acero, 2 * X + 0.4, 0.1, 0.14, 0, A + 0.95, sz * Z);
    for (const x of [-X + 0.8, X - 0.8]) { f.caja(M.gris, 0.4, 0.28, 0.3, x, A - 0.35, sz * Z + sz * 0.2); f.caja(C.faro, 0.34, 0.02, 0.24, x, A - 0.5, sz * Z + sz * 0.2); }
  }
  // escalera con jaula en una pata y descanso a media altura
  const xe = X + 0.62, ze = Z + 0.15;
  for (const dz of [-0.22, 0.22]) f.cil(M.amarillo, 0.025, A - 1.5, xe, 1.4 + (A - 1.5) / 2, ze + dz, 'y', 6);
  for (let yy = 1.7; yy < A; yy += 0.3) f.cil(M.amarillo, 0.015, 0.44, xe, yy, ze, 'z', 5);
  for (let yy = 3.5; yy < A; yy += 0.8) { const aro = new THREE.TorusGeometry(0.38, 0.015, 4, 18, Math.PI); aro.rotateX(Math.PI / 2); aro.rotateY(-Math.PI / 2); f.geo(M.amarillo, aro, xe + 0.02, yy, ze); }
  for (const k of [-0.3, 0, 0.3]) f.cil(M.amarillo, 0.012, A - 3.5, xe + 0.38, 3.5 + (A - 3.5) / 2, ze + k, 'y', 4);
  f.caja(C.diamante, 1.0, 0.05, 1.1, xe + 0.2, A * 0.52 + 0.3, ze);
  // cuarto del generador sobre la viga inferior, con escape y número económico
  f.caja(M.blanco, 1.25, 2.0, 3.3, -X - 0.25, 2.4, 0);
  for (const sz of [-1, 1]) f.caja(M.persiana, 1.27, 1.1, 0.9, -X - 0.25, 2.5, sz * 0.9);
  f.caja(C.negroMate, 0.02, 1.5, 0.8, -X - 0.88, 2.25, 0);
  f.cil(C.acero, 0.07, 1.2, -X - 0.2, 3.9, 1.1, 'y', 12);
  f.caja(M.amarilloOsc, 1.3, 0.12, 3.4, -X - 0.25, 1.36, 0);
  f.cerrar(g);
  for (const sz of [-1, 1]) {
    const num = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.55), M.numero);
    num.position.set(0, A + 0.32, sz * (Z + 0.376)); if (sz < 0) num.rotation.y = Math.PI; g.add(num);
  }

  // carro (trole): bastidor, ruedas sobre los rieles, tambores, motores y cuarto de máquinas
  const trole = new THREE.Group(); g.add(trole);
  const ft = fusion();
  ft.caja(M.amarillo, 2.8, 0.55, 2 * Z + 1.0, 0, A + 1.3, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) ft.cil(C.negro, 0.2, 0.16, sx * 1.1, A + 1.12, sz * Z, 'x', 16);
  ft.caja(M.blanco, 2.3, 1.55, 2.9, 0, A + 2.35, 0.9);
  ft.caja(M.persiana, 2.32, 0.9, 1.2, 0, A + 2.4, 0.4);
  for (const dx of [-0.55, 0.55]) { ft.cil(M.gris, 0.36, 1.7, dx, A + 1.95, -1.6, 'x', 24); ft.cil(M.cable, 0.38, 1.5, dx, A + 1.95, -1.6, 'x', 24); }
  ft.cil(M.gris, 0.25, 0.7, 0, A + 1.85, -2.7, 'z', 16);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) ft.cil(M.gris, 0.18, 0.12, sx * 0.75, A + 0.95, sz * 1.5, 'x', 16);   // poleas
  // cabina del operador colgada de un costado del carro
  ft.caja(M.amarillo, 0.14, 1.6, 0.14, 1.05, A + 0.3, -Z + 0.9);
  ft.caja(M.amarillo, 0.14, 0.14, 1.2, 1.05, A + 1.0, -Z + 1.3);
  const yc = A - 1.35, zc = -Z + 0.9;
  ft.caja(M.blanco, 1.5, 0.25, 1.65, 1.05, yc + 1.05, zc);
  ft.caja(M.blanco, 1.5, 0.2, 1.65, 1.05, yc - 0.95, zc);
  ft.caja(M.blanco, 1.5, 1.75, 1.65, 1.05, yc + 0.05, zc);
  ft.caja(C.vidrio, 1.3, 1.25, 0.02, 1.05, yc + 0.1, zc - 0.835);
  for (const sx of [-1, 1]) ft.caja(C.vidrio, 0.02, 1.1, 1.25, 1.05 + sx * 0.755, yc + 0.15, zc - 0.05);
  ft.caja(C.vidrio, 1.3, 0.02, 0.9, 1.05, yc - 0.86, zc - 0.25);
  ft.caja(M.gris, 0.05, 0.05, 0.9, 1.05, yc + 0.72, zc - 0.86);
  ft.caja(M.gris, 0.6, 0.3, 0.5, 1.05, yc + 1.32, zc + 0.3);
  ft.cerrar(trole);

  // spreader telescópico: cabezal, bastidor central, vigas extensibles, testeros con candados y guías
  const spreader = new THREE.Group(); trole.add(spreader);
  const fs = fusion();
  fs.caja(M.amarillo, 1.7, 0.5, 2.4, 0, 0.98, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) fs.cil(M.gris, 0.24, 0.14, sx * 0.55, 1.12, sz * 0.95, 'x', 18);
  fs.caja(M.amarillo, 1.0, 0.45, 2.2, 0, 0.5, 0);
  for (const sx of [-1, 1]) fs.caja(C.negro, 0.12, 0.12, 1.4, sx * 0.25, 0.75, 0);   // cilindros hidráulicos
  fs.cerrar(spreader);
  const vigas: THREE.Mesh[] = [];
  for (const sz of [-1, 1]) for (const sx of [-1, 1]) {
    const v = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 1).translate(0, 0, sz * 0.5), M.amarillo);
    v.position.set(sx * 0.2, 0.4, sz * 1.0); spreader.add(v); vigas.push(v);
  }
  const testeros: THREE.Group[] = [];
  for (const sz of [-1, 1]) {
    const t = new THREE.Group(); t.userData.sz = sz; spreader.add(t); testeros.push(t);
    caja(t, 2.44, 0.4, 0.42, M.amarillo, 0, 0.22, 0);
    caja(t, 2.46, 0.12, 0.44, C.rayas, 0, 0.38, 0);
    for (const sx of [-1, 1]) {
      caja(t, 0.22, 0.12, 0.2, M.gris, sx * (2.438 / 2 - 0.09), 0.02, 0);
      const pin = new THREE.Mesh(geoCil(0.035, 0.09, 'y', 8), C.negro); pin.position.set(sx * (2.438 / 2 - 0.09), -0.04, 0); t.add(pin);
      // guías (flippers) inclinadas en las esquinas
      const gu = new THREE.Group(); gu.position.set(sx * (2.438 / 2 + 0.02), 0.1, sz * 0.24); t.add(gu);
      caja(gu, 0.04, 0.55, 0.32, M.amarilloOsc, 0, -0.18, 0).rotation.x = sz * 0.35;
      caja(gu, 0.32, 0.55, 0.04, M.amarilloOsc, -sx * 0.1, -0.18, sz * 0.04).rotation.z = -sx * 0.35;
    }
  }
  // cables de izaje: cuatro pares, del carro al cabezal; se recalculan al subir o bajar
  const cables: { m: THREE.Mesh; top: THREE.Vector3; bot: THREE.Vector3 }[] = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const d of [-0.06, 0.06]) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1, 6), M.cable); m.castShadow = true; trole.add(m);
    cables.push({ m, top: new THREE.Vector3(sx * 0.75 + d, A + 0.95, sz * 1.5), bot: new THREE.Vector3(sx * 0.55 + d, 1.12, sz * 0.95) });
  }
  const ajusta = (L: number) => {
    for (const v of vigas) v.scale.z = Math.max(0.1, L / 2 - 1.2);
    for (const t of testeros) t.position.z = t.userData.sz * (L / 2 - 0.21);
  };
  const v = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const coloca = (y: number, dx = 0) => {
    spreader.position.set(dx, y, 0);
    for (const c of cables) {
      const b = c.bot.clone(); b.y += y; b.x += dx; v.copy(c.top).sub(b);
      c.m.scale.y = v.length(); c.m.position.copy(b).addScaledVector(v, 0.5);
      c.m.quaternion.setFromUnitVectors(up, v.normalize());
    }
  };
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { g, trole, spreader, ajusta, coloca, ruedas };
}
