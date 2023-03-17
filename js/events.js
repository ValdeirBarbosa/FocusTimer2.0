import {
  btndarkModeOn,
  btndarkModeOff,
  playBtn,
  pauseBtn,
  stopBtn,
  plusBtn,
  minusBtn,
  soundCards
} from "./elements.js"
import Sounds from "./sound.js"

export default function ({ themeScreen, controlCounter, timer }) {


  btndarkModeOn.addEventListener("click", () => {
    themeScreen.darkModeOn()
  })

  btndarkModeOff.addEventListener("click", () => {
    themeScreen.darkModeOff()
  })

  playBtn.addEventListener('click', () => {
    controlCounter.startCounter()
    timer.countDown()
  })

  pauseBtn.addEventListener('click', () => {
    controlCounter.counterPause()
    timer.holdTimer()

  })

  plusBtn.addEventListener('click', () => {
    controlCounter.plusFiveMinutes()
  })

  minusBtn.addEventListener('click', () => {
    controlCounter.minusFiveMinutes()
  })

  stopBtn.addEventListener('click', () => {
    controlCounter.stopCounter()
    timer.resetTimer()
  })

  
  for (const card of soundCards) {
    card.addEventListener('click', cardHandleClick)
  }


  function cardHandleClick(event) {
    const card = event.target;
    const cardIdSelect = card.id

    for (let card of soundCards) {
      if (card.id === cardIdSelect) {
        card.classList.add("sound-card-play")
        Sounds().playSoundBackground(card.id)
      } else {
        card.classList.remove("sound-card-play")
      }

    }
  }


}