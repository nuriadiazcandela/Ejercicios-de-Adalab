'use strict';

//FASE 1
// function ten() {
//   for (let i = 0; i < 10; i++) {
//     console.log('Patata');
//   }
// }
// ten();

//FASE 2
// function ten(word) {
//   for (let i = 0; i < 3; i++) {
//     console.log(word);
//   }
// }
// ten('Patata');
// ten('Aguacate');
// ten('Pizza');

//FASE 3
// function writeThis(word, num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(word);
//   }
// }
// writeThis('aguacate', 7);
// writeThis('patata', 10);
// writeThis('Pizza', 50);

//FASE 4

// function writeThis(word, num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(word);
//   }
// }

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
// const result = getRandomNumber(10);

// writeThis('patata', result);
// writeThis('aguacate', result);
// writeThis('pizza', result);

//FASE 5
// const myWordList = [
//   {
//     text: 'Pencil',
//     total: 6,
//   },
//   {
//     text: 'Thermo',
//     total: 2,
//   },
//   {
//     text: 'TV',
//     total: 8,
//   },
//   {
//     text: 'Phone',
//     total: 4,
//   },
// ];

// function writeMyArray() {
//   for (let i = 0; i < myWordList.length; i++) {
//     // console.log(myWordList[i].text, myWordList[i].total);
//     writeThis(myWordList[i].text, myWordList[i].total);
//   }
// }
// function writeThis(word, num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(word);
//   }
// }

// writeMyArray();

//FASE 6
let myWordList = [];

function getData() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      myWordList = data.results;
      writeMyArray();
    })
    .catch((err) => {
      console.error('Se ha producido un error:', err);
    });
}

function writeMyArray() {
  for (let i = 0; i < myWordList.length; i++) {
    // console.log(myWordList[i].text, myWordList[i].total);
    writeThis(myWordList[i].text, myWordList[i].total);
  }
}
function writeThis(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}

writeMyArray();
getData();
