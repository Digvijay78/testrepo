
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const progressBar = document.getElementById('progress-bar');
    const sliderValue = document.getElementById('slider-value');

    const updateSlider = () => {
        const value = slider.value;
        progressBar.style.width = `${value}%`;
        sliderValue.textContent = `${(value / 10).toFixed(1)} / 10`;
    };

    slider.addEventListener('input', updateSlider);
    updateSlider(); // Initial update to set the correct value on page load
});