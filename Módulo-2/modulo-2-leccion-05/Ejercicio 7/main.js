"use strict";

const btn = document.querySelector(".btn")

function changeColor(){
 btn.classList.toggle ("button");
}

btn.addEventListener('click', changeColor);