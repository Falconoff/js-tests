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
objA.__proto__ = objB;
objB.__proto__ = objC;

// теперь благодаря прототипному наследованию всё работает
console.log("objA.z:", objA.z); //  3

// добавим какую-нибудь ф-цию в objB ...
objB.fn = function doSmth() {
  console.log(5);
};

// ... и посмотрим в консоли как отображается цепочка прототипов
console.log("objA:", objA); // { x: 1 }

// ------------------------------------------------
console.log("---------------------------");
// ------------------------------------------------
