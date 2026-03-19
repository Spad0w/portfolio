import { PageWrapper } from '@/components/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'TikTok/ByteDance',
    role: 'Software Engineer',
    period: 'Jun 2023 - Dec 2023',
    location: 'Singapore',
    description: 'Software Engineer at renowned short video social media platform company',
    achievements: [
      'Developed and optimized data pipelines using Go and Python Flask for real-time analytics',
      'Implemented REST APIs serving millions of users daily with 99.9% uptime',
      'Built business intelligence dashboards and automated reporting using Hive and CRON jobs',
      'Collaborated with cross-functional teams to deliver features that improved user engagement by 15%',
    ],
    technologies: ['Go', 'Python Flask', 'Hive', 'Business Intelligence', 'CRON', 'REST APIs'],
  },
  {
    company: 'Urban Sharing',
    role: 'Full-stack Developer',
    period: 'Jan 2023 - May 2023',
    location: 'Oslo, Norway (Remote)',
    description: "Full-stack Developer at Norway's leading bicycle-sharing software firm",
    achievements: [
      'Developed microservices architecture using TypeScript and Express framework',
      'Implemented GraphQL APIs to optimize data fetching, reducing response times by 40%',
      'Containerized applications using Docker and deployed on Kubernetes clusters',
      'Worked in an international Agile team, participating in daily standups and sprint planning',
    ],
    technologies: ['TypeScript', 'MVC Framework', 'Express', 'GraphQL', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Advanced Micro Foundry',
    role: 'Software Engineer Intern',
    period: 'Jun 2022 - Dec 2022',
    location: 'Singapore',
    description: 'Software Engineer at a cutting-edge robotics software firm',
    achievements: [
      'Built responsive user interfaces using JavaScript and Material-UI for robot control systems',
      'Developed Python backend services for robot coordination and data processing',
      'Dockerized applications for consistent deployment across development and production environments',
      'Implemented real-time monitoring dashboards for robot fleet management',
    ],
    technologies: ['JavaScript', 'Material UI', 'Python', 'Docker'],
  },
]

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className="container py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              My professional journey
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {exp.role}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="text-sm whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="space-y-2 ml-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground list-disc leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
