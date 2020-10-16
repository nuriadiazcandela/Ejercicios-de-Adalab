"user strict";

const container = document.querySelector(".container")

function changeColor(event){
    if (event.key === "r"){
      container.classList.add ("red")
      container.classList.remove ("purple")
       
    } else if (event.key === "m"){
        container.classList.add ("purple")
        container.classList.remove ("red")
        
    }
}
document.addEventListener("keydown", changeColor);