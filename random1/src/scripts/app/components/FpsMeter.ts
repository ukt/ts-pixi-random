export class FpsMeter {

    private fpsMeter:{ elapsed:number; nbFrames:number; domElement:HTMLDivElement; framerate:number; refresh:number };
    public fps:int;

    constructor(fps:int) {
        this.fps = fps;
        this.fpsMeter = {
            nbFrames: 0,
            framerate: 0.0,
            elapsed: performance.now(),
            refresh: 500,
            domElement: document.createElement("div")
        };
        this.fpsMeter.domElement.style.position = "fixed";
        this.fpsMeter.domElement.style.left = "0px";
        this.fpsMeter.domElement.style.bottom = "0px";
        this.fpsMeter.domElement.style.color = "#00ff00";
        this.fpsMeter.domElement.style.zIndex = "10";
        this.fpsMeter.domElement.style.fontFamily = "monospace";

        this.render();
    }

    public render() {
        let now = performance.now();
        let frameTime = now - this.fpsMeter.elapsed;
        this.fpsMeter.nbFrames++;
        if (frameTime >= this.fpsMeter.refresh) {
            let framerate = 1000.0 * this.fpsMeter.nbFrames / frameTime;
            this.fpsMeter.domElement.innerHTML = "FPS: " + framerate.toFixed(2).toString();
            this.fpsMeter.elapsed = now;
            this.fpsMeter.nbFrames = 0;
        }
    }

    public addTo(parent:HTMLElement) {
        parent.appendChild(this.fpsMeter.domElement);
    }

}