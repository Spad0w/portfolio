'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

/** Opt-in preview player. Existing project videos keep their original behavior. */
export function ProjectVideoPreview({ src, poster, label }: {
  src: string
  poster: string
  label: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)
  const [requestedPlayback, setRequestedPlayback] = useState<boolean | null>(null)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => {
      setReducedMotion(preference.matches)
      setRequestedPlayback(null)
    }
    const syncVisibility = () => setPageVisible(!document.hidden)
    syncPreference()
    syncVisibility()
    preference.addEventListener('change', syncPreference)
    document.addEventListener('visibilitychange', syncVisibility)
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.25)
    }, { threshold: [0, 0.25] })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', syncPreference)
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const shouldPlay = visible && pageVisible && !failed &&
      (requestedPlayback ?? !reducedMotion)
    let cancelled = false
    if (shouldPlay) {
      void video.play().catch(() => {
        // Autoplay can be blocked. Keep the poster and allow an explicit retry.
        if (!cancelled) setPlaying(false)
      })
    } else {
      video.pause()
    }
    return () => { cancelled = true; video.pause() }
  }, [visible, pageVisible, reducedMotion, requestedPlayback, failed])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (!video.paused) {
      setRequestedPlayback(false)
      video.pause()
    } else {
      setRequestedPlayback(true)
      // Call directly in the user gesture for browsers that block autoplay.
      void video.play().catch(() => setPlaying(false))
    }
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {failed ? (
        <img src={poster} alt={label} className="h-full w-full object-contain" />
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          aria-label={label}
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => { setFailed(true); setPlaying(false) }}
          className="h-full w-full object-contain"
        />
      )}
      {failed ? (
        <span role="status" className="absolute bottom-2 left-2 rounded bg-surface-lowest px-3 py-2 text-xs text-foreground">
          Preview unavailable. Watch the full demo below.
        </span>
      ) : (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={`${playing ? 'Pause' : 'Play'} ${label}`}
          className="absolute bottom-2 right-2 flex min-h-11 min-w-11 items-center justify-center rounded-md bg-secondary text-white hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {playing ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
        </button>
      )}
    </div>
  )
}
