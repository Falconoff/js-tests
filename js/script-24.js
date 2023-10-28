const arr = [1, 2, 3, [4, 5], [6, 7, [1, 2, 3], 8], 9, [10, 11], 12];

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

console.log(resultArr);
