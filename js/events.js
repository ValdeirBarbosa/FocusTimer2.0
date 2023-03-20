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
  slideWoodSongVolume
} from "./elements.js"


export default function ({ themeScreen, controlCounter, timer, sound }) {

  let userChangeVol = false
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

  slideWoodSongVolume.addEventListener('change', () => {
    let actualVolume = slideWoodSongVolume.value
    sound.setSoundVolume(slideWoodSongVolume, actualVolume)

  })



  btnSongWood.addEventListener('click', () => {
    unselectCardSong(btnSongWood.id)
    btnSongWood.classList.add('sound-card-play')

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


  function unselectCardSong(cardid) {
    sound.stopSoundBackground()
    for (let card of soundCards) {
      if (card.id != cardid) {
        card.classList.remove('sound-card-play')
      } else {
        let volCard = document.querySelector(`#${card.id} input`)

      }

    }
  }

}


