"use strict";

console.log("========== Формат JSON, метод toJSON ===============");

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

// Метод JSON.stringify(student) берёт объект и преобразует его в строку.
let json = JSON.stringify(student);

console.log(typeof json); // мы получили строку - string

console.log(json); // выведет объект в формате JSON
// {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

console.log("-------------------");

// число в JSON остаётся числом
console.log(JSON.stringify(1)); // 1

// строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
console.log(JSON.stringify("test")); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

console.log("-------------------");

let user = {
  sayHi() {
    // будет пропущено
    console.log("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined, // как и это - пропущено
};

console.log(JSON.stringify(user)); // {} (пустой объект)
