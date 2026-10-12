'use client'

import { useEffect, useState } from 'react'
import { HeroSection } from '@/components/hero-section'

type DayPart = 'morning' | 'afternoon' | 'evening'

const greetingOptions: { id: DayPart | 'live'; name: string }[] = [
  { id: 'live', name: 'Live (SG time)' },
  { id: 'morning', name: 'Morning' },
  { id: 'afternoon', name: 'Afternoon' },
  { id: 'evening', name: 'Evening' },
]
import { heroBackgroundVariants, type HeroBackgroundVariant } from '@/components/hero-backgrounds'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const options: { id: HeroBackgroundVariant; name: string }[] = [
  { id: 'none', name: 'None (current)' },
  ...heroBackgroundVariants.map(({ id, name }) => ({ id, name })),
]

/**
 * Internal review page: flip between hero backdrops on the real hero section,
 * in either theme, before committing one to the live page.
 */
export default function HeroPrototypesPage() {
  const [variant, setVariant] = useState<HeroBackgroundVariant>('signal-grid')
  const [greeting, setGreeting] = useState<DayPart | 'live'>('live')
  const active = heroBackgroundVariants.find((option) => option.id === variant)

  // Deep-linkable, e.g. /prototypes/hero?v=latent-flow
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('v')
    if (requested && options.some((option) => option.id === requested)) {
      setVariant(requested as HeroBackgroundVariant)
    }
  }, [])

  const select = (next: HeroBackgroundVariant) => {
    setVariant(next)
    const url = new URL(window.location.href)
    url.searchParams.set('v', next)
    window.history.replaceState(null, '', url)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex flex-wrap items-center gap-3 py-4">
          <p className="label-sm mr-2 text-tertiary">Hero backdrop</p>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => select(option.id)}
                className={cn(
                  'rounded-full px-3.5 py-2 font-body text-sm font-medium transition-ui',
                  variant === option.id
                    ? 'bg-foreground text-background'
                    : 'bg-surface-low text-foreground/70 hover:bg-surface hover:text-foreground'
                )}
              >
                {option.name}
              </button>
            ))}
          </div>
          <p className="label-sm mr-2 text-tertiary">Greeting</p>
          <div className="flex flex-wrap gap-2">
            {greetingOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setGreeting(option.id)}
                className={cn(
                  'rounded-full px-3.5 py-2 font-body text-sm font-medium transition-ui',
                  greeting === option.id
                    ? 'bg-foreground text-background'
                    : 'bg-surface-low text-foreground/70 hover:bg-surface hover:text-foreground'
                )}
              >
                {option.name}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {active && (
          <div className="container pb-4">
            <p className="font-body text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{active.tagline}</span>{' '}
              {active.signals} <span className="text-tertiary">Trade-off: {active.tradeoff}</span>
            </p>
          </div>
        )}
      </div>

      <HeroSection
        key={`${variant}-${greeting}`}
        background={variant}
        previewDayPart={greeting === 'live' ? undefined : greeting}
      />
    </main>
  )
}
