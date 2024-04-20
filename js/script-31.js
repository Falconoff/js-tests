const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

// добавляем задержку debounce на обработку события ввода
refs.input.addEventListener(
  "input",
  _.debounce(onFilterChange, 500),
);

// const listItemsMarkup = createListItemsMarkup(tech);
// refs.list.innerHTML = listItemsMarkup; =>
populateListItemsMarkup(tech);

function createListItemsMarkup(items) {
  return items
    .map(item => `<li>${item.label}</li>`)
    .join("");
}

function onFilterChange(evt) {
  const inputString = evt.target.value.toLowerCase();

  // создаём новый отфильтрованный массив объектов, в label которых есть искомая подстрока inputString
  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(inputString),
  );
  // const listItemsMarkup =
  //   createListItemsMarkup(filteredItems);
  // refs.list.innerHTML = listItemsMarkup; =>
  populateListItemsMarkup(filteredItems);
}
// ---------------
function populateListItemsMarkup(items) {
  refs.list.innerHTML = createListItemsMarkup(items);
}
