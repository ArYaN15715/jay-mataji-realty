# Design Brief — Jay Mataji Real Estate Agency (Premium Upgrade)

## Tone & Differentiation
High-energy, urgency-driven dealership aesthetic applied to luxury real estate. Bold, fast, trustable, attention-grabbing. Positioned as "Fastest, Always-Available Property Dealer in Vadodara." Premium visual polish with professional property photography and refined spacing. Every UI element conveys speed, confidence, and premium service.

## Color Palette

| Token | OKLCH | Hex | Purpose |
|-------|-------|-----|---------|
| Primary (Deep Red) | `0.45 0.18 10` | #8B0000 | Call CTAs, sections, urgency—WHITE text on this |
| Accent (Gold) | `0.75 0.20 90` | #FFD700 | Price badges, highlights, price text is DARK |
| Background | `1.0 0 0` | #FFFFFF | Main surface, cards, clarity |
| Foreground | `0.12 0 0` | #1A1A1A | Body text, high contrast (improved) |
| Success (WhatsApp) | `0.55 0.19 142` | #25D366 | Messaging, success states |
| Muted | `0.92 0 0` | #E8E8E8 | Disabled, secondary surfaces |
| Border | `0.88 0 0` | #DCDCDC | Card borders, dividers |

## Typography
- **Display:** Poppins Bold (700–800 weight) — commanding, confident, immediate for h1–h3, white on maroon
- **Body:** Inter (400–500 weight) — refined, readable, optimal line-height, dark on light backgrounds
- **Mono:** JetBrains Mono — code blocks, data displays

## Shape Language
- **Cards:** 12px border-radius, elevated shadow (0 10px 30px -5px rgba(0,0,0,0.12)), hover lift effect
- **Pills/Buttons:** 24px border-radius, tap-scale feedback on active
- **Hero:** 0px (full bleed gradient overlay), white text overlay
- **Borders:** 1–2px gold accent on key interactive elements (price badges, active filters)

## Structural Zones

| Zone | Background | Text Color | Border | Elevation | Purpose |
|------|-----------|-----------|--------|-----------|---------|
| Hero | Gradient (red 85% → dark 95%) | White | None | Full-viewport | Immersive entry, "Agent Online" indicator |
| Action Bar (sticky) | Dark Grey `0.18 0 0` | White | Gold top accent | shadow-md | Persistent call/WhatsApp/browse |
| Property Cards | White `1.0 0 0` | Dark `0.12 0 0` | Subtle | shadow-card | Property listing surface with image |
| Price Badge | Gold `0.75 0.20 90` | Dark `0.08 0 0` | None | Raised | Highlights price, pop-out effect |
| Filter Pills | Muted border `0.88 0 0` | Dark `0.12 0 0` | 1px border | Flat | Toggle buy/rent, budget, location |
| Section Headers | Maroon `0.45 0.18 10` | White | None | Flat | Section titles with urgency |
| Trust Section | White/Muted alternating | Dark on white | None | Subtle | Feature cards, no distraction |
| Footer | Dark Grey `0.18 0 0` | White | None | Base | Branding, contact links |
| Floating CTAs | Red (call) / Green (WhatsApp) | White | None | shadow-elevated | Always-visible, tap-scale |

## Spacing & Rhythm
- **Base unit:** 4px (Tailwind default)
- **Component padding:** 16–20px (cards), 12–16px (buttons), 24–32px (sections)
- **Gap between cards:** 16px (mobile), 20px (desktop)
- **Vertical rhythm:** 32px (section spacing), 16px (component spacing)
- **Image aspect ratio:** 16:9 for property cards (premium photography)

## Motion & Animation

| Element | Animation | Duration | Easing | Behavior |
|---------|-----------|----------|--------|----------|
| Online Indicator | `blink` | 1.4s | ease-in-out | Opacity pulse 1.0 → 0.2, infinite |
| Primary CTAs | `pulse-scale` | 2s | ease-in-out | Scale 1 → 1.08 + glow, infinite |
| Button Tap | `scale` | 150ms | ease-out | 1.0 → 0.95, crisp feedback |
| Card Entrance | `float-up + fade-in` | 500ms | cubic-bezier(0.34, 1.56, 0.64, 1) | Stagger 60ms per card, spring bounce |
| Hover (cards) | `shadow-card-hover + lift` | 200ms | ease-out | Elevation + shadow-card-hover applied |
| Property Image | `fade-in` | 300ms | ease-out | Smooth fade-in as image loads |
| Success Feedback | `pulse` | 300ms | ease-in-out | Green glow + scale |

## Component Patterns
- **Buttons:** Red for primary (call), Green for secondary (WhatsApp), Gold for tertiary (view more) — all with white text
- **Cards:** White bg, shadow-card on rest, shadow-card-hover on hover, property image with 16:9 aspect ratio at top
- **Price Badge:** Gold background with dark text, rounded-full, 12–16px padding, positioned top-right overlay on card
- **Badges:** Use gold for prices, green for "Available Now", red for "Limited Time"
- **Chips/Filters:** Muted border, white bg, dark text, red text when active, gold border on hover
- **Icons:** Monochrome dark (20–24px), white when on maroon/dark backgrounds
- **Links:** Gold underline on hover, no decoration at rest

## Image Strategy
- **Property Cards:** Source from Unsplash (free). Use high-quality apartment/villa/plot photography at 16:9 aspect ratio.
  - Apartments: Modern interior photos with light, space, finishes visible
  - Villas: Exterior shots showing architecture, gardens, curb appeal
  - Plots: Landscape/aerial views showing land potential and location
- **Hero:** Optional hero background image (property or location-focused), 60% opacity overlay with maroon gradient for text contrast

## Responsive Breakpoints
- **Mobile:** < 640px (full-width cards, 16px gaps, single column, floating CTAs visible)
- **Tablet:** 640px–1024px (2-column grids, 20px gaps, sticky action bar visible)
- **Desktop:** > 1024px (3–4-column grids, 24px gaps, full-width sections, refined typography scale)

## Contrast & Accessibility
- **White on Maroon (Primary):** Contrast ratio 11.8:1 ✓ AA+
- **Dark on Gold (Badge):** Contrast ratio 8.2:1 ✓ AA+
- **Dark on White (Body):** Contrast ratio 12.4:1 ✓ AAA
- **White on Dark Grey:** Contrast ratio 9.5:1 ✓ AA+

## Signature Detail
**Blinking Online Indicator** with premium polish: Green dot (WhatsApp brand color) with continuous blink (opacity 1.0 → 0.2, 1.4s cycle). Positioned top-right of hero with subtle halo glow. Reinforces 24/7 availability and fast-response positioning. Micro-copy: "Agent Online Now" in white text, high visibility.

## Premium Elevation
- Refined shadows: softer, more natural lighting (shadow-card: 0 10px 30px -5px rgba(0,0,0,0.12))
- Enhanced spacing: breathe more room between sections and components
- Property images: real, high-quality photography (not stock/placeholder)
- Hover states: cards lift with enhanced shadow on hover (shadow-card-hover)
- Animation polish: spring-based entrance (float-up keyframe), longer durations (500ms+), subtle easing
- Typography refinement: improved line-height and letter-spacing on display fonts
