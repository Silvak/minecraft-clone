import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import * as textures from "../images/textures";
import { useVoxel } from "../hooks/useVoxel";

const VoxelCube = ({ position = [0, 0, 0] }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position, // [y, z, x]
    geometry,
  }));

  // prettier-ignore
  const vertices = new Float32Array([
  -1, -1, -1, // 0
   1, -1, -1, // 1
   1,  1, -1, // 2
  -1,  1, -1, // 3
  -1, -1,  1, // 4
   1, -1,  1, // 5
   1,  1,  1, // 6
  -1,  1,  1, // 7
]);
  // prettier-ignore
  const faces = new THREE.BufferAttribute(
  new Uint16Array([
    0, 1, 2, // Cara trasera
    0, 2, 3, // Cara trasera
    4, 5, 6, // Cara delantera
    4, 6, 7, // Cara delantera
   
    0, 3, 4, // Inferior
    3, 7, 4, // Inferior
    0, 1, 2, // Superior
    0, 2, 3, // Superior
  ]),
  1
);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(faces);

  const activeTexture = textures["glass" + "Texture"];

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" />
      <meshPhongMaterial color={"red"} wireframe />
    </mesh>
  );
};

export const Terrain = ({ id, position, texture }) => {
  const cubesMatrix = useVoxel(1); // 2x2 matriz de cubos
  return (
    <>
      {cubesMatrix.map((cubePosition, index) => (
        <VoxelCube key={index} position={cubePosition} />
      ))}
    </>
  );
};
