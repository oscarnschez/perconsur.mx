import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

type SculptMaterialSpec = Record<string, any>;

// bevelEnabled defaults to true on THREE.ExtrudeGeometry and rounds every
// corner — sharp/pointed profiles (blades, fork tines, spikes) need
// bevelEnabled: false plus lineTo()-only path segments near the tip, since a
// curve command cannot produce a true converging point.
function buildExtrudeShape(points: [number, number][], holes?: [number, number][][]): THREE.Shape {
  const shape = new THREE.Shape();
  if (points.length > 0) {
    shape.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      shape.lineTo(points[i][0], points[i][1]);
    }
  }
  // Cutouts (e.g. an oval wire-cutter hole) as THREE.Path added to shape.holes —
  // dep-free boolean subtraction via the tessellator, no CSG library needed.
  for (const loop of holes ?? []) {
    if (loop.length < 3) continue;
    const path = new THREE.Path();
    path.moveTo(loop[0][0], loop[0][1]);
    for (let i = 1; i < loop.length; i += 1) path.lineTo(loop[i][0], loop[i][1]);
    path.closePath();
    shape.holes.push(path);
  }
  return shape;
}

// Build an N-gon oval loop (for hole authoring from a compact {cx,cy,rx,ry} descriptor).
function ovalLoop(cx: number, cy: number, rx: number, ry: number, seg = 24): [number, number][] {
  const loop: [number, number][] = [];
  for (let i = 0; i < seg; i += 1) {
    const a = (i / seg) * Math.PI * 2;
    loop.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]);
  }
  return loop;
}

function buildExtrudeGeometry(profile: { points: [number, number][]; depth: number; holes?: [number, number][][]; ovalHoles?: { cx: number; cy: number; rx: number; ry: number }[] }): THREE.ExtrudeGeometry {
  const holes = [...(profile.holes ?? []), ...((profile.ovalHoles ?? []).map((o) => ovalLoop(o.cx, o.cy, o.rx, o.ry)))];
  const shape = buildExtrudeShape(profile.points, holes);
  return new THREE.ExtrudeGeometry(shape, {
    depth: profile.depth,
    bevelEnabled: false,
    steps: 1,
  });
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function readLayerNumber(value: unknown, keys: string[], fallback: number): number {
  if (typeof value === 'number') return value;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    for (const key of keys) {
      if (typeof record[key] === 'number') return record[key] as number;
    }
  }
  return fallback;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = /^#[0-9a-f]{3}$/i.test(hex)
    ? '#' + hex.slice(1).split('').map((part) => part + part).join('')
    : hex;
  const value = /^#[0-9a-f]{6}$/i.test(normalized) ? Number.parseInt(normalized.slice(1), 16) : 0x8a7a5f;
  return [clampAlbedoChannel((value >> 16) & 255), clampAlbedoChannel((value >> 8) & 255), clampAlbedoChannel(value & 255)];
}

function materialPalette(spec: SculptMaterialSpec): string[] {
  const palette = spec.colorVariation?.palette;
  if (Array.isArray(palette) && palette.length > 0) return palette.filter((value) => typeof value === 'string');
  const secondary = spec.albedo?.secondary;
  const colors = [spec.baseColor ?? spec.color ?? spec.albedo?.dominant, ...(Array.isArray(secondary) ? secondary : [])];
  return colors.filter((value): value is string => typeof value === 'string' && value.startsWith('#'));
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function clampAlbedoChannel(value: number): number {
  return Math.max(30, Math.min(240, Math.round(value)));
}

function clampPbrF0(value: number): number {
  return Math.max(0.02, Math.min(1, value));
}

function clampPbrIor(value: number): number {
  return Math.max(1, Math.min(2.5, value));
}

function clampPbrMetalness(value: number): number {
  return value >= 0.5 ? 1 : 0;
}

function clampedAlbedoColor(spec: SculptMaterialSpec): THREE.Color {
  const source = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  // setStyle with an explicit SRGBColorSpace, NOT the numeric constructor.
  //
  // `new THREE.Color(r, g, b)` treats its arguments as LINEAR working-space components,
  // while an authored `baseColor` hex is sRGB. Feeding one to the other skipped the
  // transfer function and lifted every dark albedo: #2e2a28, authored as a near-black
  // vinyl, rendered at roughly sRGB 0.46 — a mid grey. The error is largest exactly where
  // it matters most, because the transfer curve is steepest near black.
  return new THREE.Color().setStyle(source, THREE.SRGBColorSpace);
}

function smoothCurve(value: number): number {
  return value * value * (3 - 2 * value);
}

function periodicHash(x: number, y: number, seed: number, periodX: number, periodY: number): number {
  const wrappedX = ((x % periodX) + periodX) % periodX;
  const wrappedY = ((y % periodY) + periodY) % periodY;
  let value = Math.imul(wrappedX + seed * 17, 374761393) ^ Math.imul(wrappedY + seed * 31, 668265263);
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
}

function periodicValueNoise(u: number, v: number, seed: number, periodX: number, periodY: number): number {
  const x = u * periodX;
  const y = v * periodY;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = smoothCurve(x - x0);
  const ty = smoothCurve(y - y0);
  const a = periodicHash(x0, y0, seed, periodX, periodY);
  const b = periodicHash(x0 + 1, y0, seed, periodX, periodY);
  const c = periodicHash(x0, y0 + 1, seed, periodX, periodY);
  const d = periodicHash(x0 + 1, y0 + 1, seed, periodX, periodY);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a, b, tx), THREE.MathUtils.lerp(c, d, tx), ty);
}

type SurfaceBand = {
  frequency: number;
  amplitude: number;
  stretchX: number;
  stretchY: number;
  ridge: boolean;
};

function surfaceBands(spec: SculptMaterialSpec): SurfaceBand[] {
  const source = Array.isArray(spec.surfaceFrequencyBands) ? spec.surfaceFrequencyBands : [];
  const parsed = source.flatMap((item: unknown) => {
    if (!item || typeof item !== 'object') return [];
    const band = item as Record<string, unknown>;
    const frequency = typeof band.frequency === 'number' ? band.frequency : 0;
    const amplitude = typeof band.amplitude === 'number' ? band.amplitude : 0;
    if (frequency <= 0 || amplitude <= 0) return [];
    const stretch = Array.isArray(band.stretch) ? band.stretch : [1, 1];
    const description = `${String(band.pattern ?? '')} ${String(band.role ?? '')}`.toLowerCase();
    return [{
      frequency,
      amplitude,
      stretchX: typeof stretch[0] === 'number' ? Math.max(0.1, stretch[0]) : 1,
      stretchY: typeof stretch[1] === 'number' ? Math.max(0.1, stretch[1]) : 1,
      ridge: /(ridge|groove|grain|fiber|striated|crack)/.test(description),
    }];
  });
  return parsed.length > 0 ? parsed : [
    { frequency: 2, amplitude: 0.42, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 12, amplitude: 0.22, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 56, amplitude: 0.08, stretchX: 1, stretchY: 1, ridge: false },
  ];
}

function sampleSurface(u: number, v: number, bands: SurfaceBand[], seed: number): number {
  let value = 0;
  let weight = 0;
  for (let index = 0; index < bands.length; index += 1) {
    const band = bands[index];
    const periodX = Math.max(1, Math.round(band.frequency * band.stretchX));
    const periodY = Math.max(1, Math.round(band.frequency * band.stretchY));
    let sample = periodicValueNoise(u, v, seed + index * 1013, periodX, periodY);
    if (band.ridge) sample = 1 - Math.abs(sample * 2 - 1);
    value += sample * band.amplitude;
    weight += band.amplitude;
  }
  return weight > 0 ? clamp01(value / weight) : 0.5;
}

function mixPalette(colors: [number, number, number][], value: number): [number, number, number] {
  if (colors.length === 1) return colors[0];
  const scaled = clamp01(value) * (colors.length - 1);
  const index = Math.min(colors.length - 2, Math.floor(scaled));
  const mix = scaled - index;
  const a = colors[index];
  const b = colors[index + 1];
  return [
    Math.round(THREE.MathUtils.lerp(a[0], b[0], mix)),
    Math.round(THREE.MathUtils.lerp(a[1], b[1], mix)),
    Math.round(THREE.MathUtils.lerp(a[2], b[2], mix)),
  ];
}

type ColorGradientStop = { offset: number; color: string };
type ColorGradientSpec = {
  type: 'linear' | 'radial';
  axis: [number, number];
  stops: ColorGradientStop[];
};

function parseRgba(value: string): [number, number, number] {
  const match = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(value);
  if (!match) return [138, 122, 95];
  return [clampAlbedoChannel(Number(match[1])), clampAlbedoChannel(Number(match[2])), clampAlbedoChannel(Number(match[3]))];
}

// Analytical per-pixel gradient sample. The extraction schema's colorGradient carries
// exact rgba(...) stop colors (see extract_part_color_recipe.py), so this samples the
// same trend directly in JS math rather than round-tripping through a Canvas 2D
// createLinearGradient/createRadialGradient object — same visual result, and it composes
// directly with the existing noise/height-correlated colorVariation blend below.
function sampleColorGradient(gradient: ColorGradientSpec, u: number, v: number): [number, number, number] {
  const stops = gradient.stops.length >= 2 ? gradient.stops : [{ offset: 0, color: 'rgba(138,122,95,1)' }, { offset: 1, color: 'rgba(138,122,95,1)' }];
  let t: number;
  if (gradient.type === 'radial') {
    const [cx, cy] = gradient.axis;
    const dx = u - cx;
    const dy = v - cy;
    const maxRadius = Math.max(0.001, Math.hypot(Math.max(cx, 1 - cx), Math.max(cy, 1 - cy)));
    t = clamp01(Math.hypot(dx, dy) / maxRadius);
  } else {
    const [ax, ay] = gradient.axis;
    const projection = (u - 0.5) * ax + (v - 0.5) * ay;
    const maxProjection = 0.5 * (Math.abs(ax) + Math.abs(ay)) || 0.5;
    t = clamp01(projection / maxProjection + 0.5);
  }
  const scaled = t * (stops.length - 1);
  const index = Math.min(stops.length - 2, Math.max(0, Math.floor(scaled)));
  const mix = scaled - index;
  const a = parseRgba(stops[index].color);
  const b = parseRgba(stops[index + 1].color);
  return [
    THREE.MathUtils.lerp(a[0], b[0], mix),
    THREE.MathUtils.lerp(a[1], b[1], mix),
    THREE.MathUtils.lerp(a[2], b[2], mix),
  ];
}

function writePixel(data: Uint8ClampedArray, offset: number, red: number, green: number, blue: number): void {
  data[offset] = Math.max(0, Math.min(255, Math.round(red)));
  data[offset + 1] = Math.max(0, Math.min(255, Math.round(green)));
  data[offset + 2] = Math.max(0, Math.min(255, Math.round(blue)));
  data[offset + 3] = 255;
}

