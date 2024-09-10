"use strict";

// console.log("==========  ===============");

console.log("---------- Конструктор -----------");

const Hotel = function (name, stars, capacity) {
  // изначально у конструктора:
  // this = {};

  // в this пишем свойства и методы
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;

  // Добавим метод в создаваемый объект. Например, пусть Hotel имеет методы для приветствия гостя
  this.greet = function (guestName) {
    console.log(
      `Hello ${guestName}, wellcome to ${this.name}`,
    );
  };

  // под капотом:
  // return this;
};

// В результате вызова
const hotelResort = new Hotel("Resort Hotel", 5, 100);
// Получаем такой объект
console.log(hotelResort); // Hotel {name: "Resort Hotel", stars: 5, capacity: 100, greet: ƒ}

const hotelGloria = new Hotel("Gloriya", 3, 200);
console.log(hotelGloria); // {name: 'Gloriya', stars: 3, capacity: 200, greet: ƒ}

// вызовем приветствие для гостя Mango
hotelResort.greet("Mango"); // Hello Mango, wellcome to Resort Hotel

// ------------------------------------------------
console.log("---------------------------");
// ------------------------------------------------

const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  };
};

const mango = new Manager("Mango", 5);
console.log("mango.sales:", mango.sales); // 5
console.log(mango.sell("TV")); // Manager Mango sold TV
console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
console.log("mango.sales:", mango.sales); // 7

const poly = new Manager("Poly", 10);
console.log("poly.sales", poly.sales); // 10
console.log(poly.sell("iPhone")); // Manager Poly sold iPhone
console.log(poly.sell("catInTheBag")); // Manager Poly sold catInTheBag
console.log("poly.sales", poly.sales); // 12

console.log(poly);

// ------------------------------------------------
console.log("---------------------------");
// ------------------------------------------------
