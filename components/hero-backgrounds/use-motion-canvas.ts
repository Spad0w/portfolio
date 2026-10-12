'use client'

import { useEffect, useRef } from 'react'

/**
 * Design-system colours, read straight from the CSS custom properties in
 * globals.css so every backdrop stays correct in light and dark mode.
 * Values are raw HSL triplets, e.g. "243 75% 59%".
 */
export type Palette = {
  primary: string
  tertiary: string
  foreground: string
  background: string
  surfaceHigh: string
  isDark: boolean
}

export type Pointer = {
  x: number
  y: number
  active: boolean
}

export type FrameInfo = {
  /** Seconds since the animation started. */
  t: number
  /** Seconds since the previous frame, clamped to avoid jumps after a tab switch. */
  dt: number
  width: number
  height: number
  palette: Palette
  pointer: Pointer
  /** True when the visitor prefers reduced motion: draw one static frame. */
  reduced: boolean
}

export type DrawFn = (ctx: CanvasRenderingContext2D, frame: FrameInfo) => void

/** Build a canvas-ready colour from an HSL triplet plus alpha. */
export function hsl(triplet: string, alpha = 1): string {
  return `hsl(${triplet} / ${alpha})`
}

function readPalette(): Palette {
  const styles = getComputedStyle(document.documentElement)
  const read = (name: string, fallback: string) => styles.getPropertyValue(name).trim() || fallback

  return {
    primary: read('--primary', '243 75% 59%'),
    tertiary: read('--tertiary', '215 16% 47%'),
    foreground: read('--foreground', '222 47% 11%'),
    background: read('--background', '252 100% 99%'),
    surfaceHigh: read('--surface-high', '233 100% 94%'),
    isDark: document.documentElement.classList.contains('dark'),
  }
}

/**
 * Runs a canvas animation that is theme-aware, pauses when off-screen or in a
 * hidden tab, caps device pixel ratio, and degrades to a single static frame
 * when the visitor prefers reduced motion.
 */
export function useMotionCanvas(draw: DrawFn) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const drawRef = useRef(draw)
  drawRef.current = draw

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let palette = readPalette()
    let width = 0
    let height = 0
    let running = false
    let onScreen = true
    let rafId = 0
    let last = 0
    let elapsed = 0

    const pointer: Pointer = { x: 0, y: 0, active: false }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      renderStaticFrame()
    }

    const paint = (dt: number) => {
      drawRef.current(ctx, {
        t: elapsed,
        dt,
        width,
        height,
        palette,
        pointer,
        reduced: motionQuery.matches,
      })
    }

    const renderStaticFrame = () => {
      if (!motionQuery.matches) return
      ctx.clearRect(0, 0, width, height)
      paint(0)
    }

    const frame = (now: number) => {
      rafId = 0
      const dt = Math.min((now - last) / 1000, 1 / 30)
      last = now
      elapsed += dt
      paint(dt)
      if (running) rafId = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || motionQuery.matches) return
      running = true
      last = performance.now()
      rafId = requestAnimationFrame(frame)
    }

    const stop = () => {
      running = false
      if (rafId) cancelAnimationFrame(rafId)
      rafId = 0
    }

    const sync = () => {
      if (onScreen && !document.hidden) start()
      else stop()
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active =
        pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height
    }

    const onPointerLeave = () => {
      pointer.active = false
    }

    const onMotionPreferenceChange = () => {
      if (motionQuery.matches) {
        stop()
        renderStaticFrame()
      } else {
        sync()
      }
    }

    const onThemeChange = () => {
      palette = readPalette()
      renderStaticFrame()
    }

    resize()
    sync()
    renderStaticFrame()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const themeObserver = new MutationObserver(onThemeChange)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        sync()
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    document.addEventListener('visibilitychange', sync)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    motionQuery.addEventListener('change', onMotionPreferenceChange)

    return () => {
      stop()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', sync)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      motionQuery.removeEventListener('change', onMotionPreferenceChange)
    }
  }, [])

  return canvasRef
}
