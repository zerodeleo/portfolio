import CANNON from "cannon";
import {
  CUBE_VEC3_POSITION,
  CUBE_VEC3_SIZE,
  PLANE_MESH,
  PLANE_VEC3_POSITION,
} from "../../geometries";

const CUBE_VEC3_SIZE_CANNON = new CANNON.Vec3(
  CUBE_VEC3_SIZE.x,
  CUBE_VEC3_SIZE.y,
  CUBE_VEC3_SIZE.z
);
const CUBE_VEC3_POSITION_CANNON = new CANNON.Vec3(
  CUBE_VEC3_POSITION.x,
  CUBE_VEC3_POSITION.y,
  CUBE_VEC3_POSITION.z
);
const CUBE_SHAPE = new CANNON.Box(CUBE_VEC3_SIZE_CANNON);
export const CUBE_BODY = new CANNON.Body({
  mass: 1,
  position: CUBE_VEC3_POSITION_CANNON,
  shape: CUBE_SHAPE,
});

console.log(PLANE_VEC3_POSITION.y);
const PLANE_VEC3_POSITION_CANNON = new CANNON.Vec3(
  PLANE_VEC3_POSITION.x,
  PLANE_VEC3_POSITION.y - 1.5,
  PLANE_VEC3_POSITION.z
);
const PLANE_SHAPE = new CANNON.Plane();
export const PLANE_BODY = new CANNON.Body({
  mass: 0,
  position: PLANE_VEC3_POSITION_CANNON,
  shape: PLANE_SHAPE,
});

PLANE_BODY.quaternion.setFromAxisAngle(
  new CANNON.Vec3(-1, 0, 0),
  Math.PI * 0.5
);
