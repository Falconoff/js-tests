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
