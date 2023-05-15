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
    console.log(`Hello ${guestName}, wellcome to ${this.name}`);
  };

  // под капотом:
  // return this;
};

// В результате вызова
const hotel = new Hotel("Resort Hotel", 5, 100);
// Получаем такой объект
console.log(hotel);
// Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

const hotelGloria = new Hotel("Gloriya", 3, 200);
console.log(hotelGloria);

// вызовем приветствие для гостя Mango
hotel.greet("Mango"); // Hello Mango, wellcome to Resort Hotel

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
console.log(poly.sell("TV")); // Manager Poly sold TV
console.log(poly.sell("Microwave")); // Manager Poly sold Microwave
console.log("poly.sales", poly.sales); // 12

console.log(poly);

// ------------------------------------------------
console.log("---------------------------");
// ------------------------------------------------
