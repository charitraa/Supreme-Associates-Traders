const images = [
  "image/home/Installed.jpeg",
  "image/home/program.jpeg",
  "image/home/happy-customer.jpeg",
  "image/home/technology.jpeg",
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

  // Remove classes before conditionally adding them
  sliderContainer.classList.remove('active', 'style-img', 'styles-img');

  // Add shared style for the 1st and 3rd images only
  if (currentIndex === 0 || currentIndex === 2) {
    sliderContainer.classList.add('style-img'); // Apply style to 1st and 3rd images
  }
  if (currentIndex === 1) {
    sliderContainer.classList.add('styles-img'); // Apply style to 1st and 3rd images
  }

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
