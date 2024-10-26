document.addEventListener("DOMContentLoaded", function () {
  const carouselSlider = document.querySelector(".content_inner_slider");
  const images = document.querySelectorAll(".content_inner_slider > img");
  const prevButton = document.querySelector(".prev_button");
  const nextButton = document.querySelector(".next_button");
  const dotsContainer = document.querySelector(".dots");
  let counter = 0;
  let imageWidth = images[0].clientWidth;
  let intervalID;

  // Add dots dynamically based on the number of images
  images.forEach((_, i) => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  });

  const updateDots = () => {
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.style.background = i === counter ? "#000" : "transparent";
    });
  };

  const moveSlider = () => {
    carouselSlider.style.transform = `translateX(-${imageWidth * counter}px)`;
    updateDots();
  };

  const handleNext = () => {
    counter = (counter + 1) % images.length;
    moveSlider();
  };

  const handlePrev = () => {
    counter = (counter - 1 + images.length) % images.length;
    moveSlider();
  };

  const startAutoSlide = () => {
    intervalID = setInterval(handleNext, 2000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalID);
  };

  // Event listeners
  nextButton.addEventListener("click", handleNext);
  prevButton.addEventListener("click", handlePrev);
  document.querySelector(".auto_slide").addEventListener("change", function () {
    if (this.checked) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  });

  window.addEventListener("resize", () => {
    imageWidth = images[0].clientWidth;
    moveSlider();
  });

  // Initialize
  moveSlider();
  startAutoSlide();
});