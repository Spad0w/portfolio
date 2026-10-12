'use client'

import { useRef, useState } from 'react'
import { SlideUp } from '@/components/slide-up'
import type { ExperienceItem } from '@/lib/experience-data'
import { cn } from '@/lib/utils'
import { ExperienceCard } from './experience-card'
import { WorkExperienceDialog } from './work-experience-dialog'
import { ExperienceDialog } from './experience-dialog'

interface ExperienceTimelineProps {
  experiences: ExperienceItem[]
  className?: string
  hideCardTechnologies?: boolean
}

export function ExperienceTimeline({ experiences, className, hideCardTechnologies = false }: ExperienceTimelineProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const [selected, setSelected] = useState<ExperienceItem | null>(null)

  return (
    <>
      <div className={cn('relative', className)} style={{ paddingLeft: '40px' }}>
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '14px',
            width: '2px',
            background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--surface-high)), hsl(var(--surface-high)), hsl(var(--primary) / 0.5))',
          }}
        />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <SlideUp key={index} delay={index * 150}>
              <div className="relative">
                <div
                  className="absolute z-10"
                  style={{
                    left: '-33px',
                    top: '24px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 4px hsl(var(--surface-low)), 0 0 0 6px hsl(var(--primary) / 0.3)',
                  }}
                />

                <ExperienceCard
                  item={exp}
                  hideCardTechnologies={hideCardTechnologies}
                  onSelect={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelected(exp)
                  }}
                />
              </div>
            </SlideUp>
          ))}
        </div>
      </div>

      {selected?.workDetails ? (
        <WorkExperienceDialog
          item={selected}
          details={selected.workDetails}
          onClose={() => setSelected(null)}
          onRestoreFocus={() => triggerRef.current?.focus({ preventScroll: true })}
        />
      ) : selected ? (
        <ExperienceDialog item={selected} onClose={() => setSelected(null)} />
      ) : null}
    </>
  )
}
