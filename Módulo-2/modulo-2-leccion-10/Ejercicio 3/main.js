"use strict";

 function getUser() {
   const inputValue = document.querySelector(".text").value;
  
   fetch("https://api.github.com/users/" + inputValue)
       .then(response => response.json())
       .then(data => {
        
        const name = document.querySelector(".name")
        name.innerHTML = data.name;
        const img = document.querySelector(".img")
        img.src = data.avatar_url;
        const number = document.querySelector(".number")
        number.innerHTML = data.public_repos;
             });
   }
   const btn = document.querySelector(".js-btn");
   btn.addEventListener("click", getUser);

