// Contenedor marítimo seco (20', 40' y 40' HC), chasis portacontenedor y grúa de patio (RTG),
// todo procedimental: medidas ISO 668, láminas corrugadas cerradas y cajas de cartón dentro.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export type Size = '20' | '40' | '40hc';
export const MEDIDAS: Record<Size, { L: number; W: number; H: number; codigo: string }> = {
  '20': { L: 6.058, W: 2.438, H: 2.591, codigo: '22G1' },
  '40': { L: 12.192, W: 2.438, H: 2.591, codigo: '42G1' },
  '40hc': { L: 12.192, W: 2.438, H: 2.896, codigo: '45G1' },
};
export const ALTO_CHASIS = 1.32;   // cara superior de las mesas del chasis, donde asienta el contenedor

// ---------- utilidades ----------
function azar(semilla: number) { let s = semilla; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
function lienzo(w: number, h: number, pinta: (g: CanvasRenderingContext2D) => void, rep: [number, number] = [1, 1]) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  pinta(cv.getContext('2d')!);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function caja(g: THREE.Object3D, w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z); g.add(mesh); return mesh;
}
function cilindro(g: THREE.Object3D, r: number, h: number, m: THREE.Material, x: number, y: number, z: number, eje: 'x' | 'y' | 'z' = 'y', seg = 16) {
  const geo = new THREE.CylinderGeometry(r, r, h, seg);
  if (eje === 'x') geo.rotateZ(Math.PI / 2); else if (eje === 'z') geo.rotateX(Math.PI / 2);
  const mesh = new THREE.Mesh(geo, m); mesh.position.set(x, y, z); g.add(mesh); return mesh;
}
// viga entre dos puntos (diagonales y tirantes)
function viga(g: THREE.Object3D, a: THREE.Vector3, b: THREE.Vector3, ancho: number, m: THREE.Material) {
  const largo = a.distanceTo(b);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(ancho, largo, ancho), m);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  g.add(mesh); return mesh;
}

// Lámina corrugada trapezoidal de U × V (u a lo largo del perfil, v a lo alto, relieve hacia +z).
// Cada tramo lleva sus propios vértices: las caras quedan planas y el corrugado se lee nítido.
function lamina(U: number, V: number, paso: number, prof: number, plano: number, valle: number) {
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
    const a = [u0, -V / 2, d0], b = [u1, -V / 2, d1], c = [u1, V / 2, d1], d = [u0, V / 2, d0];
    pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    uv.push(u0, 0, u1, 0, u1, V, u0, 0, u1, V, u0, V);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  return geo;
}

