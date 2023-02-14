const btndarkModeOn = document.querySelector(" header #sun")
const btndarkModeOff = document.querySelector(" header #moon")
const body = document.querySelector("body")

const cards = document.querySelectorAll(".sound-card")


//controls
const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')
const stopBtn = document.querySelector('#stop')
const plusBtn = document.querySelector('#moreFiveMin')
const minusBtn = document.querySelector('#minusFiveMin')
let stopCounter = false

let minutes = document.querySelector('.timer :nth-child(1)')
let segundos = document.querySelector('.timer :nth-child(3)')
let darkIsOn = false

playBtn.addEventListener('click',()=>{
  playBtn.classList.add('hide')
  pauseBtn.classList.remove("hide")
  let time = Date.now()
   countDown()

})
pauseBtn.addEventListener("click", () => {
  playBtn.classList.remove("hide")
  pauseBtn.classList.add("hide")
})


plusBtn.addEventListener('click',()=>{
 let currentMinutes = minutes.textContent
 let pluFive = Number(currentMinutes)+3
 minutes.innerText = String(pluFive).padStart(2,"0")
})
stopBtn.addEventListener("click", () => {

  minutes.innerText = "0".padStart(2, "0")
  segundos.innerText = "0".padStart(2, "0")
  stopCounter=true
})

minusBtn.addEventListener("click", () => {
  let currentMinutes = minutes.textContent
  let timeToSub = 0;
  if (currentMinutes >= 5) {
    timeToSub = 5
  }else if (currentMinutes < 5 && currentMinutes>0){
     timeToSub = 1
  }
    minutes.innerText = String(Number(currentMinutes) - timeToSub).padStart(
      2,
      "0"
    )
})






btndarkModeOn.addEventListener("click", () => {
  darkIsOn = true
  btndarkModeOn.classList.add("hide")
  btndarkModeOff.classList.remove("hide")
  body.style.background = "#1E1E1E"
  const timer = document.querySelector(".timer")
  timer.style.color = "#FFF"
  const controls = document.querySelector(".controls")
  controls.classList.add("controls-dark")
  const cards = document.querySelectorAll(".sound-card")
  for (let card of cards) {
      card.classList.add("sound-card-dark")  
  }
})


btndarkModeOff.addEventListener("click", () => {
  darkIsOn = false
  btndarkModeOff.classList.add("hide")
  btndarkModeOn.classList.remove("hide")
  body.style.background = ""
  const timer = document.querySelector(".timer")
  timer.style.color = ""
  const controls = document.querySelector(".controls")
  controls.classList.remove("controls-dark")
  const cards = document.querySelectorAll(".sound-card")
  for (let card of cards) {
    card.style.background = ""
    card.classList.remove("sound-card-dark")
  }
})


for (const card of cards) {
  card.addEventListener("click", cardHandleClick)
}

function cardHandleClick(event) {
  const card = event.target
  const cardIdSelect = card.id

  for (let card of cards) {
    if (card.id === cardIdSelect) {
      card.classList.add("sound-card-play")      
    } else {
      card.classList.remove("sound-card-play")
    }
  }
}

function countDown(){

    setTimeout(function () {
      let sec = Number(segundos.textContent)
      let min = Number(minutes.textContent)

      
      if(min<=0){
        if(sec <=0){
          playBtn.classList.remove("hide")
          pauseBtn.classList.add("hide")
          
          return
        }
      }
      if (sec <= 0) {
        minutes.textContent = String(min -1).padStart(2,"0")
        sec = 60
      }
      segundos.textContent = String(sec - 1).padStart(2,"0")

       countDown()
    }, 1000)
}