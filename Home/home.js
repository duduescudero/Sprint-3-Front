
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none'; // Oculta o slide atual
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Calcula o próximo slide
    slides[currentSlide].style.display = 'block'; // Exibe o próximo slide
}


slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none'; // Mostra apenas o primeiro slide
});


const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Modo Claro';
    } else {
        toggleThemeButton.textContent = 'Modo Escuro';
    }
});
