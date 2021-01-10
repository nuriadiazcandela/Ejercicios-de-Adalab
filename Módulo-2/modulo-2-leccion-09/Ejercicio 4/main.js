'use strict';

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true,
  },
  {
    name: 'Comprar pilas',
    completed: true,
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true,
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

const container = document.querySelector('.container');
container.innerHTML += `Hay ${tasks.length} tareas`;

function paintTasks() {
  const listElement = document.querySelector('.list');
  listElement.innerHTML = ``;

  for (let i = 0; i < tasks.length; i++) {
    let completedClass;
    let checkeAttr;
    if (tasks[i].completed === true) {
      completedClass = `completed`;
      checkeAttr = `checked`;
    } else {
      completedClass = ``;
      checkeAttr = ``;
    }
    listElement.innerHTML += `<li class="${completedClass}">
    <input type="checkbox" ${checkeAttr} class="list-check" id="${i}">
    <span>${tasks[i].name}</span>
    </li>`;
  }
}

paintTasks();
