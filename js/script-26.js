"use strict";

// повторити з інтервалом 1 секундy
let timerId = setInterval(() => console.log("тік"), 1000);

// зупинити через 5 секунд
setTimeout(() => {
  clearInterval(timerId);
  console.log("стоп");
}, 5000);
