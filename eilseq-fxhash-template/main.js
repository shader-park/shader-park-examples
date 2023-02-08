import { start, resetCamera, setSize, setRatio } from "./src/context"

import "./style.css"

const getVMax = () => {
  const { innerWidth: w, innerHeight: h } = window
  const isLandscape = w > h
  return isLandscape ? w : h
}
setRatio(1)
setSize(getVMax())

window.addEventListener("resize", () => {
  setSize(getVMax())
  setRatio()
  resetCamera()
})

start(25)
