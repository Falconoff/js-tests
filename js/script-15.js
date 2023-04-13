"use strict";

let user = {
  name: "John",
  age: 30,
};

Object.keys(user); // ["name", "age"]
Object.values(user); // ["John", 30]
Object.entries(user); // [ ["name","John"], ["age",30] ]

// Вот пример использования Object.values ​​для перебора значений свойств в цикле:
// перебор значений
for (let value of Object.values(user)) {
  console.log(value); // John, затем 30
}

// ============= Трансформации объекта ==================

// Например, у нас есть объект с ценами, и мы хотели бы их удвоить:
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2]),
);

console.log(doublePrices.meat); // 8

// ==============================================================

console.log(" ---------------- Task 1 ---------------- ");
// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let rez = 0;
  for (let value of Object.values(salaries)) {
    rez += value;
  }
  return rez;
}

console.log(sumSalaries(salaries)); // 650
// ==============================================================

console.log(" ---------------- Task 2 ---------------- ");
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user2 = {
  name: "John",
  age: 30,
};

function count(obj) {
  // return Object.entries(obj).length;
  return Object.keys(obj).length;
}

console.log(count(user2)); // 2
