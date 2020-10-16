"use strict";

const currentYear = 3;
const yearsSinceLeapYear = currentYear % 4;
let nextLeapYear = "";

switch (yearsSinceLeapYear) {
  case 1:
    nextLeapYear = currentYear + 3;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    console.log(`1`);
    break;
  case 2:
    nextLeapYear = currentYear + 2;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    console.log(`2`);
    break;
  case 3:
    nextLeapYear = currentYear + 1;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    console.log(`3`);
    break;
  default:
    console.log(`Este año es un año bisiesto`);
}
