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
  segundos,
} from "./elements.js"

export default function ({ themeScreen, controlCounter }) {
  btndarkModeOn.addEventListener("click", () => {
    themeScreen.darkModeOn()
  })

  btndarkModeOff.addEventListener("click", () => {
    themeScreen.darkModeOff()
  })

  playBtn.addEventListener('click', () => {
    controlCounter.startCounter()
  })

  pauseBtn.addEventListener('click', () => {
    controlCounter.counterPause()
  })


}