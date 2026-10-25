// Visor 3D de la División Campo: remolque tolva y remolque jaula, arrastrar para girar y cargar la cosecha.
// Geometría procedimental (sin archivos externos); comparte luces, entorno y renderizador con el visor del contenedor.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as C40 from './container40';

type Tipo = 'tolva' | 'jaula';
const pick = (mod: any, test: (k: string) => boolean) => mod[Object.keys(mod).find(test)!];

// ---------- materiales ----------
const M = {
  alu: new THREE.MeshStandardMaterial({ color: 0xe9ecef, metalness: 0.55, roughness: 0.32 }),
  aluOsc: new THREE.MeshStandardMaterial({ color: 0xc3c9d1, metalness: 0.6, roughness: 0.35 }),
  marco: new THREE.MeshStandardMaterial({ color: 0x2b2e33, metalness: 0.4, roughness: 0.6 }),
  llanta: new THREE.MeshStandardMaterial({ color: 0x1b1c1f, roughness: 0.92 }),
  rin: new THREE.MeshStandardMaterial({ color: 0xd3d8de, metalness: 0.85, roughness: 0.22 }),
  lona: new THREE.MeshStandardMaterial({ color: 0x3e434b, roughness: 0.85, side: THREE.DoubleSide }),
  azul: new THREE.MeshStandardMaterial({ color: 0x2f4ca8, metalness: 0.3, roughness: 0.45 }),
  naranja: new THREE.MeshStandardMaterial({ color: 0xf26f22, roughness: 0.5 }),
  // tablas de madera pintadas de blanco: tres tonos apenas distintos para que se lea cada tabla
  tablas: [0xf1f3f5, 0xe6e9ed, 0xeceff2].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75 })),
  poste: new THREE.MeshStandardMaterial({ color: 0xf6f7f8, metalness: 0.3, roughness: 0.4 }),
  rojo: new THREE.MeshStandardMaterial({ color: 0xd7261e, emissive: 0x5a0a06, roughness: 0.4 }),
};

function caja(g: THREE.Group, w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z); g.add(mesh); return mesh;
}
// tronco de pirámide: rectángulo superior (tw × tl) en yt, inferior (bw × bl) en yb, centrado en z
function tronco(tw: number, tl: number, yt: number, bw: number, bl: number, yb: number, z: number): THREE.BufferGeometry {
  const v = [
    [-tw / 2, yt, z - tl / 2], [tw / 2, yt, z - tl / 2], [tw / 2, yt, z + tl / 2], [-tw / 2, yt, z + tl / 2],
    [-bw / 2, yb, z - bl / 2], [bw / 2, yb, z - bl / 2], [bw / 2, yb, z + bl / 2], [-bw / 2, yb, z + bl / 2],
  ];
  const caras = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]];
  const pos: number[] = [];
  for (const [a, b, c, d] of caras) for (const i of [a, b, c, a, c, d]) pos.push(...v[i]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  return geo;
}
// arco extruido a lo largo de z (lona y montón de grano)
function arco(ancho: number, alto: number, largo: number, grosor: number): THREE.BufferGeometry {
  const s = new THREE.Shape();
  s.moveTo(-ancho / 2, 0); s.quadraticCurveTo(0, alto * 2, ancho / 2, 0);
  if (grosor > 0) { s.lineTo(ancho / 2 - grosor, 0); s.quadraticCurveTo(0, alto * 2 - grosor * 2, -ancho / 2 + grosor, 0); }
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: largo, bevelEnabled: false, curveSegments: 20 });
  geo.translate(0, 0, -largo);   // de z = 0 hacia atrás: la lona se enrolla hacia el frente
  return geo;
}
function ejes(g: THREE.Group, zs: number[]) {
  const geoL = new THREE.CylinderGeometry(0.5, 0.5, 0.27, 32); geoL.rotateZ(Math.PI / 2);
  const geoR = new THREE.CylinderGeometry(0.29, 0.29, 0.285, 24); geoR.rotateZ(Math.PI / 2);
  const geoC = new THREE.CylinderGeometry(0.09, 0.09, 0.3, 12); geoC.rotateZ(Math.PI / 2);
  for (const z of zs) {
    caja(g, 2.1, 0.12, 0.14, M.marco, 0, 0.5, z);
    for (const x of [-1.0, -0.7, 0.7, 1.0]) {
      const l = new THREE.Mesh(geoL, M.llanta); l.position.set(x, 0.5, z); g.add(l);
      if (Math.abs(x) === 1.0) {
        const r = new THREE.Mesh(geoR, M.rin); r.position.set(x, 0.5, z); g.add(r);
        const c = new THREE.Mesh(geoC, M.marco); c.position.set(x + Math.sign(x) * 0.01, 0.5, z); g.add(c);
      }
    }
  }
}
function patas(g: THREE.Group, z: number, yTop: number) {
  for (const x of [-0.85, 0.85]) {
    caja(g, 0.12, yTop - 0.12, 0.12, M.marco, x, (yTop + 0.12) / 2, z);
    caja(g, 0.3, 0.05, 0.3, M.marco, x, 0.06, z);
  }
  caja(g, 1.7, 0.06, 0.06, M.marco, 0, yTop * 0.55, z);
}


