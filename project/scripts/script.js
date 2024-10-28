
const searchBar = document.querySelector('.search-bar input');
const projectArticles = document.querySelectorAll('.project');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    projectArticles.forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

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


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); 
});


document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = document.lastModified;
