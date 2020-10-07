"use strict";

const firstDogImage = "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage = "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

let ul = document.querySelector("ul");
ul.innerHTML = `<li><h1>${firstDogName}</h1><img src="${firstDogImage}"</li> <li><h1>${secondDogName}</h1><img src="${secondDogImage}"</li><li><h1>${thirdDogName}</h1><img src="${thirdDogImage}"</li>`;
