"user strict";

const button = document.querySelector(`.button`);
const text = document.querySelector(`.text`);

function showAlert() {
  let name = text.value;
  console.log(`Hola ${name}`);
}

button.addEventListener(`click`, showAlert);
