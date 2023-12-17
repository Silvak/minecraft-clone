import { grassImg, dirtImg, stoneImg, oakImg, glassImg } from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const stoneTexture = new TextureLoader().load(stoneImg);
const oakTexture = new TextureLoader().load(oakImg);
const glassTexture = new TextureLoader().load(glassImg);

const textures = [
  groundTexture,
  dirtTexture,
  stoneTexture,
  oakTexture,
  glassTexture,
];

textures.forEach((texture) => {
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = NearestFilter;
});

export { groundTexture, dirtTexture, stoneTexture, oakTexture, glassTexture };
