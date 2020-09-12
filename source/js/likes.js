"use strict";

var like = document.querySelector('.photo__like');
var likesNumber = document.querySelector('.photo__counter');

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  like.classList.toggle('added');
};
