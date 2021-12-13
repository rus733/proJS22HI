'use strict';

//готовим к сдаче  задание урока  11

const btn = document.getElementById('btn');
const eBtn = document.getElementById('e_btn');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const span = document.getElementById('text-span');
const spanRange = document.getElementById('range-span');
const inputRange = document.querySelector('[type=range]');
const circle = document.getElementById('circle');

// задание 1

let сolorSquare = '';

const readInputText = (event) => {
  сolorSquare = event.target.value;
};

const newColorSquare = function (event) {
  square.style.backgroundColor = сolorSquare;
};

inputText.addEventListener('input', readInputText);
btn.addEventListener('click', newColorSquare);

/*

// задание 1 упростил немного 

const newColorSquare = function (event) {

  inputText.addEventListener('input', square.style.backgroundColor = (event) => event.target.value);
};

btn.addEventListener('click', newColorSquare);
*/

// задание 2
eBtn.style.display = 'none';

//задание 3
const circleSize = function (event) {
  spanRange.textContent = inputRange.value + '%';
  circle.style.height = inputRange.value + '%';
  circle.style.width = inputRange.value + '%';
};

inputRange.addEventListener('input', circleSize);
