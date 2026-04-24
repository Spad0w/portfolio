import React from "react"
import type { Metadata } from 'next'
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Eugene | Software Developer & Designer',
  description: 'Showcasing my experiences, projects, and skills as a software developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${plusJakarta.variable} font-body antialiased`}>{children}</body>
    </html>
  )
}
