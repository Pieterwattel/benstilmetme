// GLOBAL VARIABLE DECLARATIONS

let body = document.querySelector("body")

let minimizeExperienceFlag = true

//NODE DECLARATIONS
let navAbout = document.getElementById("navAbout")
let navHome = document.getElementById("navHome")
let navLocations = document.getElementById("navLocations")

let nameInput = document.getElementById("nameInput")
let sendExperience = document.getElementById("sendExperience")

let experienceInput = document.getElementById("experienceInput")
let inputContainer = document.getElementById("inputContainer")

let buttons = document.querySelectorAll(".button");
let links = document.querySelectorAll(".link");

let buttonPiet = document.getElementById("buttonPiet")
let resizeInputOnce = true
let giveMail = true

//EVENTLISTENERS
buttonPiet.addEventListener("click", ()=>{
    if (giveMail){
        buttonPiet.textContent="pieterwattel@gmail.com"
        buttonPiet.classList.add("rainbow")
        buttonPiet.style.color="white"
        buttonPiet.style.textShadow="black 2px 2px 2px"

        giveMail=false
    } else{
        buttonPiet.textContent="Webpage by Pieter Wattel"
        buttonPiet.style.color=""
        buttonPiet.classList.remove("rainbow")
        buttonPiet.style.textShadow=""
        giveMail=true
    }
})


buttons.forEach(button=>{
    button.addEventListener("mouseover", ()=>darkenBorder(button))
    button.addEventListener("mouseout", ()=>lightenBorder(button))
    button.addEventListener("mousedown", ()=>darken(button))
    button.addEventListener("mousedown", ()=>addShadow(button))
})

links.forEach(link=>{
    link.addEventListener("mouseover", ()=>addUnderline(link))
    link.addEventListener("mouseout", ()=>removeUnderline(link))
    link.addEventListener("mousedown", ()=>textLight(link))
})

body.style.backgroundcolor="blue"

//FUNCTIONS
function darkenBorder(item) {
    item.style.border="2px solid rgb(69, 69, 69)"
}

function lightenBorder(item) {
    item.style.border=""
}

function darken(item) {
    item.style.backgroundColor = "rgb(207, 207, 207)";
    setTimeout(() => {
        item.style.backgroundColor=""
    }, "500")
}

function addShadow(item){
    item.style.boxShadow="inset 0.5px 1px 1px black"
    setTimeout(() => {
            item.style.boxShadow=""
    }, "500")
}

function addUnderline(item) {
    item.style.textDecoration = "underline"
}

function removeUnderline(item) {
    item.style.textDecoration = ""
}

function textLight(item) {
    item.style.color = "rgb(157, 157, 157)"
    setTimeout(() => {
        item.style.color = "#000"
    }, "1000")
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
  