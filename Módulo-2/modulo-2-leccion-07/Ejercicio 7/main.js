"use strict";
const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

function countAdalabers() {
  return adalabers.length;
}
console.log(countAdalabers(adalabers));

function averageAge() {
  let acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    acc = acc + adalabers[i].age;
  }
  return acc / adalabers.length;
}
console.log(averageAge());
