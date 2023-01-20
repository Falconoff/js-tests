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

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, "");

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}

alert("Готово!");

//

let j = 0;
while (++j < 5) {
  console.log("j=", j); // 1, 2, 3, 4
}

let k = 0;
while (k++ < 5) {
  console.log("k=", k); // 1, 2, 3, 4, 5
}

//
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) console.log("even ", i);
// }

//

let m = 0;
while (m++ < 3) {
  console.log("m=", m);
}
