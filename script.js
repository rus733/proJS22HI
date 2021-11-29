"use strict";

const getDayName = (number, lang) =>
  ({
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    ru: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  }[lang][number % 7]);

console.log(getDayName(5, "en")); // Friday
console.log(getDayName(7, "ru")); // Воскресенье
