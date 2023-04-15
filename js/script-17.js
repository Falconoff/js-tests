"use strict";

let now = new Date();

console.log("now:", now); // Sat Apr 15 2023 17:13:22 GMT+0300 (Восточная Европа, летнее время)

let zeroMs = new Date(0);
console.log("zeroMs:", zeroMs); // Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)

let anyMs = new Date(1234567890123);
console.log("anyMs:", anyMs); // Sat Feb 14 2009 01:31:30 GMT+0200 (Восточная Европа, стандартное время)

let dateByStr = new Date("2013-05-29");
console.log("dateByStr:", dateByStr); // Wed May 29 2013 03:00:00 GMT+0300 (Восточная Европа, летнее время)

// любой разделитель корректен???!!!
// Главное - порядок: год, месяц, число
let dateByStr_2 = new Date("2013/05/29");
console.log("dateByStr_2:", dateByStr_2); // Wed May 29 2013 03:00:00 GMT+0300 (Восточная Европа, летнее время)

let dateByStr_3 = new Date("2013.5.29");
console.log("dateByStr_3:", dateByStr_3); // Wed May 29 2013 03:00:00 GMT+0300 (Восточная Европа, летнее время)

let dateByStr_4 = new Date("2013?5?29");
console.log("dateByStr_4:", dateByStr_4); // Wed May 29 2013 03:00:00 GMT+0300 (Восточная Европа, летнее время)

let dateByNums = new Date(2013, 5, 29, 13, 24, 56);
console.log("dateByNums:", dateByNums); // Sat Jun 29 2013 13:24:56 GMT+0300 (Восточная Европа, летнее время)

let myFirstBirthDay = new Date(1982, 4, 29, 5, 30);
console.log("myFirstBirthDay:", myFirstBirthDay);

// ========== Получение компонентов даты ===============

console.log("========== Получение компонентов даты ===============");

console.log(".getFullYear()", myFirstBirthDay.getFullYear());
console.log(".getUTCFullYear()", myFirstBirthDay.getUTCFullYear());
console.log(".getMonth()", myFirstBirthDay.getMonth());
console.log(".getUTCMonth()", myFirstBirthDay.getUTCMonth());
console.log(".getDate()", myFirstBirthDay.getDate());
console.log(".getUTCDate()", myFirstBirthDay.getUTCDate());
console.log(".getDay()", myFirstBirthDay.getDay());
console.log(".getHours()", myFirstBirthDay.getHours());
console.log(".getUTCHours()", myFirstBirthDay.getUTCHours());
console.log(".getMinutes()", myFirstBirthDay.getMinutes());
console.log(".getUTCMinutes()", myFirstBirthDay.getUTCMinutes());
console.log(".getSeconds()", myFirstBirthDay.getSeconds());
console.log(".getUTCSeconds()", myFirstBirthDay.getUTCSeconds());
console.log(".getMilliseconds()", myFirstBirthDay.getMilliseconds());
console.log(".getUTCMilliseconds()", myFirstBirthDay.getUTCMilliseconds());
console.log(".getTime()", myFirstBirthDay.getTime());
console.log(".getTimezoneOffset()", myFirstBirthDay.getTimezoneOffset());
