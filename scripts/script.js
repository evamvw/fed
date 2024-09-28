// JavaScript Document

// Voor de onderstaande code heb ik hulp gehad van Andrea, Ali en Codepen. 

const hamburgerMenu = document.getElementById('hamburgerMenu')
const menu = document.querySelector('header nav article')

hamburgerMenu.addEventListener('click', menuSlider)


function menuSlider(){
    menu.classList.toggle('active')
}

function closeMenu(){
    menu.classList.remove('active')
}

// Bij de onderstaande code heb ik gebruik gemaakt van deze link: 
// https://dev.to/jslim/fading-up-sections-using-intersection-observer-3fhj

// classList.toggle

// const observerOptions = {
// 	root: null,
// 	threshold: 0,
// 	rootMargin: '0 0 -50px 0'
// };

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('in-view');
//             observer.unobserve(entry.target);
//         }
//     });
// }, observerOptions);
// window.addEventListener('DOMContentLoaded', (event) => { 

//     const fadeElements = document.querySelectorAll('.fade');
//     fadeElements.forEach(Element => {
//       observer.observe(element);
    
//     });

// });    

// Bij de onderstaande code heb k gebrukt gemaakt van deze linkjes en mijn oude internetstandaarden code:
// https://chatgpt.com/c/66f6ec98-7040-8002-8e17-ffeaf060c985
// https://chatgpt.com/c/66f70871-8fac-8002-81da-0f3d03806e23



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

// Bij de onderstaande code heb ik gebruik gemaakt van dit linkje:
// https://chatgpt.com/c/66f7b429-ca0c-8002-9b86-cbeac6ba9abc

function openPopup() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('popupBackground').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('popupBackground').style.display = 'none';
        }