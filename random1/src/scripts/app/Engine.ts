/// <reference path="./../../../node_modules/pixi-typescript/pixi.js.d.ts" />
import PIXI = require("pixi.js");
import {Render} from "./render/Render";

export class Engine {
    public container:HTMLElement;
    public loader:PIXI.loaders.Loader;
    public renderer:PIXI.SystemRenderer;
    public stage:PIXI.Container;
    public graphics:PIXI.Graphics;
    public fps:int;
    public render:Render;
    public height:number;
    public width:number;

    constructor(width:int, height:int, containerId?:string, fps = 60) {
        this.height = height;
        this.width = width;
        this.loader = PIXI.loader;
        this.renderer = PIXI.autoDetectRenderer(width, height, {"antialias": true});
        this.stage = new PIXI.Container();
        this.stage.interactive = true;
        this.graphics = new PIXI.Graphics();
        this.fps = fps;

        this.container = containerId ? document.getElementById(containerId) || document.body : document.body;
        this.container.appendChild(this.renderer.view);
        this.render = new Render(this.pixiRender.bind(this));
    }

    private pixiRender() {
        this.renderer.render(this.stage);
    }
}