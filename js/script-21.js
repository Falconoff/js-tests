"use strict";

console.log("========== Context ===============");

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
showThis();
// this in showThis: Window

const user = {
  name: "Mango",
  age: 18,
};

const anotherUser = {
  name: "Poly",
  age: 19,
};

/*
 * Записываем ссылку на функцию в свойство объекта
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
