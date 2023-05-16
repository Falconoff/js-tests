"use strict";

// console.log("==========  ===============");

console.log("---------- Прототипное наследование -----------");

const objA = { x: 1 };
const objB = { y: 2 };
const objC = { z: 3 };

console.log("objA:", objA); // { x: 1 }
console.dir(objB); // Object:
// y: 2
// [[Prototype]]: Object

console.log("objA.x:", objA.x); //  1
console.log("objA.z:", objA.z); //  undefined
// потому что св-ва z у объекта objA нет!

//  пропишем цепочку прототипов:
// objA.__proto__ = objB;
// objB.__proto__ = objC;

// теперь благодаря прототипному наследованию всё работает
console.log("objA.z:", objA.z); //  3

// добавим какую-нибудь ф-цию в objB ...
objB.fn = function doSmth() {
  console.log(5);
};

// ... и посмотрим в консоли как отображается цепочка прототипов
console.log("objA:", objA); // { x: 1 }

// ------------------------------------------------

console.log(objA.hasOwnProperty("x")); // true
console.log(objA.hasOwnProperty("y")); // false

// ------------------------------------------------

console.log("---------- !!! Правильное прототипное наследование -----------");

// !!! Цепочка прототипов строится с конца (с самого главного объекта)

const objCC = { c: 6 };

const objBB = Object.create(objCC);
objBB.b = 5;

console.log(objBB);
console.log(objBB.b); // 5
console.log(objBB.c); // 6

const objAA = Object.create(objBB);
objAA.a = 4;

console.log(objAA);
console.log(objAA.c);

// Если найденное у прототипа св-во перезаписать, то оно становится собственным св-вом объекта, а у прототипа значение этого св-ва не меняется.
objAA.c = 100;

console.log(objAA.c);
console.log(objAA);

console.log(objAA.kkk); // undefined
// При вызове несуществующего св-ва возвращается undefined не потому, что этого св-ва нет в данном объекте, а его нет во всей цепочке прототипов

console.log("---------------------------");
// ------------------------------------------------
