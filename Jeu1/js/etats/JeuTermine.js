export default class JeuTermine {
    constructor(canvas, ctx, jeux) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.jeux = jeux;
    }


    draw(ctx) {
        this.ctx.save();

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.jeux.canvas.width, this.jeux.canvas.height);


        this.ctx.fillStyle = "white";
        this.ctx.font = "48px Arial";
        this.ctx.textAlign = "center";

        this.ctx.fillText(
            "🎉 Jeu terminé 🎉",
            this.jeux.canvas.width / 2,
            this.jeux.canvas.height / 2 - 40
        );

        this.ctx.font = "24px Arial";
        this.ctx.fillText(
            "Bravo, tu as terminé les 7 niveaux !",
            this.jeux.canvas.width / 2,
            this.jeux.canvas.height / 2 + 20
        );

        this.ctx.restore();
    }
}
