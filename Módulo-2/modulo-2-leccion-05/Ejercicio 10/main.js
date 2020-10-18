"use strict";

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector(".btn");
const films = document.querySelector(".movie");

function movies (event) {
    films.innerHTML = `<ul>
    <li class="inception">${inception}</li>
    <li class="butterfly">${theButterFlyEffect}</li>
    <li class="eternal">${eternalSunshineOfTheSM}</li>
    <li class="blue">${blueVelvet}</li>
    <li class="split">${split}</li>
    </ul>`;
    const inceptionMovie = document.querySelector(".inception");
    const butterflyMovie = document.querySelector(".butterfly");
    const eternalMovie = document.querySelector(".eternal");
    const blueVelvetMovie = document.querySelector(".blue");
    const splitMovie = document.querySelector(".split");
    function click2 (event){
        const filmClick = event.currentTarget.innerHTML;
        console.log(`El nombre de la pelicula es ${filmClick}`);
    }
    inceptionMovie.addEventListener ("click", click2);
    butterflyMovie.addEventListener ("click", click2);
    eternalMovie.addEventListener ("click", click2);
    blueVelvetMovie.addEventListener ("click", click2);
    splitMovie.addEventListener ("click", click2);
}

button.addEventListener("click", movies);