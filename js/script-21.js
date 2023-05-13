"use strict";

// console.log("========== Контекст исполнения (this) ===============");

console.log("---------- this в глобальной области видимости -----------");

function fn() {
  console.log("this в глобальной области видимости -", this);
}

fn(); // window без "use strict" и undefined с "use strict"

// -------------------------------------------------------------

console.log("---------- this в методе объекта -----------");

// Петя бежит быстро, потому что Петя пытается поймать поезд.
const petya = {
  name: "Petya",

  showName() {
    console.log(petya.name);
    console.log(this.name);
  },

  // Если функция была вызвана как метод объекта, то контекст будет ссылаться на объект, частью которого является метод.
  showThis() {
    console.log(this);
  },
};

petya.showName(); // Petya
petya.showThis(); // {name: 'Petya', showName: ƒ, showThis: ƒ}

// -------------------------------------------------------------

const bookShelf = {
  authors: ["Бернард Корнуэлл", "Роберт Шекли"],

  getAuthors() {
    return this.authors;
  },

  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]

bookShelf.addAuthor("Ли Танит");

console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// ================================================================================

/*
Более сложный пример для лучшего понимания:
1. Сначала создадим функцию в глобальной области видимости и вызовем ее.
2. После чего присвоим ее в свойство объекта и вызовем как метод этого объекта.
*/
function showThis() {
  console.log("this in showThis: ", this);
}

// Вызываем в глобальном контексте
showThis(); // this in showThis: Window

const user = {
  name: "Mango",
  age: 18,
};

const anotherUser = {
  name: "Poly",
  age: 19,
};

/*
 * Записываем ссылку на функцию в свойство объекта user
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;

/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте которого
 *  осуществляется вызов, а не на глобальный объект.
 */

user.showContext(); // this in showThis: {name: "Mango", showContext: ƒ}

anotherUser.showContext = showThis;
// контекст будет ссылаться на объект, частью которого является метод
anotherUser.showContext(); // this in showThis:  {name: 'Poly', age: 19, showContext: ƒ}

// =====================================================================================

// ================ this в callback-функциях ============

console.log("---------- this в функциях обратного вызова -----------");

const hotel = {
  name: "Resort Hotel",
  showThis() {
    console.log("this from hotel -", this);
  },
};

const fnWithCallback = function (callback) {
  /*
   * Во время вызова fnWithCallback, callback будет ссылкой на функцию showThis объекта hotel.
   * Ее вызов происходит в глобальном контексте, про hotel она ничего не знает.
   * Соответственно this не будет ссылаться на hotel
   */
  callback();
};

// Передается ссылка на функцию а нее ее вызов
fnWithCallback(hotel.showThis); // window или undefined

// -------------------------------------------------------------

// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// Решение этой проблемы рассматривается в секции про метод bind() и методы объекта.

// =====================================================================================

// this в стрелочных функциях

console.log("---------- this в стрелочных функциях -----------");

// Стрелочные функции не имеют своего this. В отличии от обычных функций, изменить значение this внутри стрелки после её объявления нельзя.
// Контекст внутри стрелки определяется местом её объявления, а не вызова и ссылается на контекст родительской функции.

const showThisArrow = () => {
  console.log("this in showThisArrow: ", this);
};

showThisArrow(); // this in showThisArrow: window

const user2 = {
  username: "Mango",
};
user2.showContext = showThisArrow;

user2.showContext(); // this in showThisArrow: window

// -----------------------------------------------------

/* Пример не практичный, но отлично показывает как работает контекст для стрелок. Значение контекста берется из родительской области видимости. */
const hotel_2 = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрелки запоминают контекст во время объявления, из родительской области видимости
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel_2.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

/**/

/**/
