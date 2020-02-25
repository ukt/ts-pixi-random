import {Engine} from "./app/Engine"
import {App} from "./app/app";

const params = {
    backgroundColor: 0x000000,
    canvasW: 1800,
    canvasH: 900
};
const engine = new Engine(params.canvasW, params.canvasH, "game");
window.onload = load;

function load() {
    new App(engine)
        .addFpsMeter()
        .addBackground()
        .start();
}