
const burgerBtn = document.querySelector('.header__burger-button');
const mainNav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', e => {
    burgerBtn.classList.toggle('active');
    mainNav.classList.toggle('active')
});


// Splide
document.addEventListener('DOMContentLoaded', e => {
    const testimonialsSplide = new Splide('.testimonials__slider', {
        type: 'slide',
        rewind: true,
        gap: '3em',
        autoplay: false,
        pause: false,
        interval: 2000, 
        pauseOnHover: true,
    });
    testimonialsSplide.mount();
})
