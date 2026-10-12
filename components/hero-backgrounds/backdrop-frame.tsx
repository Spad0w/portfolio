'use client'

import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Positions a hero backdrop behind the hero content: never interactive, never
 * announced to screen readers, and faded out towards the bottom so the canvas
 * dissolves into the page instead of ending on a hard edge.
 */
export function BackdropFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
    >
      {children}
    </div>
  )
}

/** Shared fade so no backdrop competes with the section boundary below it. */
export const backdropMask: React.CSSProperties = {
  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
}

/**
 * Veils the backdrop exactly where the hero copy sits, in the page background
 * colour, so busier backdrops never cost the headline any contrast. Positioned
 * over the copy column on desktop and centred on narrow screens.
 */
export function ContentScrim({ strength = 0.78 }: { strength?: number }) {
  const gradient = (x: string) =>
    `radial-gradient(58% 55% at ${x} 52%, hsl(var(--background) / ${strength}) 0%, hsl(var(--background) / ${strength * 0.5}) 55%, transparent 78%)`

  return (
    <>
      <div className="absolute inset-0 lg:hidden" style={{ backgroundImage: gradient('50%') }} />
      <div className="absolute inset-0 hidden lg:block" style={{ backgroundImage: gradient('33%') }} />
    </>
  )
}
