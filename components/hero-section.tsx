'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { SocialLinks } from '@/components/social-links'
import { HeroBackground, type HeroBackgroundVariant } from '@/components/hero-backgrounds'
import { personalInfo } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Swap this to change the hero backdrop site-wide. */
export const defaultHeroBackground: HeroBackgroundVariant = 'signal-grid'

const PARALLAX_RANGE = 24

type DayPart = 'morning' | 'afternoon' | 'evening'

const greetingClass: Record<DayPart, string> = {
  morning: 'greeting-morning',
  afternoon: 'greeting-afternoon',
  evening: 'greeting-evening',
}

function singaporeDayPart(now = new Date()): DayPart {
  const hour = Number(
    new Intl.DateTimeFormat('en-SG', {
      timeZone: 'Asia/Singapore',
      hour: 'numeric',
      hourCycle: 'h23',
    }).format(now)
  )
  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 18) return 'afternoon'
  return 'evening'
}

export function HeroSection({
  background = defaultHeroBackground,
  previewDayPart,
}: {
  background?: HeroBackgroundVariant
  /** Override Singapore time greeting (e.g. /prototypes/hero preview). */
  previewDayPart?: DayPart
}) {
  const [ready, setReady] = useState(false)
  const [dayPart, setDayPart] = useState<DayPart>('afternoon')
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (previewDayPart) {
      setDayPart(previewDayPart)
      const frame = requestAnimationFrame(() => setReady(true))
      return () => cancelAnimationFrame(frame)
    }
    const syncDayPart = () => setDayPart(singaporeDayPart())
    syncDayPart()
    const frame = requestAnimationFrame(() => setReady(true))
    const interval = window.setInterval(syncDayPart, 60_000)
    return () => {
      cancelAnimationFrame(frame)
      window.clearInterval(interval)
    }
  }, [previewDayPart])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * PARALLAX_RANGE
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * PARALLAX_RANGE
      setOffset({ x, y })
    },
    [reduceMotion]
  )

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  const enter = (delayMs: number, withTranslate = true) =>
    cn(
      'transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-opacity motion-reduce:translate-y-0',
      ready ? 'translate-y-0 opacity-100' : cn(withTranslate ? 'translate-y-4 opacity-0' : 'opacity-0', 'motion-reduce:opacity-0')
    )

  const stickerScale = 0.75
  const sceneTransform = reduceMotion
    ? 'scale(1.08)'
    : `translate(${-offset.x * 0.5}px, ${-offset.y * 0.5}px) scale(1.08)`
  const stickerTransform = reduceMotion
    ? `scale(${stickerScale})`
    : `translate(${offset.x}px, ${offset.y}px) scale(${stickerScale}) rotateX(${-offset.y * 0.5}deg) rotateY(${offset.x * 0.5}deg)`

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-snap-section flex-col justify-center overflow-hidden"
    >
      <HeroBackground variant={background} />
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:items-stretch">
            <div className="space-y-8 text-center sm:text-left">
              <div className={enter(0)} style={{ transitionDelay: '0ms' }}>
                <div className="space-y-4">
                  <h1 className="flex flex-col gap-3 font-display text-[2.75rem] font-bold tracking-display sm:gap-4 sm:text-6xl lg:text-7xl">
                    <span>good</span>
                    <span className="whitespace-nowrap">
                      <span className={cn('greeting-word', greetingClass[dayPart])}>{dayPart}</span>,
                    </span>
                    <span>
                      {"I'm "}
                      <span className="text-primary">{personalInfo.name}</span>
                    </span>
                  </h1>
                  <p className="font-body text-xl text-tertiary sm:text-2xl">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <p
                className={cn(enter(60), 'font-body text-lg leading-relaxed text-muted-foreground')}
                style={{ transitionDelay: '60ms' }}
              >
                {personalInfo.heroBio}
              </p>

              <div className={enter(120)} style={{ transitionDelay: '120ms' }}>
                <SocialLinks className="pt-4" />
              </div>
            </div>

            <div className={cn(enter(80), 'lg:h-full')} style={{ transitionDelay: '80ms' }}>
              <div
                className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg lg:mr-0 lg:aspect-auto lg:h-full lg:w-[78%] [perspective:800px]"
                onMouseMove={reduceMotion ? undefined : handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="absolute inset-0 transition-transform duration-150 ease-out motion-reduce:transition-none"
                  style={{ transform: sceneTransform }}
                >
                  <Image
                    src="/profilepic.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 448px"
                    className="object-cover object-[70%_100%]"
                    aria-hidden
                  />
                </div>

                {/* Cutout sticker — disabled for scene-only board
                <div
                  className={cn(
                    'absolute inset-x-0 bottom-0 mx-auto h-[60%] max-w-[68%] transition-transform duration-150 ease-out motion-reduce:transition-none',
                    'drop-shadow-[0_20px_40px_rgba(15,23,42,0.22)]'
                  )}
                  style={{ transform: stickerTransform }}
                >
                  <Image
                    src="/profile-cutout.png"
                    alt={`${personalInfo.name}, portrait`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 448px"
                    className="object-contain object-bottom"
                  />
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
