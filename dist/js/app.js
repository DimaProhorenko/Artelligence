
const burgerBtn = document.querySelector('.header__burger-button');
const mainNav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', e => {
    burgerBtn.classList.toggle('active');
    mainNav.classList.toggle('active')
});


// Splide
document.addEventListener('DOMContentLoaded', e => {
    const testimonialsSlide = new Swiper('.testimonials__slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        spaceBetween: 50,
    });

    AOS.init();
})
