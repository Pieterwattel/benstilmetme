// GLOBAL VARIABLE DECLARATIONS

let body = document.querySelector("body")


//NODE DECLARATIONS
let experienceInput = document.getElementById("experienceInput")
let inputContainer = document.getElementById("inputContainer")
let buttons = document.querySelectorAll(".button");
let resizeInputOnce = true

//EVENTLISTENERS
inputContainer.addEventListener("focusin", ()=> typeExperience())
inputContainer.addEventListener("mouseover", ()=> typeExperience(), {once: resizeInputOnce})
inputContainer.addEventListener("focusout", ()=> minimizeExperience())

buttons.forEach(button=>{
    button.addEventListener("mouseover", ()=>darkenBorder(button))
    button.addEventListener("mouseout", ()=>lightenBorder(button))
    button.addEventListener("mousedown", ()=>darken(button))
    button.addEventListener("mousedown", ()=>addShadow(button))
    button.addEventListener("mouseup", ()=>lighten(button))
    button.addEventListener("mouseup", ()=>removeShadow(button))
})

body.style.backgroundcolor="blue"

//FUNCTIONS
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

function typeExperience (){
    experienceInput.style.height="200px"
}

function minimizeExperience(){
    experienceInput.style.height=""
    experienceInput.style.width="max(15vw + 200px, 320px)"
}

function darkenBorder(item) {
    item.style.border="2px solid rgb(69, 69, 69)"
}

function lightenBorder(item) {
    item.style.border=""
}

function darken(item) {
    item.style.backgroundColor = "rgb(207, 207, 207)";
}

function lighten(item) {
    item.style.backgroundColor=""
}

function addShadow(item){
    item.style.boxShadow="inset 0.5px 1px 1px black"
}

function removeShadow(item){
    item.style.boxShadow=""
}


    /*
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
*/


//removes the extra screen when a form is sent
window.addEventListener("load", function() {
    const form = document.getElementById('inputContainer');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });
