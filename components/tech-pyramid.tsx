'use client'

import { getTechIcon, type TechIcon } from '@/lib/tech-icons'
import { cn } from '@/lib/utils'

interface TechItemProps {
  tech: TechIcon
}

function TechItem({ tech }: TechItemProps) {
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex flex-col items-center gap-2 p-3 rounded-xl',
        'transition-all duration-300 ease-out',
        'hover:scale-110 hover:bg-muted/50',
        'group'
      )}
      title={tech.name}
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className={cn(
          'w-10 h-10 sm:w-12 sm:h-12',
          'grayscale opacity-60',
          'group-hover:grayscale-0 group-hover:opacity-100',
          'transition-all duration-300'
        )}
      />
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {tech.name}
      </span>
    </a>
  )
}

interface CategoryBox {
  label: string
  items: string[]
}

interface TechPyramidProps {
  className?: string
}

function CategoryCard({ category }: { category: CategoryBox }) {
  return (
    <div className="rounded-lg border border-border/40 bg-card/30 p-4">
      <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider text-center mb-2">
        {category.label}
      </span>
      <div className="flex flex-wrap justify-center gap-1">
        {category.items.map((techName) => {
          const tech = getTechIcon(techName)
          if (!tech) return null
          return <TechItem key={techName} tech={tech} />
        })}
      </div>
    </div>
  )
}

export function TechPyramid({ className }: TechPyramidProps) {
  const leftCategories: CategoryBox[] = [
    { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { label: 'Backend', items: ['Node.js', 'Express'] },
    { label: 'Database/Tools', items: ['PostgreSQL', 'MySQL', 'Git'] },
  ]

  const rightCategories: CategoryBox[] = [
    { label: 'Languages', items: ['Python', 'TypeScript'] },
    { label: 'Deployment', items: ['Vercel', 'Docker', 'Flask'] },
    { label: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'OpenCV', 'ONNX'] },
  ]

  return (
    <div className={cn('space-y-6', className)}>
      <h3 className="text-center text-2xl font-bold sm:text-left">Tech Stack</h3>
      
      {/* Desktop: two columns side by side */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col gap-4">
          {leftCategories.map((category) => (
            <CategoryCard key={category.label} category={category} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {rightCategories.map((category) => (
            <CategoryCard key={category.label} category={category} />
          ))}
        </div>
      </div>

      {/* Mobile: interleaved single column */}
      <div className="flex flex-col gap-4 md:hidden">
        <CategoryCard category={leftCategories[0]} />
        <CategoryCard category={rightCategories[0]} />
        <CategoryCard category={leftCategories[1]} />
        <CategoryCard category={rightCategories[1]} />
        <CategoryCard category={leftCategories[2]} />
        <CategoryCard category={rightCategories[2]} />
      </div>
    </div>
  )
}
