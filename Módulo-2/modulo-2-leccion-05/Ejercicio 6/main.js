"use strict";

const inputText = document.querySelector(".text");

function write(event) {
    const paragraph = document.querySelector(".paragraph")
    let fill = event.currentTarget.value;
    paragraph.innerHTML = fill;
}

inputText.addEventListener ("keyup", write);