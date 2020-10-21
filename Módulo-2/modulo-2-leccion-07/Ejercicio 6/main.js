"use strict";

const answer = document.querySelector(".js-text");
const answer2 = document.querySelector(".js-text_2");
const btn = document.querySelector(".js-btn");
const message = document.querySelector(".js-message");
let arrayMovie = [];

function favourite() {
  const answerValue = answer.value;
  const answer2Value = answer2.value;
  arrayMovie.push(answerValue);
  arrayMovie.push(answer2Value);
  for (let i of arrayMovie) {
    message.innerHTML += `¡A mí también me encantó ${i}! Tenemos mucho en común, humana.`;
  }
}

btn.addEventListener("click", favourite);
