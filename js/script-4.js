// --------- 1 ----------
// let accessAllowed;
// let age = prompt("Скільки вам років?", "");

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// console.log(accessAllowed);

// --------- 2 ----------
// let accessAllowed = age > 18 ? true : false;

// --------- 3 ----------
// let accessAllowed = age > 18;

// ====================================================
let message;
let login = prompt("Хто Ви?", "");

/*
if (login == "Працівник") {
  message = "Привіт";
} else if (login == "Директор") {
  message = "Вітаю";
} else if (login == "") {
  message = "Немає логіну";
} else {
  message = "";
}
*/

message =
  login == "Працівник"
    ? "Привіт"
    : login == "Директор"
    ? "Вітаю"
    : login == ""
    ? "Немає логіну"
    : "";
console.log(message);

// ============== switch/case ===============

// И switch и case допускают любое выражение в качестве аргумента.
let a = "1";
let b = 0;

// + приведение строки к числу
switch (+a) {
  case b + 1: // Выполнится, т.к. значением +a будет 1, что в точности равно b+1
    console.log("правильно");
    break;

  case 0: // Несколько вариантов case, использующих один код, можно группировать.
  case 2:
    console.log("Неправильно!");
    break;

  case "3":
    console.log("Никогда не выполнится!"); //строка "3" не соответствует строгому равенству === с числом 3
    break;

  default:
    console.log("Это не выполнится");
}

// ================== TESTS =====================

// 1 - Напишите if..else, соответствующий следующему switch:
/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */
let browser;
if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// 2 - Перепишите код с использованием одной конструкции switch:
const number = +prompt("Введите число между 0 и 3", "");
/*
if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
 */
switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;

  default:
    break;
}
