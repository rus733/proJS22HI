//  готовим задание 10hi

const button = document.getElementById('button');

button.onclick = function () {
  const inputText = document.querySelector('[type = "text"]');
  const newElementLi = document.createElement('li');
  const ulParent = document.querySelector('ul');
  newElementLi.innerHTML = inputText.value;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
  inputText.value = '';
};

// еще работал и этот способ
/*
const createNewLi = function () {
  const inputText = document.querySelector('[type = "text"]');
  const newElementLi = document.createElement("li");
  const ulParent = document.querySelector("ul");
  newElementLi.innerHTML = inputText.value;
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
};

button.addEventListener("click", createNewLi);
*/
