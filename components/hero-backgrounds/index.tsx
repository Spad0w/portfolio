'use client'

import { AuroraDrift } from './aurora-drift'
import { LatentFlow } from './latent-flow'
import { NeuralLattice } from './neural-lattice'
import { SignalGrid } from './signal-grid'

export type HeroBackgroundVariant =
  | 'none'
  | 'aurora-drift'
  | 'signal-grid'
  | 'neural-lattice'
  | 'latent-flow'

export const heroBackgroundVariants: {
  id: HeroBackgroundVariant
  name: string
  tagline: string
  /** What a recruiter subconsciously reads from it. */
  signals: string
  tradeoff: string
}[] = [
  {
    id: 'aurora-drift',
    name: 'Aurora Drift',
    tagline: 'Soft indigo light fields drifting behind the type.',
    signals: 'Taste and restraint. Design-led, safe in any context.',
    tradeoff: 'Least memorable — it flatters the layout rather than making a claim.',
  },
  {
    id: 'signal-grid',
    name: 'Signal Grid',
    tagline: 'A faint blueprint grid with a soft drifting spotlight.',
    signals: 'Systems thinking, infrastructure, full-stack engineering.',
    tradeoff: 'Grid lines soften the "no-line" rule, so they are kept very faint.',
  },
  {
    id: 'neural-lattice',
    name: 'Neural Lattice',
    tagline: 'Nodes that drift, link by proximity, and lean towards the cursor.',
    signals: 'Machine learning and AI work, plus interactivity on first contact.',
    tradeoff: 'The most familiar of the four — execution has to carry it.',
  },
  {
    id: 'latent-flow',
    name: 'Latent Flow',
    tagline: 'Particles tracing a slowly rotating vector field.',
    signals: 'Generative and computer-vision work. The hero draws itself.',
    tradeoff: 'The busiest; needs the lowest opacity to stay behind the copy.',
  },
]

export function HeroBackground({ variant }: { variant: HeroBackgroundVariant }) {
  switch (variant) {
    case 'aurora-drift':
      return <AuroraDrift />
    case 'signal-grid':
      return <SignalGrid />
    case 'neural-lattice':
      return <NeuralLattice />
    case 'latent-flow':
      return <LatentFlow />
    default:
      return null
  }
}
