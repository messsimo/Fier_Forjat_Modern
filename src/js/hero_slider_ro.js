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
changeSlide()