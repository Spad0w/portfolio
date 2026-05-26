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
      {/* Logo — top left, desktop only */}
      <a
        href="#home"
        onClick={(e) => handleClick(e, '#home')}
        className="fixed left-6 top-6 z-50 hidden h-[62px] items-center gap-2.5 transition-opacity hover:opacity-70 lg:inline-flex"
      >
        <svg
          viewBox="0 0 29 4"
          width="29"
          height="4"
          aria-hidden="true"
          className="shrink-0"
        >
          <path d="M 1 2 L 28 2" fill="transparent" stroke="currentColor" strokeMiterlimit="10" />
        </svg>
        <span
          className="text-sm font-semibold uppercase text-foreground"
          style={{
            fontFamily: 'var(--font-inter-tight), sans-serif',
            fontSize: '14px',
            lineHeight: '125%',
          }}
        >
          Eugene Xue
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav fixed left-1/2 top-6 z-50 -translate-x-1/2">
        <div className="flex items-center justify-start gap-2 rounded-full border border-border bg-background/80 px-6 py-3 shadow-lg backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeSection === item.href.slice(1)
                  ? 'bg-foreground text-background'
                  : 'text-foreground/60 hover:bg-muted hover:text-foreground'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile-nav fixed left-4 top-6 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-background/80 shadow-lg backdrop-blur-md"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute left-0 top-16 flex flex-col gap-1 rounded-2xl border border-border/40 bg-background/95 p-2 shadow-lg backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  'rounded-xl px-4 py-2 text-sm font-medium transition-all whitespace-nowrap',
                  activeSection === item.href.slice(1)
                    ? 'bg-foreground text-background'
                    : 'text-foreground/60 hover:bg-muted hover:text-foreground'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <ThemeToggle />
        <a
          href="/resume.pdf"
          download
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 shadow-lg backdrop-blur-md transition-colors hover:bg-muted"
          aria-label="Download Resume"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </>
  )
}
