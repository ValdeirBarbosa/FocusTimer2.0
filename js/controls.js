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

export default function Controls() {

  function startCounter() {
    playBtn.classList.add('hide')
    pauseBtn.classList.remove("hide")
  }

  function counterPause() {
    playBtn.classList.remove("hide")
    pauseBtn.classList.add("hide")
  }



  return {
    startCounter,
    counterPause
  }
}
