// Выборка
const langSwitcher = document.querySelector(".language");
const dropdown = document.querySelector(".dropdown");

// Открытие/закрытие выпадающего меню
langSwitcher.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Закрытие меню при клике вне его
document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
        dropdown.style.display = "none";
    }
});