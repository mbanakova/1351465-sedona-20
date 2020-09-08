"use strict";

var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.nav__burger');
menu.classList.add('nav__list--js');
burger.classList.add('nav__burger--js');
burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.toggle('nav__list--js');
  burger.classList.toggle('nav__burger--js');
});
