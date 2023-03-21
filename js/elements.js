const btndarkModeOn = document.querySelector("header #sun")
const btndarkModeOff = document.querySelector("header #moon")
const body = document.querySelector("body")
const cards = document.querySelectorAll(".sound-card")
const timer = document.querySelector(".timer")
const controls = document.querySelector(".controls")

const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")
const stopBtn = document.querySelector("#stop")
const plusBtn = document.querySelector("#moreFiveMin")
const minusBtn = document.querySelector("#minusFiveMin")

const minutesDisplay = document.querySelector(".timer :nth-child(1)")
const secondsDisplay = document.querySelector(".timer :nth-child(3)")
const soundCards = document.querySelectorAll(".sound-card ")

const slideWoodSongVolume = document.querySelector('#woodSongVolume')
const slideRainSongVolume = document.querySelector('#rainSongVolume')
const slideCoffeShopSongVolume = document.querySelector('#coffeShopSongVolume')
const slidefireSongVolume = document.querySelector('#fireSongVolume')

const btnSongWood = document.querySelector('#woodSong')
const btnSongRain = document.querySelector('#rainSong')
const btnSongCoffeShop = document.querySelector('#coffeShopSong')
const btnSongFire = document.querySelector('#fireSong')


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
  minutesDisplay,
  secondsDisplay,
  soundCards,
  slideWoodSongVolume,
  btnSongWood,
  btnSongRain,
  btnSongCoffeShop,
  btnSongFire,
  slideRainSongVolume,
  slideCoffeShopSongVolume,
  slidefireSongVolume

}
