import type { ViewerEffectsController, ViewerReadyState } from '@liveroom-tech/react-immersive'

type Vec3 = [number, number, number]

// Offsets are in the model's own frame (island flat: +y up, east = +x, south = +z),
// the same frame the nodes' own positions and rotations use.
const TRAIN = /^4-6-0-baldwin-steam-locomotive_/
const PALMS = [/^coconut-palm_Tree_[0-3]_/, /^coconut-palm-\(1\)_Tree_/, /^coconut-palm-2_Tree_/]
const WHALE = 'killer-whale-2_Object_7'
const LOTUS_BUD = ['lotus-tower---nelum-kuluna_Object_8', 'lotus-tower---nelum-kuluna_Object_9']
const LOTUS_COLOR = '#d64dff'

const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]

/**
 * Starts the looping scene animations. Effect ranges are absolute transform values,
 * so each object's resting position/rotation is read first and the motion is built
 * around it. Returns the effect ids so the caller can stop them.
 */
export function startSceneAnimations(viewer: ViewerReadyState, fx: ViewerEffectsController): string[] {
  const nodes = viewer.raw.nodes
  const names = (pattern: RegExp) => Object.keys(nodes).filter((name) => pattern.test(name))
  const rest = (name: string) => {
    const node = nodes[name]
    return {
      position: node.position.toArray() as Vec3,
      rotation: [node.rotation.x, node.rotation.y, node.rotation.z] as Vec3,
    }
  }
  const ids: string[] = []

  // Train: glides 6 units either way along its track (east-west).
  const train = names(TRAIN)
  if (train.length) {
    ids.push(
      fx.pulse(
        {
          transforms: train.map((name) => {
            const { position } = rest(name)
            return { targets: name, values: { position: [add(position, [-6, 0, 0]), add(position, [6, 0, 0])] } }
          }),
        },
        { id: 'train', duration: 9000, repeat: Infinity, synchronized: true },
      ),
    )
  }

  // Palms: each sways a couple of degrees around its trunk base, at its own pace.
  PALMS.forEach((pattern, i) => {
    const parts = names(pattern)
    if (!parts.length) return
    ids.push(
      fx.pulse(
        {
          transforms: parts.map((name) => {
            const { rotation } = rest(name)
            return { targets: name, values: { rotation: [add(rotation, [-0.035, 0, -0.02]), add(rotation, [0.035, 0, 0.02])] } }
          }),
        },
        { id: `palm-${i}`, duration: 3200 + i * 500, repeat: Infinity, synchronized: true },
      ),
    )
  })

  // Killer whale: rises and dips with a slight roll, as if surfacing.
  if (nodes[WHALE]) {
    const { position, rotation } = rest(WHALE)
    ids.push(
      fx.pulse(
        {
          transforms: [
            {
              targets: WHALE,
              values: {
                position: [add(position, [0, -0.6, 0]), add(position, [0, 1.2, 0])],
                rotation: [add(rotation, [-0.03, 0, 0]), add(rotation, [0.03, 0, 0])],
              },
            },
          ],
        },
        { id: 'whale', duration: 2800, repeat: Infinity, synchronized: true },
      ),
    )
  }

  // Lotus Tower: the bud glows purple and pulses, with a matching light.
  const bud = LOTUS_BUD.filter((name) => nodes[name])
  if (bud.length) {
    fx.setMaterial(bud, { emissive: LOTUS_COLOR, emissiveIntensity: 0.2 })
    fx.addPointLight({ id: 'lotus-glow', target: bud[bud.length - 1], color: LOTUS_COLOR, intensity: 0, distance: 40 })
    ids.push(
      fx.pulse(
        {
          materials: [{ targets: bud, values: { emissiveIntensity: [0.2, 1.6] } }],
          lights: [{ lights: 'lotus-glow', intensity: [0, 400] }],
        },
        { id: 'lotus', duration: 2400, repeat: Infinity, synchronized: true },
      ),
    )
  }

  return ids
}
