'use strict';
const mobileMenu = document.getElementById('mobile-menu');
const mCloseMenuBtn = document.getElementById('close-button');
const mOpenMenuBtn = document.getElementById('open-menu-button');

mCloseMenuBtn.onclick = () => {
    mobileMenu.classList.add('invisible');
}
mOpenMenuBtn.onclick = () => {
    mobileMenu.classList.remove('invisible');
}

console.log('hello world');