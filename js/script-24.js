// Задача - разровнять многомерный массив
const arr = [
  1,
  2,
  3,
  [4, 5],
  [6, 7, [1, 2, 3], 8],
  9,
  [10, 11],
  12,
];

const resultArr = [];

const flattenArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    // если наткнулись на массив, запускаем ф-цию для его перебора
    if (typeof currentValue !== "number") {
      flattenArray(currentValue);
    } else {
      resultArr.push(currentValue);
    }
  }
};

flattenArray(arr);

console.log(resultArr); //  [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8, 9, 10, 11, 12]

// ====================
console.log("=====================================");

function calcSumm(num, n) {
  // ======== цикл for ========
  // let result = 0;
  // for (let i = 0; i < n; i += 1) {
  //   result += num;
  // }
  // return result;
  //
  // ======== рекурсия ========
  // if (n === 1) {
  //   return num;
  // } else {
  //   return num + calcSumm(num, n - 1);
  // }
  //
  // ======== рекурсия 2 ========
  return n === 1 ? num : num + calcSumm(num, n - 1);
}

console.log(calcSumm(2, 3)); // 2+2+2 = 6

console.log("=====================================");

// расчёт факториала (произведение чисел от 1 до заданного)
function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
}

console.log(fact(4)); // 1*2*3*4 = 24

console.log("=====================================");

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {array} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */

function createNDimensionalArray(n, size) {
  if (n === 1) return Array(size).fill(0);
  return createNDimensionalArray(n - 1, size).map(() =>
    createNDimensionalArray(n - 1, size),
  );
}

// то же самое - n-уровневый массив массивов
const recursive = (n, size) => {
  if (n == 1) return new Array(size).fill(0);
  return new Array(size)
    .fill(0)
    .map(() => recursive(n - 1, size));
};

console.log(recursive(2, 2));
console.log(recursive(3, 3));
