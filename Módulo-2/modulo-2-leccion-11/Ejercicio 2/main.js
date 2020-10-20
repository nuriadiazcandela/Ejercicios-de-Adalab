"use strict";

const btn = document.querySelector(".js-btn");

function getCharacter() {
  const character = document.querySelector(".js-name").value;
  console.log(character);
  fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then((response) => response.json())
    .then((data) => {
      let result = document.querySelector(".js-result");
      result.innerHTML = `<li> Personaje: ${data.results[0].name}</li>`;
    });
}
btn.addEventListener("click", getCharacter);
