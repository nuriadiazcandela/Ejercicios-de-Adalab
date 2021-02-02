'use strict';
const listPrincess = document.querySelector('.js-user-list');
let princess = [];

const ENDPOINT =
  'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json';

function apiData() {
  fetch(`${ENDPOINT}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      princess = data;
      paintInfo();
    })
    .catch((err) => {
      console.error('Se ha producido un error:', err);
    });
}

function paintInfo() {
  let result = '';

  for (let i = 0; i < princess.length; i++) {
    const picture = princess[i].picture;
    const name = princess[i].name;
    const comment = princess[i].comment;
    result += `<li class="js-list"><h2>${name}</h2>`;
    result += `<div class="js-container"><img class="js-img" src= ${picture}>`;
    result += `<p>${comment}</p></div></li>`;
  }
  listPrincess.innerHTML = result;
  listenList();
}

function listenList() {
  let listElements = document.querySelector('.js-list');
  console.log(listElements);
  for (const li of listElements) {
    li.addEventListener('click', friend);
  }
}

function friend(event) {
  event.currentTarget.classList.toggle('.js-background');
}

apiData();
