import React from "react"
import { Navigation } from './navigation'

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}
