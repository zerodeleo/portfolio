import { PerspectiveCamera } from 'three'

interface CustomCamera extends PerspectiveCamera {
  tick?: () => void
}

function createCamera(): CustomCamera {
  const camera: CustomCamera = new PerspectiveCamera(
    35, // FOV = Field Of View
    1, // Aspect ratio (dummy value)
    0.1, // Near clipping plane
    100 // Far clipping plane
  )

  // Move the camera back so we can view the scene
  camera.position.set(0, 10, 50)

  // Add a dummy tick function to satisfy the interface
  camera.tick = () => {}

  return camera as CustomCamera // Casting to CustomCamera
}

export { createCamera }
