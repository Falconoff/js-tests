const refs = {
  openModalBtn: document.querySelector(
    '[data-action="open-modal"]',
  ),
  closeModalBtn: document.querySelector(
    '[data-action="close-modal"]',
  ),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
  // чтоб слушатель клавиатуры был только при открытой модалке
  window.addEventListener("keydown", onEscKeyPress);
  // добавляем класс на body
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  // удаляем слушатель клавиатуры при закрытии модалки
  window.removeEventListener("keydown", onEscKeyPress);

  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  // console.log(event.currentTarget); // элемент, на котором висит ближайший слушатель событий
  // console.log(event.target); // целевой элемент, на котором произошел клик
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  // console.log(event.code);
  // if (event.code === "Escape") {
  //   onCloseModal();
  // }

  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
