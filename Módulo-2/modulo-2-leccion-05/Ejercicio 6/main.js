"use strict";

const inputText = document.querySelector(".text");

function write(event) {
    const text = document.querySelector(".paragraph")
    let move = event.currentTarget.value;
    text.innerHTML = move;
}

inputText.addEventListener ("keyup", write);