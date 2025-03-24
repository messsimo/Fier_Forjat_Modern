const mainImg = document.querySelector('.main-img');
const additionalImages = document.querySelectorAll('.images img');
const arrows = document.querySelectorAll('.arrow');

let currentIndex = 0;
const imagesSrc = ["src/images/gal1.png", ...Array.from(additionalImages).map(img => img.src)];

// Показываем первую картинку
mainImg.src = imagesSrc[currentIndex];
updateActiveThumbnail();

function swipeImage(newIndex, direction = 'right') {
    const offset = direction === 'right' ? '-100%' : '100%';
    const entryOffset = direction === 'right' ? '100%' : '-100%';
    
    // Сдвиг главной картинки
    mainImg.style.transform = `translateX(${offset})`;

    setTimeout(() => {
        mainImg.src = imagesSrc[newIndex];
        mainImg.style.transition = 'none';
        mainImg.style.transform = `translateX(${entryOffset})`;

        requestAnimationFrame(() => {
            mainImg.style.transition = 'transform 0.5s ease';
            mainImg.style.transform = 'translateX(0)';
        });

        updateActiveThumbnail(); // обновляем активность миниатюры

    }, 500);
}

// Функция выделения активной миниатюры
function updateActiveThumbnail() {
    additionalImages.forEach(img => img.classList.remove('active'));
    if (currentIndex > 0) { // гал1 нет в миниатюрах
        additionalImages[currentIndex - 1].classList.add('active');
    }
}

// Левая стрелка
arrows[0].addEventListener('click', (e) => {
    e.preventDefault(); // предотвращаем фокус и скролл
    currentIndex = (currentIndex - 1 + imagesSrc.length) % imagesSrc.length;
    swipeImage(currentIndex, 'left');
});

// Правая стрелка
arrows[1].addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % imagesSrc.length;
    swipeImage(currentIndex, 'right');
});

// Миниатюры
additionalImages.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        const direction = (index + 1) > currentIndex ? 'right' : 'left';
        currentIndex = index + 1;
        swipeImage(currentIndex, direction);
    });
});