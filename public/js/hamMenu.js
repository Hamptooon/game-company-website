const hamMenu = document.querySelector('.burger-menu__icon');
const offScreenMenu = document.querySelector('.burger-menu__content');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});