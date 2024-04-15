const changeBtnEl = document.querySelector(".change-btn");
// console.log(changeBtnEl);

const sectionEl = document.querySelector(".section");

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

  sectionEl.appendChild(newMessage);

  navListEl.insertAdjacentHTML("beforeend", newListItem);
};

// changeBtnEl.addEventListener("click", () => {
//   console.log("click");
// });

changeBtnEl.addEventListener("click", onChangeBtnClick);
