---
name: Crafted Terminal
colors:
  surface: '#0d1322'
  surface-dim: '#0d1322'
  surface-bright: '#33394a'
  surface-container-lowest: '#080e1d'
  surface-container-low: '#151b2b'
  surface-container: '#191f2f'
  surface-container-high: '#242a3a'
  surface-container-highest: '#2f3445'
  on-surface: '#dde2f8'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dde2f8'
  inverse-on-surface: '#2a3040'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#0d1322'
  on-background: '#dde2f8'
  surface-variant: '#2f3445'
  surface-card: '#111827'
  text-primary: '#E5E7EB'
  text-muted: '#94A3B8'
  border-subtle: '#1E293B'
  border-muted: '#1F2937'
  glow-accent: rgba(59, 130, 246, 0.15)
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 52px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-section:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-section-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  title-card:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-default:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# Design System: Vy Le — Backend Developer Student Portfolio

## Brand Identity & Aesthetic Direction
- **Personality:** Humble, motivated, credible, modern technical, clean engineering craftsmanship. Authentic career transition from hospitality/SEO into backend engineering.
- **Visual Style:** Dark, spacious, technical aesthetic with restrained electric-blue accents. Clean borders, subtle dark surfaces, readable typography.
- **Strict Anti-patterns:** No gaming aesthetics, no crypto dashboards, no hacker clichés, no heavy neon, no excessive glassmorphism, no 3D particles or clutter.

## Color Palette
- **Background:** `#0B1120` (Deep dark slate/navy)
- **Card & Input Surfaces:** `#111827` (Dark surface container)
- **Primary Text:** `#E5E7EB` (High contrast readable light gray)
- **Secondary Text:** `#94A3B8` (Muted cool gray)
- **Accent Blue:** `#3B82F6` (Vibrant electric blue)
- **Stronger Blue:** `#2563EB` (Primary brand / active state)
- **Borders:** `#1E293B` / `#1F2937` (Subtle dark blue-gray divider/outline)
- **Glow / Highlight:** `rgba(59, 130, 246, 0.15)` (Faint electric blue, used sparingly)

## Typography
- **Primary Font Family:** `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Monospace Family (Terminal & Code Details Only):** `'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Scale:**
  - Display / Hero Title: 44px – 56px, bold, letter-spacing -0.02em
  - Section Headings (H1/H2): 28px – 36px, font-weight 700
  - Card Titles (H3): 18px – 20px, font-weight 600
  - Body Text: 15px – 16px, line-height 1.6, font-weight 400
  - Badges / Small Labels: 12px – 13px, font-weight 500, letter-spacing 0.05em, uppercase or title case

## Spacing & Layout Rhythm
- **Reference Width:** Desktop ~1440px (content container max-width: 1100px - 1200px), Mobile 390px
- **Vertical Spacing:** Generous whitespace rhythm (`py-16` to `py-24` on desktop, `py-10` on mobile)
- **Corner Radius:** Restrained rounded corners (`rounded-lg` / `rounded-xl`, 8px – 12px)
- **Elevation / Surfaces:** Solid card surfaces `#111827` with 1px border `#1E293B`, subtle hover lift (translateY -2px).

## Navigation & Chrome Architecture
- **Header:** Sticky translucent header (`bg-[#0B1120]/90 backdrop-blur-md border-b border-[#1E293B]`)
  - Left: "Vy Le" wordmark (bold, clean typography)
  - Navigation Links: Home, About Me, Education & Experience, My Skills, My Projects, My Goals, Contact
  - Right: Compact `EN / VI` language toggle pill (English selected by default)
  - Active state: Blue text (`#3B82F6`) with distinctive indicator/underline
  - Full keyboard focus rings (`focus:ring-2 focus:ring-blue-500`)
- **Footer:** Compact dark footer
  - Brand line: "Vy Le — Backend Developer Student"
  - Links: GitHub (`https://github.com/vy-long-le`), LinkedIn (`https://www.linkedin.com/in/vy-le-long-b9a3243a7/`), Email (`lelongvy13@gmail.com`)
  - Tagline: "Built while learning HTML, CSS & JavaScript."

## Key Constraints & Implementation Rules
- **Deliverable Structure:** 7 distinct pages (Home, About Me, Education & Experience, My Skills, My Projects, My Goals, Contact).
- **Hero Diagonal Feature:** CSS `mask-image` diagonal fade revealing a subtle dotted/grid texture behind Hero toward the terminal, with readable text outside the mask.
- **Honesty & Verbatim Content:** No invented achievements, completed projects marked "Planned Project", no fake metrics or mastery percentages.
- **Tech Stack Baseline:** Semantic HTML, plain CSS styling conventions, Flexbox/Grid, accessible and responsive.
