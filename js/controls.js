import {
  playBtn,
  pauseBtn,
  minutesDisplay
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

  function plusFiveMinutes() {
    let minValue = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minValue += 5).padStart(2, "0")
  }

  function minusFiveMinutes() {
    let minValue = Number(minutesDisplay.textContent)
    if (minValue >= 1) {
      if (minValue >= 5) {
        minutesDisplay.textContent = String(minValue -= 5).padStart(2, "0")
      } else {
        minutesDisplay.textContent = String(minValue -= 1).padStart(2, "0")
      }

    }

  }

  function stopCounter() {
    playBtn.classList.remove("hide")
    pauseBtn.classList.add("hide")
  }




  return {
    startCounter,
    counterPause,
    plusFiveMinutes,
    minusFiveMinutes,
    stopCounter
  }
}
