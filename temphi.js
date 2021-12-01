"use strict";

//Принято 3

/*const lang = "en";

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

// 4 усложненное не проверенное

let sliced, str;

let title = prompt(" введите строку");

const myFunc = function (str) {
  if (typeof str !== "string") {
    console.log(" Не строка");
  } else {
    str = str.trim();
    sliced = str.slice(0, 30);
    if (sliced.length < str.length) {
      console.log((sliced += "..."));
      return (sliced += "...");
    }
  }
};
myFunc(title);*/

// вариант 4 услож
/*
const myFunc = (arg) => {
  let res = "Ожидается появление строки...";
  if (typeof arg === "string") {
    const maxLength = 30;
    const str = arg.trim();
    if (str.length > maxLength) {
      res = str.substr(0, maxLength) + "...";
    } else {
      //console.log(arg + "не строка ");
      res = str;
    }
  }
  return res;
};

console.log("1 myFunc(): ", myFunc(5));
console.log("2 myFunc(): ", myFunc("    Строка менее 30 символов     "));
console.log(
  "3 myFunc(): ",
  myFunc(
    "    Строка более 30 символов - ну очень при очень длинная строчка получилась!"
  )
);

*/

вар 4 слож  после правок 
/*
"use strict";
// сложный урок 4

//const title = prompt(" введите строку");
const myFunc = function (arg1, maxLength = 30) {
  if (typeof arg1 !== "string") {
    return " Это не строка";
  }
  const str = arg1.trim();

  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
};

//myFunc(title);

console.log("1 myFunc(): ", myFunc(1000, 30));
console.log("2 myFunc(): ", myFunc("    Строка менее 30 символов     ", 30));
console.log(
  "3 myFunc(): ",
  myFunc(
    "    Строка более 30 символов - ну очень при очень длинная строчка получилась!",
    20
  )
);
 */

вар 4  слож в es6

const myFunc (arg, maxLength = 30) => {
  if (typeof arg !== "string") return "Это не строка";
  
  const str = arg.trim();
    
  return (str.length > maxLength) ? str.slice(0, maxLength) + "..." : str;
};