const hamMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active'); 
});

