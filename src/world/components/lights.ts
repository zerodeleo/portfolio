import { DirectionalLight, DirectionalLightHelper, type ColorRepresentation } from 'three'

interface CustomDirectionalLight extends DirectionalLight {
  tick?: () => void // Ensure tick property accepts a function with the specified signature
}

function createLights(color: ColorRepresentation) {
  const light: CustomDirectionalLight = new DirectionalLight(color, 4)
  const lightHelper = new DirectionalLightHelper(light, 0)
  light.position.set(0, 0, 5)
  light.tick = () => {}
  return { light, lightHelper }
}
export { createLights }
