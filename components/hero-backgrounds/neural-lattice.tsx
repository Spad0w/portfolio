'use client'

import { useRef } from 'react'
import { BackdropFrame, ContentScrim, backdropMask } from './backdrop-frame'
import { hsl, useMotionCanvas } from './use-motion-canvas'

const LINK_DISTANCE = 132
const POINTER_RADIUS = 190
/** Nodes per million square pixels, so density stays constant across screens. */
const DENSITY = 52
const MAX_NODES = 90

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  /** Phase offset so nodes pulse independently. */
  pulse: number
}

/**
 * Prototype C — "Neural Lattice".
 * Nodes drift and link up by proximity, and lean towards the cursor. The most
 * literal read on machine learning work, and the most interactive of the four.
 */
export function NeuralLattice() {
  const nodesRef = useRef<Node[]>([])
  const sizeRef = useRef({ width: 0, height: 0 })

  const canvasRef = useMotionCanvas((ctx, { t, dt, width, height, palette, pointer, reduced }) => {
    if (sizeRef.current.width !== width || sizeRef.current.height !== height) {
      sizeRef.current = { width, height }
      const target = Math.min(MAX_NODES, Math.round(((width * height) / 1_000_000) * DENSITY) + 18)
      nodesRef.current = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14,
        radius: 1.1 + Math.random() * 1.5,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const nodes = nodesRef.current
    ctx.clearRect(0, 0, width, height)

    if (!reduced) {
      for (const node of nodes) {
        node.x += node.vx * dt
        node.y += node.vy * dt

        if (pointer.active) {
          const dx = pointer.x - node.x
          const dy = pointer.y - node.y
          const distance = Math.hypot(dx, dy)
          if (distance < POINTER_RADIUS && distance > 1) {
            const pull = (1 - distance / POINTER_RADIUS) * 9 * dt
            node.x += (dx / distance) * pull
            node.y += (dy / distance) * pull
          }
        }

        // Wrap with a margin so nodes never pop at the edges.
        if (node.x < -40) node.x = width + 40
        if (node.x > width + 40) node.x = -40
        if (node.y < -40) node.y = height + 40
        if (node.y > height + 40) node.y = -40
      }
    }

    // Links.
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]
        const b = nodes[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const distanceSq = dx * dx + dy * dy
        if (distanceSq > LINK_DISTANCE * LINK_DISTANCE) continue

        const closeness = 1 - Math.sqrt(distanceSq) / LINK_DISTANCE
        ctx.strokeStyle = hsl(palette.primary, closeness * (palette.isDark ? 0.4 : 0.34))
        ctx.lineWidth = 0.7 + closeness * 0.6
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }

    // Nodes.
    for (const node of nodes) {
      const pulse = reduced ? 0.6 : 0.55 + 0.45 * Math.sin(t * 1.1 + node.pulse)
      const near =
        pointer.active && Math.hypot(pointer.x - node.x, pointer.y - node.y) < POINTER_RADIUS

      ctx.fillStyle = hsl(palette.primary, (near ? 0.85 : 0.5) * (0.6 + pulse * 0.4))
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius + (near ? 0.7 : 0), 0, Math.PI * 2)
      ctx.fill()
    }
  })

  return (
    <BackdropFrame>
      <canvas ref={canvasRef} className="h-full w-full" style={backdropMask} />
      <ContentScrim strength={0.72} />
    </BackdropFrame>
  )
}
