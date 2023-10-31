"use strict";

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log(fruits[2]); // Слива
fruits[2] = "Груша"; // теперь ["Яблоко", "Апельсин", "Груша"]
fruits[3] = "Лимон"; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
console.log("fruits.length=", fruits.length); // 3

fruits[6] = "Слива";
console.log(fruits); // теперь ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty, empty, 'Слива']
console.log("fruits.length=", fruits.length); // 7

fruits = ["Яблоко", "Апельсин", "Груша", "Лимон", "Слива"];

//  .at
console.log("====== fruits.at() ======");
console.log(fruits.at(1)); // Апельсин
console.log(fruits.at(-1)); // Слива

// last element of array
console.log(fruits.at(-1)); // Слива
console.log(fruits[fruits.length - 1]); // Слива

// pop & push
console.log("====== pop & push ======");

console.log(fruits); //  ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty × 2, 'Слива']
console.log(fruits.pop()); // 'Слива'
console.log(fruits); // ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty × 2]

fruits.push("Kiwi");
console.log(fruits); // ['Яблоко', 'Апельсин', 'Груша', 'Лимон', empty × 2, 'Kiwi']
console.log(fruits.push("Banana"));

// shift & unshift
console.log("====== shift & unshift ======");

fruits.shift();
console.log(fruits); // ['Апельсин', 'Груша', 'Лимон', empty × 2, 'Kiwi']
fruits.unshift("Banana 1", "Banana 2");
console.log(fruits); // ['Banana 1', 'Banana 2', 'Апельсин', 'Груша', 'Лимон', empty × 2, 'Kiwi']

// ====== Matrix ======
console.log("====== Matrix ======");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix); // [Array(3), Array(3), Array(3)]
console.log(matrix[1][1]); // 5, центральный элемент

console.log("====== метод toString ======");
console.log(fruits);
console.log(String(fruits));
console.log(fruits.toString() + 222);

console.log(
  "====== ====== ====== TASKS ====== ====== ====== ====== ====== ======  ",
);

// 2
console.log("=== Task 2 ===");
/*Давайте произведём 5 операций с массивом.
1.Создайте массив styles с элементами «Джаз» и «Блюз».
2.Добавьте «Рок-н-ролл» в конец.
3.Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4.Удалите первый элемент массива и покажите его.
5.Вставьте Рэп и Регги в начало массива.*/
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);
let centerIndex = Math.floor(styles.length / 2);
console.log("centerIndex=", centerIndex);
styles[centerIndex] = "Классика";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

// 3
console.log("====== Task 3 ======");

let arr = ["a", "b", "c"];

arr.push(function () {
  console.log(this);
});

arr[3](); // a,b,function(){...}
/*Вызов arr[3]() синтаксически – старый добрый obj[method](), в роли obj – arr, а в роли method – 3.
Итак, у нас есть вызов функции arr[3] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив ['a', 'b', 'c', ƒ]
У массива в итоге 3 элемента: сначала их было 3, плюс функция.
*/

// 3
console.log("====== Task 3 ======");
/*Напишите функцию sumInput(), которая:

- Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
- Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
- Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/
function sumInput() {
  let inputArray = [];

  while (true) {
    let enteredValue = prompt("Pls, enter a number");
    console.log("enteredValue=", enteredValue);

    if (
      enteredValue == null ||
      enteredValue.trim() == "" ||
      !isFinite(+enteredValue)
    )
      break;

    inputArray.push(+enteredValue);
  }
  console.log(inputArray);

  let summ = 0;
  for (const item of inputArray) {
    summ += item;
  }

  return summ;
}
// console.log("Total=", sumInput());

// 4
console.log("====== Task 4 ======");
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»

// ------- МЕДЛЕННОЕ РЕШЕНИЕ -------------
/*Можно посчитать все возможные подсуммы.
Самый простой путь – посчитать суммы подмассивов, начиная с каждого элемента по очереди.*/
/*
function getMaxSubSum(arr) {
  console.log(arr);
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentItemSum = 0;

    for (let j = i; j < arr.length; j++) {
      currentItemSum += arr[j];
      // if (currentItemSum > maxSum) {
      //   maxSum = currentItemSum;
      // }
      // или аналогично:
      maxSum = Math.max(maxSum, currentItemSum);
    }
  }
  console.log("maxSum =", maxSum);
  // return maxSum;
}
*/

// ------- БЫСТРОДЕЙСТВУЮЩЕЕ РЕШЕНИЕ -------------
/* Идём по массиву и накапливаем текущую частичную сумму элементов в переменной currentItemSum.
Если currentItemSum в какой-то момент становится отрицательной – присваиваем currentItemSum=0.
Максимальный из всех currentItemSum и будет ответом.*/
function getMaxSubSum(arr) {
  console.log(arr);
  let maxSum = 0;
  let currentItemSum = 0;

  // для каждого элемента массива
  for (const item of arr) {
    currentItemSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, currentItemSum); // запоминаем максимум на данный момент
    if (currentItemSum < 0) currentItemSum = 0; // ноль, если отрицательное
  }

  console.log("maxSum =", maxSum);
  // return maxSum;
}
getMaxSubSum([-1, 2, 3, -9]); // == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]); // == 6
getMaxSubSum([-1, 2, 3, -9, 11]); // ==11
getMaxSubSum([-2, -1, 1, 2]); // == 3
getMaxSubSum([10, -9, 2, -3, 5]); // == 10
getMaxSubSum([1, 2, 3]); // == 6 (берём все)
