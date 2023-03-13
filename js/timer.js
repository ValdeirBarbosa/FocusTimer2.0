

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  minutes,
  counterPause
}) {
  let timerTimeOut
 
  


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function updateMinutes(newMinutes) {
    minutesDisplay = newMinutes;
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let min = Number(minutesDisplay.textContent);
      let sec = Number(secondsDisplay.textContent);
      let isFinished = min <= 0 && sec <= 0;

      updateDisplay(min, 0)


      if (isFinished) {

        // updateDisplay();
        // reset();
        counterPause()
         Sounds().timeEnd()
        return;
      }
      if (sec <= 0) {
        sec = 3;
        --min;
      }

      updateDisplay(min, String(sec - 1));
      countDown();
    }, 1000);
  }

  function holdTimer() {
    clearTimeout(timerTimeOut)
  }


  function resetTimer() {
    minutesDisplay.textContent = String("10").padStart(2, "0")
    secondsDisplay.textContent = String("0").padStart(2, "0")
    clearTimeout(timerTimeOut)

  }


  return {
    countDown,
    holdTimer,
    resetTimer,
    updateMinutes,
    
  }

}



