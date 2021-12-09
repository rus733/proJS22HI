"use strict";

//  готовим задание 10hi

function createNewLi() {
  const inputText = document.querySelector('[type = "text"]');
  const newElementLi = document.createElement("li");
  const ulParent = document.querySelector("ul");

  newElementLi.innerHTML = inputText.value;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
}

button.addEventListener("click", createNewLi);
