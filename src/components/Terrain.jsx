import * as THREE from "three";
import { useChunk } from "../hooks/useChunk";

const { newChunk, generateGeometryDataForCell } = useChunk();
newChunk();

export const Terrain = ({ id }) => {
  const { positions, normals, indices } = generateGeometryDataForCell(0, 0, 0);
  const geometry = new THREE.BufferGeometry();

  const positionNumComponents = 3;
  const normalNumComponents = 3;

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      new Float32Array(positions),
      positionNumComponents
    )
  );
  geometry.setAttribute(
    "normal",
    new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents)
  );
  geometry.setIndex(indices);

  return (
    <mesh geometry={geometry}>
      <meshPhongMaterial color={"green"} wireframe />
    </mesh>
  );
};
