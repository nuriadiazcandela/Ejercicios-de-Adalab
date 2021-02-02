'use strict';
const palettesContainer = document.querySelector('.js-palettes-container');
let palettes = [];

function getData() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.palettes);
      palettes = data.palettes;
      paintPalletes();
    })
    .catch((err) => {
      console.error('Se ha producido un error:', err);
    });
}

function paintPalletes() {
  let html = '';
  for (const palette of palettes) {
    html += `<li>`;
    html += `<h2 class="palettes__name">${palette.name}</h2>`;
    html += `<div class="palettes__colors">`;
    for (const color of palette.colors) {
      html += `<div class="palettes__color"style="background-color:#${color}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  palettesContainer.innerHTML = html;
}
getData();
