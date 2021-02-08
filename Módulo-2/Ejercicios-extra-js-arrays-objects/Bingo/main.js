'use strict';
const newBallBtn = document.querySelector('.js-new-number-btn');
const playBtn = document.querySelector('.js-play-btn');

function init() {
  console.log('se ha iniciado la página');
  console.log('Generar 20 números para Mi Cartón (sin repetir)');
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//listeners
function handleNewBall() {
  console.log('Se ha pulsado: Saca una bolita');
  playRound();
}

function handlePlay() {
  console.log('Se ha pulsado: Play');
  setPlay();
  playRound();
}

//functions
function setPlay() {
  console.log('Activar modo automático');
}

function playRound() {
  console.log('Jugamos una ronda');
  createNewNumber();
  paintCardNumbers();
  paintBingoNumbers();
  isBingo();
}

function createNewNumber() {
  console.log('Generar un número para una bolita sin repetir');
}
function paintBingoNumbers() {
  console.log('Repintar Bolitas');
}

function paintCardNumbers() {
  console.log('Repintar todos los números de Mi cartón');
  console.log('¿El número de Mi cartón está en Bolitas?');
  if (true) {
    paintMatchedCardNumber();
  } else {
    paintUnmatchedCardNumber();
  }
}
function paintMatchedCardNumber() {
  console.log('Si : Pintar con fondo verde');
}
function paintUnmatchedCardNumber() {
  console.log('No: Pintar con fondo blanco');
}

function isBingo() {
  console.log('¿Han salido todos los números?');
  if (false) {
    console.log('si');
    showBingoMessage();
    hideButtons();
  } else {
    console.log('no');
    isPlayingMode();
  }
}

function showBingoMessage() {
  console.log('Mostrar mensaje de Han cantando Bingo!!!');
}

function hideButtons() {
  console.log('Ocultar botones de Saca una bolita y Play');
}
function isPlayingMode() {
  console.log('¿Estoy en modo automático?');
  if (false) {
    console.log('si');
    createNewNumberAgain();
  } else {
    console.log('no');
  }
}

function createNewNumberAgain() {
  console.log('Esperar un senguno y volver a empezar');
  setTimeout(() => {
    playRound();
  }, 1000);
}

newBallBtn.addEventListener('click', handleNewBall);
playBtn.addEventListener('click', handlePlay);

init();
