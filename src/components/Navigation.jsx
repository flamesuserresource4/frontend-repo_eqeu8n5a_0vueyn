import React from 'react'

export default function Navigation() {
  return (
    <header className="pointer-events-auto fixed left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-4 text-white">
      <div className="text-lg font-semibold">Immersive Art</div>
      <nav className="space-x-6 text-sm">
        <a href="#gallery" className="hover:underline">Gallery</a>
        <a href="#about" className="hover:underline">About</a>
      </nav>
    </header>
  )
}
