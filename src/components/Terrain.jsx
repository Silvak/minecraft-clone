import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import * as textures from "../images/textures";
import { useVoxel } from "../hooks/useVoxel";
import VoxelWorld from "../hooks/useVoxel";

const VoxelCube = ({ position = [0, 0, 0], deletedSides = [] }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position, // [y, z, x]
  }));

  const geometry = new THREE.BufferGeometry();

  const vertices = new Float32Array(24); // 8 vértices * 3 coordenadas por vértice
  const vertexIndexMap = {};

  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  return (
    <mesh ref={ref} geometry={geometry}>
      <meshPhongMaterial color={"red"} wireframe />
    </mesh>
  );
};

export const Terrain = ({ id, position, texture }) => {
  const cubesMatrix = useVoxel(1); // 2x2 matriz de cubos
  const cellSize = 32;

  const world = new VoxelWorld(cellSize);

  for (let y = 0; y < cellSize; ++y) {
    for (let z = 0; z < cellSize; ++z) {
      for (let x = 0; x < cellSize; ++x) {
        world.setVoxel(x, y, z, 1);
      }
    }
  }

  const { positions, normals, indices } = world.generateGeometryDataForCell(
    0,
    0,
    0
  );
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.MeshLambertMaterial({ color: "green" });

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
      <meshPhongMaterial color={"red"} wireframe />
    </mesh>
  );
};
