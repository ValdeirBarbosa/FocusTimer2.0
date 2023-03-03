const btndarkModeOn = document.querySelector(" header #sun")
const btndarkModeOff = document.querySelector(" header #moon")
const body = document.querySelector("body")
const cards = document.querySelectorAll(".sound-card")
const timer = document.querySelector(".timer")
const controls = document.querySelector(".controls")

const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")
const stopBtn = document.querySelector("#stop")
const plusBtn = document.querySelector("#moreFiveMin")
const minusBtn = document.querySelector("#minusFiveMin")
let stopCounter = false

const minutes = document.querySelector(".timer :nth-child(1)")
const segundos = document.querySelector(".timer :nth-child(3)")

export {
  btndarkModeOn,
  btndarkModeOff,
     body,
  cards,
  timer,
  controls,
    playBtn,
   pauseBtn,
    stopBtn,
  plusBtn,
  minusBtn,
  stopCounter,
  minutes,
  segundos,
}
