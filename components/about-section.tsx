import { Code2, GraduationCap, MapPin, Sparkles, type LucideIcon } from 'lucide-react'
import { about, education } from '@/lib/portfolio-data'
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
        'rounded-lg bg-surface-lowest p-5 shadow-ambient transition-all duration-300',
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
    <section id="about" className="flex min-h-screen scroll-snap-section flex-col justify-center bg-surface-low">
      <div className="container py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <SlideUp>
            <div className="space-y-4 text-center">
              <p className="label-sm text-primary">About Me</p>
              <h2 className="font-display text-4xl font-bold tracking-display sm:text-5xl">
                {about.subtitle}
              </h2>
            </div>
          </SlideUp>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,24rem)_1fr]">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <SlideUp key={edu.institution} delay={index * 100}>
                  <InfoCard icon={GraduationCap} title="Education">
                    <p className="font-body text-sm font-medium text-foreground">{edu.institution}</p>
                    <p className="font-body text-sm text-muted-foreground">
                      {edu.degree} • {edu.period}
                    </p>
                    {edu.description ? (
                      <p className="font-body pt-1 text-sm text-muted-foreground">{edu.description}</p>
                    ) : null}
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
                    <p key={index} className="font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {about.techHighlights.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface-lowest px-3 py-1.5 font-body text-sm text-foreground shadow-ambient transition-colors duration-300 hover:bg-surface-high"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {about.stats.map((stat, index) => (
              <SlideUp key={stat.label} delay={index * 75}>
                <div className="rounded-lg bg-surface-lowest px-4 py-6 text-center shadow-ambient transition-all duration-300 hover:bg-surface-low hover:shadow-ambient-lg">
                  <p className="font-display text-3xl font-bold tracking-display text-primary sm:text-4xl">
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
