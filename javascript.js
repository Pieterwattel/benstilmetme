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

setTimeout(() => {
    console.log(window.scrollY)
    let emptyText = document.getElementById("emptyText")
    let body = document.querySelector("body")
    if (window.scrollY < 100){
            console.log("code run")
            let scrollText = document.createElement("div")
            scrollText.classList.add("scrollText")
            scrollText.textContent=("     scroll down ↓")
            body.insertBefore(scrollText, emptyText)
            emptyText.remove()
            console.log()
    } else {
        return
    }
}, 2000);