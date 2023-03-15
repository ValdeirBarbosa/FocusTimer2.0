export default function () {

  const cofeShop = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/370973__waweee__coffee-shop-ambience_remasteredmp3-14437.mp3?raw=true")
  const wood = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/amazon-florest-14836.mp3?raw=true")
  const fire = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/fireplace-fire-crackling-loop-123930.mp3?raw=true")
  const rain = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/rain.mp3?raw=true")
  const alarm = new Audio("https://github.com/ValdeirBarbosa/FocusTimer2.0/blob/main/sounds/old-mechanic-alarm-clock-140410.mp3?raw=true")


  function alarmSound() {
    alarm.play()
  }





  return {
    alarmSound,
   

  }


}