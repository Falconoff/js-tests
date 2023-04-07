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

console.log(" ---------------- Task 2 ---------------- ");

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива. Функция должна возвращать новый массив и не изменять исходный.
//
let arrayOfTask2 = [5, 3, 8, 1, 4, 7, 0, 2, 6];

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

console.log(" ---------------- Task 3 ---------------- ");
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
