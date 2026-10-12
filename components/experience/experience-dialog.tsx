'use client'

import { useEffect } from 'react'
import { Briefcase, MapPin, X } from 'lucide-react'
import type { ExperienceItem } from '@/lib/experience-data'

export function ExperienceDialog({ item, onClose }: { item: ExperienceItem; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${item.role} at ${item.company}`}
        className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-surface-lowest p-8 shadow-ambient-xl animate-in zoom-in-95 duration-200"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-high text-tertiary transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6 pr-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Briefcase className="h-6 w-6 flex-shrink-0" />
              <h3 className="font-display text-2xl font-semibold">{item.role}</h3>
            </div>
            <h4 className="font-body text-xl font-medium text-foreground">{item.company}</h4>
            <div className="flex items-center gap-1.5 text-sm text-tertiary">
              <MapPin className="h-4 w-4" />
              {item.location}
            </div>
          </div>
          <span className="label-sm self-start rounded-full bg-surface-high px-3 py-1 text-tertiary whitespace-nowrap">
            {item.period}
          </span>
        </div>

        <div className="mb-6">
          <p className="label-sm text-tertiary mb-3">Highlights</p>
          <ul className="space-y-2">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="font-body text-base text-foreground leading-relaxed flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-sm text-tertiary mb-3">Technologies & Skills</p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="font-body text-sm bg-surface-high text-foreground px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
