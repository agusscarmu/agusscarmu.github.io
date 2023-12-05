import { Particle } from "./classes/Particle.js";
import { Effect } from "./classes/Effect.js";
import { colors } from "./colors.js";

const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
const scrollDown = document.querySelector('.scroll-down');
gradient.addColorStop('0.2', colors[800]);
gradient.addColorStop('0.4', colors[600]);
gradient.addColorStop('0.6', colors[500]);
ctx.fillStyle = gradient;
ctx.strokeStyle = gradient;
var mouseX = 0;
var mouseY = 0;

const effect = new Effect(canvas);
effect.handleParticles(ctx);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx, mouseX, mouseY);
    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

document.addEventListener('scroll', () => {
    canvas.style.filter = `blur(${window.scrollY / 150}px)`;
    if(window.scrollY > 100){
        scrollDown.classList.add('hide');
    }else{
        scrollDown.classList.remove('hide');
    }
});

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.width = canvas.width;
    effect.height = canvas.height;
    ctx.fillStyle = gradient;
    ctx.strokeStyle = gradient;
    effect.handleParticles(ctx);
    animate();
}

window.addEventListener('resize', resizeCanvas);

window.addEventListener('load', resizeCanvas);