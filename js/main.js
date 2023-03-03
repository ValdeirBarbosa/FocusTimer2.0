import Theme from "./theme.js"
import Events from "./events.js"
import Controls from "./controls.js"

const themeScreen = Theme()
const controlCounter = Controls()
Events({
  themeScreen,
  controlCounter
})

