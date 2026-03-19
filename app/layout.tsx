import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter_Tight } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['600'],
})

export const metadata: Metadata = {
  title: 'Portfolio - Developer & Designer',
  description: 'Showcasing my experiences, projects, and skills as a software developer',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
