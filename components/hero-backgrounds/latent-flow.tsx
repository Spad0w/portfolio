'use client'

import { useRef } from 'react'
import { BackdropFrame, ContentScrim, backdropMask } from './backdrop-frame'
import { hsl, useMotionCanvas } from './use-motion-canvas'

/** Particles per million square pixels. */
const DENSITY = 230
const MAX_PARTICLES = 420
const SPEED = 30 // px per second
const LIFE = 9 // seconds before a particle is recycled
/** How fast old trails are veiled away. Lower = longer, softer ribbons. */
const TRAIL_DECAY = 0.028

type Particle = {
  x: number
  y: number
  age: number
  life: number
  weight: number
}

/**
 * A cheap, deterministic stand-in for curl noise: a sum of sines that yields a
 * smoothly rotating vector field without shipping a noise library.
 */
function fieldAngle(x: number, y: number, t: number): number {
  return (
    Math.sin(x * 0.0016 + t * 0.14) * 1.6 +
    Math.cos(y * 0.0019 - t * 0.11) * 1.6 +
    Math.sin((x + y) * 0.0009 + t * 0.07) * 1.1
  )
}

function seed(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    age: Math.random() * LIFE,
    life: LIFE * (0.6 + Math.random() * 0.8),
    weight: 0.5 + Math.random() * 0.9,
  }
}

/**
 * Prototype D — "Latent Flow".
 * Particles follow a slowly rotating vector field and leave fading trails, so
 * the hero slowly draws itself. The most distinctive of the four, and the one
 * that reads as generative/AI work without resorting to cliché.
 */
export function LatentFlow() {
  const particlesRef = useRef<Particle[]>([])
  const sizeRef = useRef({ width: 0, height: 0 })

  const canvasRef = useMotionCanvas((ctx, { t, dt, width, height, palette, reduced }) => {
    if (sizeRef.current.width !== width || sizeRef.current.height !== height) {
      sizeRef.current = { width, height }
      const target = Math.min(MAX_PARTICLES, Math.round(((width * height) / 1_000_000) * DENSITY) + 40)
      particlesRef.current = Array.from({ length: target }, () => seed(width, height))
      ctx.clearRect(0, 0, width, height)
    }

    const step = (time: number, delta: number) => {
      // Trails: veil the previous frame instead of clearing it.
      ctx.fillStyle = hsl(palette.background, palette.isDark ? TRAIL_DECAY * 1.4 : TRAIL_DECAY)
      ctx.fillRect(0, 0, width, height)

      ctx.lineCap = 'round'
      for (const particle of particlesRef.current) {
        const angle = fieldAngle(particle.x, particle.y, time)
        const nextX = particle.x + Math.cos(angle) * SPEED * particle.weight * delta
        const nextY = particle.y + Math.sin(angle) * SPEED * particle.weight * delta

        const fade = Math.sin((particle.age / particle.life) * Math.PI)
        ctx.strokeStyle = hsl(palette.primary, 0.06 + fade * (palette.isDark ? 0.3 : 0.26))
        ctx.lineWidth = 0.6 + particle.weight * 1.1
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(nextX, nextY)
        ctx.stroke()

        particle.x = nextX
        particle.y = nextY
        particle.age += delta

        const offscreen = nextX < -20 || nextX > width + 20 || nextY < -20 || nextY > height + 20
        if (offscreen || particle.age > particle.life) {
          Object.assign(particle, seed(width, height), { age: 0 })
        }
      }
    }

    if (reduced) {
      // Draw one settled composition instead of animating.
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < 260; i++) step(0, 1 / 30)
      return
    }

    step(t, dt)
  })

  return (
    <BackdropFrame>
      <canvas ref={canvasRef} className="h-full w-full" style={backdropMask} />
      <ContentScrim strength={0.84} />
    </BackdropFrame>
  )
}
