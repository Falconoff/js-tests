"use strict";

// ==========  ===============

console.log("========== Доступ к свойству объекта ===============");

// Короткие свойства
let pool = true;

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  pool,
};

// Доступ к свойству объекта
console.log(hotel.name); // Resort Hotel
console.log(hotel["name"]); // Resort Hotel
console.table(hotel);

// изменение свойств
hotel.name = "Coastline Resort";
hotel["stars"] = 4;
console.table(hotel);

//  add new property
hotel["let's del it"] = "Ok";
console.table(hotel);

// Удаление свойств - операция крайне редкая
delete hotel["let's del it"];
console.table(hotel);

// Отсутствующее свойство, при обращении к нему по ключу, возвращает undefined
console.log(hotel.pool); // undefined

console.log("========== Вычисляемые свойства ===============");

// Вычисляемые свойства
const key = "person";
const getKey = function () {
  return "age";
};

// Computed properties
const someObject = {
  [key]: "Mango",
  [getKey()]: 2,
};

console.log(someObject); // {person: 'Mango', age: 2}

console.log("========== Методы объекта, this ===============");

// Методы объекта, this

const user = {
  userName: "Jack",
  age: 18,
  sex: "male",
  address: "New York, USA",

  showName() {
    console.log("User name is", this.userName);
  },
  changeAddress(newAddress) {
    this.address = newAddress;
  },
};

console.table(user);
// console.log(user);

user.showName();
user.changeAddress("London, England");

console.table(user);

console.log("========== Перебор объекта ===============");

const keys = Object.keys(user);
console.log("keys of user:", keys);

for (const key of keys) {
  console.log("value of key:", user[key]);
}

console.log(" -------------------------- ");
// Допустим перед нами стоит задача посчитать общее количество продуктов в объекте формата имя-продукта: количество. Тогда подойдет метод Object.values() для того, чтобы получить массив всех значений и потом удобно их сложить.

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
  // showApples() {
  //   console.log("apples:", this.apples);
  // },
};

const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values) {
  total += value;
}

console.log("total", total); // 20

console.log("========== Операция spread ===============");

// Операция spread

// 1. Распыление аргументов

// необходимо найти самую маленькую температуру в массиве используя метод Math.min(), который ожидает несколько аргументов, а не массив.

const temperatures = [18, 14, 12, 21, 17, 29];

console.log("array:", temperatures);
console.log("spreaded array:", ...temperatures);

const min = Math.min(...temperatures); // 12

console.log("min temp:", min);

console.log(" ------------------ ");

// 2. Распыление массивов (копирование)

const arrA = ["q", "w", "e"];
const arrB = arrA;

console.log(arrA == arrB); // true - две ссылки на 1 массив

const arrC = [...arrA];

console.log(arrA == arrC); // false - разные массивы

// То же самое можно было сделать используя метод slice(), операция spread просто позволяет записывать это более кратко, особенно когда распылений несколько.

console.log([...arrA, "r", "t", "y", ...arrC]);

console.log(" ------------------ ");

// 3. Распыление объектов

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = { x: 5, j: 10, ...a, z: 15, ...b };

console.log(c); // {x: 0, j: 10, y: 2, z: 3}

console.log("========== Операция rest ===============");

// Операция REST
// Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

const add = function (value, ...args) {
  console.log("1st value:", value); // первый аргумент
  console.log("other values:", args); // массив всех остальных аргументов
};

add(10, 1, 2, 3);
add(15, 1, 2, 3, 4, 5);

console.log("========== Деструктуризация объектов ===============");

// Деструктуризация объектов

console.table(hotel);

// Объявим переменные и присвоим им значения из объекта hotel:

const {
  name: hotelName, // можно переопределить имена в процессе присвоения
  stars, // имя переменной и ключ объекта совпадают - происходит присваивание
  capacity = 10, // значения по умолчанию, если такого свойства в объекте нет
  status = "empty", // значения по умолчанию, если такого свойства в объекте нет
  parking, // Если для переменной не нашлось подходящего ключа, то будет присвоен undefined
} = hotel;

console.log(hotelName); // Coastline Resort
console.log(stars); // 4
console.log(capacity); // 100
console.log(status); // empty
console.log(parking); // undefined

console.log("========== Деструктуризация массивов ===============");

// Деструктуризация массивов

const rgb = [200, 100, 255];

// Если переменных больше, чем элементов массива, им будет присвоено undefined, поэтому можно указывать значения по умолчанию.
const [red, green, blue, alfa = 0.3] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);
// Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// Иногда из массива необходимо деструктуризировать только первые n элементов, а остальные сохранить в одну переменную в виде массива.
const [firstColor, ...otherColors] = rgb;
// firstColor: 200, otherColors: [100, 255]

// Элементы можно пропускать.
const [, , onlyBlue] = rgb;
// onlyBlue: 255
