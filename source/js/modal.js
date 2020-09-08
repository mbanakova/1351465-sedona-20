"use strict";

var form = document.querySelector('.form__fieldsets');
var phone = document.getElementById('mobile');
var email = document.getElementById('email');
var text = document.getElementById('emotions');
var fail = document.querySelector('.modal--fail');
var success = document.querySelector('.modal--success');
form.addEventListener('submit', function (evt) {
  if (!phone.value || !email.value || !text.value) {
    evt.preventDefault();
    fail.classList.remove('modal--hidden');
    fail.offsetWidth = fail.offsetWidth;
    fail.classList.add('modal--shown');
  } else {
    success.classList.remove('modal--hidden');
    success.classList.add('modal--shown');
  }
});
var closeFail = document.querySelector('.modal__button--fail');
closeFail.addEventListener('click', function (evt) {
  evt.preventDefault();
  fail.classList.toggle('modal--shown');
  fail.classList.toggle('modal--hidden');
});
var closeSuccess = document.querySelector('.modal__button--wide');
closeSuccess.addEventListener('click', function (evt) {
  evt.preventDefault();
  success.classList.toggle('modal--shown');
  success.classList.toggle('modal--hidden');
});
