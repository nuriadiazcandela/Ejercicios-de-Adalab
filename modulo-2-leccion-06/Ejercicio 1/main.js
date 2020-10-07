"use strict";
const title = document.querySelector(".text");

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profesion = "periodista";

title.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profesion}`;

const adalaber2 = {};
adalaber2.name = "Rocio";
adalaber2.age = 25;
adalaber2.profesion = "actriz";

title.innerHTML = `${adalaber2.name}, ${adalaber2.age} años, ${adalaber2.profesion}`;
