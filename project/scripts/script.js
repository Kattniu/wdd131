
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); 
});


document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = document.lastModified;
