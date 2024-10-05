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
    let emptyText = document.getElementById("emptyText")
    let body = document.querySelector("body")
    if (window.scrollY < 100){
            let scrollText = document.createElement("div")
            scrollText.classList.add("scrollText")
            scrollText.textContent=("      scroll down ↓")
            body.insertBefore(scrollText, emptyText)
            emptyText.remove()
    } else {
        return
    }
}, 2000);

let experienceInput = document.getElementById("experienceInput")
let inputContainer = document.getElementById("inputContainer")

let onceValue = true
experienceInput.addEventListener("click", ()=> typeExperience(), {once: onceValue})

function typeExperience (){
    experienceInput.style.height="200px"
//  add name text field
    let inputBottom = document.getElementById("inputBottom")

//  add nameInput    
    let nameInput = document.createElement("input")
    nameInput.classList.add("userInput")
    nameInput.classList.add("fadeIn")
    nameInput.setAttribute('id', "nameInput")
    nameInput.setAttribute('placeholder', "name.. (optional)")
    inputBottom.appendChild(nameInput)

//  add shareButton
    let sendExperience = document.createElement("button")
    sendExperience.setAttribute('id', "sendExperience")
    sendExperience.classList.add("fadeIn")
    sendExperience.textContent="share"
    inputBottom.appendChild(sendExperience)
}

//<input class="userInput" id="nameInput" placeholder="name.. (optional)"></input>
//<button id="sendExperience">share</button>
