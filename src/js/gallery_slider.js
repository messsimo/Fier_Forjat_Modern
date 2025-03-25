document.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.querySelector('.main-img');
    const images = document.querySelectorAll('.container .images img');
    const arrows = document.querySelectorAll('.container .arrow');
    let currentIndex = 0;

    // Функция для смены изображения
    function changeImage(index) {
        const newSrc = images[index].src;
        mainImg.style.opacity = 0; // Плавное исчезновение
        setTimeout(() => {
            mainImg.src = newSrc;
            mainImg.style.opacity = 1; // Плавное появление
        }, 500);
    }

    // Обработка кликов на стрелки
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            if (e.target.classList.contains('left')) {
                currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            } else if (e.target.classList.contains('right')) {
                currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            }
            changeImage(currentIndex);
        });
    });

    // Обработка кликов на изображения
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            changeImage(currentIndex);
        });
    });
});