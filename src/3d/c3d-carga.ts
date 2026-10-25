// Carga dentro del contenedor: cajas de cartón, tarimas emplayadas, costales de rafia o tambos de 200 L.
// Texturas generadas en canvas con semillas fijas; todo instanciado para que el visor siga ligero.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { azar, lienzo } from './c3d-comun';

export type Carga = 'cajas' | 'tarimas' | 'costales' | 'tambos' | 'vacio';

// ---------- texturas ----------
function fibras(g: CanvasRenderingContext2D, w: number, h: number, r: () => number, n: number, claro: string, oscuro: string) {
  for (let i = 0; i < n; i++) { g.fillStyle = r() < 0.5 ? oscuro : claro; g.fillRect(r() * w, r() * h, 1 + r() * 22, 1); }
}
function cinta(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  g.fillStyle = '#d6b27a'; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,250,235,0.38)'; g.fillRect(x + w * 0.12, y, w * 0.1, h);
  g.fillStyle = 'rgba(90,60,25,0.28)'; g.fillRect(x, y, 2, h); g.fillRect(x + w - 2, y, 2, h);
}
function flechas(g: CanvasRenderingContext2D, x: number, y: number, s: number) {
  g.fillStyle = 'rgba(52,34,20,0.85)';
  for (const dx of [0, s * 0.9]) {
    g.beginPath(); g.moveTo(x + dx, y); g.lineTo(x + dx + s * 0.35, y + s * 0.4); g.lineTo(x + dx + s * 0.12, y + s * 0.4);
    g.lineTo(x + dx + s * 0.12, y + s); g.lineTo(x + dx - s * 0.12, y + s); g.lineTo(x + dx - s * 0.12, y + s * 0.4); g.lineTo(x + dx - s * 0.35, y + s * 0.4); g.closePath(); g.fill();
  }
  g.fillRect(x - s * 0.4, y + s * 1.1, s * 1.7, s * 0.1);
}
function texCarton(cara: 'arriba' | 'frente' | 'lado') {
  const r = azar(cara === 'arriba' ? 11 : cara === 'frente' ? 12 : 13);
  return lienzo(512, 512, g => {
    const base = g.createLinearGradient(0, 0, 512, 512); base.addColorStop(0, '#c9a06c'); base.addColorStop(1, '#bd9462');
    g.fillStyle = base; g.fillRect(0, 0, 512, 512);
    fibras(g, 512, 512, r, 1600, 'rgba(255,235,200,0.06)', 'rgba(90,60,30,0.07)');
    for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(90,60,30,${0.03 + r() * 0.05})`; g.beginPath(); g.arc(r() * 512, r() * 512, 6 + r() * 30, 0, Math.PI * 2); g.fill(); }
    g.strokeStyle = 'rgba(80,50,20,0.4)'; g.lineWidth = 5; g.strokeRect(2.5, 2.5, 507, 507);
    g.fillStyle = 'rgba(255,240,215,0.18)'; g.fillRect(6, 6, 500, 3);
    if (cara === 'arriba') { g.fillStyle = 'rgba(70,45,20,0.45)'; g.fillRect(253, 0, 6, 512); cinta(g, 212, 0, 88, 512); }
    else if (cara === 'frente') {
      cinta(g, 212, 0, 88, 120);
      g.fillStyle = '#f3f0e9'; g.fillRect(56, 250, 230, 150);
      g.fillStyle = 'rgba(30,30,30,0.8)'; for (let k = 0; k < 4; k++) g.fillRect(76, 278 + k * 26, 140 + r() * 50, 9);
      for (let k = 0; k < 36; k++) g.fillRect(76 + k * 5, 370, 1 + (k % 3), 18);
      flechas(g, 376, 270, 70);
    } else {
      flechas(g, 80, 70, 80);
      g.fillStyle = 'rgba(52,34,20,0.8)'; for (let k = 0; k < 3; k++) g.fillRect(80, 300 + k * 34, 240 - k * 52, 13);
      g.strokeStyle = 'rgba(52,34,20,0.75)'; g.lineWidth = 6; g.beginPath(); g.arc(400, 400, 48, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.moveTo(380, 390); g.lineTo(400, 370); g.lineTo(420, 390); g.stroke();
    }
  });
}
// pino de tarima: tablas con veta, nudos y cantos más oscuros
function texMadera() {
  const r = azar(31);
  return lienzo(512, 128, g => {
    g.fillStyle = '#c8a16a'; g.fillRect(0, 0, 512, 128);
    for (let k = 0; k < 70; k++) {
      const y0 = r() * 128, a = 2 + r() * 5, f = 0.01 + r() * 0.02, ph = r() * 6;
      g.strokeStyle = `rgba(${110 + r() * 40},${70 + r() * 30},${30 + r() * 20},${0.12 + r() * 0.2})`; g.lineWidth = 0.6 + r() * 1.6;
      g.beginPath(); for (let x = 0; x <= 512; x += 8) { const y = y0 + Math.sin(x * f + ph) * a; x ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke();
    }
    for (let k = 0; k < 4; k++) {
      const x = r() * 512, y = r() * 128, rad = 4 + r() * 6;
      const grd = g.createRadialGradient(x, y, 1, x, y, rad * 2); grd.addColorStop(0, 'rgba(80,45,15,0.85)'); grd.addColorStop(1, 'rgba(80,45,15,0)');
      g.fillStyle = grd; g.beginPath(); g.ellipse(x, y, rad * 2.2, rad, 0, 0, Math.PI * 2); g.fill();
    }
    g.fillStyle = 'rgba(70,40,15,0.35)'; g.fillRect(0, 0, 512, 3); g.fillRect(0, 125, 512, 3);
  });
}
// costado de una tarima armada: varias cajas por cara, con cintas y etiquetas
function texBloque() {
  const r = azar(41);
  return lienzo(512, 512, g => {
    for (let fy = 0; fy < 3; fy++) for (let fx = 0; fx < 2; fx++) {
      const x = fx * 256, y = fy * 171;
      g.fillStyle = `hsl(32,${36 + r() * 6}%,${57 + r() * 6}%)`; g.fillRect(x, y, 256, 171);
      fibras(g, 256, 171, r, 300, 'rgba(255,235,200,0.06)', 'rgba(90,60,30,0.07)');
      g.strokeStyle = 'rgba(70,45,20,0.55)'; g.lineWidth = 4; g.strokeRect(x + 2, y + 2, 252, 167);
      cinta(g, x + 108, y, 40, 30);
      g.fillStyle = '#f2efe8'; g.fillRect(x + 30, y + 80, 90, 56);
      g.fillStyle = 'rgba(30,30,30,0.75)'; for (let k = 0; k < 3; k++) g.fillRect(x + 40, y + 92 + k * 13, 50 + r() * 20, 5);
    }
  });
}
function texFilm() {
  const r = azar(51);
  return lienzo(256, 256, g => {
    g.fillStyle = '#5a5a5a'; g.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 4) { g.fillStyle = `rgba(255,255,255,${0.15 + r() * 0.5})`; g.fillRect(0, y + r() * 3, 256, 1 + r() * 3); }
    for (let k = 0; k < 18; k++) { g.fillStyle = `rgba(255,255,255,${0.3 + r() * 0.4})`; g.fillRect(0, r() * 256, 256, 6 + r() * 10); }
  }, [1, 1], false);
}
// rafia de polipropileno tejida, con banda azul y leyenda impresa
function texRafia(impreso: boolean) {
  const r = azar(impreso ? 61 : 62);
  return lienzo(512, 512, g => {
    g.fillStyle = '#ebe7dd'; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 512; i += 4) {
      g.fillStyle = `rgba(255,255,255,${0.35 + r() * 0.2})`; g.fillRect(i, 0, 2, 512);
      g.fillStyle = `rgba(120,115,100,${0.12 + r() * 0.08})`; g.fillRect(0, i + 2, 512, 1.5);
    }
    for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(150,140,120,${r() * 0.12})`; g.fillRect(r() * 512, r() * 512, 2 + r() * 30, 1); }
    if (impreso) {
      g.fillStyle = 'rgba(31,74,150,0.85)'; g.fillRect(0, 120, 512, 34); g.fillRect(0, 358, 512, 34);
      g.fillStyle = 'rgba(31,74,150,0.9)'; g.font = '800 92px Arial'; g.textAlign = 'center'; g.fillText('50 KG', 256, 290);
      g.font = '700 30px Arial'; g.fillText('CONTENIDO NETO', 256, 210);
    }
  });
}
// tambo de acero pintado: costado con raspones y etiqueta; tapa con bocas y aros
function texTamboLado() {
  const r = azar(71);
  return lienzo(512, 256, g => {
    g.fillStyle = '#1f4f9e'; g.fillRect(0, 0, 512, 256);
    for (let i = 0; i < 500; i++) { g.fillStyle = r() < 0.5 ? `rgba(255,255,255,${r() * 0.06})` : `rgba(0,0,20,${r() * 0.08})`; g.fillRect(r() * 512, r() * 256, 1 + r() * 20, 1 + r() * 2); }
    for (let i = 0; i < 40; i++) { g.strokeStyle = `rgba(200,200,205,${0.2 + r() * 0.3})`; g.lineWidth = 1; g.beginPath(); const x = r() * 512, y = r() * 256; g.moveTo(x, y); g.lineTo(x + 6 + r() * 26, y + (r() - 0.5) * 4); g.stroke(); }
    g.fillStyle = '#f1f1ec'; g.fillRect(150, 92, 92, 70);
    g.fillStyle = 'rgba(30,30,30,0.8)'; for (let k = 0; k < 4; k++) g.fillRect(160, 104 + k * 13, 50 + r() * 22, 5);
    const sombra = g.createLinearGradient(0, 0, 0, 256); sombra.addColorStop(0, 'rgba(0,0,0,0.15)'); sombra.addColorStop(0.1, 'rgba(0,0,0,0)'); sombra.addColorStop(0.9, 'rgba(0,0,0,0)'); sombra.addColorStop(1, 'rgba(0,0,0,0.2)');
    g.fillStyle = sombra; g.fillRect(0, 0, 512, 256);
  });
}
function texTamboTapa() {
  return lienzo(256, 256, g => {
    g.fillStyle = '#21529f'; g.fillRect(0, 0, 256, 256);
    g.strokeStyle = 'rgba(0,0,0,0.3)'; g.lineWidth = 4;
    for (const rad of [118, 100, 70]) { g.beginPath(); g.arc(128, 128, rad, 0, Math.PI * 2); g.stroke(); }
    g.strokeStyle = 'rgba(255,255,255,0.18)'; g.lineWidth = 2;
    for (const rad of [114, 96]) { g.beginPath(); g.arc(128, 128, rad, 0, Math.PI * 2); g.stroke(); }
    for (const [x, y, rad] of [[70, 128, 15], [186, 128, 10]] as const) {
      g.fillStyle = '#c9ccd0'; g.beginPath(); g.arc(x, y, rad + 5, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#5a5e64'; g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
    }
  });
}

let MAT: ReturnType<typeof crear> | null = null;
function crear() {
  const st = (map: THREE.Texture, rough = 0.9) => new THREE.MeshStandardMaterial({ map, roughness: rough });
  const caras = { arriba: texCarton('arriba'), frente: texCarton('frente'), lado: texCarton('lado') };
  const bloque = texBloque(), rafia = texRafia(true), rafiaLisa = texRafia(false);
  return {
    carton: [st(caras.lado), st(caras.lado), st(caras.arriba), st(caras.lado), st(caras.frente), st(caras.frente)],
    madera: st(texMadera(), 0.85),
    bloque: [st(bloque), st(bloque), st(caras.arriba), st(bloque), st(bloque), st(bloque)],
    film: new THREE.MeshPhysicalMaterial({ color: 0xf4f6f8, transparent: true, opacity: 0.55, alphaMap: texFilm(), roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.1, depthWrite: false, side: THREE.DoubleSide }),
    rafia: [st(rafiaLisa, 0.8), st(rafiaLisa, 0.8), st(rafia, 0.8), st(rafia, 0.8), st(rafiaLisa, 0.8), st(rafiaLisa, 0.8)],
    tambo: [new THREE.MeshStandardMaterial({ map: texTamboLado(), roughness: 0.45, metalness: 0.35 }), new THREE.MeshStandardMaterial({ map: texTamboTapa(), roughness: 0.45, metalness: 0.35 }), new THREE.MeshStandardMaterial({ color: 0x1b4590, roughness: 0.5, metalness: 0.35 })],
    aro: new THREE.MeshStandardMaterial({ color: 0x1d4b98, roughness: 0.4, metalness: 0.45 }),
  };
}
const mats = () => MAT ?? (MAT = crear());

// tarima de 1.0 × 1.2 m (o cuadrada): tablas superiores, tacos y patines inferiores en una sola geometría
function geoTarima(ax: number, lz: number) {
  const gs: THREE.BufferGeometry[] = [];
  const b = (w: number, h: number, d: number, x: number, y: number, z: number) => { const t = new THREE.BoxGeometry(w, h, d); t.translate(x, y, z); gs.push(t); };
  for (let i = 0; i < 7; i++) b(0.1, 0.022, lz, -ax / 2 + 0.05 + i * (ax - 0.1) / 6, 0.133, 0);
  for (const z of [-lz / 2 + 0.05, 0, lz / 2 - 0.05]) b(ax, 0.022, 0.1, 0, 0.111, z);
  for (const x of [-ax / 2 + 0.05, 0, ax / 2 - 0.05]) for (const z of [-lz / 2 + 0.07, 0, lz / 2 - 0.07]) b(0.1, 0.078, 0.14, x, 0.061, z);
  for (const x of [-ax / 2 + 0.05, 0, ax / 2 - 0.05]) b(0.1, 0.022, lz, x, 0.011, 0);
  return mergeGeometries(gs)!;
}
// costal: caja redondeada que se adelgaza hacia orillas y esquinas, como un costal lleno
function geoCostal(ax: number, alto: number, lz: number) {
  const geo = new RoundedBoxGeometry(ax, alto, lz, 3, 0.07);
  const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    const u = p.getX(i) / (ax / 2), w = p.getZ(i) / (lz / 2);
    p.setY(i, p.getY(i) * (0.62 + 0.38 * (1 - u * u * 0.8) * (1 - w * w * 0.7)));
  }
  geo.computeVertexNormals();
  return geo;
}
function geoAros(r: number, h: number) {
  const gs: THREE.BufferGeometry[] = [];
  for (const [y, rr, t] of [[h / 2 - 0.012, r - 0.004, 0.014], [-h / 2 + 0.012, r - 0.004, 0.014], [h * 0.18, r + 0.002, 0.012], [-h * 0.18, r + 0.002, 0.012]] as const) {
    const tor = new THREE.TorusGeometry(rr, t, 6, 40); tor.rotateX(Math.PI / 2); tor.translate(0, y, 0); gs.push(tor);
  }
  return mergeGeometries(gs)!;
}