// ---------- texturas ----------
// pintura marina con desgaste: manchas suaves, escurrimientos de óxido y polvo hacia abajo (v en metros)
function texPintura() {
  const r = azar(5);
  return lienzo(512, 512, g => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 900; i++) {
      const x = r() * 512, y = r() * 512, rad = 2 + r() * 14;
      g.fillStyle = r() < 0.7 ? `rgba(40,20,15,${0.01 + r() * 0.022})` : `rgba(255,255,255,${0.015 + r() * 0.03})`;
      g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
    }
    for (let i = 0; i < 26; i++) {
      const x = r() * 512, y0 = r() * 300, l = 60 + r() * 200, w = 1 + r() * 3;
      const grd = g.createLinearGradient(0, y0, 0, y0 + l);
      grd.addColorStop(0, 'rgba(70,32,18,0.16)'); grd.addColorStop(1, 'rgba(70,32,18,0)');
      g.fillStyle = grd; g.fillRect(x, y0, w, l);
    }
    const suelo = g.createLinearGradient(0, 380, 0, 512);
    suelo.addColorStop(0, 'rgba(60,45,35,0)'); suelo.addColorStop(1, 'rgba(60,45,35,0.22)');
    g.fillStyle = suelo; g.fillRect(0, 380, 512, 132);
  }, [1 / 3, 1 / 2.6]);
}
// piso de madera contrachapada, tablones a lo largo del contenedor
function texPiso(L: number) {
  const r = azar(9);
  return lienzo(512, 512, g => {
    for (let i = 0; i < 8; i++) {
      const tono = 28 + r() * 8, luz = 30 + r() * 10;
      g.fillStyle = `hsl(${tono},42%,${luz}%)`; g.fillRect(i * 64, 0, 64, 512);
      for (let k = 0; k < 40; k++) { g.fillStyle = `rgba(30,15,5,${0.05 + r() * 0.08})`; g.fillRect(i * 64 + r() * 64, 0, 1 + r() * 2, 512); }
      g.fillStyle = 'rgba(15,8,3,0.55)'; g.fillRect(i * 64, 0, 2, 512);
      g.fillRect(i * 64, r() * 512, 64, 2);
    }
  }, [1, L / 2.4]);
}
function texCarton(cara: 'arriba' | 'frente' | 'lado') {
  const r = azar(cara === 'arriba' ? 11 : cara === 'frente' ? 12 : 13);
  return lienzo(256, 256, g => {
    g.fillStyle = '#c49c6b'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '90,60,30' : '255,235,200'},${0.04 + r() * 0.05})`; g.fillRect(r() * 256, r() * 256, 1 + r() * 18, 1); }
    g.strokeStyle = 'rgba(80,50,20,0.35)'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, 253, 253);
    const cinta = (x: number, y: number, w: number, h: number) => {
      g.fillStyle = '#d9b77f'; g.fillRect(x, y, w, h);
      g.fillStyle = 'rgba(255,250,235,0.35)'; g.fillRect(x + 4, y, 5, h);
      g.fillStyle = 'rgba(90,60,25,0.25)'; g.fillRect(x, y, 2, h); g.fillRect(x + w - 2, y, 2, h);
    };
    const flechas = (x: number, y: number, s: number) => {
      g.fillStyle = 'rgba(55,35,20,0.85)';
      for (const dx of [0, s * 0.9]) {
        g.beginPath(); g.moveTo(x + dx, y); g.lineTo(x + dx + s * 0.35, y + s * 0.4); g.lineTo(x + dx + s * 0.12, y + s * 0.4);
        g.lineTo(x + dx + s * 0.12, y + s); g.lineTo(x + dx - s * 0.12, y + s); g.lineTo(x + dx - s * 0.12, y + s * 0.4); g.lineTo(x + dx - s * 0.35, y + s * 0.4); g.closePath(); g.fill();
      }
      g.fillRect(x - s * 0.4, y + s * 1.1, s * 1.7, s * 0.1);
    };
    if (cara === 'arriba') { g.fillStyle = 'rgba(70,45,20,0.4)'; g.fillRect(126, 0, 4, 256); cinta(106, 0, 44, 256); }
    else if (cara === 'frente') {
      cinta(106, 0, 44, 64);
      g.fillStyle = '#f2efe8'; g.fillRect(28, 128, 112, 76);
      g.fillStyle = 'rgba(40,40,40,0.75)'; for (let k = 0; k < 4; k++) g.fillRect(38, 142 + k * 14, 70 + r() * 22, 5);
      for (let k = 0; k < 18; k++) g.fillRect(38 + k * 5, 190, 1 + (k % 3), 9);
      flechas(188, 140, 34);
    } else {
      flechas(40, 34, 40);
      g.fillStyle = 'rgba(55,35,20,0.8)'; for (let k = 0; k < 3; k++) g.fillRect(40, 150 + k * 18, 120 - k * 26, 7);
      g.strokeStyle = 'rgba(55,35,20,0.7)'; g.lineWidth = 3; g.beginPath(); g.arc(200, 200, 24, 0, Math.PI * 2); g.stroke();
    }
  });
}
function texCodigo(texto: string) {
  return lienzo(256, 96, g => {
    g.fillStyle = '#F2F2EE'; g.font = '700 56px "Inter", Arial, sans-serif'; g.textAlign = 'right';
    g.fillText(texto, 246, 58); g.fillRect(100, 72, 146, 6);
  });
}
function texPlaca() {
  return lienzo(128, 96, g => {
    g.fillStyle = '#cfd3d6'; g.fillRect(0, 0, 128, 96);
    g.fillStyle = '#444'; g.font = '700 16px Arial'; g.fillText('CSC SAFETY', 12, 22); g.fillText('APPROVAL', 12, 40);
    for (let k = 0; k < 4; k++) g.fillRect(12, 52 + k * 10, 100 - k * 14, 3);
    g.strokeStyle = '#888'; g.lineWidth = 3; g.strokeRect(3, 3, 122, 90);
  });
}

// ---------- materiales ----------
export type Materiales = ReturnType<typeof materiales>;
let MAT: any = null;
export function materiales() {
  if (MAT) return MAT as ReturnType<typeof crear>;
  return (MAT = crear());
  function crear() {
    const sucio = texPintura();
    const carton = { arriba: texCarton('arriba'), frente: texCarton('frente'), lado: texCarton('lado') };
    const cart = (t: THREE.Texture) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.92 });
    return {
      pintura: new THREE.MeshStandardMaterial({ color: 0x7e2c22, map: sucio, roughness: 0.62, metalness: 0.1, envMapIntensity: 0.7, side: THREE.DoubleSide }),
      marco: new THREE.MeshStandardMaterial({ color: 0x6e271f, map: sucio, roughness: 0.58, metalness: 0.15, envMapIntensity: 0.7 }),
      fundicion: new THREE.MeshStandardMaterial({ color: 0x4a1d17, roughness: 0.65, metalness: 0.25 }),
      hueco: new THREE.MeshBasicMaterial({ color: 0x0b0b0d, side: THREE.DoubleSide }),
      acero: new THREE.MeshStandardMaterial({ color: 0x8a9096, roughness: 0.42, metalness: 0.7, envMapIntensity: 0.6 }),
      hule: new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.85 }),
      interior: new THREE.MeshStandardMaterial({ color: 0x7c4d41, roughness: 0.8 }),
      carton: [cart(carton.lado), cart(carton.lado), cart(carton.arriba), cart(carton.lado), cart(carton.frente), cart(carton.frente)],
      placa: new THREE.MeshStandardMaterial({ map: texPlaca(), roughness: 0.4, metalness: 0.5 }),
      // chasis y grúa
      negro: new THREE.MeshStandardMaterial({ color: 0x24262b, roughness: 0.55, metalness: 0.45 }),
      llanta: new THREE.MeshStandardMaterial({ color: 0x18191b, roughness: 0.9 }),
      rin: new THREE.MeshStandardMaterial({ color: 0xd5d9de, roughness: 0.25, metalness: 0.85 }),
      rojo: new THREE.MeshStandardMaterial({ color: 0xd42a20, emissive: 0x4a0905, roughness: 0.35 }),
      ambar: new THREE.MeshStandardMaterial({ color: 0xf2a020, emissive: 0x3a2200, roughness: 0.35 }),
      amarillo: new THREE.MeshStandardMaterial({ color: 0xf0b416, roughness: 0.45, metalness: 0.25 }),
      amarilloOsc: new THREE.MeshStandardMaterial({ color: 0xc98f0c, roughness: 0.5, metalness: 0.3 }),
      blanco: new THREE.MeshStandardMaterial({ color: 0xeef0f2, roughness: 0.5, metalness: 0.1 }),
      vidrio: new THREE.MeshStandardMaterial({ color: 0x2b3a4f, roughness: 0.1, metalness: 0.6 }),
      cable: new THREE.MeshStandardMaterial({ color: 0x3a3c40, roughness: 0.4, metalness: 0.8 }),
    };
  }
}

// ---------- contenedor ----------
// Medidas en metros. El contenedor queda centrado en x y z, con la base de las esquineras en y = 0
// y las puertas hacia +z. Devuelve la función para abrir puertas (0 cerradas, 1 abiertas).
export function crearContenedor(size: Size) {
  const M = materiales();
  const { L, W, H, codigo } = MEDIDAS[size];
  const g = new THREE.Group(); g.name = `contenedor-${size}`;
  const CX = 0.178, CY = 0.118, CZ = 0.162;          // esquineras ISO 1161
  const PROF = 0.036;                                 // relieve del corrugado lateral

  // esquineras con sus aberturas ovaladas (arriba, costado y testero)
  const oval = new THREE.CircleGeometry(0.5, 20);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const top of [0, 1]) {
    const x = sx * (W / 2 - CX / 2), y = top ? H - CY / 2 : CY / 2, z = sz * (L / 2 - CZ / 2);
    caja(g, CX, CY, CZ, M.fundicion, x, y, z);
    const lado = new THREE.Mesh(oval, M.hueco); lado.scale.set(0.05, 0.028, 1); lado.position.set(sx * (W / 2 + 0.001), y, z); lado.rotation.y = sx * Math.PI / 2; g.add(lado);
    const test = new THREE.Mesh(oval, M.hueco); test.scale.set(0.06, 0.035, 1); test.position.set(x, y, sz * (L / 2 + 0.001)); test.rotation.y = sz > 0 ? 0 : Math.PI; g.add(test);
    const vert = new THREE.Mesh(oval, M.hueco); vert.scale.set(0.05, 0.11, 1); vert.rotation.x = top ? -Math.PI / 2 : Math.PI / 2;
    vert.position.set(x, top ? H + 0.001 : -0.001, z); g.add(vert);
  }
  const zIni = -L / 2 + CZ, zFin = L / 2 - CZ, largo = zFin - zIni;
  // largueros inferiores y superiores
  for (const sx of [-1, 1]) {
    caja(g, 0.06, 0.162, largo, M.marco, sx * (W / 2 - 0.03), 0.081, 0);
    caja(g, 0.03, 0.03, largo, M.marco, sx * (W / 2 - 0.015), 0.177, 0);   // pestaña sobre el larguero
    caja(g, 0.06, 0.1, largo, M.marco, sx * (W / 2 - 0.03), H - 0.05, 0);
  }
  if (size === '20') for (const sx of [-1, 1]) for (const z of [-1.025, 1.025]) caja(g, 0.004, 0.11, 0.36, M.hueco, sx * (W / 2 + 0.001), 0.075, z);   // huecos para montacargas

  // costados corrugados: del larguero inferior al superior, sin huecos (se traslapan con los largueros)
  const yIni = 0.15, yFin = H - 0.09, V = yFin - yIni;
  const zA = -L / 2 + 0.11, zB = L / 2 - 0.13;
  const geoLado = lamina(zB - zA, V, 0.278, PROF, 0.07, 0.07);
  for (const sx of [-1, 1]) {
    const m = new THREE.Mesh(geoLado, M.pintura);
    m.rotation.y = sx * Math.PI / 2;
    m.position.set(sx * (W / 2 - 0.006 - PROF), yIni + V / 2, (zA + zB) / 2);
    g.add(m);
  }
  // testero frontal: postes, travesaños y lámina con corrugado vertical
  for (const sx of [-1, 1]) caja(g, 0.13, H - 2 * CY, 0.12, M.marco, sx * (W / 2 - 0.065), H / 2, -L / 2 + 0.06);
  caja(g, W - 2 * CX, 0.162, 0.12, M.marco, 0, 0.081, -L / 2 + 0.06);
  caja(g, W - 2 * CX, 0.12, 0.17, M.marco, 0, H - 0.06, -L / 2 + 0.085);
  const frente = new THREE.Mesh(lamina(W - 0.14, V, 0.3, 0.045, 0.08, 0.08), M.pintura);
  frente.rotation.y = Math.PI; frente.position.set(0, yIni + V / 2, -L / 2 + 0.105); g.add(frente);
  // techo corrugado: cubre de travesaño a travesaño y por debajo de los largueros superiores
  const techo = lamina(L - 0.24, W - 0.08, 0.26, 0.018, 0.13, 0.07);
  techo.rotateX(-Math.PI / 2); techo.rotateY(Math.PI / 2);
  const mTecho = new THREE.Mesh(techo, M.pintura); mTecho.position.set(0, H - 0.03, -0.005); g.add(mTecho);
  // piso de madera y travesaños inferiores
  const piso = new THREE.MeshStandardMaterial({ map: texPiso(L), roughness: 0.85 });
  caja(g, W - 0.1, 0.028, L - 0.26, piso, 0, 0.178, -0.005);
  const travs: THREE.BufferGeometry[] = [];
  for (let z = zIni + 0.15; z < zFin; z += 0.3) { const t = new THREE.BoxGeometry(W - 0.12, 0.11, 0.07); t.translate(0, 0.1, z); travs.push(t); }
  g.add(new THREE.Mesh(mergeGeometries(travs)!, M.marco));

  // marco trasero: postes, cabezal y umbral
  for (const sx of [-1, 1]) caja(g, 0.16, H - 2 * CY, 0.14, M.marco, sx * (W / 2 - 0.08), H / 2, L / 2 - 0.07);
  caja(g, W - 2 * CX, 0.25, 0.16, M.marco, 0, H - 0.125, L / 2 - 0.08);
  caja(g, W - 2 * CX, 0.2, 0.16, M.marco, 0, 0.1, L / 2 - 0.08);
  // empaque de hule alrededor del vano de las puertas
  for (const sx of [-1, 1]) caja(g, 0.03, H - 0.45, 0.03, M.hule, sx * (W / 2 - 0.175), 0.2 + (H - 0.45) / 2, L / 2 - 0.005);
  for (const y of [0.215, H - 0.265]) caja(g, W - 0.32, 0.03, 0.03, M.hule, 0, y, L / 2 - 0.005);

  // puertas: cada hoja cuelga de una bisagra en su borde exterior
  const yP0 = 0.2, yP1 = H - 0.25, hP = yP1 - yP0, wH = (W - 0.32) / 2;
  const bisagras: [THREE.Group, number][] = [];
  const geoHoja = lamina(hP - 0.14, wH - 0.1, 0.36, 0.028, 0.18, 0.1); geoHoja.rotateZ(Math.PI / 2);
  for (const sx of [-1, 1]) {
    const pivote = new THREE.Group(); pivote.position.set(sx * (W / 2 + 0.04), yP0 + hP / 2, L / 2 + 0.035); g.add(pivote);
    const hoja = new THREE.Group(); hoja.position.x = -sx * (wH / 2 + 0.2); pivote.add(hoja);
    // bastidor de la hoja y lámina con corrugado horizontal
    caja(hoja, 0.06, hP, 0.05, M.marco, sx * (wH / 2 - 0.03), 0, 0);
    caja(hoja, 0.06, hP, 0.05, M.marco, -sx * (wH / 2 - 0.03), 0, 0);
    caja(hoja, wH, 0.08, 0.05, M.marco, 0, hP / 2 - 0.04, 0);
    caja(hoja, wH, 0.08, 0.05, M.marco, 0, -hP / 2 + 0.04, 0);
    const lam = new THREE.Mesh(geoHoja, M.pintura); lam.position.z = -0.012; hoja.add(lam);
    // bisagras sobre el poste
    for (const f of [0.08, 0.35, 0.65, 0.92]) {
      caja(hoja, 0.22, 0.07, 0.025, M.marco, sx * (wH / 2 + 0.1), -hP / 2 + f * hP, 0.02);
      cilindro(hoja, 0.024, 0.13, M.marco, sx * (wH / 2 + 0.2), -hP / 2 + f * hP, 0.0);
    }
    // barras de cierre con sus soportes, levas y manijas
    for (const f of [0.3, 0.78]) {
      const x = sx * (wH / 2 - f * wH);
      cilindro(hoja, 0.017, hP + 0.1, M.acero, x, 0, 0.06, 'y', 10);
      for (const fy of [-0.42, 0.05, 0.44]) caja(hoja, 0.07, 0.035, 0.05, M.acero, x, fy * hP, 0.045);
      for (const fy of [-0.5, 0.5]) caja(hoja, 0.05, 0.06, 0.05, M.acero, x, fy * (hP + 0.06), 0.06);
      const manija = new THREE.Group(); manija.position.set(x + sx * -0.06, -0.05 * hP, 0.075); hoja.add(manija);
      caja(manija, 0.03, 0.5, 0.025, M.acero, 0, -0.18, 0);
      caja(manija, 0.07, 0.03, 0.03, M.acero, sx * 0.03, 0.05, 0);
    }
    if (sx > 0) {   // código de tamaño y tipo en la hoja derecha, placa CSC en la izquierda
      const cod = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.23), new THREE.MeshStandardMaterial({ map: texCodigo(codigo), transparent: true, roughness: 0.55 }));
      cod.position.set(0, hP / 2 - 0.35, 0.03); hoja.add(cod);
    } else {
      const placa = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.16), M.placa); placa.position.set(0.1, 0.15, 0.03); hoja.add(placa);
    }
    bisagras.push([pivote, sx]);
  }
  // códigos en los costados, junto al extremo de las puertas
  for (const sx of [-1, 1]) {
    const cod = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.23), new THREE.MeshStandardMaterial({ map: texCodigo(codigo), transparent: true, roughness: 0.55, polygonOffset: true, polygonOffsetFactor: -2 }));
    cod.position.set(sx * (W / 2 - 0.004), H - 0.42, L / 2 - 0.75); cod.rotation.y = sx * Math.PI / 2; g.add(cod);
  }

  // carga: cajas de cartón estibadas desde el testero; las últimas filas, escalonadas hacia las puertas
  const BX = 0.56, BY = 0.45, BZ = 0.42, cols = 4, capas = Math.floor((H - 0.45) / BY);
  const zCarga0 = -L / 2 + 0.16, zCarga1 = L / 2 - (size === '20' ? 0.75 : 1.05);
  const filas = Math.floor((zCarga1 - zCarga0) / BZ);
  const r = azar(17), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), col = new THREE.Color();
  const lista: [number, number, number, number][] = [];
  for (let f = 0; f < filas; f++) {
    const capasFila = f < filas - 2 ? capas : f === filas - 2 ? capas - 2 : 2;
    for (let c = 0; c < cols; c++) for (let k = 0; k < capasFila; k++) {
      if (f === filas - 1 && c === 3 && k === 1) continue;
      lista.push([f, c, k, 0]);
    }
  }
  const cajas = new THREE.InstancedMesh(new THREE.BoxGeometry(BX, BY, BZ), M.carton, lista.length);
  lista.forEach(([f, c, k], i) => {
    const x = -((cols - 1) / 2) * (BX + 0.012) + c * (BX + 0.012) + (r() - 0.5) * 0.02;
    const y = 0.192 + BY / 2 + k * (BY + 0.004);
    const z = zCarga0 + BZ / 2 + f * (BZ + 0.01) + (r() - 0.5) * 0.02;
    e.set(0, (r() - 0.5) * 0.03, 0);
    m4.compose(new THREE.Vector3(x, y, z), q.setFromEuler(e), new THREE.Vector3(1, 1 - r() * 0.015, 1));
    cajas.setMatrixAt(i, m4);
    const fondo = 0.55 + 0.45 * Math.pow(f / Math.max(1, filas - 1), 1.5);   // más oscuras hacia el fondo
    cajas.setColorAt(i, col.setRGB(fondo * (0.94 + r() * 0.06), fondo * (0.92 + r() * 0.06), fondo * (0.9 + r() * 0.06)));
  });
  cajas.name = 'carga-cajas'; g.add(cajas);

  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = o !== cajas; o.receiveShadow = o !== cajas; } });
  const puertas = (t: number) => { for (const [p, sx] of bisagras) p.rotation.y = sx * t * THREE.MathUtils.degToRad(260); };
  return { g, puertas, L, W, H };
}

// ---------- chasis portacontenedor ----------
// Cuello y largueros negros, mesas con candados giratorios en las cuatro esquinas, tándem trasero.
export function crearChasis(size: Size) {
  const M = materiales();
  const { L, W } = MEDIDAS[size];
  const g = new THREE.Group(); g.name = 'chasis';
  const largo = L + 0.25, y = ALTO_CHASIS;
  for (const sx of [-1, 1]) {   // largueros en I
    caja(g, 0.012, 0.36, largo, M.negro, sx * 0.5, y - 0.33, 0.05);
    caja(g, 0.16, 0.02, largo, M.negro, sx * 0.5, y - 0.15, 0.05);
    caja(g, 0.16, 0.02, largo, M.negro, sx * 0.5, y - 0.51, 0.05);
  }
  for (let z = -L / 2 + 0.6; z < L / 2 - 0.4; z += 1.25) caja(g, 1.0, 0.12, 0.08, M.negro, 0, y - 0.3, z);
  const mesas = size === '20' ? [-L / 2 + 0.08, L / 2 - 0.08] : [-L / 2 + 0.08, L / 2 - 0.08];
  for (const z of mesas) {
    caja(g, W, 0.14, 0.2, M.negro, 0, y - 0.07, z);
    for (const sx of [-1, 1]) {   // candados giratorios (twistlocks)
      caja(g, 0.16, 0.05, 0.16, M.acero, sx * (W / 2 - 0.09), y - 0.01, z);
      const cono = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.07, 8), M.acero); cono.position.set(sx * (W / 2 - 0.09), y + 0.035, z); g.add(cono);
    }
  }
  // placa del perno rey y patas de apoyo
  caja(g, 1.1, 0.03, 1.3, M.negro, 0, y - 0.53, -L / 2 + 0.75);
  const zPatas = -L / 2 + (size === '20' ? 1.5 : 2.6);
  for (const sx of [-1, 1]) {
    caja(g, 0.11, 0.85, 0.11, M.negro, sx * 0.62, y - 0.95, zPatas);
    caja(g, 0.28, 0.04, 0.28, M.negro, sx * 0.62, y - 1.36, zPatas);
  }
  caja(g, 1.3, 0.05, 0.05, M.negro, 0, y - 0.8, zPatas);
  cilindro(g, 0.015, 0.25, M.acero, 0.75, y - 0.7, zPatas, 'x');
  // tándem trasero: suspensión, ejes y llantas dobles
  const ruedas = new THREE.Group(); g.add(ruedas);
  const zEjes = size === '20' ? [L / 2 - 1.0, L / 2 - 2.25] : [L / 2 - 1.1, L / 2 - 2.35];
  const geoL = new THREE.CylinderGeometry(0.5, 0.5, 0.27, 32); geoL.rotateZ(Math.PI / 2);
  const geoR = new THREE.CylinderGeometry(0.29, 0.29, 0.28, 24); geoR.rotateZ(Math.PI / 2);
  for (const z of zEjes) {
    cilindro(g, 0.07, 2.05, M.negro, 0, 0.5, z, 'x');
    for (const sx of [-1, 1]) caja(g, 0.1, 0.18, 0.9, M.negro, sx * 0.5, 0.68, z);
    for (const x of [-1.0, -0.71, 0.71, 1.0]) {
      const rueda = new THREE.Group(); rueda.position.set(x, 0.5, z); ruedas.add(rueda);
      rueda.add(new THREE.Mesh(geoL, M.llanta));
      const rin = new THREE.Mesh(geoR, M.rin); rueda.add(rin);
      for (let k = 0; k < 10; k++) { const b = cilindro(rueda, 0.018, 0.29, M.negro, 0, Math.cos(k / 10 * Math.PI * 2) * 0.17, Math.sin(k / 10 * Math.PI * 2) * 0.17, 'x', 6); b.name = 'birlo'; }
    }
  }
  // loderas, defensa trasera y calaveras
  for (const sx of [-1, 1]) {
    const lod = caja(g, 0.62, 0.55, 0.01, M.hule, sx * 0.86, 0.62, zEjes[0] + 0.65);
    lod.name = 'lodera';
  }
  caja(g, W - 0.25, 0.1, 0.1, M.negro, 0, 0.58, L / 2 + 0.1);
  for (const sx of [-1, 1]) {
    caja(g, 0.06, 0.6, 0.06, M.negro, sx * 0.8, 0.88, L / 2 + 0.1);
    caja(g, 0.16, 0.09, 0.03, M.rojo, sx * (W / 2 - 0.2), y - 0.08, L / 2 + 0.02);
    for (const f of [0.25, 0.5, 0.75]) caja(g, 0.03, 0.04, 0.06, M.ambar, sx * 0.59, y - 0.33, -L / 2 + f * L);
  }
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { g, ruedas };
}

// ---------- grúa de patio sobre neumáticos (RTG) ----------
// Dos marcos en portal con vigas superiores, trole con caseta y cabina, cables y spreader.
export const GRUA = { claro: 8.3, base: 6.6, alto: 11.6 };
export function crearGrua() {
  const M = materiales();
  const g = new THREE.Group(); g.name = 'grua-rtg';
  const X = GRUA.claro / 2, Z = GRUA.base / 2, A = GRUA.alto;
  for (const sx of [-1, 1]) {
    caja(g, 0.75, 0.8, GRUA.base + 1.4, M.amarillo, sx * X, 0.95, 0);               // viga inferior (sill)
    for (const sz of [-1, 1]) {
      caja(g, 0.55, A - 1.3, 0.55, M.amarillo, sx * X, 1.35 + (A - 1.3) / 2, sz * Z); // patas
      // boggies con dos llantas cada uno
      caja(g, 0.6, 0.4, 1.5, M.amarilloOsc, sx * X, 0.55, sz * (Z + 0.1));
      for (const dz of [-0.45, 0.45]) {
        const ll = cilindro(g, 0.55, 0.42, M.llanta, sx * X, 0.55, sz * (Z + 0.1) + dz, 'x', 28);
        ll.name = 'llanta-grua';
        cilindro(g, 0.3, 0.44, M.rin, sx * X, 0.55, sz * (Z + 0.1) + dz, 'x', 20);
      }
    }
    caja(g, 0.38, 0.38, GRUA.base, M.amarillo, sx * X, A * 0.55, 0);                 // tirante a media altura
    viga(g, new THREE.Vector3(sx * X, A * 0.55, -Z), new THREE.Vector3(sx * X, A - 0.4, Z), 0.3, M.amarillo);
    viga(g, new THREE.Vector3(sx * X, 1.4, Z), new THREE.Vector3(sx * X, A * 0.55, -Z), 0.3, M.amarillo);
    caja(g, 0.5, 0.7, GRUA.base + 0.6, M.amarillo, sx * X, A + 0.35, 0);               // viga superior longitudinal
  }
  for (const sz of [-1, 1]) {
    caja(g, GRUA.claro + 1.1, 1.0, 0.65, M.amarillo, 0, A + 0.3, sz * Z);              // vigas del portal
    caja(g, GRUA.claro + 0.6, 0.08, 0.12, M.acero, 0, A + 0.84, sz * Z);               // riel del trole
  }
  // casa de máquinas (generador) sobre la viga inferior izquierda
  caja(g, 1.1, 1.7, 2.8, M.blanco, -X - 0.15, 2.2, 0);
  for (const dz of [-0.8, 0, 0.8]) caja(g, 1.12, 0.9, 0.05, M.negro, -X - 0.15, 2.3, dz);
  // escalera en una pata
  for (let yy = 1.6; yy < A - 0.5; yy += 0.4) caja(g, 0.5, 0.03, 0.04, M.negro, X + 0.33, yy, Z + 0.15);

  // trole: se mueve a lo largo del claro (eje x)
  const trole = new THREE.Group(); g.add(trole);
  caja(trole, 2.6, 0.6, GRUA.base + 0.9, M.amarillo, 0, A + 1.15, 0);
  caja(trole, 2.0, 1.4, 2.8, M.blanco, 0, A + 2.15, 0.6);
  caja(trole, 1.2, 0.7, 1.4, M.amarillo, 0, A + 1.8, -1.9);
  // cabina del operador colgada del trole
  caja(trole, 0.12, 1.5, 0.12, M.amarillo, 1.0, A, -Z + 0.9);
  const cab = new THREE.Group(); cab.position.set(1.0, A - 1.4, -Z + 0.9); trole.add(cab);
  caja(cab, 1.4, 1.9, 1.5, M.blanco, 0, 0, 0);
  caja(cab, 1.42, 1.0, 1.0, M.vidrio, 0, 0.15, 0.15);
  caja(cab, 1.0, 0.9, 1.52, M.vidrio, 0.05, 0.15, 0);

  // spreader telescópico con cabezal, candados giratorios y guías en las esquinas
  const spreader = new THREE.Group(); trole.add(spreader);
  const cabezal = caja(spreader, 1.5, 0.45, 2.2, M.amarillo, 0, 0.75, 0); cabezal.name = 'cabezal';
  const vigaS = caja(spreader, 0.55, 0.38, 1, M.amarillo, 0, 0.2, 0); vigaS.name = 'viga-spreader';
  const extremos: THREE.Mesh[] = [];
  const guias: THREE.Object3D[] = [];
  for (const sz of [-1, 1]) {
    const ext = caja(spreader, 2.44, 0.34, 0.36, M.amarillo, 0, 0.17, 0); ext.userData.sz = sz; extremos.push(ext);
    for (const sx of [-1, 1]) {
      const gu = new THREE.Group(); gu.userData = { sx, sz }; spreader.add(gu); guias.push(gu);
      caja(gu, 0.22, 0.42, 0.04, M.amarilloOsc, 0, -0.12, sz * 0.13);
      caja(gu, 0.04, 0.42, 0.22, M.amarilloOsc, sx * 0.13, -0.12, 0);
      cilindro(gu, 0.035, 0.08, M.negro, 0, -0.03, 0, 'y', 8);
    }
  }
  // cables de izaje: del trole al cabezal; se recalculan al subir o bajar
  const cables: { m: THREE.Mesh; top: THREE.Vector3; bot: THREE.Vector3 }[] = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1, 6), M.cable); trole.add(m);
    cables.push({ m, top: new THREE.Vector3(sx * 0.75, A + 0.85, sz * 1.5), bot: new THREE.Vector3(sx * 0.55, 0.95, sz * 0.9) });
  }
  // largo del spreader según el contenedor; altura (base del spreader, en coordenadas de la grúa)
  const ajusta = (L: number) => {
    vigaS.scale.z = L - 0.6;
    for (const e of extremos) e.position.z = e.userData.sz * (L / 2 - 0.18);
    for (const gu of guias) gu.position.set(gu.userData.sx * (2.438 / 2 - 0.09), 0, gu.userData.sz * (L / 2 - 0.08));
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
  return { g, trole, spreader, ajusta, coloca };
}