function makeCanvas(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function createMapTexture(
  canvas: HTMLCanvasElement,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [2, 2];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 2,
    typeof repeat[1] === 'number' ? repeat[1] : 2,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

type ProceduralTextureSet = {
  albedo: THREE.Texture;
  roughness: THREE.Texture;
  height: THREE.Texture;
  normal: THREE.Texture;
  ao: THREE.Texture;
  source: 'reference-pixel-extraction' | 'procedural';
};

function referenceMapUrl(spec: SculptMaterialSpec, channel: string): string | null {
  const reference = spec.referencePbr;
  if (!reference || typeof reference !== 'object') return null;
  if (reference.usable === false) return null;
  const confidence = typeof reference.confidence === 'number'
    ? reference.confidence
    : (typeof reference.estimatedFidelity === 'number' ? reference.estimatedFidelity : 0);
  const threshold = typeof reference.targetThreshold === 'number' ? reference.targetThreshold : 0.7;
  if (confidence < threshold) return null;
  const maps = reference.maps;
  if (!maps || typeof maps !== 'object') return null;
  const map = (maps as Record<string, unknown>)[channel];
  if (!map || typeof map !== 'object') return null;
  const record = map as Record<string, unknown>;
  const url = typeof record.url === 'string' && record.url.trim() ? record.url : record.path;
  return typeof url === 'string' && url.trim() ? url : null;
}

function createLoadedMapTexture(
  url: string,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.Texture {
  const texture = new THREE.TextureLoader().load(url);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [1, 1];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 1,
    typeof repeat[1] === 'number' ? repeat[1] : 1,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

function makeReferenceTextureSet(spec: SculptMaterialSpec, options: ProceduralModelOptions): ProceduralTextureSet | null {
  const albedo = referenceMapUrl(spec, 'albedo');
  const roughness = referenceMapUrl(spec, 'roughness');
  const height = referenceMapUrl(spec, 'height');
  const normal = referenceMapUrl(spec, 'normal');
  const ao = referenceMapUrl(spec, 'ao');
  if (!albedo || !roughness || !height || !normal || !ao) return null;
  return {
    albedo: createLoadedMapTexture(albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createLoadedMapTexture(roughness, THREE.NoColorSpace, spec, options),
    height: createLoadedMapTexture(height, THREE.NoColorSpace, spec, options),
    normal: createLoadedMapTexture(normal, THREE.NoColorSpace, spec, options),
    ao: createLoadedMapTexture(ao, THREE.NoColorSpace, spec, options),
    source: 'reference-pixel-extraction',
  };
}

function makeProceduralTextureSet(
  id: string,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): ProceduralTextureSet | null {
  if (typeof document === 'undefined') return null;
  const qualityFirst = (options.qualityPriority ?? 'reference-fidelity') === 'reference-fidelity';
  const requested = options.textureSize ?? spec.textureResolution;
  const requestedSize = typeof requested === 'number' && Number.isFinite(requested)
    ? requested
    : (qualityFirst ? 1024 : 512);
  const size = Math.max(256, Math.min(2048, 2 ** Math.round(Math.log2(requestedSize))));
  const canvases = {
    albedo: makeCanvas(size),
    roughness: makeCanvas(size),
    height: makeCanvas(size),
    normal: makeCanvas(size),
    ao: makeCanvas(size),
  };
  const contexts = {
    albedo: canvases.albedo.getContext('2d'),
    roughness: canvases.roughness.getContext('2d'),
    height: canvases.height.getContext('2d'),
    normal: canvases.normal.getContext('2d'),
    ao: canvases.ao.getContext('2d'),
  };
  if (!contexts.albedo || !contexts.roughness || !contexts.height || !contexts.normal || !contexts.ao) return null;
  const images = {
    albedo: contexts.albedo.createImageData(size, size),
    roughness: contexts.roughness.createImageData(size, size),
    height: contexts.height.createImageData(size, size),
    normal: contexts.normal.createImageData(size, size),
    ao: contexts.ao.createImageData(size, size),
  };
  const seed = hashString(id);
  const bands = surfaceBands(spec);
  const heightField = new Float32Array(size * size);
  const roughnessField = new Float32Array(size * size);
  const palette = materialPalette(spec);
  const fallback = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  const colors = (palette.length >= 2 ? palette : [fallback, '#6E614B', '#A08F70']).map(hexToRgb);
  const baseRoughness = clamp01(readLayerNumber(spec.roughness, ['base'], 0.76));
  const roughnessVariation = clamp01(readLayerNumber(spec.roughness, ['variation'], 0.18));
  const colorAmplitude = clamp01(readLayerNumber(spec.colorVariation, ['amplitude', 'variation'], 0.18));
  const heightCorrelation = clamp01(readLayerNumber(spec.colorVariation, ['heightCorrelation'], 0.3));
  const colorGradient: ColorGradientSpec | undefined = spec.colorGradient;
  for (let y = 0; y < size; y += 1) {
    const v = y / size;
    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const index = y * size + x;
      const height = sampleSurface(u, v, bands, seed + 101);
      const roughNoise = sampleSurface(u, v, bands, seed + 7001);
      const colorNoise = sampleSurface(u, v, bands, seed + 15013);
      heightField[index] = height;
      roughnessField[index] = clamp01(baseRoughness + (roughNoise - 0.5) * roughnessVariation * 2);
      let color: [number, number, number];
      if (colorGradient) {
        // Evidence-derived spatial gradient (Plan 1.3 Workstream C) takes priority
        // over the noise-based palette blend below — it is a measured trend, not a guess.
        color = sampleColorGradient(colorGradient, u, v);
      } else {
        const paletteValue = clamp01(
          0.5 + (colorNoise - 0.5) * colorAmplitude * 2 + (height - 0.5) * heightCorrelation
        );
        color = mixPalette(colors, paletteValue);
      }
      writePixel(images.albedo.data, index * 4, color[0], color[1], color[2]);
    }
  }
  const normalStrength = Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35));
  const aoStrength = clamp01(readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35));
  for (let y = 0; y < size; y += 1) {
    const up = ((y - 1 + size) % size) * size;
    const down = ((y + 1) % size) * size;
    for (let x = 0; x < size; x += 1) {
      const left = (x - 1 + size) % size;
      const right = (x + 1) % size;
      const index = y * size + x;
      const center = heightField[index];
      const dx = (heightField[y * size + right] - heightField[y * size + left]) * normalStrength * 6;
      const dy = (heightField[down + x] - heightField[up + x]) * normalStrength * 6;
      const inverseLength = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const normalX = -dx * inverseLength;
      const normalY = -dy * inverseLength;
      const normalZ = inverseLength;
      const neighborAverage = (
        heightField[y * size + left] + heightField[y * size + right]
        + heightField[up + x] + heightField[down + x]
      ) * 0.25;
      const cavity = Math.max(0, neighborAverage - center);
      const ao = clamp01(1 - aoStrength * (cavity * 12 + (1 - center) * 0.16));
      const offset = index * 4;
      const heightByte = center * 255;
      const roughnessByte = roughnessField[index] * 255;
      writePixel(images.height.data, offset, heightByte, heightByte, heightByte);
      writePixel(images.roughness.data, offset, roughnessByte, roughnessByte, roughnessByte);
      writePixel(
        images.normal.data, offset,
        (normalX * 0.5 + 0.5) * 255,
        (normalY * 0.5 + 0.5) * 255,
        (normalZ * 0.5 + 0.5) * 255,
      );
      writePixel(images.ao.data, offset, ao * 255, ao * 255, ao * 255);
    }
  }
  contexts.albedo.putImageData(images.albedo, 0, 0);
  contexts.roughness.putImageData(images.roughness, 0, 0);
  contexts.height.putImageData(images.height, 0, 0);
  contexts.normal.putImageData(images.normal, 0, 0);
  contexts.ao.putImageData(images.ao, 0, 0);
  return {
    albedo: createMapTexture(canvases.albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createMapTexture(canvases.roughness, THREE.NoColorSpace, spec, options),
    height: createMapTexture(canvases.height, THREE.NoColorSpace, spec, options),
    normal: createMapTexture(canvases.normal, THREE.NoColorSpace, spec, options),
    ao: createMapTexture(canvases.ao, THREE.NoColorSpace, spec, options),
    source: 'procedural',
  };
}

function createSculptMaterial(id: string, spec: SculptMaterialSpec, options: ProceduralModelOptions, denseComponent = false): THREE.MeshPhysicalMaterial {
  // A material that declares -- with evidence -- that its subject carries no texture
  // detail gets NO texture set. Synthesising one anyway is not a harmless default: the
  // branch below then forces color to white and roughness to 1 and reads both from the
  // generated maps, so the authored albedo and the reference-derived roughness are both
  // discarded, and the model gains mottling the reference does not have. Measured on the
  // tuxedo cat, whose black fur rendered as speckled grey-and-white from a palette that
  // only ever described two flat regions.
  const textureless = (spec.textureless as { declared?: boolean } | undefined)?.declared === true;
  const textures = textureless
    ? null
    : makeReferenceTextureSet(spec, options) ?? makeProceduralTextureSet(id, spec, options);
  const material = new THREE.MeshPhysicalMaterial({
    color: textures ? 0xffffff : clampedAlbedoColor(spec),
    roughness: textures ? 1 : clamp01(readLayerNumber(spec.roughness, ['base'], 0.76)),
    metalness: clampPbrMetalness(readLayerNumber(spec.metalness, ['base'], 0.0)),
    clearcoat: clamp01(readLayerNumber(spec.clearcoat, ['base', 'amount'], 0)),
    clearcoatRoughness: clamp01(readLayerNumber(spec.clearcoatRoughness, ['base'], 0.25)),
    transmission: clamp01(readLayerNumber(spec.transmission, ['base', 'amount'], 0)),
    ior: clampPbrIor(readLayerNumber(spec.ior, ['base', 'value'], 1.5)),
    thickness: Math.max(0, readLayerNumber(spec.thickness, ['base', 'amount'], 0)),
    attenuationDistance: Math.max(0.001, readLayerNumber(spec.attenuationDistance, ['base', 'value'], Infinity)),
    attenuationColor: new THREE.Color(typeof spec.attenuationColor === 'string' ? spec.attenuationColor : '#ffffff'),
    sheen: clamp01(readLayerNumber(spec.sheen, ['base', 'amount'], 0)),
    sheenColor: new THREE.Color(typeof spec.sheenColor === 'string' ? spec.sheenColor : '#ffffff'),
    sheenRoughness: clamp01(readLayerNumber(spec.sheenRoughness, ['base'], 1.0)),
    iridescence: clamp01(readLayerNumber(spec.iridescence, ['base', 'amount'], 0)),
    iridescenceIOR: clampPbrIor(readLayerNumber(spec.iridescenceIOR, ['base', 'value'], 1.3)),
    anisotropy: clamp01(readLayerNumber(spec.anisotropy, ['base', 'amount'], 0)),
    anisotropyRotation: readLayerNumber(spec.anisotropy, ['rotation'], 0),
    specularIntensity: clampPbrF0(readLayerNumber(spec.specularF0 ?? spec.f0 ?? spec.specularIntensity, ['base', 'value'], 1.0)),
    specularColor: new THREE.Color(typeof spec.specularColor === 'string' ? spec.specularColor : '#ffffff'),
    emissive: new THREE.Color(typeof spec.emissive === 'string' ? spec.emissive : '#000000'),
    emissiveIntensity: Math.max(0, readLayerNumber(spec.emissiveIntensity, ['base'], 1.0)),
    opacity: clamp01(readLayerNumber(spec.opacity, ['base'], 1)),
    transparent: readLayerNumber(spec.transmission, ['base', 'amount'], 0) > 0 || readLayerNumber(spec.opacity, ['base'], 1) < 1,
    alphaTest: Math.max(0, readLayerNumber(spec.alpha, ['cutoff', 'alphaTest'], 0)),
    wireframe: options.wireframe ?? false,
    side: spec.doubleSided === true ? THREE.DoubleSide : THREE.FrontSide,
    flatShading: spec.flatShading === true,
  });
  if (textures) {
    material.map = textures.albedo;
    material.roughnessMap = textures.roughness;
    material.normalMap = textures.normal;
    material.normalScale.setScalar(Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35)));
    material.aoMap = textures.ao;
    material.aoMap.channel = 0;
    material.aoMapIntensity = readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35);
    const denseMesh = denseComponent || spec.denseMesh === true || spec.geometryDensity === 'dense' || spec.topologyClass === 'dense';
    const bumpScale = Math.max(0, readLayerNumber(spec.bump, ['amplitude', 'strength'], 0));
    const effectiveBumpScale = denseMesh ? Math.max(0.05, bumpScale) : bumpScale;
    if (effectiveBumpScale > 0) {
      material.bumpMap = textures.height;
      material.bumpScale = effectiveBumpScale;
    }
    const displacementScale = Math.max(0, readLayerNumber(spec.displacement, ['amplitude', 'strength'], 0));
    const effectiveDisplacementScale = denseMesh ? Math.max(0.005, displacementScale) : displacementScale;
    if (effectiveDisplacementScale > 0) {
      material.displacementMap = textures.height;
      material.displacementScale = effectiveDisplacementScale;
      material.displacementBias = -effectiveDisplacementScale * 0.5;
    }
  }
  material.envMapIntensity = readLayerNumber(spec, ['envMapIntensity'], 0.8);
  material.userData.sculptMaterial = spec;
  material.userData.proceduralMapsIndependent = true;
  material.userData.pbrConstraints = { albedoRange: [30, 240], binaryMetalness: true, f0Range: [0.02, 1], iorRange: [1, 2.5] };
  material.userData.pbrTextureSource = textures?.source ?? 'flat-fallback';
  material.userData.referencePbr = spec.referencePbr ?? null;
  material.userData.referenceMaterialId = spec.referenceMaterialId ?? spec.materialReference?.profileId ?? null;
  material.userData.materialEvidence = spec.materialEvidence ?? null;
  material.userData.validationViews = spec.materialReference?.validationViews ?? [];
  material.needsUpdate = true;
  return material;
}

type AttachmentEndpoint = {
  start: THREE.Vector3;
  midpoint: THREE.Vector3;
  quaternion: THREE.Quaternion;
  length: number;
  baseRadius: number;
  endRadius: number;
};

function readVector3(value: unknown, fallback: [number, number, number]): THREE.Vector3 {
  if (Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === 'number')) {
    return new THREE.Vector3(value[0], value[1], value[2]);
  }
  return new THREE.Vector3(fallback[0], fallback[1], fallback[2]);
}

function readNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function makeAttachmentEndpoint(attachment: unknown): AttachmentEndpoint | null {
  if (!attachment || typeof attachment !== 'object') return null;
  const record = attachment as Record<string, unknown>;
  const start = readVector3(record.localStart, [0, 0, 0]);
  const end = readVector3(record.localEnd, [0, 1, 0]);
  const delta = end.clone().sub(start);
  const length = delta.length();
  if (length <= 0.0001) return null;
  const direction = delta.clone().normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  const baseRadius = Math.max(0.005, readNumber(record.baseRadius, 0.06));
  const endRadius = Math.max(0.003, readNumber(record.endRadius, baseRadius * 0.55));
  return {
    start,
    midpoint: delta.multiplyScalar(0.5),
    quaternion,
    length,
    baseRadius,
    endRadius,
  };
}

