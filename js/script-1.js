// ======= Строковое преобразование =======

let value = true;
console.log(typeof value); // boolean
value = String(value); // теперь value это строка "true"
console.log(typeof value); // string

// ======= Численное преобразование =======

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // 'number'

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
// 0, null, undefined, NaN, "" - false
// любое другое значение - true
