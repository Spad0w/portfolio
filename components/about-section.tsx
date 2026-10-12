import { Code2, GraduationCap, MapPin, type LucideIcon } from 'lucide-react'
import { about, education } from '@/lib/about-data'
import { BioReadMore } from '@/components/bio-read-more'
import { SlideUp } from '@/components/slide-up'
import { cn } from '@/lib/utils'

interface InfoCardProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
  className?: string
}

function InfoCard({ icon: Icon, title, children, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-surface-lowest p-4 shadow-ambient transition-[background-color,box-shadow] duration-200 ease-out',
        'hover:bg-surface-low hover:shadow-ambient-lg',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 space-y-1">
          <h3 className="font-display text-base font-semibold">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}

export function AboutSection() {
  const bioParagraphs = about.introduction.filter((paragraph) => paragraph.trim().length > 0)

  return (
    <section id="about" className="flex min-h-[calc(100svh-5.5rem)] scroll-mt-[5.5rem] scroll-snap-section flex-col justify-center bg-surface-low">
      <div className="container py-6 lg:py-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <SlideUp>
            <h2 className="heading-underline font-display text-4xl font-bold tracking-display">About Me</h2>
          </SlideUp>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,24rem)_1fr]">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <SlideUp key={edu.institution} delay={index * 100}>
                  <InfoCard icon={GraduationCap} title="Education">
                    <p className="font-body text-sm font-medium text-foreground">{edu.institution}</p>
                    <p className="font-body text-sm text-muted-foreground">
                      {edu.degree} • {edu.period}
                    </p>
                    {edu.achievements.length > 0 ? (
                      <ul className="space-y-1 pt-2">
                        {edu.achievements.map((achievement) => (
                          <li key={achievement} className="font-body text-sm text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </InfoCard>
                </SlideUp>
              ))}

              <SlideUp delay={150}>
                <InfoCard icon={MapPin} title="Location">
                  <p className="font-body text-sm font-medium text-foreground">{about.location}</p>
                  <p className="font-body text-sm text-muted-foreground">{about.locationNote}</p>
                </InfoCard>
              </SlideUp>

              <SlideUp delay={200}>
                <InfoCard icon={Code2} title="Focus Areas">
                  <p className="font-body text-sm font-medium text-foreground">
                    {about.focusAreas.primary}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {about.focusAreas.secondary}
                  </p>
                </InfoCard>
              </SlideUp>
            </div>

            <SlideUp delay={100}>
              <div className="space-y-8">
                <div className="space-y-4">
                  {bioParagraphs.map((paragraph, index) => (
                    <p key={index} className="font-body text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                  <BioReadMore paragraphs={about.moreIntroduction} />
                </div>
              </div>
            </SlideUp>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {about.stats.map((stat, index) => (
              <SlideUp key={stat.label} delay={index * 75} className="h-full">
                <div className="flex h-full flex-col items-center justify-center rounded-lg bg-surface-lowest px-4 py-4 text-center shadow-ambient transition-[background-color,box-shadow] duration-200 ease-out hover:bg-surface-low hover:shadow-ambient-lg">
                  <p className="font-display text-3xl font-bold tracking-display text-primary">
                    {stat.value}
                  </p>
                  <p className="label-sm mt-2 text-tertiary">{stat.label}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
