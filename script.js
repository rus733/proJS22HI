"use strict";

let lang = "en";

if (lang == "ru") {
  console.log("Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс");
} else {
  console.log("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
}

switch (lang) {
  case "ru":
    console.log("Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс");
    break;

  case "en":
    console.log("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
    break;
}

let getLangDay = [];
getLangDay["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
getLangDay["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//let lang = "ru";
console.log(getLangDay[lang]);

/////////////////////////////////////////////////////////////////

let namePerson = "Артем";

namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
