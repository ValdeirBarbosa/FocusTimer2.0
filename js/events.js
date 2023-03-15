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

}