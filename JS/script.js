const imageGallery = document.querySelector(".image-gallery");
const images = imageGallery.querySelectorAll("img");
let currentImageIndex = 0;

function showNextImage() {
    // Скрыть текущее изображение (сделать его меньше)
    images[currentImageIndex].style.transform = "scale(0.9)";
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Показать следующее изображение (увеличить его)
    images[currentImageIndex].style.transform = "scale(1)";
}

setInterval(showNextImage, 2000); // Через каждые 2 секунды вызывать функцию showNextImage

