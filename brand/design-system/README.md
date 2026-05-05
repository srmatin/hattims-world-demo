# Hattim's World — Design System

## Overview

**Hattim's World** is a children's educational web application (and likely tablet app) built around a friendly teal monster mascot named Hattim. The product is aimed at young children (ages ~2–6) with parents/guardians setting up learner profiles. The core experience is structured as sequential lessons containing:

- **Movie Time** — animated story segments starring Hattim
- **Lesson screens** — interactive vocabulary/concept exercises
- **Game Time** — drag-and-drop or tap-choice activities reinforcing lesson content

### Sources Provided
- `uploads/intro screen with logo.png` — splash/intro screen with full logo
- `uploads/Hattim design system references.002–012.png` — exported Keynote slides covering the full web app flow

No Figma link or codebase was provided. Design system is derived entirely from the reference screenshots.

---

## Products

| Product | Description |
|---|---|
| **Web App** | Browser-based (seen in Windows chrome), tablet-optimized layout, 1024×768 approx viewport |
| **Splash/Intro** | Full-screen branded intro screen shown on app launch |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Warm, playful, encouraging** — Hattim is the child's companion and friend
- Language is simple and direct, targeted at young children and their parents
- Uses **YOU** perspective when talking to the parent ("Create your child's learner profile")
- Uses **third person** for Hattim ("Hattim is hungry", "Now who would like to be Hattim's friend?")
- **ALL CAPS** for section/module titles and CTA buttons — game-like energy
- Sentence case for body/descriptor text

