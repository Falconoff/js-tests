const changeBtnEl = document.querySelector(".change-btn");
// console.log(changeBtnEl);

const sectionOneEl = document.querySelector(".section-1");

const navListEl = document.querySelector(".nav__list");
const firstNavItemEl = navListEl.firstElementChild;
const lastNavItemEl = navListEl.lastElementChild;

const firstNavLink = firstNavItemEl.firstElementChild;

const sectionHeader = document.querySelector(
  ".section__header",
);

// console.log(navListEl);
// console.log(firstNavItemEl);
// console.log(lastNavItemEl);

const newMessage = document.createElement("p");
newMessage.style.color = "#0ff";
newMessage.classList.add("new-p");
newMessage.textContent =
  "Появился новый параграф текста Lorem ipsum dolor sit amet";

const textForLink = "NEW Link to... nothing # 5";
const newListItem = `<li class="nav__item"><a class="nav__link" href="">${textForLink}</a></li>`;

const onChangeBtnClick = function () {
  console.log("click on Change Btn");
  sectionHeader.textContent = "Изменился заголовок";
  sectionHeader.style.color = "brown";

  firstNavItemEl.style.color = "yellow";
  firstNavLink.style.color = "green";

  sectionOneEl.appendChild(newMessage);

  navListEl.insertAdjacentHTML("beforeend", newListItem);
};

// changeBtnEl.addEventListener("click", () => {
//   console.log("click");
// });

changeBtnEl.addEventListener("click", onChangeBtnClick);

// ============================================================

// Паттерн "Объект ссылок"
const refs = {
  form: document.querySelector(".form"),
  input: document.querySelector(".js-input"),
  licenseCheckbox: document.querySelector(".js-license"),
  userName: document.querySelector(".js-license + span"),
  btn: document.querySelector(".js-btn"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // доступ к одному из значений, заполненных в форме (почта)
  // console.dir(event.currentTarget.elements.email.value);

  // FormData - собирает в одну итерируемую сущность все данные из формы
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, key) => {
    console.log("key:", key);
    console.log("value:", value);
  });
}

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener(
  "change",
  onLicenseChange,
);

function onInputFocus() {
  console.log(
    "Input 'user-name' получил фокус - событие focus",
  );
}
function onInputBlur() {
  console.log(
    "Input 'user-name' потерял фокус - событие blur",
  );
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.userName.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  // console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
}

// ========================================================

// ====== События клавиатуры: keypress, keydown, keyup ======

window.addEventListener("keypress", onKeyPress);

function onKeyPress(event) {
  console.log("event.key:", event.key);
  console.log("event.code:", event.code);
}
