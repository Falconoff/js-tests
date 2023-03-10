// =========== ИЛИ ==============

// ИЛИ - || возвращает первое истинное значение или последнее, если такое значение не найдено.

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("Офис закрыт."); // это выходной
}

// =========== И ==============

// И - && возвращает первое ложное значение или последнее, если ничего не найдено.

let hours = 12;
let minutes = 30;

if (hours == 12 && minutes == 30) {
  console.log("The time is 12:30");
}

// =========== НЕ ==============

// Сначала приводит аргумент к логическому типу true/false. Затем возвращает противоположное значение.

// двойное НЕ !! используют для преобразования значений к логическому типу:

console.log(!!"non-empty string"); // true
console.log(!!null); // false
