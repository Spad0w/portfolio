import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eugene-xue', icon: Linkedin, external: true },
  { label: 'GitHub', href: 'https://github.com/Spad0w/', icon: Github, external: true },
  { label: 'Email', href: 'mailto:eugenex2000@gmail.com', icon: Mail, external: false },
  { label: 'Resume', href: '/resume.pdf', icon: FileText, external: false },
]

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-xs grid-cols-2 gap-3 sm:mx-0 sm:max-w-none sm:grid-cols-4 sm:gap-2',
        className
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group fine-hover-scale flex h-11 w-full items-center justify-center gap-2 rounded-full border border-solid border-[rgba(15,23,41,0.2)] bg-card/30 px-3 py-2.5 text-sm font-medium text-muted-foreground transition-[transform,background-color,border-color,color] duration-200 ease-out hover:border-foreground/20 hover:bg-muted hover:text-foreground active:scale-[0.97] dark:border-[rgba(255,255,255,0.2)]"
        >
          <link.icon className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-110" />
          {link.label}
        </a>
      ))}
    </div>
  )
}
