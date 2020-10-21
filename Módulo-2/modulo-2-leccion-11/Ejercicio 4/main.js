"use strict";

const text = document.querySelector(".js-text");
const paragraph = document.querySelector(".js-empty");

function getText() {
  paragraph.innerHTML = text.value;
  localStorage.setItem("textResult", text.value);
}
text.addEventListener("keyup", getText);

// function recovery() {
//   const textRecovery = localStorage.getItem("textResult");
// }

// recovery();
