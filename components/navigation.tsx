'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // Use a narrow activation band near the top of the viewport so
        // tall sections can still become active while scrolling.
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const scrollable = scrollHeight - clientHeight
      setScrolled(scrollTop > 8)
      if (scrollable <= 0) {
        setScrollProgress(0)
        return
      }
      setScrollProgress(Math.min(scrollTop / scrollable, 1))
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setActiveSection(href.slice(1))
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div
          className="h-full w-full origin-left bg-primary transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <header
        className={cn(
          'nav-glass fixed inset-x-0 top-0 z-50 transition-[background-color] duration-300 ease-out',
          'bg-background/70 supports-[backdrop-filter]:bg-background/40',
          scrolled || mobileMenuOpen
            ? 'bg-background/85 supports-[backdrop-filter]:bg-background/55'
            : ''
        )}
      >
        {/* Soft fade so glass dissolves into page content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-full h-10 bg-gradient-to-b from-background/35 to-transparent supports-[backdrop-filter]:from-background/20"
        />

        <div className="relative mx-auto max-w-[65.5rem] px-4 py-3 sm:px-6">
          <nav
            className={cn(
              'overflow-hidden rounded-2xl transition-[box-shadow,background-color] duration-300 ease-out',
              // Pill above frost: white paper in light; darker nest in dark for contrast
              'bg-surface-lowest shadow-ambient-lg ring-1 ring-foreground/[0.06]',
              'dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] dark:ring-white/14'
            )}
            aria-label="Primary"
          >
            <div className="flex h-12 items-center justify-between gap-3 px-3.5 sm:h-14 sm:px-5">
              <a
                href="#home"
                onClick={(e) => handleClick(e, '#home')}
                className="inline-flex shrink-0 items-center gap-2.5 transition-opacity duration-150 hover:opacity-70"
              >
                <svg
                  viewBox="0 0 29 4"
                  width="29"
                  height="4"
                  aria-hidden="true"
                  className="hidden shrink-0 sm:block"
                >
                  <path d="M 1 2 L 28 2" fill="transparent" stroke="currentColor" strokeMiterlimit="10" />
                </svg>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.05em] text-foreground">
                  Eugene Xue
                </span>
              </a>

              <div className="ml-auto hidden items-center justify-end gap-1 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={cn(
                      'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 ease-out active:scale-[0.97]',
                      activeSection === item.href.slice(1)
                        ? 'bg-foreground text-background'
                        : 'text-foreground/60 hover:bg-surface-low hover:text-foreground dark:hover:bg-surface'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-surface-low text-foreground transition-colors duration-150 hover:bg-surface dark:bg-surface dark:hover:bg-surface-high md:hidden"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <div
              id="mobile-nav-menu"
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out md:hidden',
                mobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 bg-surface-low/60 px-3 py-3 dark:bg-surface/50">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={cn(
                        'rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150 ease-out active:scale-[0.97]',
                        activeSection === item.href.slice(1)
                          ? 'bg-foreground text-background'
                          : 'text-foreground/70 hover:bg-surface-lowest hover:text-foreground dark:hover:bg-surface-high'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-background/20 backdrop-blur-[2px] md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <ThemeToggle />
        <a
          href="/resume.pdf"
          download
          className="flex h-10 w-10 items-center justify-center rounded-full bg-background/70 shadow-ambient-lg backdrop-blur-md transition-colors hover:bg-surface-low supports-[backdrop-filter]:bg-background/55 dark:bg-surface-low/80 dark:hover:bg-surface"
          aria-label="Download Resume"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </>
  )
}
