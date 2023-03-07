import {
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
  seconds,
} from "./elements.js"

export default function ({ themeScreen, controlCounter , timer}) {
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
  })

  plusBtn.addEventListener('click', () => {
    controlCounter.plusFiveMinutes()
  })

  minusBtn.addEventListener('click', () => {
    controlCounter.minusFiveMinutes()
  })

  stopBtn.addEventListener('click', () => {
    controlCounter.stopCounter()
  })

}