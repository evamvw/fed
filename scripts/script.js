// JavaScript Document

const hamburgerMenu = document.getElementById('hamburgerMenu')
const sluiten = document.getElementById('sluiten')
const menu = document.querySelector('header nav article')

hamburgerMenu.addEventListener('click', menuSlider)
sluiten.addEventListener('click', closeMenu)

function menuSlider(){
menu.classList.toggle('active')
}

function closeMenu(){
    menu.classList.remove('active')
}