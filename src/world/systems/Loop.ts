import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

const clock = new Clock()

class Loop {
  private camera: PerspectiveCamera
  private scene: Scene
  private renderer: WebGLRenderer
  private updatables: any

  constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
    this.camera = camera
    this.scene = scene
    this.renderer = renderer
    this.updatables = []
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick()
      // render a frame
      this.renderer.render(this.scene, this.camera)
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

  tick() {
    const delta = clock.getDelta()
    for (const object of this.updatables) {
      object.tick(delta)
    }
  }

  // Method to get updatables
  getUpdatables() {
    return this.updatables
  }

  // Method to add an updatable
  addUpdatable(updatable: any) {
    this.updatables.push(updatable)
  }
}

export { Loop }
