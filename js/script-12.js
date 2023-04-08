"use strict";

console.log("============== splice, slice, concat ===================");

// ============== splice ===================

// arr.splice(start[, deleteCount, elem1, ..., elemN])

// ---------- Удаление ----------------

let arr1 = ["Я", "изучаю", "JavaScript"];

arr1.splice(1, 1); // начиная с индекса 1, удалить 1 элемент

console.log(arr1); // осталось ["Я", "JavaScript"]

// ---------- Замена --------------

let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
let removed = arr2.splice(1, 2, "хочу", "танцевать");

console.log("removed:", removed); // splice возвращает массив из удалённых элементов ['Я', 'изучаю', 'JavaScript']

console.log(arr2); // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// ------------ Вставка --------------

let arr3 = ["Я", "изучаю", "JavaScript"];

// с индекса 2 удалить 0 элементов
// вставить "сложный", "язык"
arr3.splice(2, 0, "сложный", "язык");

console.log(arr3); // "Я", "изучаю", "сложный", "язык", "JavaScript"

// -----------------

let arr4 = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr4.splice(-1, 0, 3, 4);

console.log(arr4); // 1,2,3,4,5

// ================ slice ================

// возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end).
// start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

let arr5 = ["t", "e", "s", "t", "i", "n", "g"];

let newArr = arr5.slice(2); // ['s', 't', 'i', 'n', 'g']
let newArr_2 = arr5.slice(2, 5); // ['s', 't', 'i']
let newArr_3 = arr5.slice(2, -1); // ['s', 't', 'i', 'n']

console.log("newArr=", newArr_3);

let copyArr = arr5.slice();
console.log(copyArr == arr5);

// ============== concat ===================
console.log("============== concat ===================");
let arr6 = [1, 2];
let arr7 = [9, 0];

console.log(arr6.concat([3, 4], [5, 6], 7, 8, arr7)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// ============== forEach ==================
console.log("============== forEach ===================");

// Метод arr.forEach() позволяет запускать функцию для каждого элемента массива.

// Вызов alert для каждого элемента
// ["Бильбо", "Гэндальф", "Назгул"].forEach(alert);

// А этот вдобавок расскажет и о позиции элемента в целевом массиве:
["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
  console.log(`У ${item} индекс ${index} в [${array}]`);
});
// У Бильбо индекс 0 в [Бильбо,Гэндальф,Назгул] ...

console.log("============== find ===================");

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" },
];

let user = users.find(item => item.id == 1);

console.log(user.name); // Вася

// Найти индекс первого Васи
console.log(users.findIndex(user => user.name == "Вася")); // 0

// Найти индекс последнего Васи
console.log(users.findLastIndex(user => user.name == "Вася")); // 3

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

// Преобразование массива
console.log("============== map ===================");

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
console.log(lengths); // 6,8,6

console.log("============== sort ===================");
let arr = [1, -2, 15, 2, 0, 8];

// Функция сравнения
// arr.sort(function (a, b) {
//   return a - b;
// });

// Лучше использовать стрелочные функции
arr.sort((a, b) => a - b);

console.log(arr); // [-2, 0, 1, 2, 8, 15]

// Используйте localeCompare для строк
let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (неправильно)

console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (правильно!)

console.log("============ reverse ================");
let arrForReverse = [1, 2, 3, 4, 5];
arrForReverse.reverse();

console.log(arrForReverse); // 5,4,3,2,1

console.log("============== split ===================");
// разбивает строку на массив по заданному разделителю
let names = "Вася, Петя, Маша";

let arrOfNames = names.split(", ");

console.log(arrOfNames);

let str = "тест";

console.log(str.split("")); // ['т', 'е', 'с', 'т']

console.log("============== join ===================");

// Вызов arr.join(glue) создаёт строку из элементов arr, вставляя glue между ними.
let arrFriends = ["Вася", "Петя", "Маша"];

let strFriends = arrFriends.join(";"); // объединить массив в строку через ;

console.log(strFriends); // Вася;Петя;Маша

let numArr = [5, 4, 3, 2, 1];
console.log(numArr.join("-"));

// reduce
console.log("============== reduce ===================");
// let value = arr.reduce(function(accumulator, item, index, array) {
// ...
// }, [initial]);
let arrForReduce = [1, 2, 3, 4, 5];

let result = arrForReduce.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

console.log("============== Array.isArray ===================");
// Array.isArray(value) - возвращает true, если value массив, и false, если нет.

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

