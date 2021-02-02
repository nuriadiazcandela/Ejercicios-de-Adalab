'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

//EJERCICIO 1 Pintar en pantalla los nombres de las promos
// const container = document.querySelector('.js-result');
// let listPromo = '';

// for (let i = 0; i < promos.length; i++) {
//   listPromo += `<li>${promos[i].name}</li>`;
// }
// container.innerHTML = `<ul>${listPromo}</ul>`;

//EJERCICIO 2 Pintar en pantalla las letras de las promos y los nombres de las promos
// const container = document.querySelector('.js-result');
// let listPromo = '';

// for (let i = 0; i < promos.length; i++) {
//   listPromo += `<li><p>Nombre: ${promos[i].name}</p><p>Promo: ${promos[i].promo}</p></li>`;
// }
// container.innerHTML = `<ul>${listPromo}</ul>`;

//EJERCICIO 3 Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas

// const container = document.querySelector('.js-result');
// let listPromo = '';

// for (let i = 0; i < promos.length; i++) {
//   listPromo += `<li><p>Nombre: ${promos[i].name}</p><p>Promo: ${promos[i].promo}</p><p>Número de alumnas: ${promos[i].students.length}</p></li>`;
// }
// container.innerHTML = `<ul>${listPromo}</ul>`;

//EJERCICIO 4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas
const container = document.querySelector('.js-result');
let listPromo = '';

listPromo += `<ul>`;
for (let i = 0; i < promos.length; i++) {
  listPromo += `<li><p>Nombre: ${promos[i].name}</p></li>`;
  listPromo += `<ul>`;
  for (const student of promos[i].students) {
    console.log(student.name);
    listPromo += `<li>${student.name}, ${student.age}</li>`;
  }
  listPromo += `</ul>`;
}
listPromo += `</ul>`;

container.innerHTML = listPromo;
