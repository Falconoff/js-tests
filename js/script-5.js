// =========== ИЛИ ==============

// ИЛИ - || возвращает первое истинное значение или, если такое значение не найдено, последнее ложное.

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("Офис закрыт."); // это выходной
}

// ----
const truthy1 = 123;
const truthy2 = [1, 2, 3];
const truthy3 = "abc";
const falsy1 = null;
const falsy2 = "";
const falsy3 = 0;

console.log(truthy1 || truthy2 || truthy3); // 123
console.log(falsy1 || falsy2 || falsy3); // 0

// =========== И ==============

// И - && возвращает первое ложное значение или последнее, если ничего не найдено.

let hours = 12;
let minutes = 30;

if (hours == 12 && minutes == 30) {
  console.log("The time is 12:30");
}

// ----
console.log(truthy1 && truthy2 && truthy3); // abc
console.log(falsy1 && falsy2 && falsy3); // null

// =========== НЕ ==============

// Сначала приводит аргумент к логическому типу true/false. Затем возвращает противоположное значение.

console.log(!"non-empty string"); // false
console.log(!null); // true

// двойное НЕ !! используют для преобразования значений к логическому типу:
console.log(!!"non-empty string"); // true
console.log(!!null); // false
