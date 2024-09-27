// JavaScript Document

const hamburgerMenu = document.getElementById('hamburgerMenu')
// const sluiten = document.getElementById('sluiten')
const menu = document.querySelector('header nav article')

hamburgerMenu.addEventListener('click', menuSlider)
// sluiten.addEventListener('click', closeMenu)

function menuSlider(){
    menu.classList.toggle('active')
}

// function closeMenu(){
//     menu.classList.remove('active')
// }

// classList.toggle

const observerOptions = {
	root: null,
	threshold: 0,
	rootMargin: '0 0 -50px 0'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => { 

    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(Element => {
      observer.observe(element);
    
    });

});    

function playSound() {
    var sound = document.getElementById("clickSound");
    sound.play();
}


var svgElement = document.getElementById("Svg");
var button = document.getElementById("changeSvg");



button.addEventListener("click", doSvg); 

function doSvg() {
    svgElement.classList.toggle("active");  
}
    