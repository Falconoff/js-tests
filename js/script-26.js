"use strict";
/*

// повторити з інтервалом 1 секундy
let timerId = setInterval(() => console.log("тік"), 1000);

// зупинити через 5 секунд
setTimeout(() => {
  clearInterval(timerId);
  console.log("стоп");
}, 5000);
*/

console.log("======================");

// console.log(Math.min(10, 222, -5, 0, "-33"));
// const name = "Vasia";
// console.log(Math.abs(name.length - 15));
// console.log(+"4" + +"5");

// let name1 = "Vasia";
// name1[3] = "y";
// console.log(name1); // ???

// let i = 10;
// console.log(8 / 2 + 5 - -3 / 2);

// while (i < 10) {
//   console.log("qwe");
// }

// console.log("Vasia".toUpperCase().length.toString()); // "7"
// console.log("7");
// console.log(7);

// for (let i = 0; i <= 4; i++) {
//   console.log(++i);
// }
// print("Hello world!"); // priny Page

// console.log(4 * "five");

// console.log(Math.abs(Math.floor(-46.867)));

// let a = 5;
// console.log(++a);
// console.log(a++);

// console.log("\nHey!"[1]); // H

/*
let i = 0;
let c = 0;
const str = "Rolling Scopes School";
while (i < str.length) {
  if (str[i] === "o") {
    c++;
  }
  i++;
}
console.log(c);
*/
// const RS = "rs";
// console.log("css", RS, "js");
// console.log(typeof Infinity);

// console.log(
//   (function (a) {
//     arguments[0] = 10;
//     console.log(arguments);
//     console.log(a);
//     return a;
//   })(5),
// );

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // 1 2 3
//   }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // 3 3 3
//   }, 1000);
// }

// console.log(message);
// var message = 123;

// var name1 = "J";
// var user = {
//   name1: "P",
//   printM() {
//     console.log(`Hello ${name1}`);
//   },
// };
// var printM = user.printM;
// printM(); // "Hello J"

// let name = "John";
// function printName() {
//   console.log(name);
// }
// setTimeout(() => {
//   let name = "Peter";
//   printName();
// }, 1000);
// "John"

// for (var i = 0; i < 10; i++) {
//   console.log("smth");
// }
// console.log(i); // 10

// const foo = bar();
// const number = 2;
// function bar() {
//   // console.log(number);
//   return number;
// }
//  Cannot access 'number' before initialization

// function foo(a, b) {
//   return a * b;
// }
// const bar = foo.bind(null, 2);
// console.log(bar(2)); // 4

// let fff = function g() {
//   return 23;
// };
// console.log(typeof g()); // Uncaught ReferenceError: g is not defined

// let a = 4,
//   b = 3;
// let f = (a, b) => a + b;
// let f = new Function("a,b", "return a+b");
// let f = new Function("a", "b", "return a+b");
// let f = (a, b) => {
//   return a + b;
// };
// console.log(f(a, b));

// console.log(qwe);
// // let qwe = 123;
// var qwe = 123;

// function getThis() {
//   return this;
// }
// console.log(getThis()); // undefined - strict mode
