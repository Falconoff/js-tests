"use strict";

console.log(" ---------------- Task 1 ---------------- ");
// Фильтрация уникальных элементов массива
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O

console.log(" ---------------- Task 3 ---------------- ");
// Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Это потому что map.keys() возвращает итерируемый объект, а не массив.
// Мы можем конвертировать его в массив с помощью Array.from:
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log(map);
console.log(Object.entries(map));

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
