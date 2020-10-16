"use strict";

const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn2")

function changeColor(event){
    event.currentTarget.classList.toggle("button");
}

btn2.addEventListener("click", changeColor);
btn.addEventListener('click', changeColor);