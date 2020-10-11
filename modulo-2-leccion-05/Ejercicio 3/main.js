"use strict";

const paragraph = document.querySelector(".text");

function repeat() {
 paragraph.innerHTML = paragraph.innerHTML + "lorem ipsum";
}
paragraph.addEventListener(`mouseover`, repeat);