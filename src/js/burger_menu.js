document.addEventListener("DOMContentLoaded", function () {
    const burgerOpen = document.querySelector(".burger_open"); // Кнопка открытия
    const menu = document.querySelector(".dropdown-menu"); // Меню
    const burgerClose = document.querySelector(".burger_close"); // Кнопка закрытия

    burgerOpen.addEventListener("click", function () {
        menu.classList.add("active");
    });

    burgerClose.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});
