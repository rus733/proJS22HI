"use strict";

const lang = "en";

const arrDayName = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ru: ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"],
};

if (lang === "ru") {
  console.log(arrDayName["ru"]);
} else {
  console.log(arrDayName["en"]);
}

switch (lang) {
  case "ru":
    console.log(arrDayName["ru"]);
    break;
  case "en":
    console.log(arrDayName["en"]);
    break;
}

let getLangDay = [];
getLangDay["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
getLangDay["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(getLangDay[lang]);

const namePerson = "Артем";
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
