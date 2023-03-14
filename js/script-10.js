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

// str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos
// одна и та же буква в нижнем и верхнем регистре будет иметь разные коды
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90

// String.fromCodePoint(code)
// Создаёт символ по его коду code
console.log(String.fromCodePoint(90)); // Z

// Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка
console.log("Österreich".localeCompare("Zealand")); // -1

console.log("============== TASKS =============");

// 1 - Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// ucFirst("вася") == "Вася";
function ucFirst(string) {
  // Если строка пуста, str[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.
  // Добавить проверку на пустую строку.
  if (!string) return string;

  return string[0].toUpperCase() + string.slice(1);
}
console.log(ucFirst("вася"));
console.log(ucFirst("qwerty"));

// 2 Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  /*
  let find_1 = "viagra";
  let find_2 = "XXX";

  return (
    str.toLowerCase().includes(find_1) || str.toUpperCase().includes(find_2)
  );
  */

  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false

// 3 Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
  // let newStr = str;
  // if (str.length > maxlength) {
  //   newStr = str.slice(0, maxlength - 1) + "...";
  // }
  // console.log(newStr);

  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
}

console.log(truncate("123456789", 5));
console.log(truncate("123456789", 3));
console.log(truncate("123456789", 13));
