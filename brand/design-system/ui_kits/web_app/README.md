# Hattim's World — Web App UI Kit

## Overview
High-fidelity click-through prototype of the Hattim's World web application. Covers the full onboarding + lesson flow across 8 screens.

## Screens
| # | Screen | Description |
|---|--------|-------------|
| 1 | Splash | Intro/logo screen |
| 2 | Login | Email entry |
| 3 | Profile | Child learner profile prompt |
| 4 | Movie Time | Animated story segment |
| 5 | Lesson Intro | Lesson number + title reveal |
| 6 | Quiz | 4-choice answer cards (interactive) |
| 7 | Game Time | Game section intro with star rating |
| 8 | Activity | Drag/tap food item to plate |

## Navigation
- **Click through screens** using the on-screen arrow buttons or the dot nav at the bottom
- **Keyboard**: ← → arrow keys to move between screens
- Position is persisted in localStorage on refresh

## Files
- `index.html` — main interactive prototype
- `Components.jsx` — all base UI components (buttons, cards, inputs, backgrounds, Hattim character)
- `Screens.jsx` — screen-level compositions using components

## Design Width
1024 × 768px (tablet-optimised)

## Font Note
Uses `Quicksand` variable font from `../../fonts/Quicksand-VariableFont_wght.ttf` (brand-supplied).
Uses `Fredoka` for display titles (Google Fonts CDN — no brand file supplied).
