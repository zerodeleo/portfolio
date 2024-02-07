import * as THREE from "three";
import { SCENE } from "../scene";
import { ASPECT_RATIO } from "../util";

export const CAMERA = new THREE.PerspectiveCamera(75, ASPECT_RATIO);
CAMERA.position.set(-10, 10, 10);

SCENE.add(CAMERA);
