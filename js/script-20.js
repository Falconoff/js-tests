"use strict";

console.log("========== Callback ===============");

// расширяемая ф-ция математич. операции

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add); // 5
doMath(6, 2, sub); // 4
