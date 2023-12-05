import { Particle } from "./classes/Particle.js";
import { Effect } from "./classes/Effect.js";
import { colors } from "./colors.js";

const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop('0.2', colors[800]);
gradient.addColorStop('0.4', colors[600]);
gradient.addColorStop('0.6', colors[400]);
ctx.fillStyle = gradient;
ctx.strokeStyle = gradient;
var mouseX = 0;
var mouseY = 0;

const effect = new Effect(canvas);
effect.handleParticles(ctx);
const particle = new Particle(effect);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx, mouseX, mouseY);
    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});