// Generated from ObjectSculptSpec target: ISO 40ft dry container
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createISO40ftDryContainerModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "ISO 40ft dry container";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["paint"] = createSculptMaterial(
    "paint",
    {"id": "paint", "name": "Oxide-red marine paint on corten steel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#8E3B30", "color": "#8E3B30", "albedo": {"dominant": "#8E3B30", "secondary": ["#8E3B30"], "samplingNotes": "Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."}, "colorVariation": {"palette": ["#8E3B30"], "pattern": "uniform satin paint", "amplitude": 0.04, "heightCorrelation": 0.0}, "roughness": {"base": 0.5, "variation": 0.05, "map": "independent-procedural-field", "localResponse": "slightly lower on rails polished by twistlocks"}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"mode": "geometry-and-lighting", "strength": 0.6, "notes": "valley darkening from corrugation geometry and contact shadow under rails"}, "localOverrides": [{"id": "data-plate", "region": "left wall, near door end, 0.5 m above bottom rail", "albedo": "#C9A79F", "roughness": 0.5, "notes": "CSC safety approval plate (light painted aluminium)"}, {"id": "wordmark", "region": "both side walls, upper third", "albedo": "#F4F5F4", "roughness": 0.55, "notes": "PERCONSUR wordmark painted on the side (site branding)"}], "materialClass": "metal", "finishClass": "painted-metal", "texturePalette": ["#7A342B", "#75332A", "#99574F", "#6F3128", "#86392F"], "clearcoat": {"base": 1.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.05, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 1.0, "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on crop-paint.png: confidence 0.751 (pass); palette ['#78352C', '#6D2F26', '#853C32', '#98544A', '#8F473D']", "material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) — the reference's tone variation is lighting on corrugation geometry, not paint", "ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"], "pbrEvidenceFile": "pbr-paint.json"}},
    options
  );
  materialMap["frame-paint"] = createSculptMaterial(
    "frame-paint",
    {"id": "frame-paint", "name": "Frame members, darker red", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#7D342A", "color": "#7D342A", "albedo": {"dominant": "#7D342A", "secondary": ["#7D342A"], "samplingNotes": "Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."}, "colorVariation": {"palette": ["#7D342A"], "pattern": "uniform satin paint", "amplitude": 0.04, "heightCorrelation": 0.0}, "roughness": {"base": 0.5, "variation": 0.05, "map": "independent-procedural-field", "localResponse": "slightly lower on rails polished by twistlocks"}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"mode": "geometry-and-lighting", "strength": 0.6, "notes": "valley darkening from corrugation geometry and contact shadow under rails"}, "localOverrides": [{"id": "rail-wear", "region": "top rail upper face", "albedo": "#9C5349", "roughness": 0.5, "notes": "lighter worn top face"}], "materialClass": "metal", "finishClass": "painted-metal", "texturePalette": ["#7E3A30", "#6B2F26", "#7D342A", "#7D342A", "#7D342A"], "clearcoat": {"base": 1.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.05, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 1.0, "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on crop-frame-paint.png: confidence 0.729 (pass); palette ['#7D342A', '#8E4E46', '#6C2F27', '#7A382F']", "material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) — the reference's tone variation is lighting on corrugation geometry, not paint", "ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"], "pbrEvidenceFile": "pbr-frame-paint.json"}},
    options
  );
  materialMap["casting"] = createSculptMaterial(
    "casting",
    {"id": "casting", "name": "Cast steel corner fittings", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#58251E", "color": "#58251E", "albedo": {"dominant": "#58251E", "secondary": ["#58251E"], "samplingNotes": "Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."}, "colorVariation": {"palette": ["#58251E"], "pattern": "uniform satin paint", "amplitude": 0.04, "heightCorrelation": 0.0}, "roughness": {"base": 0.5, "variation": 0.05, "map": "independent-procedural-field", "localResponse": "slightly lower on rails polished by twistlocks"}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"mode": "geometry-and-lighting", "strength": 0.6, "notes": "valley darkening from corrugation geometry and contact shadow under rails"}, "localOverrides": [{"id": "aperture", "region": "outer faces of castings", "albedo": "#101114", "roughness": 0.8, "notes": "dark oval apertures"}], "materialClass": "metal", "finishClass": "painted-metal", "texturePalette": ["#78433C", "#59261F", "#50231E", "#59251E", "#662C25"], "clearcoat": {"base": 1.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.05, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 1.0, "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on crop-casting.png: confidence 0.778 (pass); palette ['#58251E', '#7F3D34', '#652A23', '#121114']", "material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) — the reference's tone variation is lighting on corrugation geometry, not paint", "ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"], "pbrEvidenceFile": "pbr-casting.json"}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_floor_deck_0 = makeAttachmentEndpoint(null);
  const node_floor_deck_0 = new THREE.Group();
  node_floor_deck_0.name = "Floor and bottom cross-member deck__pivot";
  node_floor_deck_0.scale.set(1, 1, 1);
  if (endpoint_floor_deck_0) {
    node_floor_deck_0.position.copy(endpoint_floor_deck_0.start);
    node_floor_deck_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_floor_deck_0.position.set(0.0, 0.08, 0.0);
    node_floor_deck_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_floor_deck_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [2.398, 0.16, 12.172], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "floor-deck", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["root"] ?? root).add(node_floor_deck_0);
  nodes["floor-deck"] = node_floor_deck_0;
  const mesh_floor_deck_0Geometry = endpoint_floor_deck_0
    ? new THREE.CylinderGeometry(endpoint_floor_deck_0.endRadius, endpoint_floor_deck_0.baseRadius, endpoint_floor_deck_0.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_floor_deck_0) {
    mesh_floor_deck_0Geometry.scale(2.398, 0.16, 12.172);
  }
  const mesh_floor_deck_0 = new THREE.Mesh(
    mesh_floor_deck_0Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_floor_deck_0.name = "Floor and bottom cross-member deck";
  if (endpoint_floor_deck_0) {
    mesh_floor_deck_0.position.copy(endpoint_floor_deck_0.midpoint);
    mesh_floor_deck_0.quaternion.copy(endpoint_floor_deck_0.quaternion);
  }
  mesh_floor_deck_0.castShadow = options.castShadow ?? true;
  mesh_floor_deck_0.receiveShadow = options.receiveShadow ?? true;
  node_floor_deck_0.add(mesh_floor_deck_0);
  meshes["floor-deck"] = mesh_floor_deck_0;
  colliders["floor-deck"] = {"type": "box", "offset": [0, 0, 0], "scale": [2.398, 0.16, 12.172], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["floor-deck"] ??= [];
  destructionGroups["floor-deck"].push(node_floor_deck_0);

  const endpoint_side_wall_l_1 = makeAttachmentEndpoint(null);
  const node_side_wall_l_1 = new THREE.Group();
  node_side_wall_l_1.name = "Left corrugated side wall__pivot";
  node_side_wall_l_1.scale.set(1, 1, 1);
  if (endpoint_side_wall_l_1) {
    node_side_wall_l_1.position.copy(endpoint_side_wall_l_1.start);
    node_side_wall_l_1.rotation.set(-1.5707963267948966, 0.0, -1.5707963267948966);
  } else {
    node_side_wall_l_1.position.set(1.183, 0.07, 0.0);
    node_side_wall_l_1.rotation.set(-1.5707963267948966, 0.0, -1.5707963267948966);
  }
  node_side_wall_l_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.036, 2.2910000000000004, 11.872], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "side-wall-l", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_side_wall_l_1);
  nodes["side-wall-l"] = node_side_wall_l_1;
  const mesh_side_wall_l_1Geometry = endpoint_side_wall_l_1
    ? new THREE.CylinderGeometry(endpoint_side_wall_l_1.endRadius, endpoint_side_wall_l_1.baseRadius, endpoint_side_wall_l_1.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-5.936, 0], [-5.8946, 0.036], [-5.798, 0.036], [-5.7565, 0], [-5.6599, 0], [-5.6185, 0.036], [-5.5219, 0.036], [-5.4804, 0], [-5.3838, 0], [-5.3424, 0.036], [-5.2458, 0.036], [-5.2044, 0], [-5.1077, 0], [-5.0663, 0.036], [-4.9697, 0.036], [-4.9283, 0], [-4.8316, 0], [-4.7902, 0.036], [-4.6936, 0.036], [-4.6522, 0], [-4.5555, 0], [-4.5141, 0.036], [-4.4175, 0.036], [-4.3761, 0], [-4.2794, 0], [-4.238, 0.036], [-4.1414, 0.036], [-4.1, 0], [-4.0033, 0], [-3.9619, 0.036], [-3.8653, 0.036], [-3.8239, 0], [-3.7273, 0], [-3.6858, 0.036], [-3.5892, 0.036], [-3.5478, 0], [-3.4512, 0], [-3.4097, 0.036], [-3.3131, 0.036], [-3.2717, 0], [-3.1751, 0], [-3.1337, 0.036], [-3.037, 0.036], [-2.9956, 0], [-2.899, 0], [-2.8576, 0.036], [-2.7609, 0.036], [-2.7195, 0], [-2.6229, 0], [-2.5815, 0.036], [-2.4848, 0.036], [-2.4434, 0], [-2.3468, 0], [-2.3054, 0.036], [-2.2087, 0.036], [-2.1673, 0], [-2.0707, 0], [-2.0293, 0.036], [-1.9327, 0.036], [-1.8912, 0], [-1.7946, 0], [-1.7532, 0.036], [-1.6566, 0.036], [-1.6151, 0], [-1.5185, 0], [-1.4771, 0.036], [-1.3805, 0.036], [-1.3391, 0], [-1.2424, 0], [-1.201, 0.036], [-1.1044, 0.036], [-1.063, 0], [-0.9663, 0], [-0.9249, 0.036], [-0.8283, 0.036], [-0.7869, 0], [-0.6902, 0], [-0.6488, 0.036], [-0.5522, 0.036], [-0.5108, 0], [-0.4141, 0], [-0.3727, 0.036], [-0.2761, 0.036], [-0.2347, 0], [-0.138, 0], [-0.0966, 0.036], [0.0, 0.036], [0.0414, 0], [0.138, 0], [0.1795, 0.036], [0.2761, 0.036], [0.3175, 0], [0.4141, 0], [0.4556, 0.036], [0.5522, 0.036], [0.5936, 0], [0.6902, 0], [0.7316, 0.036], [0.8283, 0.036], [0.8697, 0], [0.9663, 0], [1.0077, 0.036], [1.1044, 0.036], [1.1458, 0], [1.2424, 0], [1.2838, 0.036], [1.3805, 0.036], [1.4219, 0], [1.5185, 0], [1.5599, 0.036], [1.6566, 0.036], [1.698, 0], [1.7946, 0], [1.836, 0.036], [1.9327, 0.036], [1.9741, 0], [2.0707, 0], [2.1121, 0.036], [2.2087, 0.036], [2.2502, 0], [2.3468, 0], [2.3882, 0.036], [2.4848, 0.036], [2.5263, 0], [2.6229, 0], [2.6643, 0.036], [2.7609, 0.036], [2.8023, 0], [2.899, 0], [2.9404, 0.036], [3.037, 0.036], [3.0784, 0], [3.1751, 0], [3.2165, 0.036], [3.3131, 0.036], [3.3545, 0], [3.4512, 0], [3.4926, 0.036], [3.5892, 0.036], [3.6306, 0], [3.7273, 0], [3.7687, 0.036], [3.8653, 0.036], [3.9067, 0], [4.0033, 0], [4.0448, 0.036], [4.1414, 0.036], [4.1828, 0], [4.2794, 0], [4.3209, 0.036], [4.4175, 0.036], [4.4589, 0], [4.5555, 0], [4.5969, 0.036], [4.6936, 0.036], [4.735, 0], [4.8316, 0], [4.873, 0.036], [4.9697, 0.036], [5.0111, 0], [5.1077, 0], [5.1491, 0.036], [5.2458, 0.036], [5.2872, 0], [5.3838, 0], [5.4252, 0.036], [5.5219, 0.036], [5.5633, 0], [5.6599, 0], [5.7013, 0.036], [5.798, 0.036], [5.8394, 0], [5.936, 0], [5.936, -0.02], [5.8394, -0.02], [5.798, 0.016], [5.7013, 0.016], [5.6599, -0.02], [5.5633, -0.02], [5.5219, 0.016], [5.4252, 0.016], [5.3838, -0.02], [5.2872, -0.02], [5.2458, 0.016], [5.1491, 0.016], [5.1077, -0.02], [5.0111, -0.02], [4.9697, 0.016], [4.873, 0.016], [4.8316, -0.02], [4.735, -0.02], [4.6936, 0.016], [4.5969, 0.016], [4.5555, -0.02], [4.4589, -0.02], [4.4175, 0.016], [4.3209, 0.016], [4.2794, -0.02], [4.1828, -0.02], [4.1414, 0.016], [4.0448, 0.016], [4.0033, -0.02], [3.9067, -0.02], [3.8653, 0.016], [3.7687, 0.016], [3.7273, -0.02], [3.6306, -0.02], [3.5892, 0.016], [3.4926, 0.016], [3.4512, -0.02], [3.3545, -0.02], [3.3131, 0.016], [3.2165, 0.016], [3.1751, -0.02], [3.0784, -0.02], [3.037, 0.016], [2.9404, 0.016], [2.899, -0.02], [2.8023, -0.02], [2.7609, 0.016], [2.6643, 0.016], [2.6229, -0.02], [2.5263, -0.02], [2.4848, 0.016], [2.3882, 0.016], [2.3468, -0.02], [2.2502, -0.02], [2.2087, 0.016], [2.1121, 0.016], [2.0707, -0.02], [1.9741, -0.02], [1.9327, 0.016], [1.836, 0.016], [1.7946, -0.02], [1.698, -0.02], [1.6566, 0.016], [1.5599, 0.016], [1.5185, -0.02], [1.4219, -0.02], [1.3805, 0.016], [1.2838, 0.016], [1.2424, -0.02], [1.1458, -0.02], [1.1044, 0.016], [1.0077, 0.016], [0.9663, -0.02], [0.8697, -0.02], [0.8283, 0.016], [0.7316, 0.016], [0.6902, -0.02], [0.5936, -0.02], [0.5522, 0.016], [0.4556, 0.016], [0.4141, -0.02], [0.3175, -0.02], [0.2761, 0.016], [0.1795, 0.016], [0.138, -0.02], [0.0414, -0.02], [0.0, 0.016], [-0.0966, 0.016], [-0.138, -0.02], [-0.2347, -0.02], [-0.2761, 0.016], [-0.3727, 0.016], [-0.4141, -0.02], [-0.5108, -0.02], [-0.5522, 0.016], [-0.6488, 0.016], [-0.6902, -0.02], [-0.7869, -0.02], [-0.8283, 0.016], [-0.9249, 0.016], [-0.9663, -0.02], [-1.063, -0.02], [-1.1044, 0.016], [-1.201, 0.016], [-1.2424, -0.02], [-1.3391, -0.02], [-1.3805, 0.016], [-1.4771, 0.016], [-1.5185, -0.02], [-1.6151, -0.02], [-1.6566, 0.016], [-1.7532, 0.016], [-1.7946, -0.02], [-1.8912, -0.02], [-1.9327, 0.016], [-2.0293, 0.016], [-2.0707, -0.02], [-2.1673, -0.02], [-2.2087, 0.016], [-2.3054, 0.016], [-2.3468, -0.02], [-2.4434, -0.02], [-2.4848, 0.016], [-2.5815, 0.016], [-2.6229, -0.02], [-2.7195, -0.02], [-2.7609, 0.016], [-2.8576, 0.016], [-2.899, -0.02], [-2.9956, -0.02], [-3.037, 0.016], [-3.1337, 0.016], [-3.1751, -0.02], [-3.2717, -0.02], [-3.3131, 0.016], [-3.4097, 0.016], [-3.4512, -0.02], [-3.5478, -0.02], [-3.5892, 0.016], [-3.6858, 0.016], [-3.7273, -0.02], [-3.8239, -0.02], [-3.8653, 0.016], [-3.9619, 0.016], [-4.0033, -0.02], [-4.1, -0.02], [-4.1414, 0.016], [-4.238, 0.016], [-4.2794, -0.02], [-4.3761, -0.02], [-4.4175, 0.016], [-4.5141, 0.016], [-4.5555, -0.02], [-4.6522, -0.02], [-4.6936, 0.016], [-4.7902, 0.016], [-4.8316, -0.02], [-4.9283, -0.02], [-4.9697, 0.016], [-5.0663, 0.016], [-5.1077, -0.02], [-5.2044, -0.02], [-5.2458, 0.016], [-5.3424, 0.016], [-5.3838, -0.02], [-5.4804, -0.02], [-5.5219, 0.016], [-5.6185, 0.016], [-5.6599, -0.02], [-5.7565, -0.02], [-5.798, 0.016], [-5.8946, 0.016], [-5.936, -0.02]], "depth": 2.291});
  if (!endpoint_side_wall_l_1) {
    mesh_side_wall_l_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_side_wall_l_1 = new THREE.Mesh(
    mesh_side_wall_l_1Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_side_wall_l_1.name = "Left corrugated side wall";
  if (endpoint_side_wall_l_1) {
    mesh_side_wall_l_1.position.copy(endpoint_side_wall_l_1.midpoint);
    mesh_side_wall_l_1.quaternion.copy(endpoint_side_wall_l_1.quaternion);
  }
  mesh_side_wall_l_1.castShadow = options.castShadow ?? true;
  mesh_side_wall_l_1.receiveShadow = options.receiveShadow ?? true;
  node_side_wall_l_1.add(mesh_side_wall_l_1);
  meshes["side-wall-l"] = mesh_side_wall_l_1;
  colliders["side-wall-l"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.036, 2.2910000000000004, 11.872], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["side-wall-l"] ??= [];
  destructionGroups["side-wall-l"].push(node_side_wall_l_1);

  const endpoint_side_wall_r_2 = makeAttachmentEndpoint(null);
  const node_side_wall_r_2 = new THREE.Group();
  node_side_wall_r_2.name = "Right corrugated side wall__pivot";
  node_side_wall_r_2.scale.set(1, 1, 1);
  if (endpoint_side_wall_r_2) {
    node_side_wall_r_2.position.copy(endpoint_side_wall_r_2.start);
    node_side_wall_r_2.rotation.set(-1.5707963267948966, 0.0, 1.5707963267948966);
  } else {
    node_side_wall_r_2.position.set(-1.183, 0.07, 0.0);
    node_side_wall_r_2.rotation.set(-1.5707963267948966, 0.0, 1.5707963267948966);
  }
  node_side_wall_r_2.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.036, 2.2910000000000004, 11.872], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "side-wall-r", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_side_wall_r_2);
  nodes["side-wall-r"] = node_side_wall_r_2;
  const mesh_side_wall_r_2Geometry = endpoint_side_wall_r_2
    ? new THREE.CylinderGeometry(endpoint_side_wall_r_2.endRadius, endpoint_side_wall_r_2.baseRadius, endpoint_side_wall_r_2.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-5.936, 0], [-5.8946, 0.036], [-5.798, 0.036], [-5.7565, 0], [-5.6599, 0], [-5.6185, 0.036], [-5.5219, 0.036], [-5.4804, 0], [-5.3838, 0], [-5.3424, 0.036], [-5.2458, 0.036], [-5.2044, 0], [-5.1077, 0], [-5.0663, 0.036], [-4.9697, 0.036], [-4.9283, 0], [-4.8316, 0], [-4.7902, 0.036], [-4.6936, 0.036], [-4.6522, 0], [-4.5555, 0], [-4.5141, 0.036], [-4.4175, 0.036], [-4.3761, 0], [-4.2794, 0], [-4.238, 0.036], [-4.1414, 0.036], [-4.1, 0], [-4.0033, 0], [-3.9619, 0.036], [-3.8653, 0.036], [-3.8239, 0], [-3.7273, 0], [-3.6858, 0.036], [-3.5892, 0.036], [-3.5478, 0], [-3.4512, 0], [-3.4097, 0.036], [-3.3131, 0.036], [-3.2717, 0], [-3.1751, 0], [-3.1337, 0.036], [-3.037, 0.036], [-2.9956, 0], [-2.899, 0], [-2.8576, 0.036], [-2.7609, 0.036], [-2.7195, 0], [-2.6229, 0], [-2.5815, 0.036], [-2.4848, 0.036], [-2.4434, 0], [-2.3468, 0], [-2.3054, 0.036], [-2.2087, 0.036], [-2.1673, 0], [-2.0707, 0], [-2.0293, 0.036], [-1.9327, 0.036], [-1.8912, 0], [-1.7946, 0], [-1.7532, 0.036], [-1.6566, 0.036], [-1.6151, 0], [-1.5185, 0], [-1.4771, 0.036], [-1.3805, 0.036], [-1.3391, 0], [-1.2424, 0], [-1.201, 0.036], [-1.1044, 0.036], [-1.063, 0], [-0.9663, 0], [-0.9249, 0.036], [-0.8283, 0.036], [-0.7869, 0], [-0.6902, 0], [-0.6488, 0.036], [-0.5522, 0.036], [-0.5108, 0], [-0.4141, 0], [-0.3727, 0.036], [-0.2761, 0.036], [-0.2347, 0], [-0.138, 0], [-0.0966, 0.036], [0.0, 0.036], [0.0414, 0], [0.138, 0], [0.1795, 0.036], [0.2761, 0.036], [0.3175, 0], [0.4141, 0], [0.4556, 0.036], [0.5522, 0.036], [0.5936, 0], [0.6902, 0], [0.7316, 0.036], [0.8283, 0.036], [0.8697, 0], [0.9663, 0], [1.0077, 0.036], [1.1044, 0.036], [1.1458, 0], [1.2424, 0], [1.2838, 0.036], [1.3805, 0.036], [1.4219, 0], [1.5185, 0], [1.5599, 0.036], [1.6566, 0.036], [1.698, 0], [1.7946, 0], [1.836, 0.036], [1.9327, 0.036], [1.9741, 0], [2.0707, 0], [2.1121, 0.036], [2.2087, 0.036], [2.2502, 0], [2.3468, 0], [2.3882, 0.036], [2.4848, 0.036], [2.5263, 0], [2.6229, 0], [2.6643, 0.036], [2.7609, 0.036], [2.8023, 0], [2.899, 0], [2.9404, 0.036], [3.037, 0.036], [3.0784, 0], [3.1751, 0], [3.2165, 0.036], [3.3131, 0.036], [3.3545, 0], [3.4512, 0], [3.4926, 0.036], [3.5892, 0.036], [3.6306, 0], [3.7273, 0], [3.7687, 0.036], [3.8653, 0.036], [3.9067, 0], [4.0033, 0], [4.0448, 0.036], [4.1414, 0.036], [4.1828, 0], [4.2794, 0], [4.3209, 0.036], [4.4175, 0.036], [4.4589, 0], [4.5555, 0], [4.5969, 0.036], [4.6936, 0.036], [4.735, 0], [4.8316, 0], [4.873, 0.036], [4.9697, 0.036], [5.0111, 0], [5.1077, 0], [5.1491, 0.036], [5.2458, 0.036], [5.2872, 0], [5.3838, 0], [5.4252, 0.036], [5.5219, 0.036], [5.5633, 0], [5.6599, 0], [5.7013, 0.036], [5.798, 0.036], [5.8394, 0], [5.936, 0], [5.936, -0.02], [5.8394, -0.02], [5.798, 0.016], [5.7013, 0.016], [5.6599, -0.02], [5.5633, -0.02], [5.5219, 0.016], [5.4252, 0.016], [5.3838, -0.02], [5.2872, -0.02], [5.2458, 0.016], [5.1491, 0.016], [5.1077, -0.02], [5.0111, -0.02], [4.9697, 0.016], [4.873, 0.016], [4.8316, -0.02], [4.735, -0.02], [4.6936, 0.016], [4.5969, 0.016], [4.5555, -0.02], [4.4589, -0.02], [4.4175, 0.016], [4.3209, 0.016], [4.2794, -0.02], [4.1828, -0.02], [4.1414, 0.016], [4.0448, 0.016], [4.0033, -0.02], [3.9067, -0.02], [3.8653, 0.016], [3.7687, 0.016], [3.7273, -0.02], [3.6306, -0.02], [3.5892, 0.016], [3.4926, 0.016], [3.4512, -0.02], [3.3545, -0.02], [3.3131, 0.016], [3.2165, 0.016], [3.1751, -0.02], [3.0784, -0.02], [3.037, 0.016], [2.9404, 0.016], [2.899, -0.02], [2.8023, -0.02], [2.7609, 0.016], [2.6643, 0.016], [2.6229, -0.02], [2.5263, -0.02], [2.4848, 0.016], [2.3882, 0.016], [2.3468, -0.02], [2.2502, -0.02], [2.2087, 0.016], [2.1121, 0.016], [2.0707, -0.02], [1.9741, -0.02], [1.9327, 0.016], [1.836, 0.016], [1.7946, -0.02], [1.698, -0.02], [1.6566, 0.016], [1.5599, 0.016], [1.5185, -0.02], [1.4219, -0.02], [1.3805, 0.016], [1.2838, 0.016], [1.2424, -0.02], [1.1458, -0.02], [1.1044, 0.016], [1.0077, 0.016], [0.9663, -0.02], [0.8697, -0.02], [0.8283, 0.016], [0.7316, 0.016], [0.6902, -0.02], [0.5936, -0.02], [0.5522, 0.016], [0.4556, 0.016], [0.4141, -0.02], [0.3175, -0.02], [0.2761, 0.016], [0.1795, 0.016], [0.138, -0.02], [0.0414, -0.02], [0.0, 0.016], [-0.0966, 0.016], [-0.138, -0.02], [-0.2347, -0.02], [-0.2761, 0.016], [-0.3727, 0.016], [-0.4141, -0.02], [-0.5108, -0.02], [-0.5522, 0.016], [-0.6488, 0.016], [-0.6902, -0.02], [-0.7869, -0.02], [-0.8283, 0.016], [-0.9249, 0.016], [-0.9663, -0.02], [-1.063, -0.02], [-1.1044, 0.016], [-1.201, 0.016], [-1.2424, -0.02], [-1.3391, -0.02], [-1.3805, 0.016], [-1.4771, 0.016], [-1.5185, -0.02], [-1.6151, -0.02], [-1.6566, 0.016], [-1.7532, 0.016], [-1.7946, -0.02], [-1.8912, -0.02], [-1.9327, 0.016], [-2.0293, 0.016], [-2.0707, -0.02], [-2.1673, -0.02], [-2.2087, 0.016], [-2.3054, 0.016], [-2.3468, -0.02], [-2.4434, -0.02], [-2.4848, 0.016], [-2.5815, 0.016], [-2.6229, -0.02], [-2.7195, -0.02], [-2.7609, 0.016], [-2.8576, 0.016], [-2.899, -0.02], [-2.9956, -0.02], [-3.037, 0.016], [-3.1337, 0.016], [-3.1751, -0.02], [-3.2717, -0.02], [-3.3131, 0.016], [-3.4097, 0.016], [-3.4512, -0.02], [-3.5478, -0.02], [-3.5892, 0.016], [-3.6858, 0.016], [-3.7273, -0.02], [-3.8239, -0.02], [-3.8653, 0.016], [-3.9619, 0.016], [-4.0033, -0.02], [-4.1, -0.02], [-4.1414, 0.016], [-4.238, 0.016], [-4.2794, -0.02], [-4.3761, -0.02], [-4.4175, 0.016], [-4.5141, 0.016], [-4.5555, -0.02], [-4.6522, -0.02], [-4.6936, 0.016], [-4.7902, 0.016], [-4.8316, -0.02], [-4.9283, -0.02], [-4.9697, 0.016], [-5.0663, 0.016], [-5.1077, -0.02], [-5.2044, -0.02], [-5.2458, 0.016], [-5.3424, 0.016], [-5.3838, -0.02], [-5.4804, -0.02], [-5.5219, 0.016], [-5.6185, 0.016], [-5.6599, -0.02], [-5.7565, -0.02], [-5.798, 0.016], [-5.8946, 0.016], [-5.936, -0.02]], "depth": 2.291});
  if (!endpoint_side_wall_r_2) {
    mesh_side_wall_r_2Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_side_wall_r_2 = new THREE.Mesh(
    mesh_side_wall_r_2Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_side_wall_r_2.name = "Right corrugated side wall";
  if (endpoint_side_wall_r_2) {
    mesh_side_wall_r_2.position.copy(endpoint_side_wall_r_2.midpoint);
    mesh_side_wall_r_2.quaternion.copy(endpoint_side_wall_r_2.quaternion);
  }
  mesh_side_wall_r_2.castShadow = options.castShadow ?? true;
  mesh_side_wall_r_2.receiveShadow = options.receiveShadow ?? true;
  node_side_wall_r_2.add(mesh_side_wall_r_2);
  meshes["side-wall-r"] = mesh_side_wall_r_2;
  colliders["side-wall-r"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.036, 2.2910000000000004, 11.872], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["side-wall-r"] ??= [];
  destructionGroups["side-wall-r"].push(node_side_wall_r_2);

  const endpoint_roof_3 = makeAttachmentEndpoint(null);
  const node_roof_3 = new THREE.Group();
  node_roof_3.name = "Roof panel with shallow transverse corrugation__pivot";
  node_roof_3.scale.set(1, 1, 1);
  if (endpoint_roof_3) {
    node_roof_3.position.copy(endpoint_roof_3.start);
    node_roof_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_3.position.set(0.0, 2.481, 0.0);
    node_roof_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_3.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [2.378, 0.03, 11.872], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "roof", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_roof_3);
  nodes["roof"] = node_roof_3;
  const mesh_roof_3Geometry = endpoint_roof_3
    ? new THREE.CylinderGeometry(endpoint_roof_3.endRadius, endpoint_roof_3.baseRadius, endpoint_roof_3.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_3) {
    mesh_roof_3Geometry.scale(2.378, 0.03, 11.872);
  }
  const mesh_roof_3 = new THREE.Mesh(
    mesh_roof_3Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_3.name = "Roof panel with shallow transverse corrugation";
  if (endpoint_roof_3) {
    mesh_roof_3.position.copy(endpoint_roof_3.midpoint);
    mesh_roof_3.quaternion.copy(endpoint_roof_3.quaternion);
  }
  mesh_roof_3.castShadow = options.castShadow ?? true;
  mesh_roof_3.receiveShadow = options.receiveShadow ?? true;
  node_roof_3.add(mesh_roof_3);
  meshes["roof"] = mesh_roof_3;
  colliders["roof"] = {"type": "box", "offset": [0, 0, 0], "scale": [2.378, 0.03, 11.872], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["roof"] ??= [];
  destructionGroups["roof"].push(node_roof_3);

  const endpoint_front_wall_4 = makeAttachmentEndpoint(null);
  const node_front_wall_4 = new THREE.Group();
  node_front_wall_4.name = "Front end wall (blind end)__pivot";
  node_front_wall_4.scale.set(1, 1, 1);
  if (endpoint_front_wall_4) {
    node_front_wall_4.position.copy(endpoint_front_wall_4.start);
    node_front_wall_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_front_wall_4.position.set(0.0, 1.2155, -6.036);
    node_front_wall_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_front_wall_4.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [2.1180000000000003, 2.2910000000000004, 0.04], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "front-wall", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_front_wall_4);
  nodes["front-wall"] = node_front_wall_4;
  const mesh_front_wall_4Geometry = endpoint_front_wall_4
    ? new THREE.CylinderGeometry(endpoint_front_wall_4.endRadius, endpoint_front_wall_4.baseRadius, endpoint_front_wall_4.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_front_wall_4) {
    mesh_front_wall_4Geometry.scale(2.1180000000000003, 2.2910000000000004, 0.04);
  }
  const mesh_front_wall_4 = new THREE.Mesh(
    mesh_front_wall_4Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_front_wall_4.name = "Front end wall (blind end)";
  if (endpoint_front_wall_4) {
    mesh_front_wall_4.position.copy(endpoint_front_wall_4.midpoint);
    mesh_front_wall_4.quaternion.copy(endpoint_front_wall_4.quaternion);
  }
  mesh_front_wall_4.castShadow = options.castShadow ?? true;
  mesh_front_wall_4.receiveShadow = options.receiveShadow ?? true;
  node_front_wall_4.add(mesh_front_wall_4);
  meshes["front-wall"] = mesh_front_wall_4;
  colliders["front-wall"] = {"type": "box", "offset": [0, 0, 0], "scale": [2.1180000000000003, 2.2910000000000004, 0.04], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["front-wall"] ??= [];
  destructionGroups["front-wall"].push(node_front_wall_4);

  const endpoint_post_rear_l_5 = makeAttachmentEndpoint(null);
  const node_post_rear_l_5 = new THREE.Group();
  node_post_rear_l_5.name = "Corner post rear l__pivot";
  node_post_rear_l_5.scale.set(1, 1, 1);
  if (endpoint_post_rear_l_5) {
    node_post_rear_l_5.position.copy(endpoint_post_rear_l_5.start);
    node_post_rear_l_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_rear_l_5.position.set(1.139, 1.2155, 6.016);
    node_post_rear_l_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_rear_l_5.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "post-rear-l", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_post_rear_l_5);
  nodes["post-rear-l"] = node_post_rear_l_5;
  const mesh_post_rear_l_5Geometry = endpoint_post_rear_l_5
    ? new THREE.CylinderGeometry(endpoint_post_rear_l_5.endRadius, endpoint_post_rear_l_5.baseRadius, endpoint_post_rear_l_5.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_post_rear_l_5) {
    mesh_post_rear_l_5Geometry.scale(0.16, 2.3550000000000004, 0.16);
  }
  const mesh_post_rear_l_5 = new THREE.Mesh(
    mesh_post_rear_l_5Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_rear_l_5.name = "Corner post rear l";
  if (endpoint_post_rear_l_5) {
    mesh_post_rear_l_5.position.copy(endpoint_post_rear_l_5.midpoint);
    mesh_post_rear_l_5.quaternion.copy(endpoint_post_rear_l_5.quaternion);
  }
  mesh_post_rear_l_5.castShadow = options.castShadow ?? true;
  mesh_post_rear_l_5.receiveShadow = options.receiveShadow ?? true;
  node_post_rear_l_5.add(mesh_post_rear_l_5);
  meshes["post-rear-l"] = mesh_post_rear_l_5;
  colliders["post-rear-l"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["post-rear-l"] ??= [];
  destructionGroups["post-rear-l"].push(node_post_rear_l_5);

  const endpoint_post_rear_r_6 = makeAttachmentEndpoint(null);
  const node_post_rear_r_6 = new THREE.Group();
  node_post_rear_r_6.name = "Corner post rear r__pivot";
  node_post_rear_r_6.scale.set(1, 1, 1);
  if (endpoint_post_rear_r_6) {
    node_post_rear_r_6.position.copy(endpoint_post_rear_r_6.start);
    node_post_rear_r_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_rear_r_6.position.set(-1.139, 1.2155, 6.016);
    node_post_rear_r_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_rear_r_6.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "post-rear-r", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_post_rear_r_6);
  nodes["post-rear-r"] = node_post_rear_r_6;
  const mesh_post_rear_r_6Geometry = endpoint_post_rear_r_6
    ? new THREE.CylinderGeometry(endpoint_post_rear_r_6.endRadius, endpoint_post_rear_r_6.baseRadius, endpoint_post_rear_r_6.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_post_rear_r_6) {
    mesh_post_rear_r_6Geometry.scale(0.16, 2.3550000000000004, 0.16);
  }
  const mesh_post_rear_r_6 = new THREE.Mesh(
    mesh_post_rear_r_6Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_rear_r_6.name = "Corner post rear r";
  if (endpoint_post_rear_r_6) {
    mesh_post_rear_r_6.position.copy(endpoint_post_rear_r_6.midpoint);
    mesh_post_rear_r_6.quaternion.copy(endpoint_post_rear_r_6.quaternion);
  }
  mesh_post_rear_r_6.castShadow = options.castShadow ?? true;
  mesh_post_rear_r_6.receiveShadow = options.receiveShadow ?? true;
  node_post_rear_r_6.add(mesh_post_rear_r_6);
  meshes["post-rear-r"] = mesh_post_rear_r_6;
  colliders["post-rear-r"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["post-rear-r"] ??= [];
  destructionGroups["post-rear-r"].push(node_post_rear_r_6);

  const endpoint_post_front_l_7 = makeAttachmentEndpoint(null);
  const node_post_front_l_7 = new THREE.Group();
  node_post_front_l_7.name = "Corner post front l__pivot";
  node_post_front_l_7.scale.set(1, 1, 1);
  if (endpoint_post_front_l_7) {
    node_post_front_l_7.position.copy(endpoint_post_front_l_7.start);
    node_post_front_l_7.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_front_l_7.position.set(1.139, 1.2155, -6.016);
    node_post_front_l_7.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_front_l_7.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "post-front-l", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_post_front_l_7);
  nodes["post-front-l"] = node_post_front_l_7;
  const mesh_post_front_l_7Geometry = endpoint_post_front_l_7
    ? new THREE.CylinderGeometry(endpoint_post_front_l_7.endRadius, endpoint_post_front_l_7.baseRadius, endpoint_post_front_l_7.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_post_front_l_7) {
    mesh_post_front_l_7Geometry.scale(0.16, 2.3550000000000004, 0.16);
  }
  const mesh_post_front_l_7 = new THREE.Mesh(
    mesh_post_front_l_7Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_front_l_7.name = "Corner post front l";
  if (endpoint_post_front_l_7) {
    mesh_post_front_l_7.position.copy(endpoint_post_front_l_7.midpoint);
    mesh_post_front_l_7.quaternion.copy(endpoint_post_front_l_7.quaternion);
  }
  mesh_post_front_l_7.castShadow = options.castShadow ?? true;
  mesh_post_front_l_7.receiveShadow = options.receiveShadow ?? true;
  node_post_front_l_7.add(mesh_post_front_l_7);
  meshes["post-front-l"] = mesh_post_front_l_7;
  colliders["post-front-l"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["post-front-l"] ??= [];
  destructionGroups["post-front-l"].push(node_post_front_l_7);

  const endpoint_post_front_r_8 = makeAttachmentEndpoint(null);
  const node_post_front_r_8 = new THREE.Group();
  node_post_front_r_8.name = "Corner post front r__pivot";
  node_post_front_r_8.scale.set(1, 1, 1);
  if (endpoint_post_front_r_8) {
    node_post_front_r_8.position.copy(endpoint_post_front_r_8.start);
    node_post_front_r_8.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_front_r_8.position.set(-1.139, 1.2155, -6.016);
    node_post_front_r_8.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_front_r_8.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "post-front-r", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_post_front_r_8);
  nodes["post-front-r"] = node_post_front_r_8;
  const mesh_post_front_r_8Geometry = endpoint_post_front_r_8
    ? new THREE.CylinderGeometry(endpoint_post_front_r_8.endRadius, endpoint_post_front_r_8.baseRadius, endpoint_post_front_r_8.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_post_front_r_8) {
    mesh_post_front_r_8Geometry.scale(0.16, 2.3550000000000004, 0.16);
  }
  const mesh_post_front_r_8 = new THREE.Mesh(
    mesh_post_front_r_8Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_front_r_8.name = "Corner post front r";
  if (endpoint_post_front_r_8) {
    mesh_post_front_r_8.position.copy(endpoint_post_front_r_8.midpoint);
    mesh_post_front_r_8.quaternion.copy(endpoint_post_front_r_8.quaternion);
  }
  mesh_post_front_r_8.castShadow = options.castShadow ?? true;
  mesh_post_front_r_8.receiveShadow = options.receiveShadow ?? true;
  node_post_front_r_8.add(mesh_post_front_r_8);
  meshes["post-front-r"] = mesh_post_front_r_8;
  colliders["post-front-r"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.16, 2.3550000000000004, 0.16], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["post-front-r"] ??= [];
  destructionGroups["post-front-r"].push(node_post_front_r_8);

  const endpoint_top_rail_l_9 = makeAttachmentEndpoint(null);
  const node_top_rail_l_9 = new THREE.Group();
  node_top_rail_l_9.name = "Top side rail l__pivot";
  node_top_rail_l_9.scale.set(1, 1, 1);
  if (endpoint_top_rail_l_9) {
    node_top_rail_l_9.position.copy(endpoint_top_rail_l_9.start);
    node_top_rail_l_9.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_top_rail_l_9.position.set(1.184, 2.4585, 0.0);
    node_top_rail_l_9.rotation.set(0.0, 0.0, 0.0);
  }
  node_top_rail_l_9.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.105, 11.836], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "top-rail-l", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_top_rail_l_9);
  nodes["top-rail-l"] = node_top_rail_l_9;
  const mesh_top_rail_l_9Geometry = endpoint_top_rail_l_9
    ? new THREE.CylinderGeometry(endpoint_top_rail_l_9.endRadius, endpoint_top_rail_l_9.baseRadius, endpoint_top_rail_l_9.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_top_rail_l_9) {
    mesh_top_rail_l_9Geometry.scale(0.07, 0.105, 11.836);
  }
  const mesh_top_rail_l_9 = new THREE.Mesh(
    mesh_top_rail_l_9Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_top_rail_l_9.name = "Top side rail l";
  if (endpoint_top_rail_l_9) {
    mesh_top_rail_l_9.position.copy(endpoint_top_rail_l_9.midpoint);
    mesh_top_rail_l_9.quaternion.copy(endpoint_top_rail_l_9.quaternion);
  }
  mesh_top_rail_l_9.castShadow = options.castShadow ?? true;
  mesh_top_rail_l_9.receiveShadow = options.receiveShadow ?? true;
  node_top_rail_l_9.add(mesh_top_rail_l_9);
  meshes["top-rail-l"] = mesh_top_rail_l_9;
  colliders["top-rail-l"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.105, 11.836], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["top-rail-l"] ??= [];
  destructionGroups["top-rail-l"].push(node_top_rail_l_9);

  const endpoint_bottom_rail_l_10 = makeAttachmentEndpoint(null);
  const node_bottom_rail_l_10 = new THREE.Group();
  node_bottom_rail_l_10.name = "Bottom side rail l__pivot";
  node_bottom_rail_l_10.scale.set(1, 1, 1);
  if (endpoint_bottom_rail_l_10) {
    node_bottom_rail_l_10.position.copy(endpoint_bottom_rail_l_10.start);
    node_bottom_rail_l_10.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_bottom_rail_l_10.position.set(1.184, -0.005, 0.0);
    node_bottom_rail_l_10.rotation.set(0.0, 0.0, 0.0);
  }
  node_bottom_rail_l_10.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.15, 11.836], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bottom-rail-l", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_bottom_rail_l_10);
  nodes["bottom-rail-l"] = node_bottom_rail_l_10;
  const mesh_bottom_rail_l_10Geometry = endpoint_bottom_rail_l_10
    ? new THREE.CylinderGeometry(endpoint_bottom_rail_l_10.endRadius, endpoint_bottom_rail_l_10.baseRadius, endpoint_bottom_rail_l_10.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_bottom_rail_l_10) {
    mesh_bottom_rail_l_10Geometry.scale(0.07, 0.15, 11.836);
  }
  const mesh_bottom_rail_l_10 = new THREE.Mesh(
    mesh_bottom_rail_l_10Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_bottom_rail_l_10.name = "Bottom side rail l";
  if (endpoint_bottom_rail_l_10) {
    mesh_bottom_rail_l_10.position.copy(endpoint_bottom_rail_l_10.midpoint);
    mesh_bottom_rail_l_10.quaternion.copy(endpoint_bottom_rail_l_10.quaternion);
  }
  mesh_bottom_rail_l_10.castShadow = options.castShadow ?? true;
  mesh_bottom_rail_l_10.receiveShadow = options.receiveShadow ?? true;
  node_bottom_rail_l_10.add(mesh_bottom_rail_l_10);
  meshes["bottom-rail-l"] = mesh_bottom_rail_l_10;
  colliders["bottom-rail-l"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.15, 11.836], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["bottom-rail-l"] ??= [];
  destructionGroups["bottom-rail-l"].push(node_bottom_rail_l_10);

  const endpoint_top_rail_r_11 = makeAttachmentEndpoint(null);
  const node_top_rail_r_11 = new THREE.Group();
  node_top_rail_r_11.name = "Top side rail r__pivot";
  node_top_rail_r_11.scale.set(1, 1, 1);
  if (endpoint_top_rail_r_11) {
    node_top_rail_r_11.position.copy(endpoint_top_rail_r_11.start);
    node_top_rail_r_11.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_top_rail_r_11.position.set(-1.184, 2.4585, 0.0);
    node_top_rail_r_11.rotation.set(0.0, 0.0, 0.0);
  }
  node_top_rail_r_11.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.105, 11.836], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "top-rail-r", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_top_rail_r_11);
  nodes["top-rail-r"] = node_top_rail_r_11;
  const mesh_top_rail_r_11Geometry = endpoint_top_rail_r_11
    ? new THREE.CylinderGeometry(endpoint_top_rail_r_11.endRadius, endpoint_top_rail_r_11.baseRadius, endpoint_top_rail_r_11.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_top_rail_r_11) {
    mesh_top_rail_r_11Geometry.scale(0.07, 0.105, 11.836);
  }
  const mesh_top_rail_r_11 = new THREE.Mesh(
    mesh_top_rail_r_11Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_top_rail_r_11.name = "Top side rail r";
  if (endpoint_top_rail_r_11) {
    mesh_top_rail_r_11.position.copy(endpoint_top_rail_r_11.midpoint);
    mesh_top_rail_r_11.quaternion.copy(endpoint_top_rail_r_11.quaternion);
  }
  mesh_top_rail_r_11.castShadow = options.castShadow ?? true;
  mesh_top_rail_r_11.receiveShadow = options.receiveShadow ?? true;
  node_top_rail_r_11.add(mesh_top_rail_r_11);
  meshes["top-rail-r"] = mesh_top_rail_r_11;
  colliders["top-rail-r"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.105, 11.836], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["top-rail-r"] ??= [];
  destructionGroups["top-rail-r"].push(node_top_rail_r_11);

  const endpoint_bottom_rail_r_12 = makeAttachmentEndpoint(null);
  const node_bottom_rail_r_12 = new THREE.Group();
  node_bottom_rail_r_12.name = "Bottom side rail r__pivot";
  node_bottom_rail_r_12.scale.set(1, 1, 1);
  if (endpoint_bottom_rail_r_12) {
    node_bottom_rail_r_12.position.copy(endpoint_bottom_rail_r_12.start);
    node_bottom_rail_r_12.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_bottom_rail_r_12.position.set(-1.184, -0.005, 0.0);
    node_bottom_rail_r_12.rotation.set(0.0, 0.0, 0.0);
  }
  node_bottom_rail_r_12.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.15, 11.836], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bottom-rail-r", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["floor-deck"] ?? root).add(node_bottom_rail_r_12);
  nodes["bottom-rail-r"] = node_bottom_rail_r_12;
  const mesh_bottom_rail_r_12Geometry = endpoint_bottom_rail_r_12
    ? new THREE.CylinderGeometry(endpoint_bottom_rail_r_12.endRadius, endpoint_bottom_rail_r_12.baseRadius, endpoint_bottom_rail_r_12.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_bottom_rail_r_12) {
    mesh_bottom_rail_r_12Geometry.scale(0.07, 0.15, 11.836);
  }
  const mesh_bottom_rail_r_12 = new THREE.Mesh(
    mesh_bottom_rail_r_12Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_bottom_rail_r_12.name = "Bottom side rail r";
  if (endpoint_bottom_rail_r_12) {
    mesh_bottom_rail_r_12.position.copy(endpoint_bottom_rail_r_12.midpoint);
    mesh_bottom_rail_r_12.quaternion.copy(endpoint_bottom_rail_r_12.quaternion);
  }
  mesh_bottom_rail_r_12.castShadow = options.castShadow ?? true;
  mesh_bottom_rail_r_12.receiveShadow = options.receiveShadow ?? true;
  node_bottom_rail_r_12.add(mesh_bottom_rail_r_12);
  meshes["bottom-rail-r"] = mesh_bottom_rail_r_12;
  colliders["bottom-rail-r"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.07, 0.15, 11.836], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["bottom-rail-r"] ??= [];
  destructionGroups["bottom-rail-r"].push(node_bottom_rail_r_12);

  const endpoint_door_leaf_l_13 = makeAttachmentEndpoint(null);
  const node_door_leaf_l_13 = new THREE.Group();
  node_door_leaf_l_13.name = "Rear door leaf (left)__pivot";
  node_door_leaf_l_13.scale.set(1, 1, 1);
  if (endpoint_door_leaf_l_13) {
    node_door_leaf_l_13.position.copy(endpoint_door_leaf_l_13.start);
    node_door_leaf_l_13.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_door_leaf_l_13.position.set(0.5295, 1.2155, 6.056);
    node_door_leaf_l_13.rotation.set(0.0, 0.0, 0.0);
  }
  node_door_leaf_l_13.userData.actionProfile = {"animationRole": "hinged", "pivot": {"mode": "edge", "localPosition": [0.5295000000000001, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": true, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1.0590000000000002, 2.2910000000000004, 0.05], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "door-leaf-l", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_door_leaf_l_13);
  nodes["door-leaf-l"] = node_door_leaf_l_13;
  const mesh_door_leaf_l_13Geometry = endpoint_door_leaf_l_13
    ? new THREE.CylinderGeometry(endpoint_door_leaf_l_13.endRadius, endpoint_door_leaf_l_13.baseRadius, endpoint_door_leaf_l_13.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_door_leaf_l_13) {
    mesh_door_leaf_l_13Geometry.scale(1.0590000000000002, 2.2910000000000004, 0.05);
  }
  const mesh_door_leaf_l_13 = new THREE.Mesh(
    mesh_door_leaf_l_13Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_door_leaf_l_13.name = "Rear door leaf (left)";
  if (endpoint_door_leaf_l_13) {
    mesh_door_leaf_l_13.position.copy(endpoint_door_leaf_l_13.midpoint);
    mesh_door_leaf_l_13.quaternion.copy(endpoint_door_leaf_l_13.quaternion);
  }
  mesh_door_leaf_l_13.castShadow = options.castShadow ?? true;
  mesh_door_leaf_l_13.receiveShadow = options.receiveShadow ?? true;
  node_door_leaf_l_13.add(mesh_door_leaf_l_13);
  meshes["door-leaf-l"] = mesh_door_leaf_l_13;
  colliders["door-leaf-l"] = {"type": "box", "offset": [0, 0, 0], "scale": [1.0590000000000002, 2.2910000000000004, 0.05], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["door-leaf-l"] ??= [];
  destructionGroups["door-leaf-l"].push(node_door_leaf_l_13);

  const endpoint_door_leaf_r_14 = makeAttachmentEndpoint(null);
  const node_door_leaf_r_14 = new THREE.Group();
  node_door_leaf_r_14.name = "Rear door leaf (right)__pivot";
  node_door_leaf_r_14.scale.set(1, 1, 1);
  if (endpoint_door_leaf_r_14) {
    node_door_leaf_r_14.position.copy(endpoint_door_leaf_r_14.start);
    node_door_leaf_r_14.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_door_leaf_r_14.position.set(-0.5295, 1.2155, 6.056);
    node_door_leaf_r_14.rotation.set(0.0, 0.0, 0.0);
  }
  node_door_leaf_r_14.userData.actionProfile = {"animationRole": "hinged", "pivot": {"mode": "edge", "localPosition": [-0.5295000000000001, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": true, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1.0590000000000002, 2.2910000000000004, 0.05], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "door-leaf-r", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_door_leaf_r_14);
  nodes["door-leaf-r"] = node_door_leaf_r_14;
  const mesh_door_leaf_r_14Geometry = endpoint_door_leaf_r_14
    ? new THREE.CylinderGeometry(endpoint_door_leaf_r_14.endRadius, endpoint_door_leaf_r_14.baseRadius, endpoint_door_leaf_r_14.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_door_leaf_r_14) {
    mesh_door_leaf_r_14Geometry.scale(1.0590000000000002, 2.2910000000000004, 0.05);
  }
  const mesh_door_leaf_r_14 = new THREE.Mesh(
    mesh_door_leaf_r_14Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_door_leaf_r_14.name = "Rear door leaf (right)";
  if (endpoint_door_leaf_r_14) {
    mesh_door_leaf_r_14.position.copy(endpoint_door_leaf_r_14.midpoint);
    mesh_door_leaf_r_14.quaternion.copy(endpoint_door_leaf_r_14.quaternion);
  }
  mesh_door_leaf_r_14.castShadow = options.castShadow ?? true;
  mesh_door_leaf_r_14.receiveShadow = options.receiveShadow ?? true;
  node_door_leaf_r_14.add(mesh_door_leaf_r_14);
  meshes["door-leaf-r"] = mesh_door_leaf_r_14;
  colliders["door-leaf-r"] = {"type": "box", "offset": [0, 0, 0], "scale": [1.0590000000000002, 2.2910000000000004, 0.05], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["door-leaf-r"] ??= [];
  destructionGroups["door-leaf-r"].push(node_door_leaf_r_14);

  const attachment_lock_bar_1_15 = {"parentSocket": "door-leaf-l.surface", "localStart": [0.2965, 0.0, 0.035], "localEnd": [0.2965, 0.0, 0.035], "contactType": "weld", "embedDepth": 0.0, "overlap": 0.002, "gapTolerance": 0.003};
  const endpoint_lock_bar_1_15 = makeAttachmentEndpoint(attachment_lock_bar_1_15);
  const node_lock_bar_1_15 = new THREE.Group();
  node_lock_bar_1_15.name = "Door locking bar 1__pivot";
  node_lock_bar_1_15.scale.set(1, 1, 1);
  if (endpoint_lock_bar_1_15) {
    node_lock_bar_1_15.position.copy(endpoint_lock_bar_1_15.start);
    node_lock_bar_1_15.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_lock_bar_1_15.position.set(0.2965, 0.0, 0.035);
    node_lock_bar_1_15.rotation.set(0.0, 0.0, 0.0);
  }
  node_lock_bar_1_15.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "lock-bar-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["door-leaf-l"] ?? root).add(node_lock_bar_1_15);
  nodes["lock-bar-1"] = node_lock_bar_1_15;
  const mesh_lock_bar_1_15Geometry = endpoint_lock_bar_1_15
    ? new THREE.CylinderGeometry(endpoint_lock_bar_1_15.endRadius, endpoint_lock_bar_1_15.baseRadius, endpoint_lock_bar_1_15.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_lock_bar_1_15) {
    mesh_lock_bar_1_15Geometry.scale(0.034, 2.1993600000000004, 0.034);
  }
  const mesh_lock_bar_1_15 = new THREE.Mesh(
    mesh_lock_bar_1_15Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_lock_bar_1_15.name = "Door locking bar 1";
  if (endpoint_lock_bar_1_15) {
    mesh_lock_bar_1_15.position.copy(endpoint_lock_bar_1_15.midpoint);
    mesh_lock_bar_1_15.quaternion.copy(endpoint_lock_bar_1_15.quaternion);
  }
  mesh_lock_bar_1_15.castShadow = options.castShadow ?? true;
  mesh_lock_bar_1_15.receiveShadow = options.receiveShadow ?? true;
  node_lock_bar_1_15.add(mesh_lock_bar_1_15);
  meshes["lock-bar-1"] = mesh_lock_bar_1_15;
  colliders["lock-bar-1"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["lock-bar-1"] ??= [];
  destructionGroups["lock-bar-1"].push(node_lock_bar_1_15);

  const attachment_lock_bar_2_16 = {"parentSocket": "door-leaf-l.surface", "localStart": [-0.2965, 0.0, 0.035], "localEnd": [-0.2965, 0.0, 0.035], "contactType": "weld", "embedDepth": 0.0, "overlap": 0.002, "gapTolerance": 0.003};
  const endpoint_lock_bar_2_16 = makeAttachmentEndpoint(attachment_lock_bar_2_16);
  const node_lock_bar_2_16 = new THREE.Group();
  node_lock_bar_2_16.name = "Door locking bar 2__pivot";
  node_lock_bar_2_16.scale.set(1, 1, 1);
  if (endpoint_lock_bar_2_16) {
    node_lock_bar_2_16.position.copy(endpoint_lock_bar_2_16.start);
    node_lock_bar_2_16.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_lock_bar_2_16.position.set(-0.2965, 0.0, 0.035);
    node_lock_bar_2_16.rotation.set(0.0, 0.0, 0.0);
  }
  node_lock_bar_2_16.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "lock-bar-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["door-leaf-l"] ?? root).add(node_lock_bar_2_16);
  nodes["lock-bar-2"] = node_lock_bar_2_16;
  const mesh_lock_bar_2_16Geometry = endpoint_lock_bar_2_16
    ? new THREE.CylinderGeometry(endpoint_lock_bar_2_16.endRadius, endpoint_lock_bar_2_16.baseRadius, endpoint_lock_bar_2_16.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_lock_bar_2_16) {
    mesh_lock_bar_2_16Geometry.scale(0.034, 2.1993600000000004, 0.034);
  }
  const mesh_lock_bar_2_16 = new THREE.Mesh(
    mesh_lock_bar_2_16Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_lock_bar_2_16.name = "Door locking bar 2";
  if (endpoint_lock_bar_2_16) {
    mesh_lock_bar_2_16.position.copy(endpoint_lock_bar_2_16.midpoint);
    mesh_lock_bar_2_16.quaternion.copy(endpoint_lock_bar_2_16.quaternion);
  }
  mesh_lock_bar_2_16.castShadow = options.castShadow ?? true;
  mesh_lock_bar_2_16.receiveShadow = options.receiveShadow ?? true;
  node_lock_bar_2_16.add(mesh_lock_bar_2_16);
  meshes["lock-bar-2"] = mesh_lock_bar_2_16;
  colliders["lock-bar-2"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["lock-bar-2"] ??= [];
  destructionGroups["lock-bar-2"].push(node_lock_bar_2_16);

  const attachment_lock_bar_3_17 = {"parentSocket": "door-leaf-r.surface", "localStart": [0.2965, 0.0, 0.035], "localEnd": [0.2965, 0.0, 0.035], "contactType": "weld", "embedDepth": 0.0, "overlap": 0.002, "gapTolerance": 0.003};
  const endpoint_lock_bar_3_17 = makeAttachmentEndpoint(attachment_lock_bar_3_17);
  const node_lock_bar_3_17 = new THREE.Group();
  node_lock_bar_3_17.name = "Door locking bar 3__pivot";
  node_lock_bar_3_17.scale.set(1, 1, 1);
  if (endpoint_lock_bar_3_17) {
    node_lock_bar_3_17.position.copy(endpoint_lock_bar_3_17.start);
    node_lock_bar_3_17.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_lock_bar_3_17.position.set(0.2965, 0.0, 0.035);
    node_lock_bar_3_17.rotation.set(0.0, 0.0, 0.0);
  }
  node_lock_bar_3_17.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "lock-bar-3", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["door-leaf-r"] ?? root).add(node_lock_bar_3_17);
  nodes["lock-bar-3"] = node_lock_bar_3_17;
  const mesh_lock_bar_3_17Geometry = endpoint_lock_bar_3_17
    ? new THREE.CylinderGeometry(endpoint_lock_bar_3_17.endRadius, endpoint_lock_bar_3_17.baseRadius, endpoint_lock_bar_3_17.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_lock_bar_3_17) {
    mesh_lock_bar_3_17Geometry.scale(0.034, 2.1993600000000004, 0.034);
  }
  const mesh_lock_bar_3_17 = new THREE.Mesh(
    mesh_lock_bar_3_17Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_lock_bar_3_17.name = "Door locking bar 3";
  if (endpoint_lock_bar_3_17) {
    mesh_lock_bar_3_17.position.copy(endpoint_lock_bar_3_17.midpoint);
    mesh_lock_bar_3_17.quaternion.copy(endpoint_lock_bar_3_17.quaternion);
  }
  mesh_lock_bar_3_17.castShadow = options.castShadow ?? true;
  mesh_lock_bar_3_17.receiveShadow = options.receiveShadow ?? true;
  node_lock_bar_3_17.add(mesh_lock_bar_3_17);
  meshes["lock-bar-3"] = mesh_lock_bar_3_17;
  colliders["lock-bar-3"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["lock-bar-3"] ??= [];
  destructionGroups["lock-bar-3"].push(node_lock_bar_3_17);

  const attachment_lock_bar_4_18 = {"parentSocket": "door-leaf-r.surface", "localStart": [-0.2965, 0.0, 0.035], "localEnd": [-0.2965, 0.0, 0.035], "contactType": "weld", "embedDepth": 0.0, "overlap": 0.002, "gapTolerance": 0.003};
  const endpoint_lock_bar_4_18 = makeAttachmentEndpoint(attachment_lock_bar_4_18);
  const node_lock_bar_4_18 = new THREE.Group();
  node_lock_bar_4_18.name = "Door locking bar 4__pivot";
  node_lock_bar_4_18.scale.set(1, 1, 1);
  if (endpoint_lock_bar_4_18) {
    node_lock_bar_4_18.position.copy(endpoint_lock_bar_4_18.start);
    node_lock_bar_4_18.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_lock_bar_4_18.position.set(-0.2965, 0.0, 0.035);
    node_lock_bar_4_18.rotation.set(0.0, 0.0, 0.0);
  }
  node_lock_bar_4_18.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "lock-bar-4", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "frame-paint"}};
  (nodes["door-leaf-r"] ?? root).add(node_lock_bar_4_18);
  nodes["lock-bar-4"] = node_lock_bar_4_18;
  const mesh_lock_bar_4_18Geometry = endpoint_lock_bar_4_18
    ? new THREE.CylinderGeometry(endpoint_lock_bar_4_18.endRadius, endpoint_lock_bar_4_18.baseRadius, endpoint_lock_bar_4_18.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_lock_bar_4_18) {
    mesh_lock_bar_4_18Geometry.scale(0.034, 2.1993600000000004, 0.034);
  }
  const mesh_lock_bar_4_18 = new THREE.Mesh(
    mesh_lock_bar_4_18Geometry,
    materialMap["frame-paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_lock_bar_4_18.name = "Door locking bar 4";
  if (endpoint_lock_bar_4_18) {
    mesh_lock_bar_4_18.position.copy(endpoint_lock_bar_4_18.midpoint);
    mesh_lock_bar_4_18.quaternion.copy(endpoint_lock_bar_4_18.quaternion);
  }
  mesh_lock_bar_4_18.castShadow = options.castShadow ?? true;
  mesh_lock_bar_4_18.receiveShadow = options.receiveShadow ?? true;
  node_lock_bar_4_18.add(mesh_lock_bar_4_18);
  meshes["lock-bar-4"] = mesh_lock_bar_4_18;
  colliders["lock-bar-4"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.034, 2.1993600000000004, 0.034], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["lock-bar-4"] ??= [];
  destructionGroups["lock-bar-4"].push(node_lock_bar_4_18);

  const endpoint_casting_1_19 = makeAttachmentEndpoint(null);
  const node_casting_1_19 = new THREE.Group();
  node_casting_1_19.name = "Corner casting 1__pivot";
  node_casting_1_19.scale.set(1, 1, 1);
  if (endpoint_casting_1_19) {
    node_casting_1_19.position.copy(endpoint_casting_1_19.start);
    node_casting_1_19.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_1_19.position.set(1.138, -0.021, 6.007);
    node_casting_1_19.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_1_19.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_1_19);
  nodes["casting-1"] = node_casting_1_19;
  const mesh_casting_1_19Geometry = endpoint_casting_1_19
    ? new THREE.CylinderGeometry(endpoint_casting_1_19.endRadius, endpoint_casting_1_19.baseRadius, endpoint_casting_1_19.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_1_19) {
    mesh_casting_1_19Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_1_19 = new THREE.Mesh(
    mesh_casting_1_19Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_1_19.name = "Corner casting 1";
  if (endpoint_casting_1_19) {
    mesh_casting_1_19.position.copy(endpoint_casting_1_19.midpoint);
    mesh_casting_1_19.quaternion.copy(endpoint_casting_1_19.quaternion);
  }
  mesh_casting_1_19.castShadow = options.castShadow ?? true;
  mesh_casting_1_19.receiveShadow = options.receiveShadow ?? true;
  node_casting_1_19.add(mesh_casting_1_19);
  meshes["casting-1"] = mesh_casting_1_19;
  colliders["casting-1"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-1"] ??= [];
  destructionGroups["casting-1"].push(node_casting_1_19);

  const endpoint_casting_2_20 = makeAttachmentEndpoint(null);
  const node_casting_2_20 = new THREE.Group();
  node_casting_2_20.name = "Corner casting 2__pivot";
  node_casting_2_20.scale.set(1, 1, 1);
  if (endpoint_casting_2_20) {
    node_casting_2_20.position.copy(endpoint_casting_2_20.start);
    node_casting_2_20.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_2_20.position.set(-1.138, -0.021, 6.007);
    node_casting_2_20.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_2_20.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_2_20);
  nodes["casting-2"] = node_casting_2_20;
  const mesh_casting_2_20Geometry = endpoint_casting_2_20
    ? new THREE.CylinderGeometry(endpoint_casting_2_20.endRadius, endpoint_casting_2_20.baseRadius, endpoint_casting_2_20.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_2_20) {
    mesh_casting_2_20Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_2_20 = new THREE.Mesh(
    mesh_casting_2_20Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_2_20.name = "Corner casting 2";
  if (endpoint_casting_2_20) {
    mesh_casting_2_20.position.copy(endpoint_casting_2_20.midpoint);
    mesh_casting_2_20.quaternion.copy(endpoint_casting_2_20.quaternion);
  }
  mesh_casting_2_20.castShadow = options.castShadow ?? true;
  mesh_casting_2_20.receiveShadow = options.receiveShadow ?? true;
  node_casting_2_20.add(mesh_casting_2_20);
  meshes["casting-2"] = mesh_casting_2_20;
  colliders["casting-2"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-2"] ??= [];
  destructionGroups["casting-2"].push(node_casting_2_20);

  const endpoint_casting_3_21 = makeAttachmentEndpoint(null);
  const node_casting_3_21 = new THREE.Group();
  node_casting_3_21.name = "Corner casting 3__pivot";
  node_casting_3_21.scale.set(1, 1, 1);
  if (endpoint_casting_3_21) {
    node_casting_3_21.position.copy(endpoint_casting_3_21.start);
    node_casting_3_21.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_3_21.position.set(1.138, 2.452, 6.007);
    node_casting_3_21.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_3_21.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-3", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_3_21);
  nodes["casting-3"] = node_casting_3_21;
  const mesh_casting_3_21Geometry = endpoint_casting_3_21
    ? new THREE.CylinderGeometry(endpoint_casting_3_21.endRadius, endpoint_casting_3_21.baseRadius, endpoint_casting_3_21.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_3_21) {
    mesh_casting_3_21Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_3_21 = new THREE.Mesh(
    mesh_casting_3_21Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_3_21.name = "Corner casting 3";
  if (endpoint_casting_3_21) {
    mesh_casting_3_21.position.copy(endpoint_casting_3_21.midpoint);
    mesh_casting_3_21.quaternion.copy(endpoint_casting_3_21.quaternion);
  }
  mesh_casting_3_21.castShadow = options.castShadow ?? true;
  mesh_casting_3_21.receiveShadow = options.receiveShadow ?? true;
  node_casting_3_21.add(mesh_casting_3_21);
  meshes["casting-3"] = mesh_casting_3_21;
  colliders["casting-3"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-3"] ??= [];
  destructionGroups["casting-3"].push(node_casting_3_21);

  const endpoint_casting_4_22 = makeAttachmentEndpoint(null);
  const node_casting_4_22 = new THREE.Group();
  node_casting_4_22.name = "Corner casting 4__pivot";
  node_casting_4_22.scale.set(1, 1, 1);
  if (endpoint_casting_4_22) {
    node_casting_4_22.position.copy(endpoint_casting_4_22.start);
    node_casting_4_22.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_4_22.position.set(-1.138, 2.452, 6.007);
    node_casting_4_22.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_4_22.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-4", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_4_22);
  nodes["casting-4"] = node_casting_4_22;
  const mesh_casting_4_22Geometry = endpoint_casting_4_22
    ? new THREE.CylinderGeometry(endpoint_casting_4_22.endRadius, endpoint_casting_4_22.baseRadius, endpoint_casting_4_22.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_4_22) {
    mesh_casting_4_22Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_4_22 = new THREE.Mesh(
    mesh_casting_4_22Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_4_22.name = "Corner casting 4";
  if (endpoint_casting_4_22) {
    mesh_casting_4_22.position.copy(endpoint_casting_4_22.midpoint);
    mesh_casting_4_22.quaternion.copy(endpoint_casting_4_22.quaternion);
  }
  mesh_casting_4_22.castShadow = options.castShadow ?? true;
  mesh_casting_4_22.receiveShadow = options.receiveShadow ?? true;
  node_casting_4_22.add(mesh_casting_4_22);
  meshes["casting-4"] = mesh_casting_4_22;
  colliders["casting-4"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-4"] ??= [];
  destructionGroups["casting-4"].push(node_casting_4_22);

  const endpoint_casting_5_23 = makeAttachmentEndpoint(null);
  const node_casting_5_23 = new THREE.Group();
  node_casting_5_23.name = "Corner casting 5__pivot";
  node_casting_5_23.scale.set(1, 1, 1);
  if (endpoint_casting_5_23) {
    node_casting_5_23.position.copy(endpoint_casting_5_23.start);
    node_casting_5_23.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_5_23.position.set(1.138, -0.021, -6.007);
    node_casting_5_23.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_5_23.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-5", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_5_23);
  nodes["casting-5"] = node_casting_5_23;
  const mesh_casting_5_23Geometry = endpoint_casting_5_23
    ? new THREE.CylinderGeometry(endpoint_casting_5_23.endRadius, endpoint_casting_5_23.baseRadius, endpoint_casting_5_23.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_5_23) {
    mesh_casting_5_23Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_5_23 = new THREE.Mesh(
    mesh_casting_5_23Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_5_23.name = "Corner casting 5";
  if (endpoint_casting_5_23) {
    mesh_casting_5_23.position.copy(endpoint_casting_5_23.midpoint);
    mesh_casting_5_23.quaternion.copy(endpoint_casting_5_23.quaternion);
  }
  mesh_casting_5_23.castShadow = options.castShadow ?? true;
  mesh_casting_5_23.receiveShadow = options.receiveShadow ?? true;
  node_casting_5_23.add(mesh_casting_5_23);
  meshes["casting-5"] = mesh_casting_5_23;
  colliders["casting-5"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-5"] ??= [];
  destructionGroups["casting-5"].push(node_casting_5_23);

  const endpoint_casting_6_24 = makeAttachmentEndpoint(null);
  const node_casting_6_24 = new THREE.Group();
  node_casting_6_24.name = "Corner casting 6__pivot";
  node_casting_6_24.scale.set(1, 1, 1);
  if (endpoint_casting_6_24) {
    node_casting_6_24.position.copy(endpoint_casting_6_24.start);
    node_casting_6_24.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_6_24.position.set(-1.138, -0.021, -6.007);
    node_casting_6_24.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_6_24.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-6", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_6_24);
  nodes["casting-6"] = node_casting_6_24;
  const mesh_casting_6_24Geometry = endpoint_casting_6_24
    ? new THREE.CylinderGeometry(endpoint_casting_6_24.endRadius, endpoint_casting_6_24.baseRadius, endpoint_casting_6_24.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_6_24) {
    mesh_casting_6_24Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_6_24 = new THREE.Mesh(
    mesh_casting_6_24Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_6_24.name = "Corner casting 6";
  if (endpoint_casting_6_24) {
    mesh_casting_6_24.position.copy(endpoint_casting_6_24.midpoint);
    mesh_casting_6_24.quaternion.copy(endpoint_casting_6_24.quaternion);
  }
  mesh_casting_6_24.castShadow = options.castShadow ?? true;
  mesh_casting_6_24.receiveShadow = options.receiveShadow ?? true;
  node_casting_6_24.add(mesh_casting_6_24);
  meshes["casting-6"] = mesh_casting_6_24;
  colliders["casting-6"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-6"] ??= [];
  destructionGroups["casting-6"].push(node_casting_6_24);

  const endpoint_casting_7_25 = makeAttachmentEndpoint(null);
  const node_casting_7_25 = new THREE.Group();
  node_casting_7_25.name = "Corner casting 7__pivot";
  node_casting_7_25.scale.set(1, 1, 1);
  if (endpoint_casting_7_25) {
    node_casting_7_25.position.copy(endpoint_casting_7_25.start);
    node_casting_7_25.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_7_25.position.set(1.138, 2.452, -6.007);
    node_casting_7_25.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_7_25.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-7", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_7_25);
  nodes["casting-7"] = node_casting_7_25;
  const mesh_casting_7_25Geometry = endpoint_casting_7_25
    ? new THREE.CylinderGeometry(endpoint_casting_7_25.endRadius, endpoint_casting_7_25.baseRadius, endpoint_casting_7_25.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_7_25) {
    mesh_casting_7_25Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_7_25 = new THREE.Mesh(
    mesh_casting_7_25Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_7_25.name = "Corner casting 7";
  if (endpoint_casting_7_25) {
    mesh_casting_7_25.position.copy(endpoint_casting_7_25.midpoint);
    mesh_casting_7_25.quaternion.copy(endpoint_casting_7_25.quaternion);
  }
  mesh_casting_7_25.castShadow = options.castShadow ?? true;
  mesh_casting_7_25.receiveShadow = options.receiveShadow ?? true;
  node_casting_7_25.add(mesh_casting_7_25);
  meshes["casting-7"] = mesh_casting_7_25;
  colliders["casting-7"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-7"] ??= [];
  destructionGroups["casting-7"].push(node_casting_7_25);

  const endpoint_casting_8_26 = makeAttachmentEndpoint(null);
  const node_casting_8_26 = new THREE.Group();
  node_casting_8_26.name = "Corner casting 8__pivot";
  node_casting_8_26.scale.set(1, 1, 1);
  if (endpoint_casting_8_26) {
    node_casting_8_26.position.copy(endpoint_casting_8_26.start);
    node_casting_8_26.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_casting_8_26.position.set(-1.138, 2.452, -6.007);
    node_casting_8_26.rotation.set(0.0, 0.0, 0.0);
  }
  node_casting_8_26.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "casting-8", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "casting"}};
  (nodes["floor-deck"] ?? root).add(node_casting_8_26);
  nodes["casting-8"] = node_casting_8_26;
  const mesh_casting_8_26Geometry = endpoint_casting_8_26
    ? new THREE.CylinderGeometry(endpoint_casting_8_26.endRadius, endpoint_casting_8_26.baseRadius, endpoint_casting_8_26.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_casting_8_26) {
    mesh_casting_8_26Geometry.scale(0.162, 0.118, 0.178);
  }
  const mesh_casting_8_26 = new THREE.Mesh(
    mesh_casting_8_26Geometry,
    materialMap["casting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_casting_8_26.name = "Corner casting 8";
  if (endpoint_casting_8_26) {
    mesh_casting_8_26.position.copy(endpoint_casting_8_26.midpoint);
    mesh_casting_8_26.quaternion.copy(endpoint_casting_8_26.quaternion);
  }
  mesh_casting_8_26.castShadow = options.castShadow ?? true;
  mesh_casting_8_26.receiveShadow = options.receiveShadow ?? true;
  node_casting_8_26.add(mesh_casting_8_26);
  meshes["casting-8"] = mesh_casting_8_26;
  colliders["casting-8"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.162, 0.118, 0.178], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["casting-8"] ??= [];
  destructionGroups["casting-8"].push(node_casting_8_26);

  const endpoint_data_plate_mesh_27 = makeAttachmentEndpoint(null);
  const node_data_plate_mesh_27 = new THREE.Group();
  node_data_plate_mesh_27.name = "CSC data plate__pivot";
  node_data_plate_mesh_27.scale.set(1, 1, 1);
  if (endpoint_data_plate_mesh_27) {
    node_data_plate_mesh_27.position.copy(endpoint_data_plate_mesh_27.start);
    node_data_plate_mesh_27.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_data_plate_mesh_27.position.set(1.223, 0.62, 4.896);
    node_data_plate_mesh_27.rotation.set(0.0, 0.0, 0.0);
  }
  node_data_plate_mesh_27.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.8}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [0.006, 0.2, 0.32], "isTrigger": false, "notes": "box proxy"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "data-plate-mesh", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "paint"}};
  (nodes["floor-deck"] ?? root).add(node_data_plate_mesh_27);
  nodes["data-plate-mesh"] = node_data_plate_mesh_27;
  const mesh_data_plate_mesh_27Geometry = endpoint_data_plate_mesh_27
    ? new THREE.CylinderGeometry(endpoint_data_plate_mesh_27.endRadius, endpoint_data_plate_mesh_27.baseRadius, endpoint_data_plate_mesh_27.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_data_plate_mesh_27) {
    mesh_data_plate_mesh_27Geometry.scale(0.006, 0.2, 0.32);
  }
  const mesh_data_plate_mesh_27 = new THREE.Mesh(
    mesh_data_plate_mesh_27Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_data_plate_mesh_27.name = "CSC data plate";
  if (endpoint_data_plate_mesh_27) {
    mesh_data_plate_mesh_27.position.copy(endpoint_data_plate_mesh_27.midpoint);
    mesh_data_plate_mesh_27.quaternion.copy(endpoint_data_plate_mesh_27.quaternion);
  }
  mesh_data_plate_mesh_27.castShadow = options.castShadow ?? true;
  mesh_data_plate_mesh_27.receiveShadow = options.receiveShadow ?? true;
  node_data_plate_mesh_27.add(mesh_data_plate_mesh_27);
  meshes["data-plate-mesh"] = mesh_data_plate_mesh_27;
  colliders["data-plate-mesh"] = {"type": "box", "offset": [0, 0, 0], "scale": [0.006, 0.2, 0.32], "isTrigger": false, "notes": "box proxy"};
  destructionGroups["data-plate-mesh"] ??= [];
  destructionGroups["data-plate-mesh"].push(node_data_plate_mesh_27);
  // repetition system "corner-castings" describes 8 parts that are already built individually; not instanced.
  // repetition system "door-lock-bars" describes 4 parts that are already built individually; not instanced.
  // repetition system "side-corrugation" describes 2 parts that are already built individually; not instanced.

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createISO40ftDryContainerLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "ISO 40ft dry container look-dev lights";
  const hemi = new THREE.HemisphereLight(
    mode === 'reference' ? 0xfff0d6 : 0xf2f4ff,
    0x363b42,
    mode === 'grazing' ? 0.28 : mode === 'reference' ? 0.72 : 0.6,
  );
  lights.add(hemi);
  const key = new THREE.DirectionalLight(
    mode === 'reference' ? 0xffcf8a : 0xfff4e8,
    mode === 'grazing' ? 4.2 : mode === 'reference' ? 2.6 : 1.7,
  );
  if (mode === 'grazing') key.position.set(7.5, 1.1, 4.0);
  else if (mode === 'reference') key.position.set(-4.5, 7.5, 5.0);
  else key.position.set(-9.0, 13.0, 11.0);  // escala del contenedor (12 m)
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  key.shadow.bias = -0.00025;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 7;
  key.shadow.blurSamples = 24;
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 60;
  key.shadow.camera.left = -9;
  key.shadow.camera.right = 9;
  key.shadow.camera.top = 9;
  key.shadow.camera.bottom = -9;
  key.shadow.camera.updateProjectionMatrix();
  lights.add(key);
  const fill = new THREE.DirectionalLight(0xa8c4ff, mode === 'grazing' ? 0.12 : 0.42);
  fill.position.set(4.0, 3.0, 3.5);
  lights.add(fill);
  const rim = new THREE.DirectionalLight(0xfff1c4, mode === 'grazing' ? 0.28 : 0.85);
  rim.position.set(0.5, 4.5, -6.0);
  lights.add(rim);
  // contacto: plano de sombra bajo la caja (lightingFromPhoto: contact shadow, opacity 0.25)
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.25 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.001; ground.receiveShadow = true; ground.name = 'contact-shadow';
  lights.add(ground);
  lights.userData.reviewMode = mode;
  lights.userData.lightingFromPhoto = ["key: directional sun from upper-left-front, intensity 2.4, warm white #FFF4E6, casts soft shadow", "fill: hemisphere sky #DCE6F2 / ground #6E6A60, intensity 0.9", "rim: directional from behind-right, intensity 0.6, cool #CFE0FF to separate the box from the page ground", "exposure 1.0 with ACES filmic tone mapping, sRGB output", "contact shadow: soft ground shadow plane under the box (shadow-only material, opacity 0.25)"];
  lights.userData.lookDevTargets = {};
  return lights;
}

// PBR materials (clearcoat/iridescence/transmission/anisotropy) need an environment
// map to visually behave as intended — call this once per renderer and assign the
// result to scene.environment before rendering. No external HDR asset required.
export function createISO40ftDryContainerEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  return texture;
}

// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameISO40ftDryContainerCamera(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  options: { margin?: number; azimuthDeg?: number; elevationDeg?: number } = {},
): void {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const margin = options.margin ?? 1.15;
  const maxDim = Math.max(size.x, size.y, size.z) * margin;
  const fov = (camera.fov * Math.PI) / 180;
  // distance so the largest object dimension fits vertically in the frame
  const distance = (maxDim / 2) / Math.tan(fov / 2);
  const az = ((options.azimuthDeg ?? 0) * Math.PI) / 180;
  const el = ((options.elevationDeg ?? 0) * Math.PI) / 180;
  const dir = new THREE.Vector3(
    Math.sin(az) * Math.cos(el),
    Math.sin(el),
    Math.cos(az) * Math.cos(el),
  );
  camera.position.copy(center).addScaledVector(dir, distance);
  camera.near = Math.max(0.01, distance - maxDim);
  camera.far = distance + maxDim * 2;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}

// Plan 1.3 §3.2c — PRESENTATION composer (DOF + bloom). CRITICAL (R-POSTFX): this is
// for the showcase/hero render ONLY. The Divine Eye's EVALUATION render MUST use a
// plain renderer with NO composer — bloom blows highlights and DOF blurs edges, which
// would corrupt the deterministic IoU/DCD/edge/blowout signals. Enable dof/bloom ONLY
// when the reference photo actually exhibits them (detect_reference_effects.py authorizes).

export function configureISO40ftDryContainerRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

