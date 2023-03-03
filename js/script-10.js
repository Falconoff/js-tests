"use strict";

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// === Доступ к символам ===

let str = `Hello`;

// получаем первый символ
console.log(str[0]); // H
console.log(str.at(0)); // H

// получаем последний символ
console.log(str[str.length - 1]); // o
console.log(str.at(-1)); // o

// === Изменение регистра - toLowerCase() и toUpperCase() ===

console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface

// ====== Поиск подстроки ======

// --- indexOf ---

let string = "Widget with id";

console.log(string.indexOf("Widget")); // 0, потому что подстрока 'Widget' найдена в начале
console.log(string.indexOf("widget")); // -1, совпадений нет, поиск чувствителен к регистру
console.log(string.indexOf("id")); // 1,
console.log(str.indexOf("id", 2)); // 12

// Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:
// let strng = "Ослик Иа-Иа посмотрел на виадук";

// let target = "Иа"; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = strng.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log(`Найдено тут: ${foundPos}`);
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// Тот же алгоритм можно записать и короче:
let strng = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = strng.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// --- includes ---

console.log("Midget".includes("id")); // true
console.log("Midget".includes("id", 3)); // false, поиск начат с позиции 3

console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"

//  === Получение подстроки ===
// В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.

let str_1 = "stringify";

console.log(str_1.slice(0, 5)); // 'strin', символы от 0 до 5 (не включая 5)
console.log(str_1.slice(0, 1)); // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log(str_1.slice(2)); // ringify, с позиции 2 и до конца
console.log(str.slice(-4, -1)); // gif - начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа

// для substring эти два примера — одинаковы
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// …но не для slice:
console.log(str.slice(2, 6)); // "ring" (то же самое)
console.log(str.slice(6, 2)); // "" (пустая строка)

console.log(str.substr(2, 4)); // ring, получаем 4 символа, начиная с позиции 2
console.log(str.substr(-4, 2)); // gi, получаем 2 символа, начиная с позиции 4 с конца строки

//  ================== Сравнение строк =================

console.log("a" > "Z"); // true

// одна и та же буква в нижнем и верхнем регистре будет иметь разные коды
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90

console.log(String.fromCodePoint(90)); // Z
