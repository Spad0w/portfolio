'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  videoUrl?: string
}

function isVideoFile(url: string): boolean {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov']
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext))
}

function isGifFile(url: string): boolean {
  return url.toLowerCase().endsWith('.gif')
}

export function ProjectCard({
  title,
  description,
  longDescription,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  videoUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const mediaUrl = videoUrl || imageUrl
  const isVideo = mediaUrl && isVideoFile(mediaUrl)
  const isGif = mediaUrl && isGifFile(mediaUrl)

  const renderMedia = () => {
    if (!mediaUrl) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
          <div className="text-center space-y-2 p-6">
            <div className="text-4xl font-bold text-muted-foreground/20">
              {title.charAt(0)}
            </div>
            <p className="text-xs text-muted-foreground/60">Project Preview</p>
          </div>
        </div>
      )
    }

    if (isVideo) {
      return (
        <video
          src={mediaUrl}
          muted
          loop
          playsInline
          autoPlay
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )
    }

    return (
      <img
        src={mediaUrl}
        alt={title}
        className={cn(
          "h-full w-full object-cover transition-transform duration-500",
          !isGif && "group-hover:scale-110"
        )}
      />
    )
  }

  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-surface-lowest shadow-ambient transition-all duration-500 hover:shadow-ambient-lg hover:bg-surface-low"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Section */}
      <div className="relative h-48 overflow-hidden bg-surface">
        {renderMedia()}
        
        {/* Overlay on hover */}
        <div
          className={cn(
            'absolute inset-0 bg-secondary/90 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-3',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-lowest text-foreground transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-lowest text-foreground transition-transform hover:scale-110"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="h-[4.75rem] space-y-2 overflow-hidden">
          <h3
            className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </h3>
          <p
            className="font-body text-sm text-tertiary"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>
        </div>

        <p
          className="font-body h-[4.5rem] overflow-hidden text-sm leading-relaxed text-muted-foreground"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {longDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="font-body text-xs bg-surface-high text-tertiary px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
