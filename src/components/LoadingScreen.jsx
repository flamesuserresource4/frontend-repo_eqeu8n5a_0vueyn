import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let p = 0
    const id = setInterval(() => {
      p += Math.random() * 8
      if (p >= 100) {
        p = 100
        clearInterval(id)
      }
      setProgress(Math.floor(p))
    }, 120)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black text-white">
      <div className="text-center">
        <div className="mb-4 text-xs uppercase tracking-widest text-white/70">Loading</div>
        <div className="text-4xl font-bold">{progress}%</div>
      </div>
    </div>
  )
}
