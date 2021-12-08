"use strict";

//готовим задание 9

//ВАРИАНТ 2

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
    hoursName(hours) +
    " " +
    minutes +
    " " +
    minutesName(minutes) +
    " " +
    seconds +
    " " +
    secondsName(seconds)
  );
}

// Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
const hoursName = function () {
  let hours;
  let message;
  if (hours === 1 || hours === 21) {
    message = "час";
  } else if ((2 <= hours && hours < 5) || (22 <= hours && hours <= 24)) {
    message = "часа";
  } else {
    message = "часов";
  }

  return message;
};

//Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "минут"

const minutesName = function (n) {
  let text_forms = ["минута", "минуты", "минут"];
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
};

//Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "секунд"

const secondsName = function (n) {
  let text_forms = ["секунда", "секунды", "секунд"];
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
};

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
