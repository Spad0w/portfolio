import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { AboutSection } from '@/components/about-section'
import { HeroSection } from '@/components/hero-section'
import { TechPyramid } from '@/components/tech-pyramid'
import { ExperienceGroups } from '@/components/experience/experience-groups'
import { projects } from '@/lib/projects-data'
import { SlideUp } from '@/components/slide-up'

export default function Page() {
  return (
    <>
      <Navigation />
      
      <HeroSection />

      <AboutSection />

      {/* Tech Stack Section */}
      <section id="tech-stack" className="flex min-h-screen scroll-snap-section flex-col justify-center">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-12">
            <SlideUp>
              <h2 className="heading-underline font-display text-4xl font-bold tracking-display">Tech Stack</h2>
            </SlideUp>
            <SlideUp delay={100}>
              <TechPyramid hideHeading />
            </SlideUp>
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
            <ExperienceGroups />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex min-h-screen scroll-snap-section flex-col justify-center">
        <div className="container py-20">
          <div className="mx-auto max-w-6xl space-y-12">
            <SlideUp>
              <div className="space-y-4 text-center">
                <h2 className="heading-underline font-display text-4xl font-bold tracking-display">Projects</h2>
                <p className="font-body text-lg text-muted-foreground">
                  A collection of my recent work and side projects
                </p>
              </div>
            </SlideUp>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <SlideUp key={index} delay={index * 50} className="h-full">
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
