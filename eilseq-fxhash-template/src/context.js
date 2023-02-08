import { Color, WebGLRenderer } from "three"

import { sculptToThreeJSMesh } from "shader-park-core"
import { PerspectiveCamera, Scene } from "three"

import spCode from "./sp-code"

const renderer = new WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true,
})

renderer.setSize(1080, 1080)
renderer.setClearColor(new Color(1, 1, 1), 1)
document.body.appendChild(renderer.domElement)

const mesh = sculptToThreeJSMesh(spCode, () => ({
  ...params,
  ...pos,
}))

const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 3

const scene = new Scene()
scene.add(mesh)

export const start = (fps) => {
  setInterval(() => {
    renderer.render(scene, camera)
    mesh.material.uniforms.time.value += 1 / fps
  }, 1000 / fps)
}

export const setSize = (size) => {
  renderer.setSize(size, size)
}

export const setRatio = (ratio) => {
  renderer.setPixelRatio(ratio)
}

export const resetCamera = () => {
  camera.aspect = 1
  camera.updateProjectionMatrix()
}

export const updateControls = () => {
  controls.update()
}
