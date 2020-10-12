"use strict";

const smile = document.querySelector(".js-face");
const button = document.querySelector(".js-btn");
const select = document.querySelector(".js-select")

function updateclick() {
 const selectValue = select.value;
 smile.innerHTML = selectValue;
}

button.addEventListener("click", updateclick);
