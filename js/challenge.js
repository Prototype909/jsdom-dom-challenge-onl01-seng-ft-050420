let timer = setInterval(incrementCounter, 1000);
const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');

minusButton.addEventListener('click', decrementCounter);
plusButton.addEventListener('click', incrementCounter);
pauseButton.addEventListener('click', pauseCounter);
