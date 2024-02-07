import * as THREE from 'three';
import { CANVAS as canvas } from '../canvas';
import { WINDOW_SIZE } from '../util';

// @ts-ignore TODO: upgrade @types-three when available
THREE.ColorManagement.enabled = false;

export const RENDERER = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
// @ts-ignore
RENDERER.outputColorSpace = THREE.LinearSRGBColorSpace;
RENDERER.setSize(WINDOW_SIZE.width, WINDOW_SIZE.height);
RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2));
