export default class JeuTermine {
    constructor(jeu) {
        this.jeu = jeu;
    }


    draw(ctx) {
        ctx.save();

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.jeu.largeur, this.jeu.hauteur);

        ctx.fillStyle = "white";
        ctx.font = "48px Arial";
        ctx.textAlign = "center";

        ctx.fillText(
            "🎉 Jeu terminé 🎉",
            this.jeu.largeur / 2,
            this.jeu.hauteur / 2 - 40
        );

        ctx.font = "24px Arial";
        ctx.fillText(
            "Bravo, tu as terminé les 7 niveaux !",
            this.jeu.largeur / 2,
            this.jeu.hauteur / 2 + 20
        );

        ctx.restore();
    }
}
