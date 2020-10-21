"use strict";

const numbers = [5, 22, 10, 4, 18];
const numbers2 = [5, 22, 10, 4, 18, 56];
let acc = 0;

function media(array) {
  for (let i = 0; i < array.length; i++) {
    acc += array[i];
  }
  return "La media es igual a: " + acc / array.length;
}
console.log(media(numbers));
console.log(media(numbers2));
