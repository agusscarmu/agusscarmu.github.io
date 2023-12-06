import{Particle} from './Particle.js';
import { Configuration } from '../configuration.js';

export class Effect {

    constructor(canvas){
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.particles = [];
        this.numberOfParticles = this.width>768 ? Configuration.numberOfParticlesDesktop : Configuration.numberOfParticlesMobile;
        this.createParticles();
    }

    createParticles(){
        for(let i = 0; i < this.numberOfParticles; i++){
            this.particles.push(new Particle(this, Configuration.particleSize, Configuration.particleVelocity));
        }
    }

    handleParticles(context, mouseX, mouseY){
        this.connectParticles(context, mouseX, mouseY);
        this.particles.forEach(particle => {
            particle.update();
            particle.draw(context, Configuration.color);
        });
    }

    connectParticles(context, mouseX, mouseY){
        const maxDistance = Configuration.maxDistance;
        const maxLines = 5;
        let linesToMouseCount = 0;
        for(let a = 0; a < this.particles.length; a++){
            for(let b = a; b < this.particles.length; b++){
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.hypot(dx, dy);
                if(distance < maxDistance){
                    const opacity = 1 - (distance / maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(this.particles[b].x, this.particles[b].y);
                    context.stroke();
                }
            }
            if(mouseX){
                const dx = this.particles[a].x - mouseX;
                const dy = this.particles[a].y - mouseY;
                const distance = Math.hypot(dx, dy);
                if(distance < maxDistance && linesToMouseCount < maxLines){
                    const opacity = 1 - (distance / maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(mouseX, mouseY);
                    context.stroke();
                    linesToMouseCount++;
                }
            }
            
            
        }
    }
}
