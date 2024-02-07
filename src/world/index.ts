import { createCamera } from '@/world/components/Camera.ts'
import { createLights } from '@/world/components/lights.ts'
import { createScene } from '@/world/components/scene.ts'
import { createRenderer } from '@/world/systems/renderer.ts'
import { Loop } from '@/world/systems/Loop.ts'
import { Resizer } from '@/world/systems/Resizer.ts'
import createTerrain from './components/cube'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import createCube from './components/cube'

// These variables are module-scoped: we cannot access them
// from outside the module.
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let scene: Scene
let loop: Loop

class World {
  constructor(container: Element) {
    // Instances of camera, scene, and renderer
    camera = createCamera()
    scene = createScene('blue')
    renderer = createRenderer()
    // Initialize Loop
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)
    // Light Instance, with optional light helper
    const { light } = createLights('white')
    loop.addUpdatable(light)
    scene.add(light)

    const cube = createCube({
      color: 'green',
      size: 10
    })

    loop.addUpdatable(light)
    loop.addUpdatable(cube)

    console.log(cube)
    console.log(camera)

    scene.add(light, cube)

    const resizer = new Resizer(camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }
  render() {
    // Draw a single frame
    renderer.render(scene, camera)
  }
  // Animation handlers
  start() {
    loop.start()
  }
  stop() {
    loop.stop()
  }
}
export { World }
