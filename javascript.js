window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const fadeStart = headerHeight / 2;
    const fadeEnd = headerHeight;

    // Adjust the fade fraction to be twice as fast
    const fadeFraction = (scrollTop - fadeStart) / ((fadeEnd - fadeStart));
    const videoOpacity = Math.min(Math.max(0.05 - fadeFraction, 0), 1);
    
    const video = document.querySelector('.header video');
    video.style.opacity = videoOpacity;
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const headerHeight = document.querySelector('.scrolltext').offsetHeight;
    const fadeStart = headerHeight / 80;
    const fadeEnd = headerHeight;

    // Adjust the fade fraction to be twice as fast
    const fadeFraction = (scrollTop - fadeStart) / ((fadeEnd - fadeStart));
    const videoOpacity = Math.min(Math.max(1 - fadeFraction, 0), 1);
    
    const video = document.querySelector('.scrolltext');
    video.style.opacity = videoOpacity;
});