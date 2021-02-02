'use strict';
const palettesContainer = document.querySelector('.js-palettes-container');
let palettes = [];
let favoritesList = [];

function getData() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.palettes);
      palettes = data.palettes;
      paintPalettes();
      listenPalette();
    })
    .catch((err) => {
      console.error('Se ha producido un error:', err);
    });
}

function paintPalettes() {
  let html = '';
  for (let i = 0; i < palettes.length; i++) {
    html += `<li class="js-palette-item palettes__item--favorite " id="${i}">`;
    html += `<h2 class="palettes__name">${palettes[i].name}</h2>`;
    html += `<div class="palettes__colors">`;
    for (const color of palettes[i].colors) {
      html += `<div class="palettes__color"style="background-color:#${color}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  palettesContainer.innerHTML = html;
}
function listenPalette() {
  const paletteItems = document.querySelectorAll('.js-palette-item');
  for (const paletteItem of paletteItems) {
    paletteItem.addEventListener('click', favoritePalette);
  }
}
function favoritePalette(event) {
  const clicked = parseInt(event.currentTarget.id);
  const indexFav = favoritesList.indexOf(clicked);
  const isFavourite = indexFav !== -1;

  if (isFavourite === false) {
    favoritesList.push(clicked);
  } else {
    favoritesList.splice(indexFav, 1);
  }
}

getData();
