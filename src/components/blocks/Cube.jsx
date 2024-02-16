import { useStore } from "../../hooks/useStore";
import { useBox } from "@react-three/cannon";
import * as textures from "../../images/textures";
import { useState } from "react";

export const Cube = ({ texture, geometry }) => {
  //const activeTexture = textures[te Texture"];

  const activeTexture = textures["grass" + "Texture"];
  activeTexture.repeat.set(100, 100);

  return (
    <mesh geometry={geometry}>
      <meshPhongMaterial attach="material" map={activeTexture} wireframe />
    </mesh>
  );
};
