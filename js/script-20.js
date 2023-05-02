"use strict";

console.log("========== Callback ===============");

// расширяемая ф-ция математич. операции

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add); // 5
doMath(6, 2, sub); // 4

// --- Отложенный вызов: геолокация

/*
const onGetPositionSuccess = function (position) {
  console.log("on Get Position Success");
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError,
  );
*/

// --- Отложенный вызов: интервалы

const callback = function () {
  console.log("колбек в таймауте");
};

console.log("перед таймаутом");

setTimeout(callback, 2000);

console.log("после таймаута");

// --- Фильтр

// ф-ция получает массив и ф-цию для фильтрации
const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    // удовлетворяет элемент условию в колбеке
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// ф-ция для проверки условия элементами массива
const callback1 = function (value) {
  return value >= 3;
};

const callback2 = function (value) {
  return value <= 4;
};

const rez1 = filter([1, 2, 3, 4, 5], callback1);
console.log(rez1);

const rez2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback1);
console.log(rez2);
