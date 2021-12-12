'use strict';
/*
function CheckSpaces2(str) {
  return str.trim() !== '';
}

console.log(CheckSpaces2('     '));
console.log(CheckSpaces2(''));
console.log(CheckSpaces2('  1 '));
*/

//  готовим задание 10hi
//const button = document.getElementById('button');
//console.dir(button);
const inputText = document.querySelector('[type = "text"]');
//console.dir(inputText);

const inputTextRight = function (str) {
  //str = str.value.trim();
  //console.log(str.trim());
  console.log(str.value.trim());
  console.log(typeof str.value.trim());

  if (str.value.trim() !== '') {
    //alert('Введите корректные данные !!!');
    return str.value.trim();
  } else if (str.value.trim() === 'undefined') {
    return alert('Введите корректные данные !!!');
  }
};

button.onclick = function () {
  const newText = inputTextRight(inputText);

  console.log(inputTextRight(inputText));

  const newElementLi = document.createElement('li');
  const ulParent = document.querySelector('ul');
  newElementLi.innerHTML = newText;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
  inputText.value = '';
};

//const inputTextTrim = inputText.value.trim();
//функция очистки инпута
//function clearText() {
// document.getElementById('[type = "text"]').value = '';
//}

// еще работал и этот способ
/*
const button = document.getElementById('button');
const createNewLi = function () {
  const inputText = document.querySelector('[type = "text"]');
  const newElementLi = document.createElement("li");
  const ulParent = document.querySelector("ul");
  newElementLi.innerHTML = inputText.value;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
};

button.addEventListener("click", createNewLi);
*/
