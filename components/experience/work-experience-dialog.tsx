'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { MapPin, X } from 'lucide-react'
import type { ExperienceItem, WorkDetails } from '@/lib/experience-data'

interface WorkExperienceDialogProps {
  item: ExperienceItem
  details: WorkDetails
  onClose: () => void
  onRestoreFocus: () => void
}

export function WorkExperienceDialog({ item, details, onClose, onRestoreFocus }: WorkExperienceDialogProps) {
  return (
    <Dialog.Root defaultOpen onOpenChange={(open) => { if (!open) onClose() }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/60 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200" />
        <Dialog.Content
          aria-describedby={undefined}
          onCloseAutoFocus={(event) => {
            event.preventDefault()
            onRestoreFocus()
          }}
          className="fixed inset-0 z-50 flex items-stretch justify-center overflow-hidden p-0 focus:outline-none sm:items-center sm:p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200"
        >
          <div className="flex h-[100dvh] w-full max-w-[900px] flex-col overflow-hidden bg-surface-lowest text-foreground shadow-ambient-xl sm:h-auto sm:max-h-[85dvh] sm:rounded-lg">
            <header className="relative shrink-0 bg-surface-low px-6 pb-6 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-10 sm:py-8">
              <div className="pr-12">
                <Dialog.Title className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{item.role}</Dialog.Title>
                <p className="mt-2 font-body text-base font-medium text-primary">{item.company}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-sm text-muted-foreground">
                  <span>{item.period}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{item.location}</span>
                </div>
              </div>
              <Dialog.Close aria-label="Close experience" className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none sm:right-5 sm:top-5">
                <X className="h-5 w-5" aria-hidden="true" />
              </Dialog.Close>
            </header>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pt-7 pb-[max(2rem,env(safe-area-inset-bottom))] font-body sm:px-10 sm:py-8 [scrollbar-color:hsl(var(--tertiary))_transparent]">
              <section>
                <h3 className="font-display text-xl font-semibold">Overview</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{details.overview}</p>
              </section>
              <section className="mt-8">
                <h3 className="font-display text-xl font-semibold">Approach</h3>
                <div className="mt-5 space-y-6">
                  {details.approach.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-medium">{section.title}</h4>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{section.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-8">
                <h3 className="font-display text-xl font-semibold">Results</h3>
                <ul className="mt-4 space-y-3">
                  {details.results.map((result) => (
                    <li key={result} className="flex gap-3 text-base leading-relaxed">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-8">
                <h3 className="font-display text-xl font-semibold">Technologies</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => <li key={tech} className="rounded bg-surface-high px-3 py-1.5 text-sm">{tech}</li>)}
                </ul>
              </section>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
