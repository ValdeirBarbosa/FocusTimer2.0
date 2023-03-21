


export default function () {


  const coffeeShop = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/370973__waweee__coffee-shop-ambience_remasteredmp3-14437.mp3?raw=true")
  const wood = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/amazon-florest-14836.mp3?raw=true")
  const fire = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Lareira.wav?raw=true")
  const rain = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/rain.mp3?raw=true")
  const alarm = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/old-mechanic-alarm-clock-140410.mp3?raw=true")


  function alarmSound() {
    alarm.play()
  }
  function fireSoundPlay() {
    fire.loop = true
    fire.play()
  }
  function fireSoundStop() {
    fire.pause()
  }
  function woodSoundPlay() {

    wood.loop = true
    wood.play()
  }
  function woodSoundStop() {
    wood.pause()
  }

  function coffeShopPlay() {
    coffeeShop.loop = true
    coffeeShop.play()
  }

  function coffeShoprStop() {
    coffeeShop.pause()
  }

  function rainsSoundPlay() {
    rain.loop = true
    rain.play()
  }
  function rainsSoundStop() {
    rain.pause()
  }
  function fireSoundPlay() {
    fire.loop = true
    fire.play()
  }
  function fireSoundStop() {
    fire.pause()
  }



  function stopSoundBackground() {
    fireSoundStop();
    rainsSoundStop();
    coffeShoprStop();
    woodSoundStop();
  }






  return {
    alarmSound,
    woodSoundPlay,
    coffeShopPlay,
    rainsSoundPlay,
    fireSoundPlay,
    stopSoundBackground,


  }


}