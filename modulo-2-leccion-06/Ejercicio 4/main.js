"use strict";

const button = document.querySelector(".btn");

const activebtn = function (event) {
  console.log(event);
};

button.addEventListener(`click`, activebtn);
