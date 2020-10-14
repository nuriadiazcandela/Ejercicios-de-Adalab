"user strict";

let ageDog = 4;
const ageOne = 15;
const ageTwo = 9;
const agePlus = 5;


if (ageDog === 1) {
    console.log (`La edad de tu perro equivale a `+ ageOne + ` años de humano`)
} else if (ageDog === 2) { 
    console.log (`La edad de tu perro equivale a ${ageOne + ageTwo} años de humano`)
} else {
    console.log (`La edad de tu perro equivale a ${ageOne + ageTwo + (ageDog - 2)* agePlus} años de humano`)
}