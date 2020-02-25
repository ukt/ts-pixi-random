import {Engine} from "../Engine";
import Sprite = PIXI.Sprite;

export class Background {

    constructor(engine:Engine) {
        const backgroundTexture = PIXI.Texture.from('./images/back/random_bg_1.png');
        const background = new Sprite(backgroundTexture);
        engine.stage.addChildAt(background, 0);
        background.width = engine.renderer.view.width;
        background.height = engine.renderer.view.height;
    }

}