// ---------- carga: texturas en canvas, ruido y geometría con semillas fijas ----------
function azar(semilla: number) { let s = semilla; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
// ruido de valor 2D suave (determinista), para que la superficie no sea una forma geométrica perfecta
function ruido(semilla: number) {
  const r = azar(semilla), T = Array.from({ length: 256 }, () => r());
  const h = (i: number, j: number) => T[(i * 73 + j * 151) & 255];
  const sm = (t: number) => t * t * (3 - 2 * t);
  return (x: number, y: number) => {
    const i = Math.floor(x), j = Math.floor(y), fx = sm(x - i), fy = sm(y - j);
    const a = h(i, j), b = h(i + 1, j), c = h(i, j + 1), d = h(i + 1, j + 1);
    return (a + (b - a) * fx) + ((c + (d - c) * fx) - (a + (b - a) * fx)) * fy;
  };
}
function lienzo(w: number, h: number, pinta: (g: CanvasRenderingContext2D) => void, repetir: [number, number]) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  pinta(cv.getContext('2d')!);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(...repetir);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  return tex;
}
// granos de maíz vistos de cerca: dientes amarillo-anaranjados con brillo y sombra entre granos
function texGrano() {
  const r = azar(11);
  return lienzo(256, 256, g => {
    g.fillStyle = '#5e3606'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1500; i++) {
      const x = r() * 256, y = r() * 256, a = r() * Math.PI, rx = 3.2 + r() * 1.6, ry = 2.4 + r() * 1.2;
      const tono = 34 + r() * 10, luz = 40 + r() * 14;
      for (const [dx, dy] of [[0, 0], [256, 0], [-256, 0], [0, 256], [0, -256]]) {
        g.save(); g.translate(x + dx, y + dy); g.rotate(a);
        g.fillStyle = `hsl(${tono},92%,${luz}%)`; g.beginPath(); g.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2); g.fill();
        g.fillStyle = 'rgba(255,232,170,.38)'; g.beginPath(); g.ellipse(-rx * .3, -ry * .3, rx * .35, ry * .3, 0, 0, Math.PI * 2); g.fill();
        g.restore();
      }
    }
  }, [5, 24]);
}
// grano de la mazorca: hileras de granos alrededor (u) y a lo largo (v)
function texMazorca() {
  const r = azar(23), COL = 14, FIL = 30, W = 224, H = 480, cw = W / COL, ch = H / FIL;
  return lienzo(W, H, g => {
    g.fillStyle = '#6a3c08'; g.fillRect(0, 0, W, H);
    for (let j = 0; j < FIL; j++) for (let i = 0; i < COL; i++) {
      const x = i * cw + (j % 2) * cw * .5, y = j * ch, luz = 44 + r() * 10, tono = 37 + r() * 7;
      const grd = g.createLinearGradient(x, y, x + cw, y + ch);
      grd.addColorStop(0, `hsl(${tono},95%,${luz + 16}%)`); grd.addColorStop(1, `hsl(${tono - 5},90%,${luz - 10}%)`);
      g.fillStyle = grd;
      g.beginPath(); g.roundRect(x + 1.2, y + 1.2, cw - 2.4, ch - 2.4, 4); g.fill();
      if (x + cw > W) { g.beginPath(); g.roundRect(x - W + 1.2, y + 1.2, cw - 2.4, ch - 2.4, 4); g.fill(); }
    }
  }, [1, 1]);
}
// montón: rejilla desplazada; alto máximo al centro, cae hacia las paredes y se redondea en los extremos
function monton(ancho: number, largo: number, alto: number, semilla: number, nx = 40, nz = 150) {
  const geo = new THREE.PlaneGeometry(ancho, largo, nx, nz); geo.rotateX(-Math.PI / 2);
  const n = ruido(semilla), pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const ax = Math.min(1, Math.abs(x) / (ancho / 2)), ez = Math.min(1, (largo / 2 - Math.abs(z)) / 1.6);
    const forma = Math.pow(Math.cos(ax * Math.PI / 2), 0.9) * (ez * ez * (3 - 2 * ez));
    const grumos = (n(x * 2.2, z * 2.2) - .5) * .08 + (n(x * 7, z * 7) - .5) * .025;
    pos.setY(i, alto * forma + grumos * Math.min(1, forma * 4));
  }
  geo.computeVertexNormals();
  return geo;
}
// mazorca: perfil torneado, base ancha y punta afilada, acostada sobre X
const L_MAZ = 0.24, R_MAZ = 0.048;
const radioMazorca = (t: number) =>
  R_MAZ * (0.8 + 0.2 * Math.sin(Math.min(t / 0.22, 1) * Math.PI / 2)) * (1 - 0.62 * Math.pow(Math.max(0, (t - 0.25) / 0.75), 1.7));
