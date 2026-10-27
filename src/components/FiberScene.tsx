import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import type { Mesh } from 'three'

function SpinningBox({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.8
  })

  return (
    <mesh
      ref={ref}
      position={position}
      scale={active ? 1.4 : 1}
      onClick={() => setActive((a) => !a)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? '#ff8a3d' : color} roughness={0.35} metalness={0.2} />
    </mesh>
  )
}

export function FiberScene() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 5], fov: 50 }}>
      <color attach="background" args={['#14161a']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
      <SpinningBox position={[-1.5, 0.5, 0]} color="#4f8cff" />
      <SpinningBox position={[1.5, 0.5, 0]} color="#3ddc97" />
      <mesh position={[0, 0.6, 0]} castShadow>
        <torusKnotGeometry args={[0.4, 0.14, 128, 16]} />
        <meshStandardMaterial color="#e6e6e6" metalness={0.8} roughness={0.15} />
      </mesh>
      <ContactShadows position={[0, -0.01, 0]} opacity={0.6} scale={10} blur={2} />
      <gridHelper args={[10, 10, '#444', '#2a2a2a']} />
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  )
}
