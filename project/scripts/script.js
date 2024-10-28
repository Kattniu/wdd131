//MENU HAMBURGER
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); 
});

// FOOTER
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

//La barra de busqueda 
const searchBar = document.querySelector('.search-bar input');
const projectArticles = document.querySelectorAll('.project');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    projectArticles.forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

//PARA LAS IMAGENES
window.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        const projectPosition = project.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (projectPosition < screenPosition) {
            project.classList.add('visible');
        } else {
            project.classList.remove('visible');
        }
    });
});

//BOTTOM  para deslizar hacia arriba
// Seleccionar el botón "Back to Top"
const backToTopButton = document.querySelector('.back-to-top');

// Escuchar el evento de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mostrar el botón cuando el usuario baja más de 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Opcional: Evento para volver al inicio al hacer clic en el botón
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});