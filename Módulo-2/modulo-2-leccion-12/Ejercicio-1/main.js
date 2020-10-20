"use strict";

const numbers = [1, 2, 3];

const numbersList = document.createElement("li");
const numberContent = document.createTextNode(numbers);

numbersList.appendChild(numberContent);
console.log(numbersList);
