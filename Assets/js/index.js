const images = [
  "image/home/image.png",
  "image/home/great-flip.jpg",
  "image/home/plan-01-scaled.jpg",
  "image/home/water_treatment_Component-01-01-scaled.jpg",
];

let currentIndex = 0;

function showImage(index) {
  const sliderContainer = document.querySelector('.slider-container img');

  currentIndex = index;

  sliderContainer.src = images[currentIndex];
  sliderContainer.classList.remove('active');

  setTimeout(() => {
    sliderContainer.classList.add('active');
  }, 100); // Delay to ensure the transition is applied
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', showNextImage);
document.getElementById('prevBtn').addEventListener('click', showPrevImage);

// Start the slider automatically
setInterval(showNextImage, 3000); // Change image every 3 seconds

// Initialize the first image
document.querySelector('.slider-container img').classList.add('active');
