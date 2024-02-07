import * as THREE from "three";

export const TEXTURE_LOADER = new THREE.TextureLoader();
export const TEXTURE = TEXTURE_LOADER.load("/img/zerodeleo.png");

export const TEXTURE_ENV_LOADER = new THREE.CubeTextureLoader();
export const TEXTURE_ENV = TEXTURE_ENV_LOADER.load([
  "/textures/environmentMaps/0/px.png",
  "/textures/environmentMaps/0/nx.png",
  "/textures/environmentMaps/0/py.png",
  "/textures/environmentMaps/0/ny.png",
  "/textures/environmentMaps/0/pz.png",
  "/textures/environmentMaps/0/nz.png",
]);
