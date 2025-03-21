document.addEventListener("DOMContentLoaded", function () {
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
    const hero = document.querySelector(".hero");
    const title = hero.querySelector("h2");
    const text = hero.querySelector("p");
    const dots = document.querySelectorAll(".dot");

    function changeSlide() {
        currentIndex = (currentIndex + 1) % slides.length;

        // Убираем кэширование (добавляем метку времени к URL)
        const newImageUrl = `${slides[currentIndex].img}?t=${new Date().getTime()}`;

        // Создаем элемент для нового изображения
        const newImage = new Image();
        newImage.src = newImageUrl;
        newImage.onload = function () {
            // Убираем старое изображение и добавляем новое с плавным переходом
            hero.style.backgroundImage = `url('${newImageUrl}')`;
            hero.classList.add('fade');
            
            // Меняем текст
            title.textContent = slides[currentIndex].h2;
            text.textContent = slides[currentIndex].p;

            // Обновляем активный dot
            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentIndex].classList.add("active");
        };
    }

    // Запускаем слайдер каждые 5 секунд
    setInterval(changeSlide, 5000);
});