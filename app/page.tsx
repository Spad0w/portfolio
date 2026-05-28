import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { AboutSection } from '@/components/about-section'
import { TechPyramid } from '@/components/tech-pyramid'
import { ExperienceTimeline } from '@/app/experience/page'
import { experiencesCoCurricular, experiencesWork, projects } from '@/lib/portfolio-data'
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
              <div className="space-y-4 text-center">
                <h2 className="heading-underline font-display text-4xl font-bold tracking-display">Projects</h2>
                <p className="font-body text-lg text-muted-foreground">
                  A collection of my recent work and side projects
                </p>
              </div>
            </SlideUp>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <SlideUp key={index} delay={index * 100} className="h-full">
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
