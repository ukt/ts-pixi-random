export class Render {

    private renders:Array<Function>;
    private isActive:Boolean;
    private renderMethod:Function;

    constructor(renderMethod:Function) {
        this.renders = [];
        this.isActive = false;
        this.renderMethod = renderMethod;
    }

    public addPreRenderAction(render:Function) {
        this.renders.push(render);
    }

    public removePreRender(render:Function) {
        this.renders = this.renders.filter(r => r !== render);
    }

    public stop() {
        this.isActive = false;
    }

    public run() {
        if (!this.isActive) {
            this.isActive = true;
            requestAnimationFrame(this.render.bind(this));
        }
    }

    private render() {
        for (const render of this.renders) {
            render();
        }
        if (this.isActive) {
            requestAnimationFrame(this.render.bind(this));
            this.renderMethod();
        }
    }
}