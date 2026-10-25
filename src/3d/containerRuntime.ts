import * as THREE from 'three';
// Bisagras de las puertas: cada hoja cuelga de un grupo en su borde exterior (junto al poste).
export function mountDoorHinges(model: THREE.Object3D): (t: number) => void {
  const rt = (model as any).userData.sculptRuntime; const nodes = rt?.nodes ?? {};
  const hinges: [THREE.Group, number][] = [];
  for (const [id, sign] of [['door-leaf-l', 1], ['door-leaf-r', -1]] as const) {
    const leaf = nodes[id]; if (!leaf) continue;
    const mesh = rt.meshes[id]; const box = new THREE.Box3().setFromObject(mesh);
    const halfW = (box.max.x - box.min.x) / 2;
    const hinge = new THREE.Group(); hinge.name = id + '__hinge';
    leaf.parent.add(hinge);
    hinge.position.copy(leaf.position).add(new THREE.Vector3(sign * halfW, 0, 0));
    hinge.add(leaf); leaf.position.set(-sign * halfW, 0, 0);
    hinges.push([hinge, sign]);
  }
  // t en 0..1: 0 cerrada, 1 abierta a 110° (más abre la hoja contra el costado y la atraviesa)
  return (t: number) => { for (const [h, sign] of hinges) h.rotation.y = sign * t * THREE.MathUtils.degToRad(110); };
}

// Vista explotada: escala la disposición de las piezas respecto al centro (no las empuja todas igual).
export function mountExplode(model: THREE.Object3D): (t: number) => void {
  const rt = (model as any).userData.sculptRuntime; const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};
  model.updateMatrixWorld(true);
  const center = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
  const parts = Object.entries(meshes).filter(([id]) => id !== 'floor-deck').map(([id, mesh]) => {
    const c = new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3());
    return { mesh, base: mesh.position.clone(), dir: c.sub(center).multiply(new THREE.Vector3(0.35, 0.8, 0.12)) };
  });
  return (t: number) => {
    for (const p of parts) {
      const local = p.dir.clone().multiplyScalar(t);
      p.mesh.position.copy(p.base).add(p.mesh.parent ? p.mesh.parent.worldToLocal(local.add(p.mesh.parent.getWorldPosition(new THREE.Vector3()))).sub(p.mesh.parent.worldToLocal(p.mesh.parent.getWorldPosition(new THREE.Vector3()))) : local);
    }
  };
}

// Selección: devuelve el id de la pieza bajo el puntero (sculptRuntime.meshes).
export function pickPart(model: THREE.Object3D, camera: THREE.Camera, ndc: THREE.Vector2): string | null {
  const rt = (model as any).userData.sculptRuntime; const byMesh = new Map<THREE.Object3D, string>();
  for (const [id, mesh] of Object.entries(rt?.meshes ?? {})) byMesh.set(mesh as THREE.Object3D, id);
  const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects([...byMesh.keys()], false)[0];
  return hit ? byMesh.get(hit.object) ?? null : null;
}
