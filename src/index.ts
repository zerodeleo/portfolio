import "./styles/style.css";
import { RENDERER } from "./renderer";
import { SCENE } from "./scene";
import { CAMERA } from "./camera";
import { listen } from "./listeners";
import { tick } from "./animations";
import { debug } from "./debug/gui";
import { shadow } from "./shadows";
import { showHelpers } from "./debug/helpers";
import { loadFont } from "./text";

shadow({ softShadowMap: true });
loadFont();
listen();
tick();
debug();
showHelpers({ directionalLight: false });

RENDERER.render(SCENE, CAMERA);
