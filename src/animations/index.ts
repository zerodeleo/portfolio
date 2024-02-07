import { SCENE } from "../scene";
import { CAMERA } from "../camera";
import { RENDERER } from "../renderer";
import { CUBE_MESH } from "../geometries";
import { CONTROLS } from "../controls";
import { WORLD } from "../physics/worlds";
import { CUBE_BODY } from "../physics/bodies/intex";
import * as THREE from "three";

const SPEED = 1;
let oldElapsedTime = 0;

const clock = new THREE.Clock();

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime;

  // Update physics
  WORLD.step(1 / 60, deltaTime, 3);

  // Update Object
  CUBE_MESH.position.x = CUBE_BODY.position.x;
  CUBE_MESH.position.y = CUBE_BODY.position.y;
  CUBE_MESH.position.z = CUBE_BODY.position.z;

  // CUBE_MESH.rotation.x = elapsedTime * SPEED;
  // CUBE_MESH.rotation.y = elapsedTime * SPEED;

  // Update controls
  CONTROLS.update();

  // CAMERA.lookAt(CUBE_MESH.position);
  RENDERER.render(SCENE, CAMERA);
  window.requestAnimationFrame(tick);
};
