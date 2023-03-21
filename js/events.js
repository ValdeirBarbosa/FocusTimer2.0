import {
  btndarkModeOn,
  btndarkModeOff,
  playBtn,
  pauseBtn,
  stopBtn,
  plusBtn,
  minusBtn,
  soundCards,
  btnSongWood,
  btnSongRain,
  btnSongCoffeShop,
  btnSongFire,
  slideWoodSongVolume,
  slideRainSongVolume,
  slideCoffeShopSongVolume,
  slidefireSongVolume
} from "./elements.js"


export default function ({ themeScreen, controlCounter, timer, sound }) {

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


  btnSongWood.addEventListener('click', () => {
    unselectCardSong(btnSongWood.id)
    btnSongWood.classList.add('sound-card-play')
    sound.woodSoundPlay()

  })
  btnSongRain.addEventListener('click', () => {
    unselectCardSong(btnSongRain.id)
    btnSongRain.classList.add('sound-card-play')
  })
  btnSongCoffeShop.addEventListener('click', () => {
    unselectCardSong(btnSongCoffeShop.id)
    btnSongCoffeShop.classList.add('sound-card-play')
  })
  btnSongFire.addEventListener('click', () => {
    unselectCardSong(btnSongFire.id)
    btnSongFire.classList.add('sound-card-play')
  })


  function unselectCardSong(cardId) {
    sound.stopSoundBackground()
    for (let card of soundCards) {
      if (card.id != cardId) {
        card.classList.remove('sound-card-play')
      }

    }
  }




}


