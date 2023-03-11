const burgerBtn = document.querySelector('.header__burger-button');
const mainNav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', e => {
    mainNav.classList.toggle('active')
})