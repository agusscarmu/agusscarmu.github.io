
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

function isElementInViewport(el, onlyTop, onlyBottom) {
    var rect = el.getBoundingClientRect();
    if(onlyTop){
        return (
            rect.top <= 0
        );
    }
    return (
        rect.top <= 0 &&
        rect.bottom >= 0
    );
}
const firstSection = document.querySelector('.first-section');
const secondSection = document.querySelector('.second-section');
const thirdSection = document.querySelector('.third-section');
const firstThirdSubSection = document.querySelector('.first-third-sub-section');
const titleProjects = document.querySelector('.card.projects .text-container h1');
let i = 0;
let lastScroll = 0;
document.addEventListener('scroll', () => {
    if(isElementInViewport(firstSection)){
        effect.enableMouseTracking();
    }else{
        effect.disableMouseTracking();
    }
    if(!isElementInViewport(secondSection) && !isElementInViewport(thirdSection)){
        canvas.style.filter = `blur(${window.scrollY / 150}px)`;
    }else{
        canvas.style.filter = 'blur(0px)';
    }
    if(window.scrollY > 100){
        scrollDown.classList.add('hide');
    }else{
        scrollDown.classList.remove('hide');
    }
    if(i>100){
        i = 100;
    }else if(i<0){
        i = 0;
    }
    if (isElementInViewport(thirdSection, true) && scrollY > lastScroll && !isElementInViewport(firstThirdSubSection, true)) {
        i++;
        canvas.style.transform = `perspective(${1000+ (i *0.01)}px) rotateY(${i * 0.1}deg) rotate(${i * 0.1}deg) rotateX(${i * 0.1}deg)`;
    } else if (isElementInViewport(thirdSection, true) && scrollY < lastScroll && !isElementInViewport(firstThirdSubSection, true)) {
        i--;
        canvas.style.transform = `perspective(${1000+ (i *0.01)}px) rotateY(${i * 0.1}deg) rotate(${i * 0.1}deg) rotateX(${i * 0.1}deg)`;
    } else if(isElementInViewport(firstThirdSubSection, true)){
        canvas.style.transform = `perspective(${1000+ (i *0.01)}px) rotateY(${i * 0.1}deg) rotate(${i * 0.1}deg) rotateX(${i * 0.1}deg)`;
    }
    else {
        i = 0;
        canvas.style.transform = 'perspective(1000px) rotate(0deg) rotateY(0deg) rotateX(0deg)';
    }

    lastScroll = scrollY;
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
knowledges[0].classList.add('clicked');
const category = knowledges[0].textContent.toLowerCase();
show(format(category));
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

import { projectsList } from "./resources/projectsList.js";

function showProject(index){
    const project = projectsList[index];
    const projectContainer = document.querySelector('.project');
    projectContainer.innerHTML = '';

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectContainer.appendChild(projectTitle);

    const title = document.createElement('h2');
    title.textContent = project.name;
    projectTitle.appendChild(title);

    const projectImg = document.createElement('div');
    projectImg.classList.add('project-img');
    projectTitle.appendChild(projectImg);

    const img = document.createElement('img');
    img.src = project.imageUrl;
    img.alt = project.name;
    projectImg.appendChild(img);

    const projectDescription = document.createElement('div');
    projectDescription.classList.add('project-description');
    projectContainer.appendChild(projectDescription);

    const description = document.createElement('p');
    description.textContent = project.description;
    projectDescription.appendChild(description);

    const projectLink = document.createElement('div');
    projectLink.classList.add('project-link');
    projectDescription.appendChild(projectLink);

    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.textContent = 'View project';
    projectLink.appendChild(link);
}

const projects = document.querySelectorAll('.project-container .tabs li');
projects[0].classList.add('clicked');
showProject(0);

projects.forEach(function(li, index){
    li.addEventListener('click', function(){
        if(this.classList.contains('clicked')){
            return;
        }
        projects.forEach(function(li){
            li.classList.remove('clicked');
        });
        this.classList.add('clicked');
        showProject(index);
    });
});
