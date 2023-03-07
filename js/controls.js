import {
  playBtn,
  pauseBtn,
  minutes,
  seconds
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
    let minValue = Number(minutes.textContent)
    minutes.textContent = String(minValue += 5).padStart(2, "0")
  }

  function minusFiveMinutes() {
    let minValue = Number(minutes.textContent)
    if (minValue >= 5) {
      minutes.textContent = String(minValue -= 5).padStart(2, "0")
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
