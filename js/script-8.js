// "use strict";

/*
let obj = {
  "first prop": "1-st",
  "second prop": "2-nd",
  "third prop": "3-rd",
  0: "zero",
  name: "Michael",
  number: "050-280-27-87",
};

console.log(obj["second prop"]);

obj.w2 = "qwe"; // имена ключей, начинающиеся с цифры не работают
obj[1] = "zxc"; // а так работает

console.log("name" in obj); // проверка существования записи/свойства

for (const key in obj) {
  console.log(key); // перебор ключей
}

let find = "name";
console.warn("I find -", obj[find]);

obj["sur" + find] = "Jackson";
console.table(obj);

console.log("111", obj[0]); // число ключа превращается в строку
console.log("222", obj["0"]);
*/

// ============= tests ============

// --- 1 ---
/*
function isEmpty(obj) {
  for (let key in obj) {
    //  если тело цикла начнет выполняться - значит в объекте есть свойства
    console.log(`key in obj is exist`);
    return false;
  }
  console.log(`key in obj NOT exist`);
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "Вставай";

console.log(isEmpty(schedule)); // false
*/

// --- 2 ---
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// let salaries = {};

let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

console.log("sum=", sum);
*/

// --- 3 ---
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  qwe: "100",
  asd: NaN,
  assa: 0,
  fsf: -1,
  fsdf: false,
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

console.table(menu);
*/

// Клонирование и объединение, Object.assign
/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  
};

let color = {
  font: "blue",
  headers: "red",
};

let font = {
  size: "18px",
  weight: "bold",
  color: "green",
};

let test = {};

Object.assign(test, menu, font, color);

console.table(test);
*/

// ========== THIS ==========================

/*
let user = {
  name: "Michael",
  age: 29,
  sex: "male",
  sayHello(toWhom = "World") {
    console.log(`Hello ${toWhom}! I'm ${this.name}`);
  },
};

user.sayHello();
user.sayHello("everybody");
*/

/*
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

/*
let calculator = {
  read() {
    this.num1 = +prompt("Enter 1-st number", 0);
    this.num2 = +prompt("Enter 2-nd number", 0);
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
alert("sum=" + calculator.sum());
alert("mul=" + calculator.mul());
*/

// ==================== Функции-конструкторы ======================

/*
function User(name, age) {
  this.name = name;
  this.age = age;
  this.isStudent = true;

  this.sayHello = function (toWhom = "World") {
    console.log(`Hello ${toWhom}! I'm ${this.name}`);
  };
}

let user1 = new User("Mike", 20);
let user2 = new User("Ann", 19);

console.log(user1.name);
console.log(user2.age);
console.table(user1);

user1.sayHello("to all");
  */

// ----------------------------------------
/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.*/
/*
function Calculator() {
  this.read = function () {
    this.num1 = +prompt("Enter 1-st number", 0);
    this.num2 = +prompt("Enter 2-nd number", 0);
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
*/

// -------------------------------------------
/* Создайте функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value. */

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Enter number", 0);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
