'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, Float, Text } from '@react-three/drei'
import * as THREE from 'three'

// Sample trending data
const trendingData = [
  { x: -2, y: 0, z: 0, height: 2, color: '#3B82F6', label: 'Win' },
  { x: -1, y: 0, z: 0, height: 1.8, color: '#10B981', label: 'Survive' },
  { x: 0, y: 0, z: 0, height: 1.5, color: '#F59E0B', label: 'World' },
  { x: 1, y: 0, z: 0, height: 1.3, color: '#EF4444', label: 'Last' },
  { x: 2, y: 0, z: 0, height: 1.2, color: '#8B5CF6', label: 'Find' },
]

export default function Scene3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <Center>
        {/* Base plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#1F2937" />
        </mesh>

        {/* Trending bars */}
        {trendingData.map((item, index) => (
          <Float
            key={index}
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            position={[item.x, 0, 0]}
          >
            <mesh>
              <boxGeometry args={[0.5, item.height, 0.5]} />
              <meshStandardMaterial
                color={item.color}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        ))}

        {/* Labels */}
        {trendingData.map((item, index) => (
          <Text
            key={`label-${index}`}
            position={[item.x, item.height + 0.3, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {item.label}
          </Text>
        ))}
      </Center>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </group>
  )
} 