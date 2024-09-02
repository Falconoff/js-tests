// Обратите внимание: функция изменяет значение from, но это изменение не видно снаружи. Функция всегда получает только копию значения
function showMessage(from, text) {
  from = "*" + from + "*"; // немного украсим "from"

  console.log(from + ": " + text);
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log(from); // Аня

// =======================================
// Иногда имеет смысл присваивать значения по умолчанию для параметров не в объявлении функции, а на более позднем этапе.
// Во время выполнения функции мы можем проверить, передан ли параметр, сравнив его с undefined

function showCount(count) {
  // если count равен undefined или null, показать "неизвестно"
  console.log(count ?? "неизвестно");
  1;
}
showCount(0); // 0
showCount(null); // неизвестно
showCount(); // неизвестно
showCount(true); // true
showCount(false); // false
2;
// ============== TESTS ============
/* 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}*/
// --- 1---
// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// --- 2 ---
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}
console.log(checkAge(19));

// ====
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
  return a < b ? a : b;
}

// ====
function pow(x, n) {
  return x ** n;
}

function calcNum() {
  let num1 = prompt("Введите число");
  let num2 = prompt("Введите степень");
  return pow(num1, num2);
}
// console.log(calcNum());
