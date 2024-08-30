console.log("Я" > "А"); // true
console.log("Кот" > "Код"); // true
console.log("Кот" > "код"); // false - регистр важен!
console.log("Сонный" > "Сон"); // true

console.log("2" > 1); // true, строка '2' становится числом 2
console.log("01" == 1); // true, строка '01' становится числом 1

console.log(true == 1); // true
console.log(false == 0); // true

let a = 0;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); // true
console.log(a == b); // true!

// Использование обычного сравнения == может вызывать проблемы. Например, оно не отличает 0 от false
console.log(0 == false); // true
console.log("" == false); // true
// Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу. В итоге, и пустая строка, и false становятся нулём.

// Оператор строгого равенства === проверяет равенство без приведения типов.
console.log(0 === false); // false, так как сравниваются разные типы

console.log(null === undefined); // false
console.log(null == undefined); // true
// При нестрогом равенстве == Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
