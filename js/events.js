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
  btnSongWoodSVG,
  btnSongRainSVG,
  btnSongCoffeShopSVG,
  btnSongFireSVG,
  slideWoodSongVolume,
  slideRainSongVolume,
  slideCoffeShopSongVolume,
  slidefireSongVolume,
  cards,
  btnSoundOff,
  btnSoundOn,

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


  btnSongWood.addEventListener('click', (event) => {

    if (event.target !== slideWoodSongVolume) {
      slideWoodSongVolume.value = 50
    }
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')
    unselectCardSong(btnSongWood.id)
    btnSongWood.classList.add('sound-card-play')
    sound.woodSoundPlay()

  })
  btnSongRain.addEventListener('click', (event) => {
    if (event.target !== slideRainSongVolume) {
      slideRainSongVolume.value = 50
    }
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')
    unselectCardSong(btnSongRain.id)
    btnSongRain.classList.add('sound-card-play')
    sound.rainsSoundPlay()

  })
  btnSongCoffeShop.addEventListener('click', (event) => {
    if (event.target !== slideCoffeShopSongVolume) {
      slideCoffeShopSongVolume.value = 50
    }
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')
    unselectCardSong(btnSongCoffeShop.id)
    btnSongCoffeShop.classList.add('sound-card-play')
    sound.coffeShopPlay()
  })
  btnSongFire.addEventListener('click', (event) => {
    if (event.target !== slidefireSongVolume) {
       slidefireSongVolume.value = 50
    }
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')
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

  btnSoundOff.addEventListener('click', () => {

    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
  })
  btnSoundOn.addEventListener('click', () => {


    btnSoundOff.classList.remove('hide')
    btnSoundOn.classList.add('hide')
    sound.stopSoundBackground()
    disableSound()


  })

  function disableSound() {
    for (let card of cards) {
      card.classList.remove('sound-card-play')
    }
  }


}


