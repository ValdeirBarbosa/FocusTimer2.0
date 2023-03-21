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
    sound.rainsSoundPlay()
  })
  btnSongCoffeShop.addEventListener('click', () => {
    unselectCardSong(btnSongCoffeShop.id)
    btnSongCoffeShop.classList.add('sound-card-play')
    sound.coffeShopPlay()
  })
  btnSongFire.addEventListener('click', () => {
    unselectCardSong(btnSongFire.id)
    btnSongFire.classList.add('sound-card-play')
    sound.fireSoundPlay()
  })


  function unselectCardSong(cardId) {
    sound.stopSoundBackground()
    for (let card of soundCards) {
      if (card.id != cardId) {
        card.classList.remove('sound-card-play')
      }

    }
  }

  slideWoodSongVolume.addEventListener('change', () => {
    sound.setVolumeSound(slideWoodSongVolume.id, slideWoodSongVolume.value)
    console.log(slideWoodSongVolume.value)
  })

  slideRainSongVolume.addEventListener('change', () => {
    sound.setVolumeSound(slideRainSongVolume.id, slideRainSongVolume.value)
    console.log(slideRainSongVolume.value)
  })

  slideCoffeShopSongVolume.addEventListener('change', () => {
    sound.setVolumeSound(slideCoffeShopSongVolume.id, slideCoffeShopSongVolume.value)
    console.log(slideCoffeShopSongVolume.value)
  })

  slidefireSongVolume.addEventListener('change', () => {
    sound.setVolumeSound(slidefireSongVolume.id, slidefireSongVolume.value)
    console.log(slidefireSongVolume.value)
  })



}


