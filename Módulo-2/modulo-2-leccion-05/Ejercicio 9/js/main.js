"use strict";

const Isra = document.querySelector(".teacher--isra");
const Barlos = document.querySelector(".teacher--tuerto");
const Nasi = document.querySelector(".teacher--nasi");

function choose(event) {
    const profeSelect = event.currentTarget;
    if (profeSelect.classList.contains("teacher--selected"))  {
        profeSelect.classList.remove ("teacher--selected");
    }else {
        profeSelect.classList.add("teacher--selected");
    }

const favo = profeSelect.querySelector(".favorite");
if (favo.innerHTML === "Añadir") {
    favo.innerHTML = "Quitar";
}else {
    favo.innerHTML = "Añadir";
}
}

Isra.addEventListener("click", choose);
Barlos.addEventListener("click", choose);
Nasi.addEventListener("click", choose);