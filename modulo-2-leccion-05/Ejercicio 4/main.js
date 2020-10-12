'use strict';

const text = document.querySelector (".text")

function change (){
    let scrollPixel = window.scrollY;

    if (scrollPixel < 250) {
        text.classList.add ("style1")
        text.classList.remove ("style2")
    }else {
        text.classList.remove ("style1")
        text.classList.add ("style2")

        }
}

window.addEventListener("scroll", change);