import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, external: true },
  { label: 'GitHub', href: 'https://github.com', icon: Github, external: true },
  { label: 'Email', href: 'mailto:your.email@example.com', icon: Mail, external: false },
  { label: 'Resume', href: '/resume.pdf', icon: FileText, external: false },
]

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 sm:justify-start ${className ?? ''}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group flex items-center justify-center gap-2 rounded-full border border-solid border-[rgba(15,23,41,0.2)] dark:border-[rgba(255,255,255,0.2)] bg-card/30 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-muted hover:text-foreground hover:scale-105"
        >
          <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          {link.label}
        </a>
      ))}
    </div>
  )
}
