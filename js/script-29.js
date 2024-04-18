// ========== 1 - выбор один из многих ==================

/*
const tagsContainer = document.querySelector(".js-tags");
let selectedTag = null;

tagsContainer.addEventListener(
  "click",
  onTagsContainerClick,
);

function onTagsContainerClick(evt) {
  // console.log(evt.target);
  // console.log(evt.currentTarget);

  // проверяем событие клика на кнопке
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  //  проверяем есть ли уже на какой-то кнопке активный класс
  const currentActiveBtn = document.querySelector(
    ".tags__btn--active",
  );
  // если есть, то удаляем активный класс
  // if (currentActiveBtn) {
  //   currentActiveBtn.classList.remove("tags__btn--active");
  // }
  // аналогично
  currentActiveBtn?.classList.remove("tags__btn--active");

  // добавляем активный класс на кликнутую кнопку
  const nextActiveBtn = evt.target;
  nextActiveBtn.classList.add("tags__btn--active");
  // ...и считываем значение из data-атрибута его значение
  selectedTag = nextActiveBtn.dataset.value;

  console.log(selectedTag);
}
*/

// ========== 2 - выбор несколько из многих и Set() ==================

const tagsContainer = document.querySelector(".js-tags");
// для хранения списка выбранных тегов используем Set (набор уникальных значений)
const selectedTags = new Set();

tagsContainer.addEventListener(
  "click",
  onTagsContainerClick,
);

function onTagsContainerClick(evt) {
  // console.log(evt.target);
  // console.log(evt.currentTarget);

  // проверяем событие клика на кнопке
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains(
    "tags__btn--active",
  );

  // записываем в набор или удаляем из него выбранные теги
  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  // тогглим активный класс
  btn.classList.toggle("tags__btn--active");

  console.log(selectedTags);
}
