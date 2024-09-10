"use strict";

// console.log("==========  ===============");

console.log(
  "---------- Прототипное наследование -----------",
);

const objA = { x: 1 };
const objB = { y: 2 };
const objC = { z: 3 };

console.log("objA:", objA); // { x: 1 }
console.dir(objB);
// Object:
//   y: 2
//   [[Prototype]]: Object

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

// ... и посмотрим в консоли как отображается цепочка прототипов:
console.log("objA:", objA);
/*
x:1
[[Prototype]]: Object
  fn: ƒ doSmth()
  y:2
  [[Prototype]]:Object
    z:3
    [[Prototype]]:Object
*/

// ------------------------------------------------

// Метод объекта hasOwnProperty() проверяет является ли св-во собственным данного объекта
console.log(
  "is X own prop of ObjA ? -",
  objA.hasOwnProperty("x"),
); // true
console.log(
  "is Z own prop of ObjA ? -",
  objA.hasOwnProperty("z"),
); // false

// ------------------------------------------------

console.log(
  "---------- !!! Правильное прототипное наследование -----------",
);

// !!! Цепочка прототипов строится с конца (с самого главного объекта)

const objCC = { c: 6 };

const objBB = Object.create(objCC);
objBB.b = 5;

console.log(objBB);
console.log(objBB.b); // 5
console.log(objBB.c); // 6

const objAA = Object.create(objBB);
objAA.a = 4;

console.log(objAA); // {a: 4}
console.log(objAA.c); // 6

// Если найденное у прототипа св-во перезаписать, то оно становится собственным св-вом объекта, а у прототипа значение этого св-ва не меняется.
objAA.c = 100;

console.log(objAA.c); // 100
console.log(objAA); // {a: 4, c: 100}

console.log(objAA.kkk); // undefined
// При вызове несуществующего св-ва возвращается undefined не потому, что этого св-ва нет в данном объекте, а его нет во всей цепочке прототипов

console.log("---------------------------");
// ------------------------------------------------

// ------ Классы, Экземпляры. -------
console.log("------ Классы, Экземпляры. -------");

// Деструктуризируем объект настроек, значение по умолчанию будет undefined, если не пришёл объект, чтоб не было ошибки
const Car = function ({ brand, model, price } = {}) {
  // const {brand, model, price} = config;

  // 2. Функция вызывается в контексте созданного объекта,
  //    т.е. в this записывается ссылка на него

  this.brand = brand;
  this.model = model;
  this.price = price;

  // если добавим метод, то он будет скопирован в каждый экземпляр, а нам этого не надо
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };

  // 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype, т.е. Car.prototype - это ПРОТОТИП будущего объекта (экземпляра)

  // 4. Ссылка на объект возвращается в место вызова new Car
};

// Добавим в прототип функцию изменения цены
Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// 1. Если функция вызывается через new, создаётся пустой объект {}
const myCar = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});
console.log(myCar); // {brand: 'Audi', model: 'Q3', price: 35000, changePrice: ƒ}

const myCar2 = new Car({
  brand: "BMW",
  model: "X6",
  price: 50000,
});
console.log(myCar2); //  {brand: 'BMW', model: 'X6', price: 50000, changePrice: ƒ}

// ============================================

/*
1. У каждого объекта есть свойство __proto__
2. В этом свойстве лежит ссылка на его ПРОТОТИП, т.е. другой объект
3. При создании литерала объекта, в свойство __proto__ записывается ссылка на Функция.prototype
4. Функция-конструктор - это просто функция
5. Всю магию делает оператор new
6. Если функция вызывается через new, создаётся пустой объект {}
7. Функция вызывается в контексте созданного объекта, т.е. в this записывается ссылка на него
8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype
9. Ссылка на объект возвращается в место вызова new Функция()
*/

const objN = { x: 5 };

console.log(objN.__proto__ === Object.prototype);
