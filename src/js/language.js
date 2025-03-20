const translations = {
    ru: {
        title: "Кованое железо Молдова",
        catalog: "Каталог",
        reviews: "Отзывы",
        works: "Наши работы",
        delivery: "О доставке",
        contacts: "Контакты"
    },
    ro: {
        title: "Fier Forjat Moldova",
        catalog: "Catalog",
        reviews: "Recenzii",
        works: "Lucrările noastre",
        delivery: "Despre livrare",
        contacts: "Contacte"
    }
};

const langSwitcher = document.querySelector(".language");
const dropdown = document.querySelector(".dropdown");
const currentLang = document.getElementById("current-lang");

langSwitcher.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".dropdown p").forEach(option => {
    option.addEventListener("click", (e) => {
        const selectedLang = e.target.dataset.lang;
        currentLang.textContent = selectedLang.toUpperCase();
        dropdown.style.display = "none";
        switchLanguage(selectedLang);
    });
});

function switchLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].title;
    document.querySelectorAll("[data-translate]").forEach(el => {
        el.textContent = translations[lang][el.dataset.translate];
    });
}

document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
        dropdown.style.display = "none";
    }
});