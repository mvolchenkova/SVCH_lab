const burger = document.getElementById('menuDiv');
const menu1 = document.querySelector('.burger1000');
const back = document.querySelector('.back');
const body = document.querySelector('body');
const menu2 = document.querySelector('.burger768');

if(window.innerWidth < 1001 && window.innerWidth > 768) {
    menu1.style.display = 'none';
    back.style.display = 'none';
}

burger.addEventListener('click', function(){
    if(window.innerWidth < 1001 && window.innerWidth > 768) {
        if(menu1.style.display === 'none') {
            menu1.style.display = 'flex';
            back.style.display = 'flex';
            body.style.overflow = 'hidden';
        } else {
            menu1.style.display = 'none';
            back.style.display = 'none';
            body.style.overflow = 'scroll';
        }
    }
});

if(window.innerWidth < 768) {
    menu2.style.display = 'none';
    back.style.display = 'none';
}

burger.addEventListener('click', function(){
    if(window.innerWidth < 768) {
        if(menu2.style.display === 'none') {
            console.log(57856)
            menu2.style.display = 'flex';
            back.style.display = 'flex';
            body.style.overflow = 'hidden';
        } else {
            menu2.style.display = 'none';
            back.style.display = 'none';
            body.style.overflow = 'scroll';
        }
    }
});
const recent = document.querySelector('.recentButton');
recent.addEventListener('click', function(){
    window.location = '../index/index.html#sixthContainer'
})

let currentSlide = 0;
const slider = document.querySelector('#slider');
const slides = slider.children;
let slideWidth;

if (window.innerWidth > 768) {
    slideWidth = 400; 
} else {
    slideWidth = 220; 
}

const prevButton = document.querySelector('.leftButton');
const nextButton = document.querySelector('.rightButton');

nextButton.addEventListener('click', function(){
    currentSlide = currentSlide + 1;
    if(currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

prevButton.addEventListener('click', function(){
    currentSlide = currentSlide - 1;
    if(currentSlide < 0) {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});