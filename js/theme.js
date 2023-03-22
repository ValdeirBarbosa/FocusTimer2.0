import {
  btndarkModeOn,
  btndarkModeOff,
  body,
  cards,
  timer,
  controls,
  soundbtn

} from "./elements.js"



export default function Theme() {
  function darkModeOn() {
    btndarkModeOn.classList.add("hide")
    soundbtn.classList.add('controls-dark')
    btndarkModeOff.classList.remove("hide")
    body.style.background = "#1E1E1E"
    timer.style.color = "#FFF"
    controls.classList.add("controls-dark")
    for (let card of cards) {
      card.classList.add("sound-card-dark")
    }





  }
  function darkModeOff() {
    soundbtn.classList.remove('controls-dark')
    btndarkModeOff.classList.add("hide")
    btndarkModeOn.classList.remove("hide")
    body.style.background = ""
    timer.style.color = ""
    controls.classList.remove("controls-dark")
    for (let card of cards) {
      card.style.background = ""
      card.classList.remove("sound-card-dark")
    }

  }

  return {
    darkModeOn,
    darkModeOff,
  }
}
