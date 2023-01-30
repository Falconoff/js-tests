"use strict";

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

// =========================
function isEmpty(obj) {
  for (const key in obj) {
    if (obj[key]) {
      console.log(`${key} in obj is exist`);
      return false;
    }
    console.log(`${key} in obj NOT exist`);
    return true;
  }
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "Вставай";

console.log(isEmpty(schedule)); // false
