const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0; // Starting position

// Function to update the slider position
function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth; // Width of one slide
    const newTransform = -(slideWidth * currentIndex);
    sliderTrack.style.transform = `translateX(${newTransform}px)`;
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 4) { // Only allow sliding if not at the end
        currentIndex++;
        updateSliderPosition();
    }
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) { // Only allow sliding if not at the beginning
        currentIndex--;
        updateSliderPosition();
    }
});

// Optional: Adjust slider position on window resize
window.addEventListener('resize', updateSliderPosition);
