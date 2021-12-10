"use strict";

//  готовим задание 10hi
const button = document.getElementById("button");
console.dir(button);
/*
function createNewLi() {
  const inputText = document.querySelector('[type = "text"]');
  const newElementLi = document.createElement("li");
  const ulParent = document.querySelector("ul");

  newElementLi.innerHTML = inputText.value;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
}

//button.addEventListener("click", createNewLi);
button.onclick = createNewLi();
*/
button.onclick = function () {
  const inputText = document.querySelector('[type = "text"]');
  const newElementLi = document.createElement("li");
  const ulParent = document.querySelector("ul");
  newElementLi.innerHTML = inputText.value;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
};
