"use strict";

console.log("--- Map --- test---");

let mapTest = new Map();

mapTest.set("1", "str1"); // рядок як ключ
mapTest.set(1, "num1"); // цифра як ключ
mapTest.set(true, "bool1"); // булеве значення як ключ
mapTest.set("qwe", 9876);

//console.log(mapTest);
//console.log(mapTest.get(1));

// map.keys() – повертає об’єкт-ітератор для ключів
console.log("--- map.keys()---");
for (let item of mapTest.keys()) {
  console.log(item);
}

// map.values() – повертає об’єкт-ітератор для значень
console.log("--- map.values()---");
for (let item of mapTest.values()) {
  console.log(item);
}

// map.entries() – повертає об’єкт-ітератор зі значеннями виду [ключ, значення], цей варіант типово використовується з for..of.
console.log("--- map.entries()---");
for (let item of mapTest.entries()) {
  console.log(item);
}

console.log("--- map.forEach( ()=>{} )---");
mapTest.forEach((value, key) => {
  console.log(`${key}:: ${value}`);
});

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

console.log(unique(values)); // ['Hare', 'Krishna', ':-O']

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
