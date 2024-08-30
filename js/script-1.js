// ======= Строковое преобразование =======

let value = true;
console.log(typeof value); // boolean
value = String(value); // теперь value это строка "true"
console.log(typeof value); // string

// ======= Численное преобразование =======

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'
console.log(typeof valueA); // 'string'

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // type of NaN is 'number'

// Парсит из строки целое число
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

// Парсит из строки дробное число
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN
console.log(Number.parseFloat("-777")); // NaN

console.log("6" / "2"); // 3, строки преобразуются в числа

let str = "123";
console.log(typeof str); // string
let num = Number(str); // становится числом 123
console.log(typeof num); // number

let age = Number("Любая строка вместо числа");
console.log(age); // NaN, преобразование не удалось
let undef;
console.log(typeof undef); // undefined
console.log(Number(undef)); // NaN

console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN (ошибка чтения числа на месте символа "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// ======= Логическое преобразование =======

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("false")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(-1)); // true
console.log(Boolean(undefined)); // false

// 0, null, undefined, NaN, "" - false
// любое другое значение - true

// ======= Конкатенация =======

console.log("qwe" + true); // qwetrue
console.log(true + "qwe"); // trueqwe
console.log(true + true); // 2
console.log(false + true); // 1
console.log(false + false); // 0
console.log(12 + false); // 12
console.log(12 + true); // 13
console.log(true + 12); // 13
console.log([12, 13] + true); // 12,13true
console.log(true + [12, 13]); // true12,13
console.log([12, 13] + "true"); // 12,13true
console.log("true" + [12, 13]); // true12,13
console.log([] + true); // true
console.log(true + []); // true

// ========== Шаблонная  строка ============
console.warn("========== Шаблонная  строка ============");

const userName = "Michael";
const userAge = 25;

console.log(`${userName} is ${userAge} years old`);
