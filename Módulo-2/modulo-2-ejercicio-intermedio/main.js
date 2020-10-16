"use strict";

const smile = document.querySelector(".js-smile");
const button = document.querySelector(".js-btn");
const select = document.querySelector(".js-select")
const container = document.querySelector(".js-container")

function updateclick() {
    const selectValue = select.value;
    smile.innerHTML = selectValue;
    const random = parseInt(Math.random()*100);
    if (random % 2 === 0) {
        container.classList.add("yelow");
        container.classList.remove("orange");
    }else {
        container.classList.remove("yelow");
        container.classList.add("orange");
    }
}

button.addEventListener("click", updateclick);

