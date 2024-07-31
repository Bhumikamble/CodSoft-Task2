const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
}

function prevSlide() {
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000); // Change image every 3 seconds

window.addEventListener('resize', () => showSlide(index));