### Casing Rules
- **Display titles** (LESSON ONE, MOVIE TIME, GAME TIME): ALL CAPS, bold/display font with heavy outlines
- **CTA Buttons** (NEXT, LET'S PLAY): ALL CAPS, letter-spaced
- **Body text**: Sentence case, white, clean
- **Microcopy** (email disclaimer): Sentence case, small, white/muted

### Emoji
- **Not used** in UI text — illustrations and character art serve that role entirely

### Examples
- "NOW WHO WOULD LIKE TO BE HATTIM'S FRIEND?"
- "Create your child's learner profile for a more personalized experience."
- "Your email will only be used for log in and communicating update about the app"
- "HATTIM IS HUNGRY"

---

## VISUAL FOUNDATIONS

### Colors

**Primary Palette**
- Sky Blue (primary background): `#29ABE2` → radial gradient to `#0E86C8`
- Orange (CTA, accents, progress): `#F7941D`
- Yellow/Gold (display titles, stars): `#F9C923`
- Green (logo "WORLD", correct state): `#7BC044`
- Purple (Movie Time header): `#7B4FAF`
- Red (wrong answer state): `#E8392A`

**Surface Colors**
- Content area / video frame: `#C8EEF5` (pale sky blue)
- Game Time background: `#FFFDE0` (warm cream/yellow)
- Activity background: `#E8C9A0` (wood/tan texture)
- White: `#FFFFFF` (cards, inputs)

**State Colors**
- Answer card default: white bg + orange border
- Answer card hover/active: white bg + orange border + hand cursor
- Answer card correct: sage green bg (`#8CB84A`) 
- Answer card wrong: white bg + red border (`#E8392A`)
- Answer card unselected (after reveal): plain white, no border

### Typography

**Display Font:** Quicksand (brand-supplied variable font) — used for ALL type: display titles, section headers, body, buttons, and microcopy. Bold weight (700) with letter-spacing for display use; lighter weights for body.

> ✅ **Brand font confirmed:** `fonts/Quicksand-VariableFont_wght.ttf` supplied by client. No Google Fonts substitution needed — Fredoka has been removed.

**Type Scale**
| Role | Font | Size | Weight | Case |
|---|---|---|---|---|
| Display / Module Title | Fredoka | 72–96px | 700 | UPPER |
| Section Heading | Fredoka | 40–56px | 600 | UPPER |
| Screen Heading | Quicksand | 28–36px | 700 | UPPER, letter-spaced |
| Body | Quicksand | 18–22px | 500 | Sentence |
| Button | Quicksand | 18–20px | 700 | UPPER, 2px letter-spacing |
| Microcopy | Quicksand | 13–14px | 400 | Sentence |

### Backgrounds
- **Blue radial gradient** — main onboarding + lesson screens. Center lighter (`#45C3F5`), edges darker (`#0A7DB5`). Full-bleed, no pattern.
- **Sky + clouds** — content/video frame area. Pale blue with large soft cloud silhouettes rendered in slightly lighter teal-white.
- **Rainbow wave stripe** — decorative bottom band on movie/lesson screens. Stacked arcs: blue → purple → pink → yellow → orange → red (left to right, bottom up).
- **Warm cream** — Game Time screens. Flat `#FFFDE0`.
- **Wood grain** — activity/puzzle surfaces. Tan with subtle grain lines.

### Borders & Corner Radii
- CTA Buttons: fully pill-shaped (`border-radius: 50px`), no border
- Answer/choice cards: `border-radius: 16px`, `border: 4px solid #F7941D` (default), changes on state
- Input fields: `border-radius: 50px`, no visible border (white fill on blue bg)
- Circular icon buttons (replay, skip): `border-radius: 50%`, orange fill

### Shadows & Elevation
- Buttons: subtle `box-shadow: 0 4px 0 rgba(0,0,0,0.25)` (bottom push shadow for 3D feel)
- Display text titles: heavy text-shadow (multiple layers, bottom-right offset, gives cartoon "extrusion" look)
- Cards: light `box-shadow: 0 4px 12px rgba(0,0,0,0.15)`
- No blurs or frosted glass

### Animation & Interaction
- Hattim character is shown in different expressive poses per state (idle, hungry, waving, thumbs-up)
- Progress bar: orange fill, character avatar as knob/thumb
- Tap/click on answer cards: card border changes color immediately (no transition delay) for fast child feedback
- Assume simple opacity transitions (0.15s) for page transitions; no complex motion systems observed

### Hover & Press States
- Buttons: slightly darker orange on hover; `scale(0.97)` press state (implied by 3D shadow)
- Cards: no hover state visible — designed for touch/tap primarily

### Imagery & Illustrations
- **Style:** Flat vector, thick black outlines, bright saturated colors, expressive kawaii faces on food items
- **Characters:** Hattim (teal monster), children characters for movie sequences, cute food characters
- **Color vibe:** Warm, saturated, no grain, no photo-realism
- All illustrations are PNG assets with transparency

---

## ICONOGRAPHY

### Approach
Hattim's World uses **custom circular icon buttons** rather than an icon library. Key icons observed:
- 🔄 **Replay** — circular orange button with headphone/replay icon (white)
- ⏭ **Skip/Next** — circular orange button with skip-forward arrow (white)
- ▶️ **Play** — circular orange button with play triangle (embedded in CTA button)
- ⭐ **Stars** — gold star rating icons for Game Time scoring (3-star system)
- ❓ **Question mark** — orange outlined question mark for mystery/unknown items

No external icon font or CDN icon set is used. Icons are custom SVG/PNG.

### Assets Available
See `assets/` folder for extracted logo and character images.

---

## Files Index

```
README.md                        ← This file
SKILL.md                         ← Agent skill definition
colors_and_type.css              ← CSS custom properties: colors, type, spacing
assets/
  logo-full.png                  ← Full logo (Hattim's World with character)
  logo-text.png                  ← Text-only logo treatment
  hattim-character.png           ← Hattim character isolated
preview/
  colors-primary.html            ← Primary color swatches
  colors-surfaces.html           ← Surface & state colors
  colors-semantic.html           ← Semantic color tokens
  type-display.html              ← Display type specimens
  type-ui.html                   ← UI / body type specimens
  spacing-tokens.html            ← Spacing & radius tokens
  shadows.html                   ← Shadow & elevation system
  btn-primary.html               ← Primary CTA buttons
  btn-icon.html                  ← Icon buttons
  form-input.html                ← Input fields
  cards-answer.html              ← Answer/choice card states
  progress-bar.html              ← Progress bar component
  logo-brand.html                ← Logo & brand assets
ui_kits/
  web_app/
    README.md
    index.html                   ← Interactive web app prototype
    Components.jsx               ← Core UI components
    Screens.jsx                  ← Screen-level compositions
```
