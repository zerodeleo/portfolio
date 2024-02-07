import * as THREE from "three";
import { DIRECTIONAL_LIGHT } from "../lights";
import { RENDERER } from "../renderer";
import { CUBE_MESH, PLANE_MESH } from "../geometries";

type Shadow = { softShadowMap: boolean };

export const shadow = ({ softShadowMap }: Shadow) => {
  RENDERER.shadowMap.enabled = true;

  /** GEOMETRIES
   * Casters and recievers
   */
  CUBE_MESH.castShadow = true;
  PLANE_MESH.receiveShadow = true;

  /** LIGHTS
   * Only the following types of lights support shadows: PointLight DirectionalLight SpotLight
   */
  DIRECTIONAL_LIGHT.castShadow = true;
  DIRECTIONAL_LIGHT.shadow.mapSize.set(1024, 1024);

  if (softShadowMap) {
    RENDERER.shadowMap.type = THREE.PCFSoftShadowMap;
  }
};
