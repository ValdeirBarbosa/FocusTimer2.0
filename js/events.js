import {
  btndarkModeOn,
  btndarkModeOff,
  playBtn,
  pauseBtn,
  stopBtn,
  plusBtn,
  minusBtn,
  soundCards,
  slideWoodSongVolume
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

  slideWoodSongVolume.addEventListener('change', () => {
    let actualVolume = Number(slideWoodSongVolume.value) * 0.1
    sound.setSoundVolume(slideWoodSongVolume, actualVolume)

  })


  for (const card of soundCards) {
    card.addEventListener('click', cardHandleClick)
  }


  function cardHandleClick(event) {
    const card = event.target;
    const cardIdSelect = card.id
    sound.stopSoundBackground()

    for (let card of soundCards) {
      if (card.id === cardIdSelect) {
       
        card.classList.add("sound-card-play")
        switch (cardIdSelect) {
          case ("woodSong"):
            sound.woodSoundPlay()
            break;
          case ("rainSong"):
            sound.rainsSoundPlay()
            break;
          case ("coffeShopSong"):
            sound.coffeShopPlay()
            break;
          case ("fireSong"):
            sound.fireSoundPlay()
            break;
        }
      } else {
        card.classList.remove("sound-card-play")
      }

    }
  }
}


