'use client'

import { useId, useState } from 'react'
import { ChevronsDown, ChevronsUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const paragraphClass = 'font-body text-base leading-relaxed text-foreground'
const toggleClass =
  'group mx-auto flex flex-col items-center gap-1 rounded-lg px-3 py-2 font-body text-sm font-medium text-primary transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function BioReadMore({ paragraphs }: { paragraphs: readonly string[] }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  if (paragraphs.length === 0) return null

  return (
    <div>
      <div
        id={id}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={paragraphClass}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {open ? (
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-expanded
          aria-controls={id}
          className={cn(toggleClass, 'mt-6')}
        >
          <ChevronsUp className="h-6 w-6" aria-hidden />
          Read less
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-controls={id}
          className={cn(toggleClass, 'mt-2')}
        >
          View more!
          <ChevronsDown className="h-6 w-6 animate-bounce motion-reduce:animate-none" aria-hidden />
        </button>
      )}
    </div>
  )
}
