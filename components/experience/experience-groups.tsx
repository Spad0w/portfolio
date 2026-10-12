import { experiencesCoCurricular, experiencesWork } from '@/lib/experience-data'
import { ExperienceTimeline } from './experience-timeline'

export function ExperienceGroups() {
  return (
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
  )
}
