import CANNON from "cannon";
import { CUBE_BODY, PLANE_BODY } from "../bodies/intex";

export const WORLD = new CANNON.World();
WORLD.gravity.set(0, -9.82, 0);

WORLD.addBody(CUBE_BODY);
WORLD.addBody(PLANE_BODY);
