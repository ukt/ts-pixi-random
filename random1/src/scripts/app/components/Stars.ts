import {Engine} from "../Engine";
import Sprite = PIXI.Sprite;

export class Stars {

    constructor(private engine:Engine) {
        for (let i = 0; i < 18000; i++) {
            let x = i * .125;
            let y = engine.renderer.view.height * .5 + Math.sin(i / 2500) * 200;
            this.addStar(x, y);
        }
    }

    private addStar(x:number, y:number) {
        let texture = PIXI.Texture.from("images/star.png");
        let sprite = new Sprite(texture);
        this.engine.stage.addChild(sprite);
        sprite.x = x;
        sprite.y = y;
        sprite.scale.set(0.02, 0.02);
        this.engine.render.addPreRenderAction(function () {
            sprite.y += Math.random() - 0.5;
        });
    }
}