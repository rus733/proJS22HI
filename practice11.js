/*

// обработчик на кнопке 
const btn = document.getElementById("btn");

btn.onclick = () => alert("klik по кнопке ");
console.dir(btn);



// обработчик клик на квадрате 
const square = document.getElementById("square");

//square.onclick = () => alert("klik по квадрат ");
const logger = () => console.log("klik по квадрат ");
const logger1 = () => console.log("klik по квадрат !!!! ");

square.onclick = () => {
  logger();
  logger1();
};

square.onclick = null; // удалим обработчик

square.onclick = () => {
  // получим результат работы только ф-ии logger
  logger();
};

console.dir(square);
*/

// метод аддэвент листенер  - болеее функциональный

//const square = document.getElementById("square");
/*
const logger = () => console.log("klik по квадрат ");

square.addEventListener("click", logger);

*/
// можем передать в аргумент анонимную функцию

//square.addEventListener('click', () => console.log('klik по квадрату '));
//console.dir(square);

//добавим несколько обработчиков события клик
/*
square.addEventListener("click", () => console.log("klik по квадрату 1 "));
square.addEventListener("click", () => console.log("klik по квадрату  2 "));
*/

// вернем func logger
// и разберемся как можно удалить данный слушатель - он же  обработчик

/*
const square = document.getElementById('square');

let counter = 0;
const logger = () => {
  counter++;
  if (counter === 3) {
    square.removeEventListener('click', logger);
  }
  console.log(counter);

  console.log('klik по квадрату ');
};

square.addEventListener('click', logger);

*/

// метод remove удаляет
// удалять мы можем только именные функции
//square.addEventListener('click', () => console.log('klik по квадрату '));
//square.removeEventListener('click', logger);

//

//Расмотрим  обьект  EVENT , каждая колбэк функция которая
//передается в аддэвент листенер получает внутри данного
//метода получает доступ у самому событию , к обьекту
//данного события ,и  принимает его в первый параметр

/*
const square = document.getElementById('square');

const logger = (event) => {
  console.log(event.type);
};

square.addEventListener('click', logger);

*/
///square.addEventListener('mouseup', logger);
//square.addEventListener('mousedown', logger);
//square.addEventListener('mousemove', logger);
//square.addEventListener('mouseenter', logger);
//square.addEventListener('mouseleave', logger);

////square.addEventListener('mouseover', logger);
//square.addEventListener('mouseout', logger);

//

//поработаем с событиями  при вводе форм
/*
const text = document.getElementById('text');
const span = document.getElementById('text-span');

const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const logger = (event) => {
  //console.log(event.type); //событие инпут зависит от колчества изменения значений данного элемента  инпут
  console.log(event.target); // обратимся к ф-ции target и получим тот самый инпут

  //console.dir(event.target); // раскроем через метод консол дир
  //найдем свойство value - и выведем его в консоль

  //console.dir(event.target.value);
  //console.log(span);

  span.textContent = event.target.value; // в спан заносится все что введено в инпут
  //rangeSpan.textContent = event.target.value;


};

text.addEventListener('input', logger);
*/

/*

//text.addEventListener('input', logger); //любое изменение инпут
//text.addEventListener('focus', logger); //поставить курсор
//text.addEventListener('blur', logger); //убрать курсор
//text.addEventListener('change', logger); // когда два события - input и blur

// рассмотрим еще 2 события в проверке на элементах input

//text.addEventListener('keyup', logger);
//text.addEventListener('keydown', logger);

//работаем с input- range

//range.addEventListener('input', logger);
range.addEventListener('change', logger);

/*document.getElementById('range').addEventListener('change', logger); 
//можно вешать события напрямую на элементы  не применяя переменные ; но переменные могут пригодится
*/

// Рассмотрим еще неск событий
/*
const text = document.getElementById('text');
const span = document.getElementById('text-span');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const logger = (event) => {
  span.textContent = event.target.value; // в спан заносится все что введено в инпут
  rangeSpan.textContent = event.target.value;

  console.log(event.type);
};


// событие вешается на документ и происходит когда интерпритатор считал верстку и  построил DOM

document.addEventListener('DOMContentLoaded', function () {
  console.log('Dom построен');
}); // редко используем

window.onbeforeunload = function () {
  return 'вы уверены что хотите уйти ';
}; // устаревший


range.addEventListener('change', logger);
*/

// event prevent Default - отменяет стандартное поведение элементов на странице
/*
const link = document.querySelector('a'); // получим ссылку по тегу

console.log(link);

link.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('клик по ссылке');
});

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  console.log('где меню ???');
});
*/

// ВСПЛЫТИЕ И ПЕРЕХВАТ
/*
const btn = document.querySelector('#e_btn');
const circle = document.querySelector('#circle');
const square = document.querySelector('#square');

//console.log(btn);
//console.log(circle);
//console.log(square);

//ф которая при клике на элементе добавляет к каждому элементу какойто класс
/*
const toggler = function (event) {
  //event.stopPropagation(); // прекращает всплытие

  console.log(' Событие  сработало на ' + event.target.id + 'и перенеслось на ' + event.currentTarget.id);
  //console.log(event.currentTarget);

  event.target.classList.toggle('green');
};

btn.addEventListener('click', toggler, true);
circle.addEventListener('click', toggler, true);
square.addEventListener('click', toggler, true);
*/
