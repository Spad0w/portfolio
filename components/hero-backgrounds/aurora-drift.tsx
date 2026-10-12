'use client'

import { BackdropFrame, backdropMask } from './backdrop-frame'
import { hsl, useMotionCanvas } from './use-motion-canvas'

type Blob = {
  /** Which palette colour this blob borrows. */
  tone: 'primary' | 'tertiary' | 'surfaceHigh'
  /** Amplitude of the drift, as a fraction of the canvas. */
  ax: number
  ay: number
  /** Radians per second on each axis, deliberately incommensurate so the
   *  composition never visibly repeats. */
  sx: number
  sy: number
  phase: number
  radius: number
  alpha: number
}

const BLOBS: Blob[] = [
  { tone: 'primary', ax: 0.26, ay: 0.18, sx: 0.055, sy: 0.041, phase: 0, radius: 0.62, alpha: 0.22 },
  { tone: 'primary', ax: 0.3, ay: 0.22, sx: 0.037, sy: 0.063, phase: 2.1, radius: 0.48, alpha: 0.14 },
  { tone: 'tertiary', ax: 0.34, ay: 0.16, sx: 0.029, sy: 0.048, phase: 4.2, radius: 0.55, alpha: 0.1 },
  { tone: 'surfaceHigh', ax: 0.2, ay: 0.26, sx: 0.045, sy: 0.033, phase: 1.2, radius: 0.7, alpha: 0.5 },
]

/**
 * Prototype A — "Aurora Drift".
 * Large, soft colour fields moving slowly behind the type. The quietest of the
 * four: it adds depth and warmth without asking for attention.
 */
export function AuroraDrift() {
  const canvasRef = useMotionCanvas((ctx, { t, width, height, palette }) => {
    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = palette.isDark ? 'lighter' : 'source-over'

    const scale = Math.max(width, height)

    for (const blob of BLOBS) {
      const x = width * (0.5 + blob.ax * Math.sin(t * blob.sx * Math.PI + blob.phase))
      const y = height * (0.45 + blob.ay * Math.cos(t * blob.sy * Math.PI + blob.phase * 0.7))
      const radius = scale * blob.radius
      const alpha = blob.alpha * (palette.isDark ? 0.55 : 1)

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, hsl(palette[blob.tone], alpha))
      gradient.addColorStop(0.55, hsl(palette[blob.tone], alpha * 0.35))
      gradient.addColorStop(1, hsl(palette[blob.tone], 0))

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalCompositeOperation = 'source-over'
  })

  return (
    <BackdropFrame>
      <canvas ref={canvasRef} className="h-full w-full" style={backdropMask} />
    </BackdropFrame>
  )
}
