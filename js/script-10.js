"use strict";

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// === Доступ к символам ===

console.log("======= Доступ к символам ========");

let str = `Hello`;
console.log("string:", str); // Hello

// получаем первый символ
console.log(str[0]); // H
console.log(str.at(0)); // H

/* 
  Трюк с побитовым НЕ:
  значение ~n равно -(n+1)
*/

console.log(
  "----- Трюк с побитовым НЕ: значение ~n равно -(n+1) -----",
);

for (let n = 0; n < str.length; n++) {
  console.log("n=", n);
  console.log("~n=", ~n);

  console.log("str.at(~n):", str.at(~n));
}

// получаем последний символ
console.log(str[str.length - 1]); // o
console.log(str.at(-1)); // o

// === Изменение регистра - toLowerCase() и toUpperCase() ===

console.log(
  "======= toLowerCase() и toUpperCase() ========",
);

console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface

// ====== Поиск подстроки ======

console.log(
  "======= Поиск подстроки: indexOf(), lastIndexOf(), includes(), startsWith(), endsWith() ========",
);

// --- indexOf ---

// str.indexOf(substr, pos)

let string = "Widget with id";

console.log(string.indexOf("Widget")); // 0, потому что подстрока 'Widget' найдена в начале
console.log(string.indexOf("widget")); // -1, совпадений нет, поиск чувствителен к регистру
console.log(string.indexOf("id")); // 1 - нашли на индексе 1
console.log(str.indexOf("id", 2)); // 12 - поиск начался с индекса 2, т.е. "dget with id"

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
  console.log(pos); // 6, 9
}

// --- includes ---

console.log("Midget".includes("id")); // true
console.log("Midget".includes("id", 3)); // false, поиск начат с позиции 3

console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"

//  === Получение подстроки ===
// В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.

console.log(
  "------- 3 метода для получения подстроки: substring, substr и slice --------",
);

let str_1 = "stringify";

console.log(str_1.slice(0, 5)); // 'strin', символы от 0 до 5 (не включая 5)
console.log(str_1.slice(0, 1)); // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log(str_1.slice(2)); // ringify, с позиции 2 и до конца
console.log(str_1.slice(6)); // ify, с позиции 6 и до конца
console.log(str_1.slice(6, 100500)); // ify, с позиции 6 и до конца строки - избыточность не влияет!
console.log(str_1.slice(-4, -1)); // gif - начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа

// для substring эти два примера — одинаковы
console.log(str_1.substring(2, 6)); // "ring"
console.log(str_1.substring(6, 2)); // "ring"

// …но не для slice:
console.log(str_1.slice(2, 6)); // "ring" (то же самое)
console.log(str_1.slice(6, 2)); // "" (пустая строка)

console.log(str_1.substr(2, 4)); // ring, получаем 4 символа, начиная с позиции 2
console.log(str_1.substr(-4, 2)); // gi, получаем 2 символа, начиная с позиции 4 с конца строки

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

// Вызов str_1.localeCompare(str_2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка
console.log("a".localeCompare("a")); // 0     str_1 = str_2
console.log("a".localeCompare("b")); // -1    str_1 < str_2
console.log("c".localeCompare("b")); // 1     str_1 > str_2
console.log("Österreich".localeCompare("Zealand")); // -1

console.log("------ str.trim() — убирает пробелы --------");
let anotherString = "   qwe   ";
console.log("anotherString:", anotherString); // "   qwe   "
console.log("trimmed:", anotherString.trim()); // "qwe"

console.log(
  "------ str.repeat(n) — повторяет строку n раз --------",
);
console.log("repeated (0):", anotherString.repeat(0)); // ""
console.log("repeated (1):", anotherString.repeat(1)); // "   qwe   "
console.log("repeated (2):", anotherString.repeat(2)); // "   qwe      qwe   "

console.log("============== TASKS =============");

// 1 - Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// ucFirst("вася") == "Вася";
function ucFirst(string) {
  // Если строка пуста, str[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.
  // Добавить проверку на пустую строку.
  if (!string) return string;

  return string[0].toUpperCase() + string.slice(1);
}
console.log(ucFirst("вася")); // Вася
console.log(ucFirst("qwerty")); // Qwerty

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
  return (
    lowerStr.includes("viagra") || lowerStr.includes("xxx")
  );
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

  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + "..."
    : str;
}

console.log(truncate("123456789", 5)); // 1234...
console.log(truncate("123456789", 3)); // 12...
console.log(truncate("123456789", 13)); // 123456789

// 4 Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  return +str.slice(1); // без "+" вернётся строка "120"
}

console.log(extractCurrencyValue("$120")); //120
