import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectCard } from '@/components/project-card'
import { TechPyramid } from '@/components/tech-pyramid'
import { GraduationCap, Briefcase } from 'lucide-react'
import { about, education, experiences, projects } from '@/lib/portfolio-data'
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
              <h1
                className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                style={{ fontFamily: '"Avenir", "Avenir Next", sans-serif' }}
              >
                {'Hi, I\'m '}
                <span className="text-foreground">Eugene</span>
              </h1>
              <p className="text-xl text-muted-foreground sm:text-2xl">
                Software Developer & Designer
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Bridging complexity and clarity through thoughtful design. I build intuitive, robust solutions and craft user experiences that deliver real impact.
            </p>

            <SocialLinks className="pt-4" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex min-h-screen scroll-snap-section flex-col justify-center border-t border-border/50">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <h2 className="text-center text-4xl font-bold tracking-tight sm:text-left">About Me</h2>
              <div className="space-y-4 text-center sm:text-left">
                {about.introduction.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* <blockquote className="border-l-2 border-foreground/20 pl-4 italic text-muted-foreground">
                {about.quote}
              </blockquote> */}
            </div>

            <TechPyramid />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="flex min-h-screen scroll-snap-section flex-col justify-center border-t border-border/50">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <SlideUp>
              <h2 className="text-center text-4xl font-bold tracking-tight sm:text-left">Education</h2>
            </SlideUp>
            {education.map((edu, index) => (
              <SlideUp key={index} delay={index * 150}>
                <Card className="border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <GraduationCap className="h-6 w-6" />
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-base">{edu.degree}</CardDescription>
                      </div>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    <ul className="ml-4 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="list-disc text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex min-h-screen scroll-snap-section flex-col justify-center border-t border-border/50">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <SlideUp>
              <h2 className="text-center text-4xl font-bold tracking-tight sm:text-left">Experience</h2>
            </SlideUp>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <SlideUp key={index} delay={index * 150}>
                  <Card className="border">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Briefcase className="h-5 w-5" />
                            {exp.company}
                          </CardTitle>
                          <CardDescription>{exp.role}</CardDescription>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="ml-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="list-disc text-sm text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex min-h-screen scroll-snap-section flex-col justify-center border-t border-border/50">
        <div className="container py-20">
          <div className="mx-auto max-w-6xl space-y-12">
            <SlideUp>
              <div className="space-y-4">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-left">Projects</h2>
                <p className="text-lg text-muted-foreground">
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
