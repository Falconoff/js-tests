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
