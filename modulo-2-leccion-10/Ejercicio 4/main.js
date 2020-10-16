"use strict";

function getRepos() {
  const inputValue = document.querySelector(".js-text").value
    fetch("https://api.github.com/orgs/" + inputValue)
      .then(firstResponse => firstResponse.json())
      .then(firstData => {
        const repos = firstData.repos_url;
        console.log(repos)
        return fetch (repos);
      })
      .then(secondResponse => secondResponse.json())
      .then(secondData => {
        const list = document.querySelector(".list");
        for (let i= 0; i < secondData.length; i++) {
          list.innerHTML +=`<li>${secondData[i].name}</li>`
        }
      });

  }
  const btn = document.querySelector(".js-button");
  btn.addEventListener("click", getRepos);