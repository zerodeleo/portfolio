import * as THREE from 'three';
import { AMBIENT_LIGHT, DIRECTIONAL_LIGHT } from '../lights';
import { CUBE_MESH, PLANE_MESH } from '../geometries';
import { DIRECTIONAL_LIGHT_CAMERA_HELPER } from '../debug/helpers';

export const SCENE = new THREE.Scene();

SCENE
  // Lights
  .add(AMBIENT_LIGHT)
  .add(DIRECTIONAL_LIGHT)
  // Geometries
  .add(CUBE_MESH)
  .add(PLANE_MESH)
  // Helpers
  .add(DIRECTIONAL_LIGHT_CAMERA_HELPER);
