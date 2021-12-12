'use strict';

//готовим задание урока  11

const btn = document.getElementById('btn');
const eBtn = document.getElementById('e_btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
const span = document.getElementById('text-span');
const range = document.querySelector('[type=range]');
const circle = document.getElementById('circle');

// задание 1

let inputText = '';

const logger = (event) => {
  inputText = event.target.value;
};

const newF = function (event) {
  square.style.backgroundColor = inputText;
};

text.addEventListener('input', logger);
btn.addEventListener('click', newF);

// задание 2
eBtn.style.display = 'none';

//задание 3
const circleSize = function (event) {
  circle.style.height = range.value + '%';
  circle.style.width = range.value + '%';
};

range.addEventListener('input', circleSize);
