const slides = document.querySelectorAll('.slide');

function clearActiveSlide () {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
};

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveSlide();

        slide.classList.add('active');
    });
});