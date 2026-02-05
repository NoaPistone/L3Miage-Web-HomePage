export default class GameOver {
    constructor(canvas,ctx,jeux) {
        this.canvas = canvas;
        this.ctx = ctx ;
        this.jeux = jeux;
    }

    draw() {
        this.ctx.save();
        let grad = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        grad.addColorStop(0, "#7ae3df");
        grad.addColorStop(1, "#fad0c4");
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "white";
        this.ctx.font = "bold 50px 'Verdana', sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.shadowColor = "rgba(0,0,0,0.5)";
        this.ctx.shadowBlur = 10;
        this.ctx.fillText("Game Over", this.canvas.width / 2, 150);
    }
}