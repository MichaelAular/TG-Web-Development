const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
const slideWith = slides[0].getBoundingClientRect().width;
const firstSlide = slides[slides.length - slides.length];
const lastSlide = slides[slides.length - 1];
const firstDot = dots[dots.length - dots.length];
const lastDot = dots[dots.length - 1];

/// arrange slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWith * index + 'px';
};

slides.forEach(setSlidePosition);

const setCurrentSlide = (track, currentSlide, targetSlide) => {
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  };
const moveToSlide = (track, currentSlide, targetSlide) => {
    if (targetSlide === null && currentSlide === lastSlide) {
      targetSlide = firstSlide;

      setCurrentSlide(track, currentSlide, targetSlide);
    } else if (targetSlide === null && currentSlide === firstSlide) {
      targetSlide = lastSlide;

      setCurrentSlide(track, currentSlide, targetSlide);
    } else {
      setCurrentSlide(track, currentSlide, targetSlide);
    }
  };

const setClassOnDot = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const updateDots = (currentDot, targetDot) => {
    if (targetDot === null && currentDot === lastDot) {
      targetDot = firstDot;

      setClassOnDot(currentDot, targetDot);
    } else if (targetDot === null && currentDot === firstDot) {
      targetDot = lastDot;

      setClassOnDot(currentDot, targetDot);
    } else {
      setClassOnDot(currentDot, targetDot);
    }
  };

  const lyricColorChange = (slides, prevButton, nextButton, targetIndex) => {


    if (targetIndex === 0) {document.getElementById("setColor").style.color = "#950a0c"};
    if (targetIndex === 1) {document.getElementById("setColor").style.color = "#77b9d1"};
    if (targetIndex === 2) {document.getElementById("setColor").style.color = "#bb3860"};
    if (targetIndex === 3) {document.getElementById("setColor").style.color = "#d32701"};
    if (targetIndex === 4) {document.getElementById("setColor").style.color = "#0b2054"};
    if (targetIndex === 5) {document.getElementById("setColor").style.color = "#46c2da"};
    if (targetIndex === 6) {document.getElementById("setColor").style.color = "#950a0c"};

    

  }

/// slide left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    console.log(prevIndex)

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    lyricColorChange(slides, prevButton, nextButton, prevIndex);
})

/// slide right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot =  dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    console.log(nextIndex)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    lyricColorChange(slides, prevButton, nextButton, nextIndex);
});

/// click nav indicator move to slide
dotsNav.addEventListener('click', e => {
const targetDot = e.target.closest('button');

if (!targetDot) return;

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide = slides[targetIndex];

moveToSlide(track, currentSlide, targetSlide);
updateDots(currentDot, targetDot);
lyricColorChange(slides, prevButton, nextButton, targetIndex);
});

