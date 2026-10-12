# Changelog

All notable changes to this project are documented here using semantic versioning.

## [Unreleased]

### Added
- _TBD_

### Changedß
- _TBD_

### Fixed
- _TBD_

### Removed
- _TBD_

---

## [0.2.0] - 2026-04-06

### Added
- Introduced formal version logging in `CHANGELOG.md`.
- Added design-system utility classes in `app/globals.css`:
  - `heading-underline`
  - `label-sm`
- Added typography tokens in `tailwind.config.ts`:
  - `fontFamily.display` (Manrope)
  - `fontFamily.body` (Plus Jakarta Sans)
  - `letterSpacing.display`
  - `letterSpacing.label`
- Added tonal surface tokens in `tailwind.config.ts`:
  - `surface.lowest`, `surface.low`, `surface`, `surface.high`
- Added ambient elevation tokens in `tailwind.config.ts`:
  - `shadow-ambient`
  - `shadow-ambient-lg`

### Changed
- Updated global font setup in `app/layout.tsx`:
  - Replaced prior setup with `Manrope` + `Plus_Jakarta_Sans`
  - Applied `font-body` globally on `<body>`
- Updated root color architecture in `app/globals.css` to match `AGENTS.md`:
  - Primary accent: `#4F46E5`
  - Tertiary tone: `#64748B`
  - Canvas background: `#faf8ff`
  - Multi-tier surface layering
- Updated major section headings to design-system style:
  - Centered heading + underline treatment
  - Display typography usage
- Updated section backgrounds in `app/page.tsx` to tonal alternation (instead of visual border dependence).
- Updated education cards in `app/page.tsx`:
  - Migrated from bordered cards to tonal layered surfaces
  - Reworked metadata pills to label-style treatment
- Updated experience timeline in `app/experience/page.tsx`:
  - Timeline colors aligned to primary/surface tokens
  - Cards moved to tonal layered styling
  - Tech pills switched to tonal tags
- Updated `components/tech-pyramid.tsx`:
  - Category cards moved to tonal layered blocks
  - Heading updated to design-system style
  - Hover states shifted to surface tiers
- Updated `components/project-card.tsx`:
  - Replaced border-driven look with tonal surfaces + ambient shadows
  - Hover behavior moved to surface-tier transitions
  - Overlay/action styling aligned to system surfaces

### Removed
- Removed obsolete font initializations from `app/layout.tsx` (`Geist`, `Geist Mono`, `Inter Tight` pattern).
- Removed unused imports replaced by the new design-system implementation.
- Reduced 1px border dependence for section and card separation.

### Notes
- This release implements the **"Curated Gallery"** direction from `AGENTS.md`:
  - Intentional whitespace
  - Tonal architecture over hard lines
  - Modern type pairing
  - Soft, tinted ambient elevation
