# Hattim's World — Positioning & Style Settings

Use this as your cheat sheet when tweaking the layout.
Open index.html in VSCode, use CMD+F to find the property, change the value, save.
Live Server will refresh instantly.

---

## SCREEN 1 — Eggs / Tap Screen
No positioning tweaks needed — eggs are centred automatically.

**Egg size:**
Find: `.egg-wrap img`
Property: `width: clamp(100px, 13vw, 170px)`
→ Change the last number (170px) to make eggs bigger/smaller

**Egg wiggle speed:**
Find: `.egg-wrap:nth-child(1) img`
Property: `animation: wiggle 2.0s`
→ Change the seconds — smaller = faster wiggle

---

## SCREEN 2 — Intro / Logo Screen

**Whole composition up/down:**
Find: `.hero-stack`
Property: `margin-top: 14vh`
→ Bigger = lower on screen

**Hattim size:**
Find: `.hattim-intro-wrap`
Property: `width: 62%`
→ Bigger % = bigger Hattim

**Hattim up/down position:**
Find: `.hattim-intro-wrap`
Property: `bottom: 55%`
→ Smaller % = lower on screen

**START button up/down:**
Find: `#btnWrap`
Property: `margin-top: ...` (negative value pulls it up)
→ e.g. margin-top: -8vh moves it up independently

---

## SCREEN 3 — Story Video

**Video fit:**
Find: `#storyVideo`
Property: `object-fit: contain`
→ contain = full video visible | cover = fills screen but may crop

**Replay/Next buttons height from bottom:**
Find: `#video-btns`
Property: `bottom: 8vh`
→ Bigger = higher up the screen

**Replay/Next button size:**
Find: `.circle-btn .circle`
Property: `width: clamp(64px, 7vw, 88px)`
→ Change the last number (88px) to resize

---

## SCREEN 4 — Lesson One

**Lesson One word art size:**
Find: `.lesson-wordart`
Property: `width: min(58vw, 700px)`
→ Increase numbers to make it bigger

**Hattim size on lesson screen:**
Find: `.hattim-lesson-wrap`
Property: `width: min(26vw, 320px)`
→ Increase numbers to make Hattim bigger

**Gap between word art and Hattim:**
Find: `.hattim-lesson-wrap`
Property: `margin-top: -2vh`
→ More negative = closer to word art above

**"Hattim is Hungry" button position:**
Find: `#btnLesson`
Property: `margin-top: 2vh`
→ Bigger = lower on screen

**Hand hint position (points at button):**
Find: `#hand-hint`
Property: `transform: translateX(-50%) translateX(140px)`
→ Change 140px to move left/right relative to button centre

**Gameplay music volume:**
Find: `fadeIn(gameplayMusic, 0.35, 1500)`
→ Change 0.35 to adjust volume (0 = silent, 1 = full)

**Hand appears after X seconds:**
Find: `}, 12000);` inside the lesson block
→ Change 12000 (milliseconds) — 12000 = 12 seconds

---

## SHARED — Orange Buttons (all screens)

**Button size:**
Find: `.pill-btn`
Property: `padding: 16px 48px 16px 56px`
→ Increase padding to make button bigger

**Button font size:**
Find: `.pill-btn`
Property: `font-size: clamp(20px, 2.4vw, 32px)`
→ Change the last number (32px) to resize text

---

## COLOURS (design system tokens)
Find: `:root` at the top of the CSS

--blue-300: #45C3F5    → intro background light blue
--blue-500: #0A7DB5    → intro background dark blue
--orange-400: #F7941D  → button colour
--orange-300: #F9A94C  → button hover colour
