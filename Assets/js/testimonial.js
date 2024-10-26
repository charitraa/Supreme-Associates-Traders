const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndexs = 0;

function moveSlide(direction) {
  currentIndexs += direction;

  if (currentIndexs < 0) {
    currentIndexs = slides.length - 1;
  } else if (currentIndexs >= slides.length) {
    currentIndexs = 0;
  }

  const slideWidth = slides[0].getBoundingClientRect().width;
  const moveAmount = -slideWidth * currentIndexs;

  track.style.transform = `translateX(${moveAmount}px)`;
}