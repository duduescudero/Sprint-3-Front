
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Modo Claro';
    } else {
        toggleThemeButton.textContent = 'Modo Escuro';
    }
});
