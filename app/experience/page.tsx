'use client'

import { PageWrapper } from '@/components/page-wrapper'
import { Briefcase, MapPin } from 'lucide-react'
import { SlideUp } from '@/components/slide-up'
import { experiences } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

interface ExperienceTimelineProps {
  experiences: {
    company: string
    role: string
    period: string
    location: string
    achievements: string[]
    technologies: string[]
  }[]
  className?: string
}

export function ExperienceTimeline({ experiences, className }: ExperienceTimelineProps) {
  return (
    <div className={cn('relative', className)} style={{ paddingLeft: '40px' }}>
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: '14px',
          width: '2px',
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--surface-high)), hsl(var(--surface-high)), hsl(var(--primary) / 0.5))',
        }}
      />

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <SlideUp key={index} delay={index * 150}>
            <div className="relative">
              <div
                className="absolute"
                style={{
                  left: '-33px',
                  top: '24px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'hsl(var(--primary))',
                  boxShadow: '0 0 0 4px hsl(var(--surface-low)), 0 0 0 6px hsl(var(--primary) / 0.3)',
                }}
              />

              <div className="group p-6 rounded-lg bg-surface-lowest shadow-ambient transition-all duration-300 hover:shadow-ambient-lg hover:bg-surface-low">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="h-5 w-5 flex-shrink-0" />
                      <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    </div>
                    <h4 className="font-body text-lg font-medium text-foreground">{exp.company}</h4>
                    <div className="flex items-center gap-1 text-sm text-tertiary">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </div>
                  </div>
                  <span className="label-sm rounded-full bg-surface-high px-3 py-1 text-tertiary whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="font-body text-xs bg-surface-high text-tertiary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </div>
  )
}

// DO NOT EDIT THIS SECTION
// const outdated = [
//   {
//     company: 'TikTok/ByteDance',
//     role: 'Software Engineer',
//     period: 'Jun 2023 - Dec 2023',
//     location: 'Singapore',
//     description: 'Software Engineer at renowned short video social media platform company',
//     achievements: [
//       'Developed and optimized data pipelines using Go and Python Flask for real-time analytics',
//       'Implemented REST APIs serving millions of users daily with 99.9% uptime',
//       'Built business intelligence dashboards and automated reporting using Hive and CRON jobs',
//       'Collaborated with cross-functional teams to deliver features that improved user engagement by 15%',
//     ],
//     technologies: ['Go', 'Python Flask', 'Hive', 'Business Intelligence', 'CRON', 'REST APIs'],
//   },
//   {
//     company: 'Urban Sharing',
//     role: 'Full-stack Developer',
//     period: 'Jan 2023 - May 2023',
//     location: 'Oslo, Norway (Remote)',
//     description: "Full-stack Developer at Norway's leading bicycle-sharing software firm",
//     achievements: [
//       'Developed microservices architecture using TypeScript and Express framework',
//       'Implemented GraphQL APIs to optimize data fetching, reducing response times by 40%',
//       'Containerized applications using Docker and deployed on Kubernetes clusters',
//       'Worked in an international Agile team, participating in daily standups and sprint planning',
//     ],
//     technologies: ['TypeScript', 'MVC Framework', 'Express', 'GraphQL', 'Docker', 'Kubernetes'],
//   },
//   {
//     company: 'Advanced Micro Foundry',
//     role: 'Software Engineer Intern',
//     period: 'Jun 2022 - Dec 2022',
//     location: 'Singapore',
//     description: 'Software Engineer at a cutting-edge robotics software firm',
//     achievements: [
//       'Built responsive user interfaces using JavaScript and Material-UI for robot control systems',
//       'Developed Python backend services for robot coordination and data processing',
//       'Dockerized applications for consistent deployment across development and production environments',
//       'Implemented real-time monitoring dashboards for robot fleet management',
//     ],
//     technologies: ['JavaScript', 'Material UI', 'Python', 'Docker'],
//   },
// ]

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

          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </PageWrapper>
  )
}
