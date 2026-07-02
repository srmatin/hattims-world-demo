# Session Log — 2026-06-28
## Screens 4–6 build-out (Friends flow + placeholder)

---

## What was built this session

### Screen 4 — Lesson One (refinements)
- Replaced hand hint SVG with cleaner Icon Park outline tap icon
- Hand hint positioned closer to pill button: `bottom: calc(8vh + 0px)`
- Pill button label: "HATTIM WANTS TO MEET YOU →"
- **z-index fixed to 10** (was 7, caused video to bleed through during crossfade — this was the intermittent "goes back to video" bug)

### Screen 3 — Video (refinements)
- Added Skip button (top-right, appears on play, disappears on end)
- Skip calls `goToLesson1()` which transitions directly to Lesson One

### Screen 5 — Friends with Hattim?
- Background: `gameplay_background_center.png`
- z-index: 11
- Text: "Do you wanna be friends with Hattim?" — white, Fredoka, `position: absolute; top: 12%`
- Hattim idle animation (`anim-idle.webm`) centred, size `min(74.4vw, 768px)`
- Thumbs-up orange circle button (`#btnFriends`, 70px) — pulsing, `position: absolute; bottom: 14%`
- On thumbs-up click:
  - Question fades out, button fades out
  - Hattim switches to `anim-thumbsup.webm` (plays once)
  - After thumbsup ends: "Let's teach Hattim his name" fades in at same position as question
  - Orange play button (`#btnPlay`, 70px) fades in at same position as thumbs-up
- **pointer-events fix**: `.circle-pulse-btn` has `pointer-events: none` by default, `all` only when `.visible` (prevents invisible `#btnPlay` from blocking `#btnFriends` clicks)

### Screen 6 — Sentence placeholder (WiP)
- Background: `lesson1-sentence-wip.png` ← **user must place this file in `demo/assets/`**
- z-index: 12
- "Placeholder WiP" chip top-right — clicking reloads the app (`location.reload()`)
- Triggered by clicking `#btnPlay` on Screen 5

---

## Current screen flow
```
Tap → Main → Video (skip or watch) → Lesson One → Friends → [thumbsup] → Play → Sentence WiP
                                                                                      ↓
                                                                              [Placeholder WiP] → reload
```

---

## Key files
- **Demo**: `demo/assets/index.html` — single file, all screens
- **Assets used**: `anim-idle.webm`, `anim-thumbsup.webm`, `gameplay_background_center.png`, `lesson1-sentence-wip.png`
- **Brand**: `brand/design-system/` — do not change

---

## Z-index map (screens)
| Screen | ID | z-index |
|---|---|---|
| Tap | `#screen-tap` | 10 |
| Main | `#screen-main` | 8 |
| Video | `#screen-video` | 9 |
| Lesson One | `#screen-lesson1` | 10 |
| Friends | `#screen-friends` | 11 |
| Sentence WiP | `#screen-sentence` | 12 |

---

## Bugs fixed this session
1. Hand hint SVG ugly → replaced with Icon Park outline tap icon
2. Pill button going to video → two causes: (a) `#screen-friends` had no z-index (fixed to 11), (b) duplicate `{ once: true }` listeners (fixed to single permanent handler), (c) `#screen-lesson1` z-index 7 < video z-index 9 causing bleed-through (fixed to 10)
3. Hattim idle animation not showing on Friends screen → `hattimIdleWrap.classList.add('visible')` was missing
4. Thumbs-up button unclickable → invisible `#btnPlay` (stacked on same position) was intercepting clicks — fixed with `pointer-events: none` on `.circle-pulse-btn` default state

---

## What's next (not yet designed/built)
- Screen 6 real interactive version: three word cards (আমার / নাম / হাটটিম), tap-to-reveal mechanic
- Audio: word pronunciation on card tap
- Progress indicator / lesson completion state
- The `my_4k`, `Name_is`, `Hattim_name` character poses need to be used in real cards
