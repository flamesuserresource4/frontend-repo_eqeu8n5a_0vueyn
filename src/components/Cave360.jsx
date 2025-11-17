import React, { useEffect, useRef, Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function PanoramaSphere() {
  const texture = useTexture('/images/360/cave-360.jpg')
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false
  const [widthSegs, heightSegs] = isMobile ? [40, 20] : [60, 40]

  return (
    <mesh>
      <sphereGeometry args={[500, widthSegs, heightSegs]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

export default function Cave360() {
  const overlayRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (overlayRef.current) overlayRef.current.classList.remove('opacity-0')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PanoramaSphere />
        </Suspense>
        <OrbitControls enableZoom enablePan={false} rotateSpeed={-0.5} dampingFactor={0.05} enableDamping minDistance={1} maxDistance={400} />
      </Canvas>

      <div ref={overlayRef} className="pointer-events-none absolute inset-0 flex items-end justify-center p-6 opacity-0 transition-opacity duration-700">
        <button className="pointer-events-auto rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20" aria-label="Explore Gallery">
          Explore Gallery
        </button>
      </div>
    </div>
  )
}
