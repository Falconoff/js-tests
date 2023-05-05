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

// замыкание

console.log("========== Closure ===============");

// --- Поварёнок

const makeSheff = function (name) {
  const innerVar = "cooks";

  const makeDish = function (dish) {
    console.log(`${name} ${innerVar} ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff("Mango");

// console.log(mango);
// console.dir(mango);

mango("tea");
mango("coffee");

const poly = makeSheff("Poly");

poly("pizza");
poly("pasta");
mango("juice");

// --- Округление

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(1.234456));
console.log(rounder3(1.234456));
console.log(rounder2(34.765765));
console.log(rounder3(34.765765));

// Приватные свойства
