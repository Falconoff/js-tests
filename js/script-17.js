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

// ========== Установка компонентов даты ===============

console.log("========== Установка компонентов даты ===============");

let today = new Date();

console.log("today:", today);
console.log("setFullYear:", today.setFullYear(2044, 0, 22));
console.log("today:", today);
console.log("setMonth:", today.setMonth(10));
console.log("today:", today);
console.log("setDate:", today.setDate(11));
console.log("today:", today);
console.log("setHours:", today.setHours(11, 22, 33, 44));
console.log("today:", today);
console.log("setMinutes:", today.setMinutes(0));
console.log("today:", today);
console.log("setSeconds:", today.setSeconds(55));
console.log("today:", today);
console.log("todayWeWereAttacked:", today.setTime(1645668000000));
console.log("today:", today);

// ========== Автоисправление даты ===============

console.log("========== Автоисправление даты ===============");

// Эту возможность часто используют, чтобы получить дату по прошествии заданного отрезка времени. Например, получим дату «спустя 70 секунд с текущего момента»:
let date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log(date); // выводит правильную дату

date.setDate(0);
// первый день месяца - это 1, так что выводится последнее число предыдущего месяца
console.log(date);

console.log("========== разность дат ===============");
// даты можно вычитать, в результате получаем разность в миллисекундах.
// Этот приём можно использовать для измерения времени
let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end - start} миллисекунд`);

// ---------- Date.now() ---------
// Если нужно просто измерить время, объект Date нам не нужен.
// Существует особый метод Date.now(), возвращающий текущую метку времени.
let start_2 = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end_2 = Date.now(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end_2 - start_2} миллисекунд`); // вычитаются числа, а не даты

//  ============ Разбор строки с датой - Метод Date.parse(str) ==================
console.log(
  "============ Разбор строки с датой - Метод Date.parse(str) ============",
);
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");

console.log(ms); // 1327611110417 (таймстамп)

let dateFromTimestamp = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));

console.log(dateFromTimestamp);

// ================ TASKS ======================

console.log("==================== Task 1 ====================");
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let date_2012_02_20 = new Date(2012, 1, 20, 3, 12);
console.log(date_2012_02_20);

console.log("==================== Task 2 ====================");
// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».