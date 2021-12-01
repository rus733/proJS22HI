"use strict";
// сложный урок 4

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

console.log("1 myFunc(): ", myFunc(1000, 30));
console.log("2 myFunc(): ", myFunc("    Строка менее 30 символов     ", 30));
console.log(
  "3 myFunc(): ",
  myFunc(
    "    Строка более 30 символов - ну очень при очень длинная строчка получилась!",
    20
  )
);
