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

  const toggleTheme = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return
    
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const newTheme = theme === 'light' ? 'dark' : 'light'
    const goingToDark = newTheme === 'dark'
    setIsAnimating(true)

    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      document.documentElement.style.setProperty('--transition-x', `${x}px`)
      document.documentElement.style.setProperty('--transition-y', `${y}px`)
      
      // Add direction class before transition starts
      document.documentElement.classList.add(goingToDark ? 'theme-transition-to-dark' : 'theme-transition-to-light')
      
      const transition = document.startViewTransition(() => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
      })

      await transition.finished
      
      // Clean up direction classes
      document.documentElement.classList.remove('theme-transition-to-dark', 'theme-transition-to-light')
      setIsAnimating(false)
    } else {
      // Fallback for browsers without View Transitions API
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      setIsAnimating(false)
    }
  }, [theme, isAnimating])

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
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
    </button>
  )
}