type Pieza = { x: number; y: number; z: number; ry?: number; sy?: number; fondo: number };
function instanciar(geo: THREE.BufferGeometry, mat: THREE.Material | THREE.Material[], piezas: Pieza[], sombra = false) {
  const m = new THREE.InstancedMesh(geo, mat, piezas.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), col = new THREE.Color();
  piezas.forEach((p, i) => {
    m4.compose(new THREE.Vector3(p.x, p.y, p.z), q.setFromEuler(e.set(0, p.ry ?? 0, 0)), new THREE.Vector3(1, p.sy ?? 1, 1));
    m.setMatrixAt(i, m4);
    const f = p.fondo; m.setColorAt(i, col.setRGB(f, f, f));   // más oscuro hacia el fondo del contenedor
  });
  m.castShadow = sombra; m.receiveShadow = false;
  return m;
}

// Llena la carga del contenedor (coordenadas del contenedor: piso en y ≈ 0.19, puertas hacia +z).
export function crearCarga(tipo: Carga, L: number, W: number, H: number): THREE.Group {
  const g = new THREE.Group(); g.name = `carga-${tipo}`;
  if (tipo === 'vacio') return g;
  const M = mats(), r = azar(17), piso = 0.192;
  const z0 = -L / 2 + 0.16, alto = H - 0.45;
  const fondo = (z: number, zFin: number) => 0.55 + 0.45 * Math.pow(Math.max(0, (z - z0) / (zFin - z0)), 1.4);

  if (tipo === 'cajas') {
    const BX = 0.56, BY = 0.45, BZ = 0.42, capas = Math.floor(alto / BY);
    const zFin = L / 2 - (L < 7 ? 0.75 : 1.05), filas = Math.floor((zFin - z0) / (BZ + 0.01));
    const piezas: Pieza[] = [];
    for (let f = 0; f < filas; f++) {
      const n = f < filas - 2 ? capas : f === filas - 2 ? capas - 2 : 2;
      for (let c = 0; c < 4; c++) for (let k = 0; k < n; k++) {
        if (f === filas - 1 && c === 3 && k === 1) continue;
        const z = z0 + BZ / 2 + f * (BZ + 0.01) + (r() - 0.5) * 0.02;
        piezas.push({ x: -1.5 * (BX + 0.012) + c * (BX + 0.012) + (r() - 0.5) * 0.02, y: piso + BY / 2 + k * (BY + 0.004), z, ry: (r() - 0.5) * 0.03, sy: 1 - r() * 0.015, fondo: fondo(z, zFin) });
      }
    }
    g.add(instanciar(new THREE.BoxGeometry(BX, BY, BZ), M.carton, piezas));
  }

  if (tipo === 'tarimas') {
    const PX = 1.0, PZ = 1.2, hCarga = Math.min(1.75, alto - 0.35), zFin = L / 2 - 0.85;
    const filas = Math.floor((zFin - z0) / (PZ + 0.03));
    const tar: Pieza[] = [], car: Pieza[] = [];
    for (let f = 0; f < filas; f++) for (const x of [-0.56, 0.56]) {
      if (f === filas - 1 && x > 0) continue;
      const z = z0 + PZ / 2 + f * (PZ + 0.03) + (r() - 0.5) * 0.03, xx = x + (r() - 0.5) * 0.03, h = hCarga * (0.86 + r() * 0.14), fo = fondo(z, zFin);
      tar.push({ x: xx, y: piso, z, ry: (r() - 0.5) * 0.02, fondo: fo });
      car.push({ x: xx, y: piso + 0.144 + h / 2, z, sy: h, fondo: fo });
    }
    g.add(instanciar(geoTarima(PX, PZ), M.madera, tar));
    g.add(instanciar(new THREE.BoxGeometry(PX - 0.02, 1, PZ - 0.02), M.bloque, car));
    const film = instanciar(new THREE.BoxGeometry(PX + 0.01, 1.02, PZ + 0.01), M.film, car); film.renderOrder = 2; g.add(film);
  }

  if (tipo === 'costales') {
    const CX = 0.53, CY = 0.17, CZ = 0.9, capas = Math.min(10, Math.floor((alto - 0.2) / CY)), zFin = L / 2 - (L < 7 ? 0.8 : 1.0);
    const filas = Math.floor((zFin - z0) / CZ) - 1;
    const piezas: Pieza[] = [];
    for (let k = 0; k < capas; k++) for (let f = 0; f < filas + (k % 2 ? 0 : 1); f++) for (let c = 0; c < 4; c++) {
      const z = z0 + CZ / 2 + f * CZ + (k % 2 ? CZ / 2 : 0) + (r() - 0.5) * 0.04;
      if (z > zFin - CZ / 2 - (k > capas - 4 ? 0.9 : 0)) continue;   // las últimas capas, escalonadas hacia la puerta
      piezas.push({ x: -1.5 * (CX + 0.02) + c * (CX + 0.02) + (r() - 0.5) * 0.04, y: piso + CY / 2 + k * (CY * 0.92), z, ry: (r() - 0.5) * 0.08, fondo: fondo(z, zFin) * (0.92 + r() * 0.08) });
    }
    g.add(instanciar(geoCostal(CX, CY, CZ), M.rafia, piezas));
  }

  if (tipo === 'tambos') {
    const R = 0.286, HT = 0.88, P = 1.15, niveles = alto >= 2.1 ? 2 : 1, zFin = L / 2 - 1.1;
    const filas = Math.floor((zFin - z0) / (P + 0.03));
    const tar: Pieza[] = [], tam: Pieza[] = [];
    for (let f = 0; f < filas; f++) for (const x of [-0.585, 0.585]) for (let n = 0; n < niveles; n++) {
      if (f === filas - 1 && n === 1) continue;
      const z = z0 + P / 2 + f * (P + 0.03), y0 = piso + n * (0.144 + HT + 0.005), fo = fondo(z, zFin);
      tar.push({ x, y: y0, z, fondo: fo });
      for (const dx of [-0.29, 0.29]) for (const dz of [-0.29, 0.29]) tam.push({ x: x + dx + (r() - 0.5) * 0.01, y: y0 + 0.144 + HT / 2, z: z + dz + (r() - 0.5) * 0.01, ry: r() * Math.PI * 2, fondo: fo });
    }
    g.add(instanciar(geoTarima(P, P), M.madera, tar));
    const cuerpo = new THREE.CylinderGeometry(R, R, HT, 40, 1);
    g.add(instanciar(cuerpo, M.tambo, tam));
    g.add(instanciar(geoAros(R, HT), M.aro, tam));
  }
  return g;
}
