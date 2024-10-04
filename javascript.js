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
    const header = document.querySelector('.scrolltext');
    const headerHeight = header.offsetHeight;
    
    // Define the start and end points for the fade-out effect
    const fadeStart = headerHeight / 2;
    const fadeEnd = headerHeight * 2;
    
    // Calculate the fade fraction based on scroll position
    const fadeFraction = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
    const newOpacity = 1 - Math.min(Math.max(fadeFraction, 0), 1);
    
    header.style.opacity = newOpacity;
});

var allVideos = document.querySelectorAll('vid');
document.body.addEventListener("touchstart", function () {

    for (var i = 0; i < allVideos.length; i++) {
        allVideos[i].play();
    }
},{ once: true });

allVideos.play();


let div = document.createElement("div")
document.body.appendChild(div)
alert(div)