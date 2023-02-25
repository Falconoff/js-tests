"use strict";

// Множитель на 10

let billion = 1e9;

console.log(billion); // 1000000000

let mikro = 1e-6;

console.log(mikro); // 0.000001
console.log(billion * mikro); // 1000

// Шестнадцатеричные, двоичные и восьмеричные числа

console.log(0xff); // 255

let a_16 = 0xff; // шестнадцатеричная (0x) форма записи числа 255
let b_2 = 0b11111111; // бинарная (0b) форма записи числа 255
let c_8 = 0o377; // восьмеричная (0o) форма записи числа 255

console.log(a_16 == b_2); // true
console.log(b_2 == c_8); // true
console.log(a_16 == c_8); // true

let num = 128;

console.log(num.toString(16)); // "80"
console.log(num.toString(2)); // "10000000"

console.log((123456).toString(36)); // "2n9c"

// Округление

console.log("=== Math.floor() ===");
// Округление в меньшую сторону
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(3.9)); // 3
console.log(Math.floor(-3.1)); // -4
console.log(Math.floor(-3.9)); // -4

console.log("=== Math.ceil() ===");
// Округление в большую сторону
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(3.9)); // 4
console.log(Math.ceil(-3.1)); // -3
console.log(Math.ceil(-3.9)); // -3

console.log("=== Math.round() ===");
// Округление до ближайшего целого
console.log(Math.round(3.4)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(-3.4)); // -3
console.log(Math.round(-3.5)); // -3 !!!???
console.log(Math.round(-3.6)); // -4

console.log("=== Math.trunc() ===");
// Производит удаление дробной части без округления
console.log(Math.trunc(3.1)); // 3
console.log(Math.trunc(3.9)); // 3

//  округлить число до n-ого количества цифр в дробной части
console.log("=== .toFixed() ===");

let num_2 = 1.23456;

console.log(Math.floor(num_2 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
console.log(num_2.toFixed(2)); // "1.23"

console.log(+num_2.toFixed(2)); // 1.23
console.log(Number(num_2.toFixed(2))); // 1.23

console.log(1e400); // Infinity

// ========= потеря точности ===========
console.log("=== потеря точности ===");

console.log("0.1 + 0.2 == 0.3", 0.1 + 0.2 == 0.3); // false
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004

console.log(9999999999999999); //  10000000000000000
console.log(0 === -0); // true

// ====== Проверка на число: isFinite и isNaN ======
console.log("=== Проверка: isFinite и isNaN ===");

console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(isNaN("123")); // false
console.log(isNaN(123)); // false
console.log(isNaN(Infinity)); // false
console.log(isNaN(2e4)); // false

console.log(isFinite("15")); // true
console.log(isFinite(" ")); // true
console.log(isFinite("")); // true - пустая строка интерпретируется как 0 во всех числовых функциях
console.log(isFinite("str")); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity

// Методы Number.isNaN и Number.isFinite более строгие!
console.log("=== Методы Number.isNaN и Number.isFinite ===");

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("str")); // false
console.log(Number.isFinite(123)); // true

console.log(Number.isFinite("15")); // false, так как "15" является строкой, а не числом
console.log(Number.isFinite(Infinity)); // false
