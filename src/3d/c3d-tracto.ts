// Tractocamión PERCONSUR de cofre aerodinámico (estilo de los modelos actuales de largo recorrido):
// cofre y cabina con dormitorio modelados como un solo volumen continuo por secciones, parabrisas
// envolvente, faldones laterales, extensiones de cabina, faros LED y parrilla cromada.
// Origen en el perno rey (centro de la quinta rueda), frente hacia −z.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { azar, lienzo, fusion, rueda, comunes, V, uvMundoEn } from './c3d-comun';

export const Y_QUINTA = 1.15;   // cara superior de la quinta rueda

// ---------- volumen por secciones ----------
// Cada sección es un rectángulo redondeado en el plano x-y a una altura z: base yb, techo yt, medio ancho
// arriba w y abajo wb, radios de esquina arriba rt y abajo rb. Entre secciones se interpola con Catmull-Rom.
type Sec = { z: number; yb: number; yt: number; w: number; wb: number; rt: number; rb: number };
const CLAVES: (keyof Sec)[] = ['z', 'yb', 'yt', 'w', 'wb', 'rt', 'rb'];
function interpola(secs: Sec[], pasos: number): Sec[] {
  const out: Sec[] = [];
  const cr = (p0: number, p1: number, p2: number, p3: number, t: number) =>
    0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
  for (let i = 0; i < secs.length - 1; i++) {
    const a = secs[Math.max(0, i - 1)], b = secs[i], c = secs[i + 1], d = secs[Math.min(secs.length - 1, i + 2)];
    for (let k = 0; k < pasos; k++) {
      const t = k / pasos, s = {} as Sec;
      for (const key of CLAVES) s[key] = cr(a[key], b[key], c[key], d[key], t);
      out.push(s);
    }
  }
  out.push(secs[secs.length - 1]);
  return out;
}
// contorno de una sección: medio contorno de abajo al centro hasta arriba al centro, reflejado
function contorno(s: Sec): [number, number][] {
  const p: [number, number][] = [];
  const arco = (cx: number, cy: number, r: number, a0: number, a1: number, n: number) => { for (let k = 1; k <= n; k++) { const a = a0 + (a1 - a0) * k / n; p.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } };
  const lin = (x0: number, y0: number, x1: number, y1: number, n: number) => { for (let k = 1; k <= n; k++) p.push([x0 + (x1 - x0) * k / n, y0 + (y1 - y0) * k / n]); };
  p.push([0, s.yb]);
  lin(0, s.yb, s.wb - s.rb, s.yb, 4);
  arco(s.wb - s.rb, s.yb + s.rb, s.rb, -Math.PI / 2, 0, 4);
  lin(s.wb, s.yb + s.rb, s.w, s.yt - s.rt, 6);
  arco(s.w - s.rt, s.yt - s.rt, s.rt, 0, Math.PI / 2, 8);
  lin(s.w - s.rt, s.yt, 0, s.yt, 5);
  const mitad = p.slice(1, -1).map(([x, y]) => [-x, y] as [number, number]).reverse();
  return [...p, ...mitad];   // cerrado implícito: el último punto conecta con el primero
}
function volumen(secs: Sec[], pasos = 6) {
  const S = interpola(secs, pasos), anillos = S.map(contorno), n = anillos[0].length;
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  S.forEach((s, i) => anillos[i].forEach(([x, y], j) => { pos.push(x, y, s.z); uv.push(j / n, i / (S.length - 1)); }));
  for (let i = 0; i < S.length - 1; i++) for (let j = 0; j < n; j++) {
    const a = i * n + j, b = i * n + (j + 1) % n, c = (i + 1) * n + (j + 1) % n, d = (i + 1) * n + j;
    idx.push(a, b, d, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  // tapas planas en los extremos (geometría aparte para que no suavicen el borde)
  const tapas = [0, S.length - 1].map((i, k) => {
    const sh = new THREE.Shape(anillos[i].map(([x, y]) => new THREE.Vector2(x, y)));
    const t = new THREE.ShapeGeometry(sh); if (k === 0) t.rotateY(Math.PI);
    t.translate(0, 0, S[i].z); return t;
  });
  return { cuerpo: geo, tapas, secciones: S };
}
// medio ancho y techo de la sección en z (para colocar vidrios y piezas sobre la superficie)
function enZ(S: Sec[], z: number): Sec {
  for (let i = 0; i < S.length - 1; i++) if (z >= S[i].z && z <= S[i + 1].z) {
    const t = (z - S[i].z) / (S[i + 1].z - S[i].z), s = {} as Sec;
    for (const k of CLAVES) s[k] = S[i][k] + (S[i + 1][k] - S[i][k]) * t;
    return s;
  }
  return z < S[0].z ? S[0] : S[S.length - 1];
}
// parche de superficie sobre el techo-frente de las secciones (parabrisas envolvente), un poco hacia afuera
function parabrisas(S: Sec[], z0: number, z1: number, margen: number) {
  const nz = 14, nx = 28, pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= nz; i++) {
    const s = enZ(S, z0 + (z1 - z0) * i / nz), lim = s.w - margen;
    for (let j = 0; j <= nx; j++) {
      const x = -lim + 2 * lim * j / nx, ax = Math.abs(x), c = s.w - s.rt;
      const y = ax <= c ? s.yt : s.yt - s.rt + Math.sqrt(Math.max(0, s.rt * s.rt - (ax - c) * (ax - c)));
      const nxv = ax <= c ? 0 : Math.sign(x) * (ax - c) / s.rt, nyv = ax <= c ? 1 : (y - (s.yt - s.rt)) / s.rt;
      pos.push(x + nxv * 0.012, y + nyv * 0.012, s.z - 0.004); uv.push(j / nx, i / nz);
    }
  }
  for (let i = 0; i < nz; i++) for (let j = 0; j < nx; j++) { const a = i * (nx + 1) + j, b = a + 1, c = a + nx + 2, d = a + nx + 1; idx.push(a, d, b, b, d, c); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}

// ---------- texturas ----------
// "piel de naranja" de la laca: mapa de normales muy suave para la capa transparente
function texPielNaranja() {
  const N = 256, r = azar(77), h = new Float32Array(N * N);
  for (let k = 0; k < 700; k++) {
    const cx = r() * N, cy = r() * N, rad = 3 + r() * 7, a = (r() - 0.5) * 2;
    for (let y = -rad; y <= rad; y++) for (let x = -rad; x <= rad; x++) {
      const d = (x * x + y * y) / (rad * rad); if (d > 1) continue;
      const px = ((Math.round(cx + x) % N) + N) % N, py = ((Math.round(cy + y) % N) + N) % N;
      h[py * N + px] += a * (1 - d) * (1 - d);
    }
  }
  return lienzo(N, N, g => {
    const img = g.createImageData(N, N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const dx = h[y * N + (x + 1) % N] - h[y * N + (x - 1 + N) % N], dy = h[((y + 1) % N) * N + x] - h[((y - 1 + N) % N) * N + x];
      const nx = -dx * 0.6, ny = -dy * 0.6, nz = 1, l = Math.hypot(nx, ny, nz), o = (y * N + x) * 4;
      img.data[o] = (nx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[o + 2] = (nz / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }, [7, 7], false);
}
function texParrilla() {
  return lienzo(512, 256, g => {
    g.fillStyle = '#0c0d10'; g.fillRect(0, 0, 512, 256);
    for (let y = 10; y < 256; y += 22) {
      const grd = g.createLinearGradient(0, y, 0, y + 12); grd.addColorStop(0, '#f6f8fa'); grd.addColorStop(0.5, '#a9b0b8'); grd.addColorStop(1, '#5c636b');
      g.fillStyle = grd; g.fillRect(6, y, 500, 11);
    }
    g.fillStyle = 'rgba(0,0,0,0.6)'; for (let x = 64; x < 512; x += 128) g.fillRect(x, 0, 4, 256);
  });
}
function texLetrero(texto: string) {
  return lienzo(1024, 160, g => {
    g.fillStyle = '#ffffff'; g.font = '600 92px "Inter", Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    (g as any).letterSpacing = '18px'; g.fillText(texto, 512, 84);
  });
}

let MAT: ReturnType<typeof crear> | null = null;
function crear() {
  const piel = texPielNaranja();
  const laca = (color: number, metal: number, rough: number) => new THREE.MeshPhysicalMaterial({
    color, metalness: metal, roughness: rough, clearcoat: 1, clearcoatRoughness: 0.035, clearcoatNormalMap: piel, clearcoatNormalScale: new THREE.Vector2(0.07, 0.07),
  });
  return {
    pintura: laca(0x2443a3, 0.55, 0.3),
    plata: laca(0xaeb5bd, 0.8, 0.28),
    plastico: new THREE.MeshStandardMaterial({ color: 0x17181b, roughness: 0.72 }),
    forro: new THREE.MeshStandardMaterial({ color: 0x1b1c1f, roughness: 0.85, side: THREE.DoubleSide }),
    parrilla: new THREE.MeshStandardMaterial({ map: texParrilla(), metalness: 0.85, roughness: 0.22 }),
    faroVidrio: new THREE.MeshPhysicalMaterial({ color: 0x1a1f26, metalness: 0.3, roughness: 0.05, clearcoat: 1, transparent: true, opacity: 0.85 }),
    led: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xdfe9ff, emissiveIntensity: 1.6 }),
    cromo: new THREE.MeshStandardMaterial({ color: 0xe9edf2, metalness: 1, roughness: 0.12, emissive: 0x3a4250 }),
    espejo: new THREE.MeshStandardMaterial({ color: 0x9fb2c8, metalness: 1, roughness: 0.04 }),
    letrero: new THREE.MeshStandardMaterial({ map: texLetrero('PERCONSUR'), transparent: true, roughness: 0.3, polygonOffset: true, polygonOffsetFactor: -2 }),
    mangueraR: new THREE.MeshStandardMaterial({ color: 0xc8281f, roughness: 0.5 }),
    mangueraA: new THREE.MeshStandardMaterial({ color: 0x2f5fc8, roughness: 0.5 }),
  };
}
const mats = () => MAT ?? (MAT = crear());

// perfil en el plano (z, y) extruido a lo ancho (x), centrado en x
function perfil(dibuja: (s: THREE.Shape) => void, ancho: number, bisel = 0.03) {
  const s = new THREE.Shape(); dibuja(s);
  const geo = new THREE.ExtrudeGeometry(s, { depth: ancho - 2 * bisel, bevelEnabled: bisel > 0, bevelThickness: bisel, bevelSize: bisel, bevelSegments: 3, curveSegments: 24 });
  geo.rotateY(-Math.PI / 2); geo.translate((ancho - 2 * bisel) / 2, 0, 0);
  return geo;
}
const redondeada = (w: number, h: number, d: number, r: number) => new RoundedBoxGeometry(w, h, d, 4, r);

export function crearTracto() {
  const M = mats(), C = comunes();
  const g = new THREE.Group(); g.name = 'tractocamion';
  const f = fusion();

  // cofre: de la nariz al parabrisas, ensanchándose hacia atrás
  const cofre = volumen([
    { z: -6.33, yb: 1.0, yt: 1.44, w: 1.08, wb: 1.08, rt: 0.2, rb: 0.04 },
    { z: -6.16, yb: 1.0, yt: 1.66, w: 1.15, wb: 1.15, rt: 0.32, rb: 0.04 },
    { z: -5.75, yb: 1.0, yt: 1.85, w: 1.19, wb: 1.19, rt: 0.4, rb: 0.04 },
    { z: -5.15, yb: 1.0, yt: 1.99, w: 1.2, wb: 1.2, rt: 0.44, rb: 0.04 },
    { z: -4.55, yb: 1.0, yt: 2.07, w: 1.2, wb: 1.2, rt: 0.44, rb: 0.04 },
  ], 7);
  f.geo(M.pintura, cofre.cuerpo); for (const t of cofre.tapas) f.geo(M.pintura, t);
  // cabina con dormitorio: parabrisas inclinado y techo alto integrado
  const cab = volumen([
    { z: -4.62, yb: 1.12, yt: 2.09, w: 1.16, wb: 1.16, rt: 0.3, rb: 0.08 },
    { z: -4.4, yb: 1.12, yt: 2.2, w: 1.2, wb: 1.2, rt: 0.3, rb: 0.08 },
    { z: -3.95, yb: 1.12, yt: 2.93, w: 1.21, wb: 1.21, rt: 0.31, rb: 0.08 },
    { z: -3.6, yb: 1.12, yt: 3.32, w: 1.21, wb: 1.21, rt: 0.32, rb: 0.08 },
    { z: -3.05, yb: 1.12, yt: 3.62, w: 1.21, wb: 1.21, rt: 0.33, rb: 0.08 },
    { z: -2.45, yb: 1.12, yt: 3.88, w: 1.21, wb: 1.21, rt: 0.33, rb: 0.08 },
    { z: -1.85, yb: 1.12, yt: 3.97, w: 1.21, wb: 1.21, rt: 0.32, rb: 0.08 },
    { z: -1.42, yb: 1.12, yt: 3.97, w: 1.2, wb: 1.2, rt: 0.3, rb: 0.08 },
  ], 7);
  f.geo(M.pintura, cab.cuerpo); for (const t of cab.tapas) f.geo(M.pintura, t);
  f.geo(C.vidrio, parabrisas(cab.secciones, -4.37, -3.66, 0.1));
  // ventanas laterales y del dormitorio, contorno de puerta, manija y letrero
  // el borde superior de la ventana sigue el arranque de la curva del techo
  const borde: THREE.Vector2[] = [new THREE.Vector2(-3.98, 2.3)];
  for (let k = 0; k <= 8; k++) { const z = -3.98 + 0.76 * k / 8, s = enZ(cab.secciones, z); borde.push(new THREE.Vector2(z, Math.min(3.0, s.yt - s.rt - 0.05))); }
  borde.push(new THREE.Vector2(-3.22, 2.3));
  const ventana = new THREE.Shape(borde);
  for (const sx of [-1, 1]) {
    const v = new THREE.ShapeGeometry(ventana); v.rotateY(-Math.PI / 2); if (sx > 0) v.scale(-1, 1, 1);
    f.geo(C.vidrio, v, sx * 1.213, 0, 0);
    f.caja(C.vidrio, 0.01, 0.26, 0.5, sx * 1.212, 3.15, -2.05);
    f.caja(C.negroMate, 0.008, 1.95, 0.012, sx * 1.212, 2.12, -3.12);
    f.caja(C.negroMate, 0.008, 0.012, 1.24, sx * 1.205, 1.2, -3.74);
    f.caja(C.cromo, 0.03, 0.035, 0.18, sx * 1.225, 2.08, -3.4);
  }
  // salpicaderas delanteras con el arco de la llanta y forro interior negro
  for (const sx of [-1, 1]) {
    f.geo(M.pintura, perfil(s => {
      s.moveTo(-6.3, 0.88); s.lineTo(-6.3, 1.12); s.quadraticCurveTo(-5.6, 1.14, -4.6, 1.14); s.lineTo(-4.6, 0.62);
      s.absarc(-5.3, 0.52, 0.66, 0.15, Math.PI - 0.15, false); s.lineTo(-6.05, 0.62); s.quadraticCurveTo(-6.25, 0.66, -6.3, 0.88);
    }, 0.42, 0.04), sx * 0.99, 0, 0);
    const forro = new THREE.CylinderGeometry(0.63, 0.63, 0.32, 28, 1, true, 0.2, Math.PI - 0.4); forro.rotateZ(Math.PI / 2);
    f.geo(M.forro, forro, sx * 0.99, 0.52, -5.3);
  }
  // parrilla cromada, defensa aerodinámica con faros de niebla y faros LED que siguen el cofre
  f.geo(C.cromo, redondeada(1.34, 0.6, 0.12, 0.05), 0, 1.1, -6.29);
  f.geo(M.parrilla, new THREE.PlaneGeometry(1.18, 0.47).rotateY(Math.PI), 0, 1.1, -6.356);
  f.caja(M.plastico, 2.3, 0.32, 0.1, 0, 0.92, -6.27);   // faldón frontal detrás de la defensa
  f.geo(M.plata, redondeada(2.46, 0.48, 0.44, 0.12), 0, 0.64, -6.36);
  f.geo(M.plastico, redondeada(2.3, 0.14, 0.32, 0.05), 0, 0.34, -6.35);
  f.geo(M.plastico, redondeada(1.2, 0.12, 0.05, 0.03), 0, 0.62, -6.58);
  for (const sx of [-1, 1]) {
    // faro envolvente: carcasa negra, dos módulos LED y línea de luz diurna
    f.geo(M.plastico, redondeada(0.46, 0.22, 0.2, 0.06).rotateY(sx * 0.42), sx * 0.86, 1.22, -6.28);
    f.geo(M.faroVidrio, redondeada(0.47, 0.23, 0.205, 0.065).rotateY(sx * 0.42), sx * 0.86, 1.22, -6.285);
    for (const k of [0, 1]) f.geo(M.cromo, new THREE.CylinderGeometry(0.055, 0.06, 0.04, 20).rotateX(Math.PI / 2).rotateY(sx * 0.42), sx * (0.78 + k * 0.15), 1.24, -6.37 + k * 0.065);
    f.geo(M.led, redondeada(0.38, 0.022, 0.02, 0.01).rotateY(sx * 0.42), sx * 0.86, 1.13, -6.36);
    f.geo(C.ambar, redondeada(0.12, 0.08, 0.05, 0.02).rotateY(sx * 0.9), sx * 1.17, 1.16, -5.9);
    f.geo(M.led, new THREE.CircleGeometry(0.055, 16).rotateY(Math.PI), sx * 0.95, 0.66, -6.59);
  }
  // limpiadores, luces de gálibo en el techo y espejos aerodinámicos en las puertas
  for (const sx of [-1, 1]) { const a = enZ(cab.secciones, -4.31), b = enZ(cab.secciones, -4.16); f.viga(M.plastico, V(sx * 0.1, a.yt + 0.025, -4.31), V(sx * 0.85, b.yt + 0.025, -4.16), 0.025); }
  for (let k = 0; k < 5; k++) f.caja(C.ambar, 0.12, 0.04, 0.05, -0.5 + k * 0.25, 3.34, -3.56);
  for (const sx of [-1, 1]) {
    f.viga(M.plastico, V(sx * 1.2, 2.35, -4.0), V(sx * 1.42, 2.42, -4.05), 0.04);
    f.geo(M.pintura, redondeada(0.14, 0.48, 0.24, 0.05), sx * 1.48, 2.55, -4.05);
    f.geo(M.espejo, new THREE.PlaneGeometry(0.1, 0.42), sx * 1.48, 2.55, -3.925);
  }
  // faldones laterales con escalones, extensiones de la cabina y escape
  for (const sx of [-1, 1]) {
    f.geo(M.pintura, redondeada(0.07, 0.72, 3.5, 0.03), sx * 1.15, 0.78, -2.72);
    for (const y of [0.56, 0.86]) f.caja(C.diamante, 0.32, 0.03, 0.46, sx * 1.02, y, -3.95);
    f.caja(M.plastico, 0.08, 0.2, 0.5, sx * 1.16, 0.7, -3.95);
    f.geo(M.pintura, redondeada(0.06, 2.6, 0.42, 0.025), sx * 1.18, 2.52, -1.24);
  }
  f.cil(C.cromo, 0.065, 2.7, 0.92, 2.65, -1.12, 'y', 20);
  f.cil(C.negroMate, 0.075, 0.8, 0.92, 1.85, -1.12, 'y', 20);
  // bastidor, quinta rueda, plataforma, salpicaderas traseras y loderas
  for (const sx of [-1, 1]) { f.caja(C.negro, 0.012, 0.3, 7.5, sx * 0.42, 0.93, -2.5); f.caja(C.negro, 0.08, 0.012, 7.5, sx * 0.38, 1.08, -2.5); f.caja(C.negro, 0.08, 0.012, 7.5, sx * 0.38, 0.78, -2.5); }
  for (const z of [-6.0, -5.2, -3.6, -1.8, -0.7, 0.5, 1.2]) f.caja(C.negro, 0.84, 0.18, 0.08, 0, 0.93, z);
  f.caja(C.negro, 1.05, 0.07, 1.0, 0, Y_QUINTA - 0.035, 0.05);
  f.caja(C.negroMate, 0.12, 0.072, 0.5, 0, Y_QUINTA - 0.034, 0.32);
  for (const sx of [-1, 1]) f.caja(C.negro, 0.12, 0.1, 0.5, sx * 0.4, 1.05, 0.05);
  f.caja(C.diamante, 0.9, 0.03, 0.7, 0, 1.1, -1.05);
  for (const sx of [-1, 1]) {
    for (const z of [-0.35, 0.95]) f.geo(M.plastico, perfil(s => { s.absarc(z, 0.52, 0.6, Math.PI * 0.18, Math.PI * 0.82, false); s.absarc(z, 0.52, 0.565, Math.PI * 0.82, Math.PI * 0.18, true); }, 0.6, 0.01), sx * 0.88, 0, 0);
    f.caja(M.plastico, 0.6, 0.62, 0.012, sx * 0.88, 0.52, 1.66);
  }
  f.cerrar(g);
  uvMundoEn(g, [M.pintura, M.plata]);
  // letreros PERCONSUR en la puerta y en el dormitorio
  for (const sx of [-1, 1]) {
    for (const [ancho, alto, y, z] of [[0.95, 0.15, 1.78, -3.72], [1.5, 0.235, 2.72, -2.15]] as const) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(ancho, alto), M.letrero);
      l.position.set(sx * 1.216, y, z); l.rotation.y = sx * Math.PI / 2; g.add(l);
    }
  }
  // mangueras de aire (roja y azul) de la cabina al chasis
  for (const [sx, m] of [[0.15, M.mangueraR], [-0.15, M.mangueraA]] as const) {
    const curva = new THREE.CatmullRomCurve3([V(sx, 2.3, -1.4), V(sx * 1.3, 1.75, -1.25), V(sx, 1.38, -1.0), V(sx * 0.8, 1.3, -0.9)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curva, 24, 0.018, 6), m));
  }
  // ruedas: direccional y tándem de tracción con llantas dobles, rines de aluminio pulido
  const ruedas: THREE.Object3D[] = [];
  const pon = (x: number, z: number) => { const r = rueda(0.52, 0.28, true); r.position.set(x, 0.52, z); g.add(r); ruedas.push(r); };
  for (const sx of [-1, 1]) { pon(sx * 1.05, -5.3); for (const z of [-0.35, 0.95]) { pon(sx * 1.03, z); pon(sx * 0.73, z); } }
  for (const z of [-5.3, -0.35, 0.95]) { const e = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.9, 12), C.negro); e.rotation.z = Math.PI / 2; e.position.set(0, 0.52, z); g.add(e); }
  g.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { g, ruedas };
}
