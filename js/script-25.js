"use strict";

function slow(x) {
  // тут можуть бути важкі ресурсозатратні операції
  console.log(`Викликана з ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // якщо такий ключ є в кеш
      return cache.get(x); // прочитайти результат з нього
    }

    let result = func(x); // в іншому випадку викликати func

    cache.set(x, result); // і кешувати (запам’ятати) результат
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached and the result returned
console.log("Again: " + slow(1)); // slow(1) result returned from cache

console.log(slow(2)); // slow(2) is cached and the result returned
console.log("Again: " + slow(2)); // slow(2) result returned from cache
