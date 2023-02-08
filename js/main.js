const btndarkModeOn = document.querySelector(" header #sun")
const btndarkModeOff = document.querySelector(" header #moon")
const body = document.querySelector("body")

btndarkModeOn.addEventListener("click", () => {
  btndarkModeOn.classList.add("hide")
  btndarkModeOff.classList.remove("hide")
  body.style.background = "#1E1E1E"
  const timer = document.querySelector(".timer")
  timer.style.color = "#FFF"
  const controls = document.querySelector(".controls")
    controls.classList.add("controls-dark")
  const cards = document.querySelectorAll(".sound-card")
  for (let card of cards) {
    card.style.background = "#29292E"
    card.classList.add("sound-card-dark")
  }
})
btndarkModeOff.addEventListener("click", () => {
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

