import { PageWrapper } from '@/components/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap } from 'lucide-react'
import { education, universityRoles as roles } from '@/lib/portfolio-data'

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className="container py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Education
            </h1>
            <p className="text-xl text-muted-foreground">
              My academic journey and roles
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <GraduationCap className="h-6 w-6 text-accent" />
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {edu.degree}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Achievements:</h4>
                      <ul className="space-y-1 ml-4">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground list-disc">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                University Roles
              </h2>
              <div className="space-y-6">
                {roles.map((role, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-xl">{role.title}</CardTitle>
                          <CardDescription className="text-base">
                            {role.course}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{role.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{role.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Responsibilities:</h4>
                        <ul className="space-y-2 ml-4">
                          {role.responsibilities.map((resp, i) => (
                            <li key={i} className="text-muted-foreground list-disc">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
