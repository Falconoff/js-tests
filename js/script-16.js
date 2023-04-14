"use strict";

// Деструктуризация массива

// Вот пример деструктуризации массива на переменные:

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname); // Kantor

// ----------------------------------

// Отлично смотрится в сочетании со split или другими методами, возвращающими массив:

let [firstName2, surname2] = "Ilya Kantor".split(" ");
console.log(firstName2); // Ilya
console.log(surname2); // Kantor

// ----------------------------------

// Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:
// второй элемент не нужен
let [firstName3, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(title); // Consul

// ----------------------------------

// На самом деле мы можем использовать любой перебираемый объект, не только массивы:

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

// ----------------------------------

// Мы можем использовать что угодно «присваивающее» с левой стороны.
// Например, можно присвоить свойству объекта:

let user2 = {};
[user2.name, user2.surname] = "Ilya Kantor".split(" ");

console.log(user2.name); // Ilya
console.log(user2.surname); // Kantor

// ----------------------------------

// Мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:

let user3 = {
  name: "John",
  age: 30,
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user3)) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}

// ----------------------------------

// …то же самое для map:

let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
for (let [key, value] of user) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}

// ----------------------------------

// Трюк обмена переменных

// Существует хорошо известный трюк для обмена значений двух переменных с использованием деструктурирующего присваивания:

let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (успешно заменено!)

// ----------------------------------

// Остаточные параметры «…»

// Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):

let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// rest это массив элементов, начиная с 3-го
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
// Переменная rest является массивом из оставшихся элементов.

// ----------------------------------

// Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью =:
// значения по умолчанию
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];

console.log(name3); // Julius (из массива)
console.log(surname3); // Anonymous (значение по умолчанию)

// ----------------------------------

// Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями. Они выполняются, только если значения отсутствуют.
// Например, здесь мы используем функцию prompt для указания двух значений по умолчанию.

// prompt будет запущен только для пропущенного значения (surname)
// let [name4 = prompt("name?"), surname4 = prompt("surname?")] = ["Julius"];

// console.log(name4); // Julius (из массива)
// console.log(surname4); // результат prompt

// ----------------------------------

// Деструктурирующее присваивание также работает с объектами.

let options = {
  titl: "Menu",
  width: 100,
  height: 200,
};

// Свойства options.title, options.width и options.height присваиваются соответствующим переменным. Порядок не имеет значения.
let { width3, titl, height3 } = options;

console.log(titl); // Menu
console.log(width3); // 100
console.log(height3); // 200

// Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:
// { sourceProperty: targetVariable } - Двоеточие показывает «что : куда идёт».

let { width: w, height: h, title4 } = options;

// Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "="
let { width = 100, height = 200, title5 } = options;

// ----------------------------------

// Как и в случае с массивами, значениями по умолчанию могут быть любые выражения или даже функции. Они выполнятся, если значения отсутствуют.
let options1 = {
  title: "Menu",
};

// let { width1 = prompt("width?"), title1 = prompt("title?") } = options1;

// console.log(title1); // Menu
// console.log(width1); // (результат prompt)

// ----------------------------------

// Мы также можем совмещать: и =:

let options3 = {
  title: "Menu",
};

let { width: w3 = 100, height: h3 = 200, title3 } = options3;

console.log(title3); // Menu
console.log(w3); // 100
console.log(h3); // 200

// ----------------------------------

// Если у нас есть большой объект с множеством свойств, можно взять только то, что нужно:

let options6 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// взять только title, игнорировать остальное
let { title6 } = options6;

console.log(title6); // Menu

// ----------------------------------

let { title7, ...rest7 } = options6;
// сейчас title7="Menu", rest7={height: 200, width: 100}

// ----------------------------------

// Вложенная деструктуризация

// Если объект или массив содержит другие вложенные объекты или массивы, то мы можем использовать более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.

// В приведённом ниже коде options хранит другой объект в свойстве size и массив в свойстве items. Шаблон в левой части присваивания имеет такую же структуру, чтобы извлечь данные из них:

let options8 = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: {
    // положим size сюда
    width8,
    height8,
  },
  items: [item1, item2], // добавим элементы к items
  title8 = "Menu", // отсутствует в объекте (используется значение по умолчанию)
} = options8;

console.log(title8); // Menu
console.log(width8); // 100
console.log(height8); // 200
console.log(item1); // Cake
console.log(item2); // Donut

// Весь объект options, кроме свойства extra, которое в левой части отсутствует, присваивается в соответствующие переменные
// В итоге у нас есть width, height, item1, item2 и title со значением по умолчанию.
// Заметим, что переменные для size и items отсутствуют, так как мы взяли сразу их содержимое.

// ----------------------------------

// ----------------- TASKS -----------------

console.log(" ---------------- Task 1 ---------------- ");
/*
Напишите деструктурирующее присваивание, которое:
- свойство name присвоит в переменную name.
- свойство years присвоит в переменную age.
- свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/
let user_Task1 = { name_Task1: "John", years_Task1: 30 };

// ваш код должен быть с левой стороны:
let { name_Task1, years_Task1: age_Task1, isAdmin_Task1 = false } = user_Task1;

console.log(name_Task1); // John
console.log(age_Task1); // 30
console.log(isAdmin_Task1); // false
// ----------------------------------

console.log(" ---------------- Task 2 ---------------- ");

// У нас есть объект salaries с зарплатами:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
- Если объект salaries пустой, то нужно вернуть null.
- Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
function topSalary(salaries) {
  // if (salaries.length == 0) return null;
  // let arr = Object.entries(salaries);
  // let maxSalary = 0;
  // let nameMax = "";

  // for (let i = 0; i < arr.length; i++) {
  //   let [name, salary] = arr[i];
  //   if (maxSalary < salary) {
  //     maxSalary = salary;
  //     nameMax = name;
  //   }
  // }

  let maxSalary = 0;
  let nameMax = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      nameMax = name;
    }
  }

  return nameMax;
}

console.log(topSalary(salaries));
