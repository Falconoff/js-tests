"use strict";

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log(fruits[2]); // Слива
fruits[2] = "Груша"; // теперь ["Яблоко", "Апельсин", "Груша"]
fruits[3] = "Лимон"; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
console.log("fruits.length=", fruits.length); // 3

fruits[6] = "Слива";
console.log(fruits); // теперь ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty, empty, 'Слива']
console.log("fruits.length=", fruits.length); // 7

fruits = ["Яблоко", "Апельсин", "Груша", "Лимон", "Слива"];

//  .at
console.log("====== fruits.at() ======");
console.log(fruits.at(1)); // Апельсин
console.log(fruits.at(-1)); // Слива

// pop & push
console.log("====== pop & push ======");

console.log(fruits); //  ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty × 2, 'Слива']
console.log(fruits.pop()); // 'Слива'
console.log(fruits); // ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty × 2]

fruits.push("Kiwi");
console.log(fruits); // ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty × 2, 'Kiwi']

// shift & unshift
console.log("====== shift & unshift ======");

fruits.shift();
console.log(fruits); // ['Апельсин', 'Груша', 'Лимон', empty × 2, 'Kiwi']
fruits.unshift("Banana 1", "Banana 2");
console.log(fruits); // ['Banana 1', 'Banana 2', 'Апельсин', 'Груша', 'Лимон', empty × 2, 'Kiwi']

// ====== Matrix ======
console.log("====== Matrix ======");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix); // [Array(3), Array(3), Array(3)]
console.log(matrix[1][1]); // 5, центральный элемент
