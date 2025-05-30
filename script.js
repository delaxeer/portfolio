// Плавная прокрутка и эффект навигации
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Логика для отображения выпадающих списков
    const workCards = document.querySelectorAll('.work-card');

    workCards.forEach(card => {
        const dropdown = card.querySelector('.video-dropdown');
        card.addEventListener('click', (e) => {
            // Пропускаем клик, если он на видео
            if (e.target.closest('video')) return;

            // Переключаем только текущий выпадающий список
            dropdown.classList.toggle('active');
        });
    });
});