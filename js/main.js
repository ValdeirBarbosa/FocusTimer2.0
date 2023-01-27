const bntMoon = document.querySelector('#moon')
const btnSun = document.querySelector("#sun")
const timer = document.querySelector(".timer")
const btnControls = document.querySelector(".controls")
const soundCards = document.querySelectorAll(".sound-card ")
const body = document.querySelector("body")



btnSun.addEventListener('click',()=>{
  bntMoon.classList.remove("hide")
  btnSun.classList.add("hide")
  body.classList.add("body-dark")

  timer.style.color = "#c4c4cc"

  btnControls.classList.add("controls-dark")
  btnControls.classList.remove("controls-light")

  for(let card of soundCards){
    card.classList.remove("sound-card-light")
    card.classList.add("sound-card-dark")

  }
  
  
  
})


bntMoon.addEventListener("click", () => {
  bntMoon.classList.add("hide")
  btnSun.classList.remove("hide");
  document.body.style.background = "#ffffff"
  timer.style.color = "#323238"
  btnControls.classList.remove("controls-dark")
  btnControls.classList.add("controls-light")
   body.classList.remove("body-dark")
    for (let card of soundCards) {
      card.classList.add("sound-card-light")
      card.classList.remove("sound-card-dark")
    }

  
})

for(const card of soundCards){
  card.addEventListener('click',cardHandleClick)
 }


function cardHandleClick(event){
  const card = event.target
  card.classList.add("sound-card-play")
}