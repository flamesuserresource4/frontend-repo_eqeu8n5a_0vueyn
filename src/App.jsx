import React, { Suspense, useEffect, useState } from 'react'
import Cave360 from './components/Cave360'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import Spline from '@splinetool/react-spline'

function HeroSpline() {
  return (
    <div className="absolute inset-0 -z-0">
      <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
    </div>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-white">
      {isLoading && <LoadingScreen />}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroSpline />
        <Navigation />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">Immersive Art Portfolio</h1>
            <p className="mx-auto mb-8 max-w-xl text-white/80">Explore a 360° cave panorama and a scroll-driven gallery with depth and motion.</p>
          </div>
        </div>
      </section>

      <section className="relative">
        <Cave360 />
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-8 text-3xl font-semibold">Gallery (Preview)</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="group overflow-hidden rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:scale-[1.02]">
              <div className="mb-3 aspect-[4/3] rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30" />
              <div className="text-sm text-white/70">Artwork {i}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Immersive Art
      </footer>
    </main>
  )
}
