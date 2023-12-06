
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

animate();

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.width = canvas.width;
    effect.height = canvas.height;
    ctx.fillStyle = gradient;
    ctx.strokeStyle = gradient;
    effect.handleParticles(ctx);
}

window.addEventListener('resize', resizeCanvas);

window.addEventListener('load', resizeCanvas);


// Second section

import { knowledgeList } from "./resources/knowledgeList.js";

function clear(){
    const knowledgeSection = document.querySelector('.select-container');
    knowledgeSection.innerHTML = '';
}

function show(category){
    clear();
    const knowledge = knowledgeList[category];
    const knowledgeSection = document.querySelector('.select-container');
    let timer = 0;
    knowledge.forEach(function(item){
        timer += 100;
        const knowledgeItem = document.createElement('div');
        knowledgeItem.classList.add('knowledge-item');

        knowledgeSection.appendChild(knowledgeItem);

        const knowledgeImg = document.createElement('div');
        knowledgeImg.classList.add('knowledge-img');

        knowledgeItem.appendChild(knowledgeImg);

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        knowledgeImg.appendChild(img);

        const knowledgeName = document.createElement('h2');
        knowledgeName.textContent = item.name;
        knowledgeItem.appendChild(knowledgeName);

        setTimeout(function(){
            knowledgeItem.classList.add('show');
        }, timer);
    });
}

function format(category){
    category = category.replace(' ', '');
    return category;
}

const knowledges = document.querySelectorAll('.card.half ul li');

knowledges.forEach(function(li){
    li.addEventListener('click', function(){
        if(this.classList.contains('clicked')){
            return;
        }
        knowledges.forEach(function(li){
            li.classList.remove('clicked');
        });
        this.classList.add('clicked');
        const category = this.textContent.toLowerCase();
        show(format(category));
    });
});
