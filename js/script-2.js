// Оператор взятия остатка %
console.log(5 % 2); // 1, остаток от деления 5 на 2
console.log(8 % 3); // 2, остаток от деления 8 на 3
console.log(8 % 4); // 0, остаток от деления 8 на 4

// Оператор возведения в степень a ** b возводит a в степень b.
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16

console.log(4 ** (1 / 2)); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
console.log(8 ** (1 / 3)); // 2 (степень 1/3 эквивалентна взятию кубического корня)

// ======== Сложение и преобразование строк ========

console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"
console.log(2 + 2 + "1"); // будет "41", а не "221"

console.log(6 - "2"); // 4, '2' приводится к числу
console.log("6" / "2"); // 3, оба операнда приводятся к числам
console.log(6 - true); // 5, true приводится к числу 1
console.log(6 - "true"); // NaN, строка 'true' приводится к NaN
console.log(6 / "true"); // делить на NaN можно - будет NaN

// ======== унарный плюс + ========

// Преобразует не числа в числа
console.log(+true); // 1
console.log(+""); // 0
// это то же самое, что и Number(...), только короче.

let apples = "2";
let oranges = "3";
// оба операнда предварительно преобразованы в числа
console.log(+apples + +oranges); // 5
// более длинный вариант
// console.log( Number(apples) + Number(oranges) ); // 5

// Сокращённая арифметика с присваиванием
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

let m = 2;
m *= 3 + 5;
console.log(m); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)

// ======== Инкремент/декремент ========

let counter = 1;
let a = ++counter; // префиксная форма ++counter увеличивает counter и возвращает новое значение 2
console.log(a); // 2

let counter2 = 1;
let b = counter2++; // постфиксная форма counter++ также увеличивает counter, но возвращает старое значение (которое было до увеличения).
console.log(b); // 1

let counter3 = 1;
console.log(2 * ++counter3); // 4
console.log(counter3); // 2

let counter4 = 1;
console.log(2 * counter4++); // 2, потому что counter4++ возвращает "старое" значение
console.log(counter4); // 2
