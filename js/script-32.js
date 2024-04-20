// ---- feature detection ----
// если браузер поддерживает какую-то фичу, используем её, если нет, используем стороннюю библиотеку
if ("loading" in HTMLImageElement.prototype) {
  // console.log("Браузер поддерживает loading");
  addSrcAttrToLazyImages();
} else {
  // console.log("Браузер НЕ поддерживает loading");
  addLazySizesScript();
}

const lazyImages =
  document.querySelectorAll("img[data-src]");

// после первого срабатывания события слушатель автоматически удаляется
lazyImages.forEach(image => {
  image.addEventListener("load", onImageLoaded, {
    once: true,
  });
});

// вешаем на картинку класс для её плавного выезжания
function onImageLoaded(evt) {
  // console.log("Картинка загрузилась");
  evt.target.classList.add("appear");
}

// подключаем библиотеку lazysizes
function addLazySizesScript() {
  console.log("Браузер НЕ поддерживает loading");
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js";
  script.integrity =
    "sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==";
  script.crossOrigin = "anonymous";

  document.body.appendChild(script);
}

// каждой картинке из data-атрибута "data-src" в атрибут адреса "src" записываем адрес
function addSrcAttrToLazyImages() {
  console.log("Браузер поддерживает loading");
  const lazyImages = document.querySelectorAll(
    'img[loading="lazy"]',
  );

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}
