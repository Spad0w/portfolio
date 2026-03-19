import { PageWrapper } from '@/components/page-wrapper'
import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    title: 'Repair.sg',
    description: 'Full-stack platform for maintenance services',
    longDescription:
      'A comprehensive web application for both customers and administrators of a leading maintenance service startup in Singapore. Features include service booking, admin dashboard, payment integration, and real-time status tracking.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Shadcn UI', 'MongoDB', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    color: 'from-accent/20 to-accent/5',
  },
  {
    title: 'Infinite Carpool',
    description: 'Carpooling coordination platform',
    longDescription:
      'A web application designed to help coworkers carpool to and from work by organizing shared rides. Features real-time matching, route optimization, and scheduling with Firebase backend for authentication and data storage.',
    technologies: ['React.js', 'JavaScript', 'Material UI', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    title: 'Novus Hotel',
    description: 'Data engineering and analytics platform',
    longDescription:
      'A simulated client platform for a hotel owner, serving as a comprehensive data engineering solution to enhance business decision-making. Implements ETL pipelines, real-time data streaming, and machine learning models for predictive analytics.',
    technologies: ['Apache Airflow', 'Apache Kafka', 'Google BigQuery', 'Python', 'Tableau', 'Machine Learning'],
    githubUrl: 'https://github.com',
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    title: 'DropAndGo',
    description: 'Storage solutions web application',
    longDescription:
      'A web app designed for physical stores to offer convenient storage solutions to customers who need a safe place to temporarily store their belongings for a fee. Features booking system, payment processing, and inventory management.',
    technologies: ['React.js', 'TypeScript', 'Express.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    color: 'from-orange-500/20 to-orange-500/5',
  },
  {
    title: 'Library Management System',
    description: 'Modern library book borrowing platform',
    longDescription:
      'A comprehensive web application that streamlines and modernizes the book borrowing process in libraries. Includes user authentication, book catalog, borrowing history, session management, and administrative controls.',
    technologies: ['Java', 'Session States', 'REST APIs', 'SQL'],
    githubUrl: 'https://github.com',
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    title: 'Fit4Life',
    description: 'Virtual clothing try-on application',
    longDescription:
      'An innovative web application that enables users to virtually try on clothing using a personalized 3D avatar. Integrates Blend and Unity for 3D rendering with a React frontend for seamless user experience.',
    technologies: ['React.js', 'JavaScript', 'Material UI', 'Blend', 'Unity'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    color: 'from-pink-500/20 to-pink-500/5',
  },
]

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="container py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my work, built with passion and creativity
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
