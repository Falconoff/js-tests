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
let accessAllowed = age > 18;

// ====================================================
/*
let message;
let login = prompt("Хто Ви?", "");

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

let message =
  login == "Працівник"
    ? "Привіт"
    : login == "Директор"
    ? "Вітаю"
    : login == ""
    ? "Немає логіну"
    : "";
