# Design System Specification

## 1. Overview & Creative North Star: "The Curated Gallery"

This design system is built upon the concept of **The Curated Gallery**. It rejects the generic, "template-driven" look of traditional portfolios in favor of a refined, professional experience. It balances the airy purity of a high-end art gallery with the authoritative, high-contrast structural elements found in luxury modern architecture.

The core philosophy is **Intentional Presence**. Every element exists with purpose, utilizing balanced white space and clear typographic scales to guide the eye. We maintain a structured grid while introducing tonal layers and a "floating" interface that feels grounded and precise.

---

## 2. Colors: Tonal Architecture

Our palette is a study in sophisticated neutrals, anchored by an absolute black and punctuated by a vibrant, electric surface tint.

### The Palette (Material Design Convention)
- **Primary / Tertiary:** `#4F46E5` / `#64748B`
- **Background / Surface:** `#faf8ff` (The Canvas)
- **Secondary:** `#0F172A` (The Structural Lead)
- **Surface Tiers:**
    - `surface_container_lowest`: `#ffffff`
    - `surface_container_low`: `#f2f3ff`
    - `surface_container`: `#eaedff`
    - `surface_container_high`: `#e2e7ff`
- **Accent:** `surface_tint: #4F46E5` (The Digital Soul)

### The "No-Line" Rule
Traditional borders are minimized. Structural separation is achieved through background shifts. For example, a project showcase in `surface_container_low` should sit directly against a `background` canvas. The change in tone is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. A `surface_container_lowest` card should be "nested" within a `surface_container_low` section. This creates depth through natural value shifts rather than artificial lines.

---

## 3. Typography: The Modern Professional Voice

We utilize a typographic pairing that balances technical precision with high readability. **Manrope** provides geometric clarity for headlines, while **Plus Jakarta Sans** offers a contemporary, friendly feel for body copy and metadata.

- **Display (lg/md):** `3.5rem` / `2.75rem`. (Manrope) Use these for hero statements. Maintain tight letter spacing (-0.02em) for a "locked-in" look.
- **Headline (lg/md/sm):** `2rem` down to `1.5rem`. (Manrope) Used to introduce major sections. 
- **Title (lg/md/sm):** `1.25rem` down to `1.0rem`. (Plus Jakarta Sans) For card headers and list items. 
- **Body (lg/md):** `1rem` / `0.875rem`. (Plus Jakarta Sans) Set with standard line-height (1.5) to ensure clarity in structured layouts.
- **Label:** `0.75rem`. (Plus Jakarta Sans) For metadata and overlines. Always uppercase with increased letter spacing (+0.05em) for a sophisticated aesthetic.

---

## 4. Elevation & Depth: Tonal Layering

Shadows and lines are secondary; tone is the architecture.

- **The Layering Principle:** Depth is achieved by stacking. A `surface_container_highest` element on a `surface` background creates an immediate, soft focal point.
- **Ambient Shadows:** Only use shadows for "floating" objects. Shadows must be:
    - Blur: `24px` to `32px`.
    - Opacity: `4%` to `6%`.
    - Color: A tinted version of `on_surface` to mimic natural light.
- **Interaction Depth:** On hover, instead of a shadow, slightly shift the surface tier (e.g., from `surface_container_low` to `surface_container`).

---

## 5. Components

### Buttons
- **Primary:** Background `#4F46E5`, Text `#ffffff`. Radius `1 (Subtle)`. No border.
- **Secondary:** Background `surface_container_high`, Text `on_surface`. 
- **Tertiary:** Text `primary` with a subtle hover state.

### Cards & Lists
- **The Divider Ban:** Horizontal lines are discouraged. Use consistent vertical spacing to separate list items.
- **Project Cards:** Use `surface_container_lowest` for the card body. Image assets should have a subtle corner radius. Type should be left-aligned with consistent margins.

### Input Fields
- **Styling:** Minimalist bottom-border only. 
- **States:** On focus, the bottom border transitions to `primary_color_hex`. Label moves above in `label-sm` style.

---

## 6. Do's and Don'ts

### Do
- **Embrace Symmetry:** Use balanced grids to maintain a sense of professional order.
- **Use "White Space" for Clarity:** Treat empty space as a tool for legibility and focus.
- **Layer Tones:** Use the difference between `surface` and `surface_container` to group related information.

### Don't
- **Don't use 1px black borders:** It breaks the refined gallery feel.
- **Don't crowd the content:** Maintain the "Normal" spacing scale to ensure the interface doesn't feel cluttered.
- **Don't use standard drop shadows:** Keep them expansive and tinted rather than tight and grey.