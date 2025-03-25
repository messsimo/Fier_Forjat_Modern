const slides = [
    {
        img: 'src/images/1.png',
        h2: 'Изысканные кованые изделия для дома и бизнеса',
        p: 'Надежные и элегантные металлические конструкции. Работаем с частными и корпоративными клиентами.'
    },
    {
        img: 'src/images/2.png',
        h2: 'Кованые изделия – сочетание стиля и надежности',
        p: 'Индивидуальный подход, прочные материалы и защита вашего участка с эстетикой.'
    },
    {
        img: 'src/images/4.png',
        h2: 'Металлические конструкции на заказ',
        p: 'Прочность, безопасность и уникальный дизайн. Создаем изделия, которые служат годами.'
    },
    {
        img: 'src/images/5.png',
        h2: 'Элегантные кованые элементы',
        p: 'Уникальные узоры, декоративные шары и ручки – подчеркните стиль вашего интерьера и экстерьера.'
    }
];

let currentIndex = 0;

function createSlides() {
    const hero = document.querySelector('.hero');
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slideElement.style.backgroundImage = `url(${slide.img})`;

        const h2 = document.createElement('h2');
        h2.textContent = slide.h2;
        slideElement.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = slide.p;
        slideElement.appendChild(p);

        hero.appendChild(slideElement);
    });
}

function changeSlide() {
    const slidesElements = document.querySelectorAll('.hero .slide');
    slidesElements.forEach(slide => slide.classList.remove('active'));

    // Активируем текущий слайд
    slidesElements[currentIndex].classList.add('active');

    // Управление точками
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');

    currentIndex = (currentIndex + 1) % slides.length;
}

// Запуск смены слайдов каждые 5 секунд
setInterval(changeSlide, 5000);

// Инициализация слайдов и первого слайда
createSlides();
changeSlide();
