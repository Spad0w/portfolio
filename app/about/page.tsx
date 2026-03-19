import { PageWrapper } from '@/components/page-wrapper'
import { Badge } from '@/components/ui/badge'
import { techStack } from '@/lib/portfolio-data'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Get to know me!
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, my name is <span className="font-semibold text-foreground">Eugene</span> and I
              am a highly ambitious, self-motivated, and driven Software Engineer.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am passionate about creating innovative solutions and building
              impactful products. With experience across full-stack development,
              I thrive in collaborative environments where I can leverage modern
              technologies to solve complex problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dynamic software engineer with diverse technical experience in Agile
              environments. Proven expertise in modern tech stacks, complemented by
              years of developing impactful projects, showcasing collaboration and
              innovation. A highly motivated and curious individual, eager to leverage
              skills and contribute to cutting-edge solutions in a fast-paced,
              collaborative setting.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Every new opportunity is a chance for me to craft a future that
              challenges the status quo.
            </p>
          </div>

          <div className="space-y-8 pt-8">
            <h2 className="text-3xl font-bold tracking-tight">My Tech Stack</h2>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.languages.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Databases & Storage</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.databases.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-accent">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
