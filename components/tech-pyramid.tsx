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
        'flex flex-col items-center gap-2 p-3 rounded-lg',
        'transition-all duration-300 ease-out',
        'hover:scale-110 hover:bg-surface-high',
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
      <span className="font-body text-xs text-tertiary group-hover:text-foreground transition-colors">
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
    <div className="h-full rounded-lg bg-surface-lowest p-4 shadow-ambient transition-all duration-300 hover:shadow-ambient-lg">
      <span className="label-sm block text-tertiary text-center mb-2">
        {category.label}
      </span>
      <div className="flex flex-wrap justify-center gap-1 content-start">
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
      <h3 className="heading-underline font-display text-2xl font-bold">Tech Stack</h3>
      
      {/* Desktop: two columns with matched row heights */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4">
        {leftCategories.map((leftCat, index) => {
          const rightCat = rightCategories[index]
          return (
            <div key={leftCat.label} className="contents">
              <CategoryCard category={leftCat} />
              <CategoryCard category={rightCat} />
            </div>
          )
        })}
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
