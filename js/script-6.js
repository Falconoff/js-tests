"strict mode";

// Любая часть for может быть пропущена.
let i = 0;
for (; i < 3; i++) {
  console.log("i=", i);
}

//
for (let i = 0; i < 10; i++) {
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;

  console.log(i); // 1, затем 3, 5, 7, 9
}

// ========= Метки для break/continue =============

// Вызов break <labelName> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец.

/*
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, "");

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}

alert("Готово!");
*/

//

let j = 0;
while (++j < 5) {
  console.log("j=", j); // 1, 2, 3, 4
}

let k = 0;
while (k++ < 5) {
  console.log("k=", k); // 1, 2, 3, 4, 5
}

// 2, 4, 6, 8, 10
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log("even ", i);
}

//

let m = 0;
while (m++ < 3) {
  console.log("m=", m); // 1, 2, 3
}

// =========== tasks ====================

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// ---- bad ----
// let number = 0;
// while (number < 100) {
//   number = prompt("Pls, enter number more than 100");
//   console.log(number);
//   if (number >= 100 || null) {
//     break;
//   }
// }
// console.log("end");

// ---- nice ----
// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
//   console.log(num);
// } while (num <= 100 && num);

// ------------------------------------
/* Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов. */
let max = prompt("Введите число конца интервала", 2);
let min = 2;

// bad
/*
for (let i = min; i <= max; i++) {
  let isSimple = true;
  for (let j = min; j < i; j++) {
    if (i % j == 0 ) {
      isSimple = false;
    }
  }
  if (isSimple) console.log(`${i} is simple`);
}
*/

// good
/*
nextNumber: for (let i = min; i <= max; i++) {
  for (let j = min; j < i; j++) {
    if (i % j == 0) continue nextNumber;
  }
}
*/

nextNumber: for (let i = min; i <= max; i++) {
  for (let j = min; j < i; j++) {
    console.log(`i=${i}, j=${j}`);
    if (i % j == 0) {
      // console.log("continue");
      // continue;
      console.log("break");
      break;
      // continue nextNumber;
    }
    console.log(`continued i=${i}, j=${j} `);
  }
  // if (isSimple)
  console.log(`${i} end`);
}
