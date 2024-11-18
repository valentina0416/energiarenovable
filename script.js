function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("menu-hidden")) {
        menu.classList.remove("menu-hidden");
        menu.classList.add("menu-visible");
    } else {
        menu.classList.remove("menu-visible");
        menu.classList.add("menu-hidden");
    }
}

// Mostrar y ocultar el menú desplegable
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("menu-hidden")) {
        menu.classList.remove("menu-hidden");
        menu.classList.add("menu-visible");
    } else {
        menu.classList.remove("menu-visible");
        menu.classList.add("menu-hidden");
    }
}

// Función para desplazarse suavemente a una sección
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Mostrar u ocultar el navbar al desplazarse
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Desplazándose hacia abajo
        navbar.style.top = "-70px"; // Ocultar el navbar
    } else {
        // Desplazándose hacia arriba
        navbar.style.top = "0"; // Mostrar el navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});

