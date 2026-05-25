import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { TechPyramid } from '@/components/tech-pyramid'
import { ExperienceTimeline } from '@/app/experience/page'
import { GraduationCap } from 'lucide-react'
import { about, education, experiencesCoCurricular, experiencesWork, projects } from '@/lib/portfolio-data'
import { SlideUp } from '@/components/slide-up'
import { SocialLinks } from '@/components/social-links'

export default function Page() {
  return (
    <>
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="flex min-h-screen scroll-snap-section flex-col justify-center">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-center sm:text-left">
            <div className="space-y-4">
              <h1 className="font-display text-balance text-5xl font-bold tracking-display sm:text-6xl lg:text-7xl">
                {'Hi, I\'m '}
                <span className="text-primary">Eugene</span>
              </h1>
              <p className="font-body text-xl text-tertiary sm:text-2xl">
                Software Developer & Designer
              </p>
            </div>

            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Bridging complexity and clarity through thoughtful design. I build intuitive, robust solutions and craft user experiences that deliver real impact.
            </p>

            <SocialLinks className="pt-4" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex min-h-screen scroll-snap-section flex-col justify-center bg-surface-low">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <h2 className="heading-underline font-display text-4xl font-bold tracking-display">About Me</h2>
              <div className="space-y-4 text-center sm:text-left">
                {about.introduction.map((paragraph, index) => (
                  <p key={index} className="font-body text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <TechPyramid />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="flex min-h-screen scroll-snap-section flex-col justify-center">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <SlideUp>
              <h2 className="heading-underline font-display text-4xl font-bold tracking-display">Education</h2>
            </SlideUp>
            {education.map((edu, index) => (
              <SlideUp key={index} delay={index * 150}>
                <div className="rounded-lg bg-surface-lowest p-6 shadow-ambient transition-all duration-300 hover:shadow-ambient-lg hover:bg-surface-low">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="font-display flex items-center gap-2 text-xl font-semibold">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {edu.institution}
                      </h3>
                      <p className="font-body text-base text-tertiary">{edu.degree}</p>
                    </div>
                    <span className="label-sm rounded-full bg-surface-high px-3 py-1 text-tertiary">
                      {edu.period}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <p className="font-body text-muted-foreground">{edu.description}</p>
                    <ul className="ml-4 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="font-body list-disc text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex min-h-screen scroll-snap-section flex-col justify-center bg-surface-low">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <SlideUp>
              <h2 className="heading-underline font-display text-4xl font-bold tracking-display">Experience</h2>
            </SlideUp>
            <div className="space-y-10">
              <div className="space-y-5">
                <div className="text-center">
                  <p className="label-sm text-tertiary">Work Experience</p>
                </div>
                <ExperienceTimeline experiences={experiencesWork} />
              </div>

              <div className="space-y-5">
                <div className="text-center">
                  <p className="label-sm text-tertiary">Co-Curricular & Leadership</p>
                </div>
                <ExperienceTimeline experiences={experiencesCoCurricular} hideCardTechnologies />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex min-h-screen scroll-snap-section flex-col justify-center">
        <div className="container py-20">
          <div className="mx-auto max-w-6xl space-y-12">
            <SlideUp>
              <div className="space-y-4">
                <h2 className="heading-underline font-display text-4xl font-bold tracking-display">Projects</h2>
                <p className="font-body text-lg text-muted-foreground">
                  A collection of my recent work and side projects
                </p>
              </div>
            </SlideUp>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <SlideUp key={index} delay={index * 100}>
                  <ProjectCard {...project} />
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
