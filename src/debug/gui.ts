import * as dat from "lil-gui";
import { CUBE_MESH } from "../geometries";
import { AMBIENT_LIGHT, DIRECTIONAL_LIGHT } from "../lights";

export const debug = () => {
  const gui = new dat.GUI();
  gui.close();

  const CUBE_FOLDER = gui.addFolder("Cube");
  CUBE_FOLDER.add(CUBE_MESH, "visible");
  CUBE_FOLDER.add(CUBE_MESH.position, "x", -10, 10, 0.1);
  CUBE_FOLDER.add(CUBE_MESH.position, "y", -10, 10, 0.1);
  CUBE_FOLDER.add(CUBE_MESH.position, "z", -10, 10, 0.1);
  CUBE_FOLDER.close();

  const AMBIENT_LIGHT_FOLDER = gui.addFolder("Ambient Light");
  AMBIENT_LIGHT_FOLDER.add(AMBIENT_LIGHT, "visible");
  AMBIENT_LIGHT_FOLDER.add(AMBIENT_LIGHT, "intensity")
    .min(0)
    .max(1)
    .step(0.001);
  AMBIENT_LIGHT_FOLDER.addColor(AMBIENT_LIGHT, "color");
  AMBIENT_LIGHT_FOLDER.close();

  const DIRECTIONAL_LIGHT_FOLDER = gui.addFolder("Directional Light");
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT, "visible");
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT.position, "x", -10, 10, 0.001);
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT.position, "y", -10, 10, 0.001);
  DIRECTIONAL_LIGHT_FOLDER.add(DIRECTIONAL_LIGHT.position, "z", -10, 10, 0.001);
  DIRECTIONAL_LIGHT_FOLDER.close();
};
