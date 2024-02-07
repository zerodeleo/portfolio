import * as THREE from "three";

import { MATERIAL_GRAY_400, MATERIAL_PINK_900 } from "../materials";

export const CUBE_VEC3_SIZE = new THREE.Vector3(3, 3, 3);
const CUBE_GEOMETRY = new THREE.BoxGeometry(
  CUBE_VEC3_SIZE.x,
  CUBE_VEC3_SIZE.y,
  CUBE_VEC3_SIZE.z
);
export const CUBE_MESH = new THREE.Mesh(CUBE_GEOMETRY, MATERIAL_PINK_900);
export const CUBE_VEC3_POSITION = new THREE.Vector3(0, 10, 0);
CUBE_MESH.position.set(
  CUBE_VEC3_POSITION.x,
  CUBE_VEC3_POSITION.y,
  CUBE_VEC3_POSITION.z
);

export const PLANE_VEC2_SIZE = new THREE.Vector2(10, 10);
const PLANE_GEOMETRY = new THREE.PlaneGeometry(
  PLANE_VEC2_SIZE.x,
  PLANE_VEC2_SIZE.y
);
export const PLANE_VEC3_POSITION = new THREE.Vector3(0, -1, 0);
export const PLANE_MESH = new THREE.Mesh(PLANE_GEOMETRY, MATERIAL_GRAY_400);
PLANE_MESH.position.set(
  PLANE_VEC3_POSITION.x,
  PLANE_VEC3_POSITION.y,
  PLANE_VEC3_POSITION.z
);
PLANE_MESH.rotation.x = -Math.PI * 0.5;
