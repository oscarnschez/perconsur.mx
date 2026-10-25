// Contenedor marítimo seco (20', 40' y 40' HC) con medidas ISO 668: láminas corrugadas cerradas contra
// largueros y travesaños, esquineras ISO 1161, piso de madera y puertas con barras de cierre.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { azar, lienzo, caja, cilindro, lamina, texDesgaste, comunes } from './c3d-comun';

export type Size = '20' | '40' | '40hc';
export const MEDIDAS: Record<Size, { L: number; W: number; H: number; codigo: string }> = {
  '20': { L: 6.058, W: 2.438, H: 2.591, codigo: '22G1' },
  '40': { L: 12.192, W: 2.438, H: 2.591, codigo: '42G1' },
  '40hc': { L: 12.192, W: 2.438, H: 2.896, codigo: '45G1' },
};
// colores habituales de las navieras y arrendadoras; el marco va un tono más oscuro
export const COLORES: Record<string, number> = {
  rojo: 0x7e2c22, azul: 0x1d4a86, verde: 0x2c5a3a, gris: 0x7d8288, naranja: 0xc2602a, blanco: 0xd5d7d8,
};

function texPiso(L: number) {
  const r = azar(9);
  return lienzo(512, 512, g => {
    for (let i = 0; i < 8; i++) {
      g.fillStyle = `hsl(${28 + r() * 8},42%,${30 + r() * 10}%)`; g.fillRect(i * 64, 0, 64, 512);
      for (let k = 0; k < 40; k++) { g.fillStyle = `rgba(30,15,5,${0.05 + r() * 0.08})`; g.fillRect(i * 64 + r() * 64, 0, 1 + r() * 2, 512); }
      g.fillStyle = 'rgba(15,8,3,0.55)'; g.fillRect(i * 64, 0, 2, 512); g.fillRect(i * 64, r() * 512, 64, 2);
    }
  }, [1, L / 2.4]);
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

let MAT: ReturnType<typeof crear> | null = null;
function crear() {
  const sucio = texDesgaste(5, 0.8);
  return {
    pintura: new THREE.MeshStandardMaterial({ color: COLORES.rojo, map: sucio, roughness: 0.62, metalness: 0.05, side: THREE.DoubleSide }),
    marco: new THREE.MeshStandardMaterial({ color: COLORES.rojo, map: sucio, roughness: 0.58, metalness: 0.08 }),
    fundicion: new THREE.MeshStandardMaterial({ color: 0x3e1a15, roughness: 0.65, metalness: 0.25 }),
    hueco: new THREE.MeshBasicMaterial({ color: 0x0b0b0d, side: THREE.DoubleSide }),
    piso: null as THREE.MeshStandardMaterial | null,
    placa: new THREE.MeshStandardMaterial({ map: texPlaca(), roughness: 0.4, metalness: 0.5 }),
    codigo: new Map<string, THREE.MeshStandardMaterial>(),
  };
}
const mats = () => MAT ?? (MAT = crear());

// pinta el contenedor (afecta al que esté en pantalla y a los que se construyan después)
export function colorear(nombre: string) {
  const M = mats(), c = new THREE.Color(COLORES[nombre] ?? COLORES.rojo);
  M.pintura.color.copy(c); M.marco.color.copy(c).multiplyScalar(0.84);
  const claro = c.getHSL({ h: 0, s: 0, l: 0 }).l > 0.6;
  M.fundicion.color.set(claro ? 0x6c7074 : 0x3e1a15).lerp(c, 0.25);
  for (const m of M.codigo.values()) m.color.set(claro ? 0x1c1d20 : 0xffffff);
  return claro;
}

// El contenedor queda centrado en x y z, con la base de las esquineras en y = 0 y las puertas hacia +z.
export function crearContenedor(size: Size) {
  const M = mats(), C = comunes();
  const { L, W, H, codigo } = MEDIDAS[size];
  if (!M.codigo.has(codigo)) M.codigo.set(codigo, new THREE.MeshStandardMaterial({ map: texCodigo(codigo), transparent: true, roughness: 0.55, polygonOffset: true, polygonOffsetFactor: -2 }));
  const matCodigo = M.codigo.get(codigo)!;
  const g = new THREE.Group(); g.name = `contenedor-${size}`;
  const CX = 0.178, CY = 0.118, CZ = 0.162, PROF = 0.036;

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
  for (const sx of [-1, 1]) {
    caja(g, 0.06, 0.162, largo, M.marco, sx * (W / 2 - 0.03), 0.081, 0);
    caja(g, 0.03, 0.03, largo, M.marco, sx * (W / 2 - 0.015), 0.177, 0);
    caja(g, 0.06, 0.1, largo, M.marco, sx * (W / 2 - 0.03), H - 0.05, 0);
  }
  if (size === '20') for (const sx of [-1, 1]) for (const z of [-1.025, 1.025]) caja(g, 0.004, 0.11, 0.36, M.hueco, sx * (W / 2 + 0.001), 0.075, z);

  // costados corrugados, testero y techo: se traslapan con largueros, postes y travesaños (sin huecos)
  const yIni = 0.15, yFin = H - 0.09, Vh = yFin - yIni;
  const zA = -L / 2 + 0.11, zB = L / 2 - 0.13;
  const geoLado = lamina(zB - zA, Vh, 0.278, PROF, 0.07, 0.07);
  for (const sx of [-1, 1]) {
    const m = new THREE.Mesh(geoLado, M.pintura); m.rotation.y = sx * Math.PI / 2;
    m.position.set(sx * (W / 2 - 0.006 - PROF), yIni + Vh / 2, (zA + zB) / 2); g.add(m);
  }
  for (const sx of [-1, 1]) caja(g, 0.13, H - 2 * CY, 0.12, M.marco, sx * (W / 2 - 0.065), H / 2, -L / 2 + 0.06);
  caja(g, W - 2 * CX, 0.162, 0.12, M.marco, 0, 0.081, -L / 2 + 0.06);
  caja(g, W - 2 * CX, 0.12, 0.17, M.marco, 0, H - 0.06, -L / 2 + 0.085);
  const frente = new THREE.Mesh(lamina(W - 0.14, Vh, 0.3, 0.045, 0.08, 0.08), M.pintura);
  frente.rotation.y = Math.PI; frente.position.set(0, yIni + Vh / 2, -L / 2 + 0.105); g.add(frente);
  const techo = lamina(L - 0.24, W - 0.08, 0.26, 0.018, 0.13, 0.07);
  techo.rotateX(-Math.PI / 2); techo.rotateY(Math.PI / 2);
  const mTecho = new THREE.Mesh(techo, M.pintura); mTecho.position.set(0, H - 0.03, -0.005); g.add(mTecho);
  M.piso ??= new THREE.MeshStandardMaterial({ map: texPiso(12.2), roughness: 0.85 });
  caja(g, W - 0.1, 0.028, L - 0.26, M.piso, 0, 0.178, -0.005);
  const travs: THREE.BufferGeometry[] = [];
  for (let z = zIni + 0.15; z < zFin; z += 0.3) { const t = new THREE.BoxGeometry(W - 0.12, 0.11, 0.07); t.translate(0, 0.1, z); travs.push(t); }
  g.add(new THREE.Mesh(mergeGeometries(travs)!, M.marco));
  if (size !== '20') {   // túnel del cuello de ganso al frente del 40'
    caja(g, 1.03, 0.03, 3.15, M.marco, 0, 0.12, -L / 2 + 1.7);
    for (const sx of [-1, 1]) caja(g, 0.02, 0.12, 3.15, M.marco, sx * 0.52, 0.06, -L / 2 + 1.7);
  }

  // marco trasero, empaque y puertas
  for (const sx of [-1, 1]) caja(g, 0.16, H - 2 * CY, 0.14, M.marco, sx * (W / 2 - 0.08), H / 2, L / 2 - 0.07);
  caja(g, W - 2 * CX, 0.25, 0.16, M.marco, 0, H - 0.125, L / 2 - 0.08);
  caja(g, W - 2 * CX, 0.2, 0.16, M.marco, 0, 0.1, L / 2 - 0.08);
  for (const sx of [-1, 1]) caja(g, 0.03, H - 0.45, 0.03, C.hule, sx * (W / 2 - 0.175), 0.2 + (H - 0.45) / 2, L / 2 - 0.005);
  for (const y of [0.215, H - 0.265]) caja(g, W - 0.32, 0.03, 0.03, C.hule, 0, y, L / 2 - 0.005);
  const yP0 = 0.2, yP1 = H - 0.25, hP = yP1 - yP0, wH = (W - 0.32) / 2;
  const bisagras: [THREE.Group, number][] = [];
  const geoHoja = lamina(hP - 0.14, wH - 0.1, 0.36, 0.028, 0.18, 0.1); geoHoja.rotateZ(Math.PI / 2);
  for (const sx of [-1, 1]) {
    const pivote = new THREE.Group(); pivote.position.set(sx * (W / 2 + 0.04), yP0 + hP / 2, L / 2 + 0.035); g.add(pivote);
    const hoja = new THREE.Group(); hoja.position.x = -sx * (wH / 2 + 0.2); pivote.add(hoja);
    caja(hoja, 0.06, hP, 0.05, M.marco, sx * (wH / 2 - 0.03), 0, 0);
    caja(hoja, 0.06, hP, 0.05, M.marco, -sx * (wH / 2 - 0.03), 0, 0);
    caja(hoja, wH, 0.08, 0.05, M.marco, 0, hP / 2 - 0.04, 0);
    caja(hoja, wH, 0.08, 0.05, M.marco, 0, -hP / 2 + 0.04, 0);
    const lam = new THREE.Mesh(geoHoja, M.pintura); lam.position.z = -0.012; hoja.add(lam);
    for (const f of [0.08, 0.35, 0.65, 0.92]) {
      caja(hoja, 0.22, 0.07, 0.025, M.marco, sx * (wH / 2 + 0.1), -hP / 2 + f * hP, 0.02);
      cilindro(hoja, 0.024, 0.13, M.marco, sx * (wH / 2 + 0.2), -hP / 2 + f * hP, 0.0);
    }
    for (const f of [0.3, 0.78]) {
      const x = sx * (wH / 2 - f * wH);
      cilindro(hoja, 0.017, hP + 0.1, C.acero, x, 0, 0.06, 'y', 10);
      for (const fy of [-0.42, 0.05, 0.44]) caja(hoja, 0.07, 0.035, 0.05, C.acero, x, fy * hP, 0.045);
      for (const fy of [-0.5, 0.5]) caja(hoja, 0.05, 0.06, 0.05, C.acero, x, fy * (hP + 0.06), 0.06);
      const manija = new THREE.Group(); manija.position.set(x + sx * -0.06, -0.05 * hP, 0.075); hoja.add(manija);
      caja(manija, 0.03, 0.5, 0.025, C.acero, 0, -0.18, 0);
      caja(manija, 0.07, 0.03, 0.03, C.acero, sx * 0.03, 0.05, 0);
    }
    if (sx > 0) { const cod = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.23), matCodigo); cod.position.set(0, hP / 2 - 0.35, 0.03); hoja.add(cod); }
    else { const placa = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.16), M.placa); placa.position.set(0.1, 0.15, 0.03); hoja.add(placa); }
    bisagras.push([pivote, sx]);
  }
  for (const sx of [-1, 1]) {
    const cod = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.23), matCodigo);
    cod.position.set(sx * (W / 2 - 0.004), H - 0.42, L / 2 - 0.75); cod.rotation.y = sx * Math.PI / 2; g.add(cod);
  }
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  // la carga va en su propio grupo, dentro del contenedor
  const carga = new THREE.Group(); carga.name = 'carga'; g.add(carga);
  const puertas = (t: number) => { for (const [p, sx] of bisagras) p.rotation.y = sx * t * THREE.MathUtils.degToRad(260); };
  return { g, carga, puertas, L, W, H };
}
