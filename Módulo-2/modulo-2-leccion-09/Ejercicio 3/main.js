'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const pair = [];
const mult = [];

function bestLostNomber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pair.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      mult.push(lostNumbers[i]);
    }
  }
}
bestLostNomber();
console.log(pair);
console.log(mult);
console.log(pair.concat(mult));
