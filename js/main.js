import Theme from "./theme.js"
import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"

import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

let minutes = Number(minutesDisplay.textContent);
const sound = Sound()
const themeScreen = Theme()
const controlCounter = Controls()
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: Controls.reset,
  minutes,
  counterPause: controlCounter.counterPause

});
Events({
  themeScreen,
  controlCounter,
  timer,
  sound
})

 
