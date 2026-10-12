'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState, useCallback, useRef } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isAnimating, setIsAnimating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const applyTheme = useCallback((newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }, [])

  const toggleTheme = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return

    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const newTheme = theme === 'light' ? 'dark' : 'light'
    const goingToDark = newTheme === 'dark'
    setIsAnimating(true)

    const cleanupTransitionClasses = () => {
      document.documentElement.classList.remove('theme-transition-to-dark', 'theme-transition-to-light')
    }

    try {
      if (document.startViewTransition) {
        document.documentElement.style.setProperty('--transition-x', `${x}px`)
        document.documentElement.style.setProperty('--transition-y', `${y}px`)
        document.documentElement.classList.add(
          goingToDark ? 'theme-transition-to-dark' : 'theme-transition-to-light'
        )

        const transition = document.startViewTransition(() => {
          applyTheme(newTheme)
        })

        await transition.finished.catch(() => undefined)
      } else {
        applyTheme(newTheme)
      }
    } finally {
      cleanupTransitionClasses()
      setIsAnimating(false)
    }
  }, [theme, isAnimating, applyTheme])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      disabled={isAnimating}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-md transition-colors hover:bg-muted disabled:cursor-not-allowed"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <Sun 
          className={`absolute inset-0 h-5 w-5 transition-[transform,opacity] duration-200 ease-out ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-95 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 h-5 w-5 transition-[transform,opacity] duration-200 ease-out ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-95 opacity-0'
          }`} 
        />
      </div>
    </button>
  )
}
