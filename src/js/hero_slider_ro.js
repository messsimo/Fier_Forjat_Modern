document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        {
            img: 'src/images/1.png',
            h2: 'Produse forjate rafinate pentru casă și afaceri',
            p: 'Construcții metalice fiabile și elegante. Lucrăm cu clienți particulari și corporativi.'
        },
        {
            img: 'src/images/2.png',
            h2: 'Produse forjate – combinația perfectă de stil și durabilitate',
            p: 'Abordare individuală, materiale rezistente și protecție estetică pentru proprietatea dumneavoastră.'
        },
        {
            img: 'src/images/4.png',
            h2: 'Construcții metalice la comandă',
            p: 'Rezistență, siguranță și design unic. Creăm produse care durează ani de zile.'
        },
        {
            img: 'src/images/5.png',
            h2: 'Elemente forjate elegante',
            p: 'Modele unice, sfere decorative și mânere – evidențiați stilul interiorului și exteriorului dumneavoastră.'
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