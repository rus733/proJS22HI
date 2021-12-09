"use strict";

//  готовим задание 10hi

function createNewLi() {
  const inputText = document.querySelector('[type = "text"]');
  console.dir(inputText.value);
  let newElementLi = document.createElement("li");
  newElementLi.innerHTML = inputText.value;

  const ulParent = document.querySelector("ul");
  ulParent.append(newElementLi); // вставить newLi в конец <ul>
}

button.addEventListener("click", createNewLi);

/*
button.onclick = () => {
  for (let i = 1; i <= 3; i++) {
    alert("Кролик номер " + i);
  }
};
*/

/*
//Принято

//готовим задание 4

const lang = "en";

const arrDayName = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ru: ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"],
};

if (lang === "ru") {
  console.log(arrDayName.ru);
} else {
  console.log(arrDayName.en);
}

switch (lang) {
  case "ru":
    console.log(arrDayName["ru"]);
    break;
  case "en":
    console.log(arrDayName["en"]);
    break;
}

console.log(arrDayName[lang]);

const namePerson = "Артем";
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
*/
