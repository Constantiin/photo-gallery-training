function galleryPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

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
};

galleryPlugin();