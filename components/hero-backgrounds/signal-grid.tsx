'use client'

import { BackdropFrame, ContentScrim, backdropMask } from './backdrop-frame'
import { hsl, useMotionCanvas } from './use-motion-canvas'

const CELL = 64

/**
 * Signal Grid — a faint blueprint grid with a soft drifting spotlight.
 * Vertex dots brighten near the light. No routing packets.
 */
export function SignalGrid() {
  const canvasRef = useMotionCanvas((ctx, { t, width, height, palette, pointer }) => {
    const cols = Math.ceil(width / CELL)
    const rows = Math.ceil(height / CELL)

    ctx.clearRect(0, 0, width, height)

    // Ambient spotlight: follows the cursor, otherwise drifts on its own.
    const lightX = pointer.active ? pointer.x : width * (0.5 + 0.28 * Math.sin(t * 0.16))
    const lightY = pointer.active ? pointer.y : height * (0.45 + 0.22 * Math.cos(t * 0.11))
    const glow = ctx.createRadialGradient(lightX, lightY, 0, lightX, lightY, Math.max(width, height) * 0.5)
    glow.addColorStop(0, hsl(palette.primary, palette.isDark ? 0.16 : 0.1))
    glow.addColorStop(1, hsl(palette.primary, 0))
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, width, height)

    // The grid itself.
    ctx.lineWidth = 1
    ctx.strokeStyle = hsl(palette.foreground, palette.isDark ? 0.08 : 0.055)
    ctx.beginPath()
    for (let col = 0; col <= cols; col++) {
      const x = Math.round(col * CELL) + 0.5
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
    }
    for (let row = 0; row <= rows; row++) {
      const y = Math.round(row * CELL) + 0.5
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
    }
    ctx.stroke()

    // Vertex dots, brighter near the spotlight.
    for (let col = 0; col <= cols; col++) {
      for (let row = 0; row <= rows; row++) {
        const x = col * CELL
        const y = row * CELL
        const distance = Math.hypot(x - lightX, y - lightY)
        const nearness = Math.max(0, 1 - distance / (Math.max(width, height) * 0.42))
        if (nearness <= 0.02) continue
        ctx.fillStyle = hsl(palette.primary, 0.1 + nearness * 0.35)
        ctx.beginPath()
        ctx.arc(x, y, 1.1 + nearness * 1.1, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  })

  return (
    <BackdropFrame>
      <canvas ref={canvasRef} className="h-full w-full" style={backdropMask} />
      <ContentScrim strength={0.72} />
    </BackdropFrame>
  )
}
