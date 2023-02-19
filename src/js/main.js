'use strict'



let header__burger = document.querySelector('.header-burger');
let header_menu = document.querySelector('.header-menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header-list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
};

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
};





const addEvenOneElements = function (elements, eventType, callback) {
    for (let i = 0 , len = elements.length; i < len; i++ ) {
        elements[i].addEventListener(eventType, callback);
    }
};

const navToggLers = document.querySelectorAll('[data-nav-toggler]');

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');

const navBar = document.querySelector('[data-navbar]');

const toggleNavbar = function() {
    navBar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    document.body.classList.toggle('nav-acitve');
};

addEvenOneElements(navToggLers,'click', toggleNavbar);




document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;

        if(content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    });
});





