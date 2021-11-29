//////////////////////////////////////////////
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

////////////////////////
const num = 266219;

let ansMult = num
  .toString()
  .split("")
  .reduce((res, item) => item * res);

console.log(ansMult);
ansMult = ansMult ** 3;
console.log(ansMult.toString().slice(0, 2));
