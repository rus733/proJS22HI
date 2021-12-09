"use strict";

//готовим задание 9

//ВАРИАНТ 2

const declinationHours = ["час", "часа", "часов"];
const declinationMinuts = ["минута", "минуты", "минут"];
const declinationSeconds = ["секунда", "секунды", "секунд"];

/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */

function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

/* функция получения текущей даты и времени в формате 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды' */

function date_time() {
  const arrDay = ["Воскресенье", "Понедельник ", "Вторник", "Среда ", "Четверг", "Пятница", "Суббота"];
  const arr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  const current_datetime = new Date();
  const day = zero_first_format(current_datetime.getDate());
  const dayWeek = current_datetime.getDay();
  const month = zero_first_format(current_datetime.getMonth() + 1);
  const year = current_datetime.getFullYear();
  const hours = zero_first_format(current_datetime.getHours());
  const minutes = zero_first_format(current_datetime.getMinutes());
  const seconds = zero_first_format(current_datetime.getSeconds());

  return (
    "Сегодня " +
    arrDay[dayWeek] +
    ", " +
    day +
    " " +
    arr[current_datetime.getMonth()] +
    " " +
    year +
    " года, " +
    hours +
    " " +
    timeNameForm(declinationHours, hours) +
    " " +
    minutes +
    " " +
    timeNameForm(declinationMinuts, minutes) +
    " " +
    seconds +
    " " +
    timeNameForm(declinationSeconds, seconds)
  );
}

//функция представления названий минут , секунд и часов в правильном склонении
const timeNameForm = function (arrName, n) {
  //let text_forms = arrName;

  n = Math.abs(n) % 100;

  const n1 = n % 10;

  switch (true) {
    case n > 10 && n < 20:
      return arrName[2];
    case n1 > 1 && n1 < 5:
      return arrName[1];
    case n1 == 1:
      return arrName[0];

    default:
      return arrName[2];
  }
};

// Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

// Функция для вывода  на страницу текущую дату и время в  формате '04.02.2020 - 21:05:33'

function date_time_full() {
  const current_datetime = new Date();
  const day = zero_first_format(current_datetime.getDate());
  const dayWeek = current_datetime.getDay();
  const month = zero_first_format(current_datetime.getMonth() + 1);
  const year = current_datetime.getFullYear();
  const hours = zero_first_format(current_datetime.getHours());
  const minutes = zero_first_format(current_datetime.getMinutes());
  const seconds = zero_first_format(current_datetime.getSeconds());

  return day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds;
}

/* Функция для вывода  текущего  времени и даты */

setInterval(function () {
  document.getElementById("current_date_time_block1").innerHTML = date_time();
}, 1000);

let setInterval_full = setInterval(function () {
  document.getElementById("current_date_time_block2").innerHTML = date_time_full();
}, 1000);
