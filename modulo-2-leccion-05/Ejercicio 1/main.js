"use strict";
const button = document.querySelector(`.button`);
const hi = document.querySelector(`.hi`);

function showAlert() {
  hi.innerHTML = "Mi primer click, !ole yo y la madre que me parió!";
}
button.addEventListener(`click`, showAlert);
