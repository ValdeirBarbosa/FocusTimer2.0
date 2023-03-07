import {
  minutes,
  seconds
} from "./elements.js"


export default function Timer() {
  let timerTimeOut

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let min = Number(minutes.textContent);
      let sec = Number(seconds.textContent);
      sec > 0 ? sec-- : sec = 59
      seconds.textContent = String(sec).padStart(2, "0")

      console.log(sec)
      countDown();
    }, 1000);
  }

  return {
    countDown
  }

}



