import Theme from "./theme.js"
import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"

const themeScreen = Theme()
const controlCounter = Controls()
const timer = Timer()
Events({
  themeScreen,
  controlCounter,
  timer
})

