import { BoxGeometry, MeshStandardMaterial, Mesh, type ColorRepresentation } from 'three'

interface CubeProps {
  color: ColorRepresentation
  size: number // Size of the cube
}

interface CustomMesh extends Mesh {
  tick?: () => void // Ensure tick property accepts a function with the specified signature
}

export default function createCube(props: CubeProps): CustomMesh {
  const geometry = new BoxGeometry(props.size, props.size, props.size)

  const material = new MeshStandardMaterial({
    color: props.color
  })

  const cube: CustomMesh = new Mesh(geometry, material)
  cube.position.set(0, 0, 0)

  cube.tick = () => {}

  return cube
}