console.log("============== «thisArg» ===================");
// «thisArg»
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let usersAge = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 },
  { age: 26 },
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = usersAge.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers); // 23

//
// ================== TASKS ==================================
//
console.log(" ================ T A S K S ================= ");

console.log(" ---------------- Task 1 ---------------- ");
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// моё решение --------------
// function camelize(str) {
//   let arrSplitted = str.split("-");
//   console.log("1 - ", arrSplitted);
//   let uppedArr = [];
//   uppedArr[0] = arrSplitted[0];
//   for (let i = 1; i < arrSplitted.length; i++) {
//     uppedArr[i] = arrSplitted[i].at(0).toUpperCase() + arrSplitted[i].slice(1);
//   }

//   console.log(uppedArr.join(""));
// }

// короткое решение ++++++++++++
function camelize(str) {
  console.log(
    str
      .split("-")
      .map((item, index) =>
        index == 0 ? item : item[0].toUpperCase() + item.slice(1),
      )
      .join(""),
  );
}

camelize("background-color"); // "backgroundColor";
camelize("list-style-image"); // "listStyleImage";
camelize("-webkit-transition"); // "WebkitTransition";
// -------------------------------------------------------

console.log(" ---------------- Task 2 ---------------- ");

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива. Функция должна возвращать новый массив и не изменять исходный.
//
let arrayOfTask2 = [2, 5, 3, 8, 1, 4, 7, 0, 2, 6];

let filtered = filterRange(arrayOfTask2, 3, 6);

function filterRange(arr, a, b) {
  // моё решение --------------
  // let newArr = [];
  // arr.forEach(item => {
  //   if (item >= a && item <= b) {
  //     newArr.push(item);
  //   }
  // });
  // return newArr;

  // короткое решение ++++++++++++
  return arr.filter(item => item >= a && item <= b);
}

console.log("filtered", filtered);
console.log("source arr", arrayOfTask2);
// -------------------------------------------------------

console.log(" ---------------- Task 3 ---------------- ");
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

filterRangeInPlace(arrayOfTask2, 3, 6);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("i", i);
    // console.log("arr[i]", arr[i]);
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--; // т.к. элемент удалён, то на его место стал следующий и надо этот индекс в следующей итерации повторить
    }
    // console.log("arr", arr);
  }
}
console.log("3 - ", arrayOfTask2);
// -------------------------------------------------------

console.log(" ---------------- Task 4 ---------------- ");

// Сортировать в порядке по убыванию
let arrayOfTask3 = [2, 5, -10, 3, 8, 1, 4, 7, 0, -2, 6];

function sortDown(arr) {
  return arr.sort((a, b) => b - a);
}

console.log("sorted arr:", sortDown(arrayOfTask3));
// -------------------------------------------------------

console.log(" ---------------- Task 5 ---------------- ");

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
let arrOfStrings = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrOfStrings);

function copySorted(arr) {
  return arr.slice().sort();
}

console.log("sorted arr", sorted);
console.log("source arr", arrOfStrings);
// -------------------------------------------------------

console.log(" ---------------- Task 6 ---------------- ");

// Создать расширяемый калькулятор
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {
  // Обратите внимание, как хранятся методы. Они просто добавляются к внутреннему объекту.
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  // Все тесты и числовые преобразования выполняются в методе calculate.
  this.calculate = function (str) {
    let arrSplited = str.split(" ");
    let a = Number(arrSplited[0]);
    let b = Number(arrSplited[2]);
    let op = arrSplited[1];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  // добавляет в калькулятор новые операции
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3"));

// -------------------------------------------------------

console.log(" ---------------- Task 7 ---------------- ");

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya7 = { name: "Вася", age: 25 };
let petya7 = { name: "Петя", age: 30 };
let masha7 = { name: "Маша", age: 28 };

let users7 = [vasya7, petya7, masha7];

let names7 = users7.map(item => item.name);

console.log(names7); // Вася, Петя, Маша
// -------------------------------------------------------

console.log(" ---------------- Task 8 ---------------- ");
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
let vasya8 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya8 = { name: "Петя", surname: "Иванов", id: 2 };
let masha8 = { name: "Маша", surname: "Петрова", id: 3 };

let users8 = [vasya8, petya8, masha8];

let usersMapped = users8.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
console.log(usersMapped);
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
// -------------------------------------------------------