const acostar = (geo: THREE.BufferGeometry) => { geo.translate(0, -L_MAZ / 2, 0); geo.rotateZ(Math.PI / 2); return geo; };
function geoMazorca() {
  const pts: THREE.Vector2[] = [new THREE.Vector2(0, 0)];
  for (let k = 0; k <= 10; k++) pts.push(new THREE.Vector2(radioMazorca(k / 10) * (k === 0 ? .82 : 1), k / 10 * L_MAZ));
  pts.push(new THREE.Vector2(0, L_MAZ));
  return acostar(new THREE.LatheGeometry(pts, 10));
}
// totomoxtle: hojas que envuelven la mazorca y se juntan en una punta; una va abierta y deja ver los granos
function geoTotomoxtle() {
  const hojas: [number, number, number, boolean][] = [   // inicio y abertura del ángulo, separación de la mazorca, abierta
    [0, 2.2, 0.004, false], [1.9, 2.1, 0.007, false], [4.4, 1.3, 0.010, false], [3.7, 1.5, 0.006, true],
  ];
  const piezas = hojas.map(([ini, ab, sep, abierta]) => {
    const pts: THREE.Vector2[] = [];
    for (let k = 0; k <= 11; k++) {
      const t = k / 11, y = -0.012 + t * (L_MAZ + (abierta ? 0.01 : 0.075));
      const tc = Math.min(1, Math.max(0, y / L_MAZ)), base = radioMazorca(tc) + sep;
      let r: number;
      if (abierta) r = base + 0.05 * Math.pow(Math.max(0, (t - 0.35) / 0.65), 1.6);   // se despega hacia fuera
      else if (y > L_MAZ * 0.8) r = base * Math.max(0.06, 1 - (y - L_MAZ * 0.8) / (L_MAZ * 0.2 + 0.075)); // se cierra en punta
      else r = base;
      pts.push(new THREE.Vector2(r, y));
    }
    return new THREE.LatheGeometry(pts, 4, ini, ab);
  });
  return acostar(mergeGeometries(piezas)!);
}
// fibras de la hoja seca a lo largo de la mazorca (u da la vuelta, v corre a lo largo)
function texTotomoxtle() {
  const r = azar(31);
  return lienzo(128, 256, g => {
    g.fillStyle = '#c9ad74'; g.fillRect(0, 0, 128, 256);
    for (let i = 0; i < 90; i++) {
      const x = r() * 128, w = 0.6 + r() * 1.8, luz = 50 + r() * 28;
      g.fillStyle = `hsla(${40 + r() * 8},${30 + r() * 25}%,${luz}%,.55)`; g.fillRect(x, 0, w, 256);
    }
    for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(110,74,30,${.12 + r() * .16})`; g.fillRect(r() * 128, r() * 256, 1 + r() * 3, 20 + r() * 60); }
  }, [1, 1]);
}
// fondo de la carga: hojas sueltas y granos desgranados
function texCama() {
  const r = azar(41);
  return lienzo(256, 256, g => {
    g.fillStyle = '#6e5228'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 260; i++) {
      const x = r() * 256, y = r() * 256, a = r() * Math.PI, l = 14 + r() * 26;
      g.save(); g.translate(x, y); g.rotate(a);
      g.fillStyle = `hsl(${38 + r() * 8},${32 + r() * 20}%,${56 + r() * 22}%)`;
      g.beginPath(); g.ellipse(0, 0, l, 2.5 + r() * 2.5, 0, 0, Math.PI * 2); g.fill(); g.restore();
    }
    for (let i = 0; i < 220; i++) { g.fillStyle = `hsl(${36 + r() * 8},90%,${46 + r() * 12}%)`; g.beginPath(); g.ellipse(r() * 256, r() * 256, 2.6, 2, r() * 3, 0, Math.PI * 2); g.fill(); }
  }, [3, 14]);
}

// ---------- remolque tolva ----------
let MC: { grano: THREE.MeshStandardMaterial; mazorca: THREE.MeshStandardMaterial; hoja: THREE.MeshStandardMaterial; cama: THREE.MeshStandardMaterial } | null = null;
function materialesCarga() {
  if (MC) return MC;
  const tg = texGrano(), tm = texMazorca(), th = texTotomoxtle(), cama = texCama();
  MC = {
    grano: new THREE.MeshStandardMaterial({ map: tg, bumpMap: tg, bumpScale: 2.2, roughness: 0.82, color: 0xffffff }),
    mazorca: new THREE.MeshStandardMaterial({ map: tm, bumpMap: tm, bumpScale: 1.6, roughness: 0.6 }),
    hoja: new THREE.MeshStandardMaterial({ map: th, bumpMap: th, bumpScale: 1.2, roughness: 0.75, side: THREE.DoubleSide }),
    cama: new THREE.MeshStandardMaterial({ map: cama, bumpMap: cama, bumpScale: 2.6, roughness: 0.9, color: 0xc9b48c }),
  };
  return MC;
}

function tolva(): { g: THREE.Group; carga: (t: number) => void } {
  const g = new THREE.Group(); g.name = 'remolque-tolva';
  g.add(new THREE.Mesh(tronco(2.5, 12.4, 3.05, 2.5, 11.6, 2.0, 0), M.alu));
  for (const zc of [0.2, 3.9]) {
    g.add(new THREE.Mesh(tronco(2.46, 3.6, 2.0, 0.7, 0.7, 0.85, zc), M.aluOsc));
    caja(g, 0.8, 0.12, 0.8, M.marco, 0, 0.8, zc);   // compuerta inferior
  }
  // costillas, franja PERCONSUR y riel superior
  for (const side of [-1, 1]) {
    for (let z = -5.6; z <= 5.65; z += 0.7) caja(g, 0.04, 1.02, 0.06, M.aluOsc, side * 1.265, 2.53, z);
    caja(g, 0.02, 0.12, 11.9, M.azul, side * 1.29, 2.6, 0);
    caja(g, 0.02, 0.04, 11.9, M.naranja, side * 1.29, 2.49, 0);
  }
  caja(g, 2.58, 0.08, 12.44, M.aluOsc, 0, 3.08, 0);
  // bastidor trasero, suspensión y ejes en tándem
  caja(g, 1.0, 0.2, 3.8, M.marco, 0, 1.2, -4.3);
  for (const z of [-5.9, -2.8]) caja(g, 0.9, 0.7, 0.14, M.marco, 0, 1.65, z);
  ejes(g, [-4.9, -3.7]);
  for (const x of [-1.0, 1.0]) caja(g, 0.3, 0.55, 0.03, M.llanta, x, 0.42, -5.55);   // loderas
  caja(g, 2.2, 0.1, 0.1, M.marco, 0, 0.62, -6.1);                                  // defensa trasera
  for (const x of [-1.05, 1.05]) caja(g, 0.16, 0.08, 0.03, M.rojo, x, 2.05, -6.22);
  // escalera trasera
  for (const x of [-0.22, 0.22]) caja(g, 0.04, 1.3, 0.04, M.aluOsc, x, 2.4, -6.25);
  for (let y = 1.9; y <= 3.0; y += 0.22) caja(g, 0.44, 0.03, 0.03, M.aluOsc, 0, y, -6.25);
  patas(g, 5.5, 1.95);
  caja(g, 0.5, 0.06, 0.5, M.marco, 0, 1.97, 5.6);   // perno rey
  // lona enrollable y montón de grano
  const lona = new THREE.Mesh(arco(2.5, 0.28, 12.2, 0.03), M.lona); lona.position.set(0, 3.12, 6.1); g.add(lona);
  const grano = new THREE.Mesh(monton(2.42, 11.9, 0.62, 5), materialesCarga().grano); grano.position.set(0, 3.06, 0); g.add(grano);
  const carga = (t: number) => {
    const abre = Math.min(1, t * 2.5);                 // primero se enrolla la lona…
    lona.scale.z = Math.max(0.04, 1 - abre); lona.visible = true;
    const llena = Math.max(0, (t - 0.25) / 0.75);       // …y luego crece el montón
    grano.visible = llena > 0.002; grano.scale.y = Math.max(0.002, llena);
  };
  carga(0);
  return { g, carga };
}

// ---------- remolque jaula ----------
function jaula(): { g: THREE.Group; carga: (t: number) => void } {
  const g = new THREE.Group(); g.name = 'remolque-jaula';
  const Y0 = 1.39, TABLAS = 8, ALTO_T = (3.52 - Y0) / TABLAS;   // tablas de piso a riel superior
  caja(g, 2.5, 0.12, 12.4, M.marco, 0, 1.33, 0);                    // piso
  for (const side of [-1, 1]) caja(g, 0.06, 0.2, 12.4, M.azul, side * 1.25, 1.28, 0);
  for (const x of [-0.5, 0.5]) caja(g, 0.16, 0.26, 11.6, M.marco, x, 1.1, 0);
  // postes y costados de tablas de madera blancas, cerrados (sin huecos); dos tablas azules como en el diseño
  for (const side of [-1, 1]) {
    for (let z = -6.1; z <= 6.15; z += 1.0167) caja(g, 0.09, 2.15, 0.09, M.poste, side * 1.22, 2.47, z);
    for (let i = 0; i < TABLAS; i++) caja(g, 0.04, ALTO_T - 0.004, 12.3, i === 2 || i === 3 ? M.azul : M.tablas[i % 3], side * 1.25, Y0 + ALTO_T * (i + 0.5), 0);
    caja(g, 0.044, 0.06, 12.3, M.tablas[0], side * 1.25, Y0 + ALTO_T * 3, 0);   // filete blanco al centro de la franja azul
    caja(g, 0.1, 0.08, 12.4, M.poste, side * 1.22, 3.56, 0);
  }
  for (const z of [-6.17, 6.17]) {
    for (let i = 0; i < TABLAS; i++) caja(g, 2.42, ALTO_T - 0.004, 0.04, i === 2 || i === 3 ? M.azul : M.tablas[(i + 1) % 3], 0, Y0 + ALTO_T * (i + 0.5), z);
    caja(g, 2.42, 0.06, 0.044, M.tablas[0], 0, Y0 + ALTO_T * 3, z);   // las franjas dan la vuelta al frente y a la puerta trasera
    for (const x of [-1.22, 1.22]) caja(g, 0.12, 2.2, 0.12, M.poste, x, 2.48, z);
  }
  ejes(g, [-5.3, -4.2, -3.1]);
  caja(g, 1.0, 0.18, 4.0, M.marco, 0, 0.95, -4.2);
  for (const x of [-1.0, 1.0]) caja(g, 0.3, 0.55, 0.03, M.llanta, x, 0.42, -5.95);
  caja(g, 2.2, 0.1, 0.1, M.marco, 0, 0.62, -6.25);
  for (const x of [-1.05, 1.05]) caja(g, 0.16, 0.08, 0.03, M.rojo, x, 1.32, -6.27);
  patas(g, 4.7, 1.0);
  // mazorcas: una cama de mazorcas que sube con la carga y, encima, mazorcas sueltas que van cayendo
  const mc = materialesCarga(), ALTO = 0.42;
  const pila = new THREE.Group(); g.add(pila);
  const cama = new THREE.Mesh(monton(2.42, 12.3, ALTO, 9, 36, 140), mc.cama); pila.add(cama);
  const nCama = ruido(9);
  const altoCama = (x: number, z: number) => {
    const ax = Math.min(1, Math.abs(x) / 1.21), ez = Math.min(1, (6.15 - Math.abs(z)) / 1.6);
    return ALTO * Math.pow(Math.cos(ax * Math.PI / 2), 0.9) * (ez * ez * (3 - 2 * ez)) + (nCama(x * 2.2, z * 2.2) - .5) * .08;
  };
  const N = 1800, maz = new THREE.InstancedMesh(geoMazorca(), mc.mazorca, N); maz.castShadow = true;
  const rnd = azar(7), m4 = new THREE.Matrix4(), col = new THREE.Color(), e = new THREE.Euler(), q = new THREE.Quaternion();
  for (let i = 0; i < N; i++) {
    const x = (rnd() - 0.5) * 2.0, z = (rnd() - 0.5) * 11.9, k = 0.85 + rnd() * 0.3;
    e.set((rnd() - .5) * .5, rnd() * Math.PI * 2, (rnd() - .5) * .6);      // acostadas, con poca inclinación
    m4.compose(new THREE.Vector3(x, altoCama(x, z) + 0.035 + rnd() * 0.05, z), q.setFromEuler(e), new THREE.Vector3(k, k, k));
    maz.setMatrixAt(i, m4);
    maz.setColorAt(i, col.setHSL(0.1 + rnd() * 0.035, 0.5 + rnd() * 0.3, 0.72 + rnd() * 0.24));
  }
  pila.add(maz);
  // el totomoxtle comparte la posición de cada mazorca; tonos de paja seca, algunos aún verdosos
  const hoja = new THREE.InstancedMesh(geoTotomoxtle(), mc.hoja, N);   // la sombra la da la mazorca: el doble de polígonos no se nota en la sombra
  const rh = azar(13);
  for (let i = 0; i < N; i++) {
    maz.getMatrixAt(i, m4); hoja.setMatrixAt(i, m4);
    const verde = rh() < 0.15;
    hoja.setColorAt(i, col.setHSL(verde ? 0.17 + rh() * 0.05 : 0.09 + rh() * 0.03, verde ? 0.3 : 0.25 + rh() * 0.25, verde ? 0.55 : 0.5 + rh() * 0.22));
  }
  pila.add(hoja);
  const carga = (t: number) => {
    const c = Math.max(0, Math.min(1, t));
    pila.visible = c > 0.002;
    pila.position.y = 1.4 + (3.1 - 1.4) * Math.min(1, c / 0.85);   // la cama sube del piso al nivel de carga…
    maz.count = hoja.count = Math.round(N * Math.max(0, (c - 0.15) / 0.85));   // …mientras caen las mazorcas de encima
  };
  carga(0);
  return { g, carga };
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
  let model: THREE.Group | null = null, setCarga = (_: number) => {}, carga = 0, cargaMeta = 0, cargaVel = 0;
  let yaw = -0.62, tipo: Tipo = 'tolva';

  function build(t: Tipo) {
    if (model) { turn.remove(model); model.traverse((o: any) => { if (o.isMesh) o.geometry.dispose(); }); }
    tipo = t;
    const r = t === 'tolva' ? tolva() : jaula();
    model = r.g; setCarga = r.carga;
    model.traverse((o: any) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    turn.add(model); setCarga(carga);
    frame();
  }
  function frame() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); cam.aspect = w / h;
    const span = 13.2, dist = (span / 2) / Math.tan((cam.fov * Math.PI / 180) / 2) / Math.min(1, cam.aspect) * (cam.aspect < 1.3 ? 0.8 : 0.66);
    cam.position.set(0, dist * 0.42, dist); cam.lookAt(0, 1.6, 0); cam.updateProjectionMatrix();
  }
  // mismo movimiento físico que el visor del contenedor: arrastre 1:1, inercia al soltar, resorte sin rebote
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
        else [yaw, yawVel] = spring(yaw, yawVel, yawGoal, 0.4, dt);
        if (Math.abs(yawGoal - yaw) < 0.0005 && Math.abs(yawVel) < 0.002) { yaw = yawGoal; yawGoal = null; yawVel = 0; } else moving = true;
      } else if (yawVel !== 0) {
        yaw += yawVel * dt;
        yawVel *= Math.pow(0.996, dt * 1000);
        if (Math.abs(yawVel) < 0.02) yawVel = 0; else moving = true;
      }
    }
    // la carga avanza a ritmo constante (≈2.4 s de vacío a lleno), con arranque y frenado suaves
    if (opts.reduce) carga = cargaMeta;
    else [carga, cargaVel] = spring(carga, cargaVel, cargaMeta, 2.4, dt);
    if (Math.abs(cargaMeta - carga) < 0.002 && Math.abs(cargaVel) < 0.002) { carga = cargaMeta; cargaVel = 0; } else moving = true;
    turn.rotation.y = yaw; setCarga(carga);
    renderer.render(scene, cam);
    if (visible && moving) raf = requestAnimationFrame(loop); else last = 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
  const gain = () => (Math.PI * 1.6) / Math.max(320, host.clientWidth);
  let lastX = 0, hist: { x: number; t: number }[] = [];
  host.addEventListener('pointerdown', e => {
    dragging = true; yawGoal = null; yawVel = 0;
    lastX = e.clientX; hist = [{ x: e.clientX, t: e.timeStamp }];
    host.setPointerCapture(e.pointerId); host.classList.add('arrastrando');
  });
  host.addEventListener('pointermove', e => {
    if (!dragging) return;
    yaw += (e.clientX - lastX) * gain(); lastX = e.clientX;
    hist.push({ x: e.clientX, t: e.timeStamp }); if (hist.length > 6) hist.shift();
    kick();
  });
  const end = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false; host.classList.remove('arrastrando');
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
    e.preventDefault();
    yawGoal = (yawGoal ?? yaw) + d; kick();
  });
  new ResizeObserver(() => { frame(); kick(); }).observe(host);
  new IntersectionObserver(es => { visible = es.some(x => x.isIntersecting); if (visible) kick(); }).observe(host);
  build('tolva'); kick(); opts.onReady?.();
  return {
    setTipo(t: Tipo) { if (t !== tipo) { build(t); kick(); } },
    setCarga(llena: boolean) { cargaMeta = llena ? 1 : 0; kick(); },
    rotate(d: number) { yawGoal = (yawGoal ?? yaw) + d; kick(); },
  };
}
