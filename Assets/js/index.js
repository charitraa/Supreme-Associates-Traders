const images = [
  "image/home/happy-customer.jpeg",
  "image/home/great-flip.jpg",
  "image/home/plan-01-scaled.jpg",
  "image/home/water_treatment_Component-01-01-scaled.jpg",
];

let currentIndex = 0;

// Preload images
const preloadImages = () => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

preloadImages(); // Preload the images right away for faster display

// Show the image based on index
function showImage(index) {
  const sliderContainer = document.querySelector('.slider-container img');

  currentIndex = index;

  // Change the image source immediately
  sliderContainer.src = images[currentIndex];
  sliderContainer.classList.remove('active');

  // Short delay to trigger transition
  setTimeout(() => {
    sliderContainer.classList.add('active');
  }, 10); // Short delay for the transition effect
}

// Show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', showNextImage);
document.getElementById('prevBtn').addEventListener('click', showPrevImage);

// Start the slider automatically after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.slider-container img').classList.add('active');
  setInterval(showNextImage, 3000); // Change image every 3 seconds
});
