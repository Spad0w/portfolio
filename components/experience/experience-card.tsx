import Image from 'next/image'
import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react'
import type { MouseEvent } from 'react'
import { cn } from '@/lib/utils'
import type { ExperienceItem } from '@/lib/experience-data'

interface ExperienceCardProps {
  item: ExperienceItem
  hideCardTechnologies?: boolean
  onSelect: (event: MouseEvent<HTMLButtonElement>) => void
}

export function ExperienceCard({ item: exp, hideCardTechnologies = false, onSelect }: ExperienceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-haspopup={exp.workDetails ? "dialog" : undefined}
      className={cn(exp.workDetails ? "group block w-full rounded-lg bg-surface-lowest p-6 text-left transition-colors duration-200 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 motion-reduce:transition-none" : "group fine-hover-lift block w-full text-left p-6 rounded-lg bg-surface-lowest shadow-ambient transition-[transform,box-shadow,background-color] duration-200 ease-out hover:shadow-ambient-xl hover:bg-surface-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-[0.99]")}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div className={cn(exp.logoSrc && 'flex min-w-0 items-start gap-3 sm:gap-4')}>
          {exp.logoSrc && (
            <Image
              src={exp.logoSrc}
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 shrink-0 rounded bg-white object-contain sm:h-12 sm:w-12"
            />
          )}
          <div className="min-w-0 space-y-1">
          <div className="flex items-center gap-2 text-primary">
            {!exp.logoSrc && <Briefcase className="h-5 w-5 flex-shrink-0" />}
            <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
          </div>
          <h4 className="font-body text-lg font-medium text-foreground">{exp.company}</h4>
          <div className="flex items-center gap-1 text-sm text-tertiary">
            <MapPin className="h-3.5 w-3.5" />
            {exp.location}
          </div>
        </div>
        </div>
        <span className="label-sm rounded-full bg-surface-high px-3 py-1 text-tertiary whitespace-nowrap">
          {exp.period}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {exp.workDetails ? (
          <ul className="space-y-3">
            {exp.workDetails.cardHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 font-body text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : exp.summary ? (
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {exp.summary}
          </p>
        ) : (
          <ul className="space-y-1.5">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {exp.workDetails && (
        <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
          View experience <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      )}

      {!exp.workDetails && !hideCardTechnologies && (
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span key={tech} className="font-body text-xs bg-surface-high text-tertiary px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      )}
    </button>
  )
}
