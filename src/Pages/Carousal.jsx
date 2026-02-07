import React, { useState, useEffect, useRef } from 'react'
import img1 from './picture/banner.jpg'
import img2 from './picture/carsoual.png'
import img3 from './picture/carsoual2.png'
import img4 from './picture/carsoual3.png'

export default function Carousal() {
  const slides = [
    { src: img1, alt: 'Featured product 1' },
    { src: img2, alt: 'Featured product 2' },
    { src: img3, alt: 'Featured product 3' },
    { src: img4, alt: 'Featured product 4' },
  ]

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearTimeout(timeoutRef.current)
  }, [index, paused])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-64 sm:h-80 md:h-96">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-8 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
