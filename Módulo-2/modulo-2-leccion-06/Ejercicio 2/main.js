"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profesion = "periodista";

adalaber1.run = function (phrase) {
  return phrase;
};
console.log(adalaber1.run("Estoy corriendo"));

adalaber1.runAMarathon = function (distance) {
  return `Estoy corriendo una maraton de ${distance} kilometros`;
};
console.log(adalaber1.runAMarathon(50));
