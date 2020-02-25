import {Engine} from "./Engine";
import {FpsMeter} from "./components/FpsMeter";
import {Background} from "./components/Background";

export class App {

    public engine:Engine;

    constructor(engine:Engine) {
        this.engine = engine;
    }

    public start():App {
        this.engine.render.run();
        return this;
    }

    public addBackground():App {
        new Background(this.engine);
        return this;
    }

    public addFpsMeter():App {
        let fpsMeter = new FpsMeter(60);
        this.engine.render.addPreRenderAction(fpsMeter.render.bind(fpsMeter));
        fpsMeter.addTo(this.engine.container);
        return this;
    }
}