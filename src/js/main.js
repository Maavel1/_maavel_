'use strict';

const addEvenOneElements = function (elements, eventType, callback) {
    for (let i = 0 , len = elements.length; i < len; i++ ) {
        elements[i].addEventListener(eventType, callback);
    }
}

const navToggLers = document.querySelectorAll('[data-nav-toggler]');

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');

const navBar = document.querySelector('[data-navbar]');

const toggleNavbar = function() {
    navBar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    document.body.classList.toggle('nav-acitve');
}

addEvenOneElements(navToggLers,'click', toggleNavbar);


