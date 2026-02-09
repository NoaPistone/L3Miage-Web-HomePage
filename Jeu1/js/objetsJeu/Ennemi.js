import Objet from "./Objet.js";

export default class Ennemi extends Objet {
    constructor(x, y, w = 30, h = 30, couleur = "red", zone = 150, vitesse = 2) {
        super(x, y, w, h, couleur);

        this.baseX = x;
        this.baseY = y;

        this.zone = zone;
        this.vitesse = vitesse;
        this.actif = false;
    }

    update(joueur) {
        const dx = joueur.x - this.x;
        const dy = joueur.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        this.actif = dist < this.zone;

        if (this.actif) {
            const nx = dx / (dist || 1);
            const ny = dy / (dist || 1);

            this.x += nx * this.vitesse;
            this.y += ny * this.vitesse;

            // rotation vers le joueur
            this.angle = Math.atan2(ny, nx);
        }
    }

    estAtteint(joueur) {
        return (
            joueur.x + joueur.size / 2 > this.x - this.w / 2 &&
            joueur.x - joueur.size / 2 < this.x + this.w / 2 &&
            joueur.y + joueur.size / 2 > this.y - this.h / 2 &&
            joueur.y - joueur.size / 2 < this.y + this.h / 2
        );
    }

    reset() {
        this.x = this.baseX;
        this.y = this.baseY;
        this.angle = 0;
        this.actif = false;
    }

    draw(ctx) {
        ctx.save();

        // positionnement
        ctx.translate(this.x, this.y);

        // orientation
        ctx.rotate(this.angle);

        // dessin en (0,0)
        ctx.fillStyle = this.couleur;
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);

        // repère visuel (direction)
        //ctx.fillStyle = "black";
        //ctx.fillRect(this.w / 4, -4, 8, 8);

        ctx.restore();

        /*// zone d’activation (debug)
        ctx.save();
        ctx.strokeStyle = "rgba(255,0,0,0.3)";
        ctx.beginPath();
        ctx.arc(this.baseX, this.baseY, this.zone, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();*/
    }
}
