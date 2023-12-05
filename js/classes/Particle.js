function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export class Particle{

    constructor(effect, size){
        this.effect = effect;
        this.radius = randomNumber(1,size);
        this.x = this.radius + Math.random() * (effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (effect.height - this.radius * 2);
        this.speedX = (Math.random() * 4 - 2)*0.1;
        this.speedY = (Math.random() * 4 - 2)*0.1;
        console.log(this.speedX)
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }

    update(){
        this.x += this.speedX;
        if(this.x > this.effect.width - this.radius || this.x < this.radius){
            this.speedX *= -1;
        }
        this.y += this.speedY;
        if(this.y > this.effect.height - this.radius || this.y < this.radius){
            this.speedY *= -1;
        }
    }
}