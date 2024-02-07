import * as THREE from "three";

export const AMBIENT_LIGHT = new THREE.AmbientLight("#fff", 0.7);

export const DIRECTIONAL_LIGHT = new THREE.DirectionalLight("#fff", 0.2);
DIRECTIONAL_LIGHT.shadow.camera.far = 25;
DIRECTIONAL_LIGHT.shadow.camera.left = -7;
DIRECTIONAL_LIGHT.shadow.camera.top = 7;
DIRECTIONAL_LIGHT.shadow.camera.right = 7;
DIRECTIONAL_LIGHT.shadow.camera.bottom = -7;
DIRECTIONAL_LIGHT.position.set(5, 5, 5);
