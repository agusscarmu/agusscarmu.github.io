
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
const secondSection = document.querySelector('.second-section');
const thirdSection = document.querySelector('.third-section');
let i = 0;
let lastScroll = 0;
document.addEventListener('scroll', () => {
    if(!isElementInViewport(secondSection) && !isElementInViewport(thirdSection)){
        canvas.style.filter = `blur(${window.scrollY / 350}px)`;
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
    category = category.replace(/\s+/g, ''); 
    category = category.replace('&', ''); 
    return category;
}
document.addEventListener('DOMContentLoaded', function(){
    const knowledges = document.querySelectorAll('.card.half.knowledge ul li');
    knowledges[0].classList.add('clicked');
    const category = knowledges[0].textContent.toLowerCase();
    console.log(format(category));
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

// Contact me

const messageArea = document.querySelector('.input-container.message textarea');
const submitButton = document.querySelector('.input-container.submit input')
messageArea.addEventListener('input', function(){
    if(messageArea.value.length > 0){
        submitButton.disabled = false;
        submitButton.classList.add('active');
    }else{
        submitButton.disabled = true;
        submitButton.classList.remove('active');
    }
});


// Academic background

import { academicList } from "./resources/academicList.js";

function clearAcademic(){
    const academicSection = document.querySelector('.background.list');
    academicSection.innerHTML = '';
}

function showAcademic(category){
    clearAcademic();
    const academic = academicList[category];
    const academicSection = document.querySelector('.background.list');
    const academicUl = document.createElement('ul');
    academicSection.appendChild(academicUl);
    let timer = 0;
    academic.forEach(function(item){
        timer += 100;
        const itemLi = document.createElement('li');
        const academicItem = document.createElement('div');
        academicItem.classList.add('background-item');

        itemLi.appendChild(academicItem);
        academicUl.appendChild(itemLi);

        const academicImg = document.createElement('div');
        academicImg.classList.add('background-image');

        academicItem.appendChild(academicImg);

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        academicImg.appendChild(img);

        const academicText = document.createElement('div');
        academicText.classList.add('background-text');

        const academicName = document.createElement('h2');
        academicName.textContent = item.name;
        academicText.appendChild(academicName);

        const academicInstitution = document.createElement('p');
        academicInstitution.textContent = item.institution;
        academicText.appendChild(academicInstitution);

        academicItem.appendChild(academicText);
        academicItem.addEventListener('click', function(){
            if(item.credential){
                window.open(item.credential, '_blank');
            }
        });
        setTimeout(function(){
            academicItem.classList.add('show');
        }, timer);
    });
}

function formatAcademic(category){
    category = category.replace(' ', '');
    return category;
}

const academics = document.querySelectorAll('.card.half.background ul li');
academics[0].classList.add('clicked');
const categoryAcademic = academics[0].textContent;
showAcademic(formatAcademic(categoryAcademic));
academics.forEach(function(li){
    li.addEventListener('click', function(){
        if(this.classList.contains('clicked')){
            return;
        }
        academics.forEach(function(li){
            li.classList.remove('clicked');
        });
        this.classList.add('clicked');
        const category = this.textContent;
        showAcademic(category);
    });
});


