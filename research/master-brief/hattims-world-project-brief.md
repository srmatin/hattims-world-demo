# Hattim's World — Master Project Brief

> **Last Updated:** May 2026  
> **Status:** Active Development — Lesson 1 in Design Phase  
> **Live URL:** `guileless-bienenstitch-bec2d5.netlify.app`

---

## 1. Project Overview

**Hattim's World** is an interactive Bangla language learning web app for children of the Bengali diaspora — kids who are English-primary speakers but want (or need) to connect with Bangla-speaking family members (parents, grandparents, relatives back home).

The project has roots in prior product work (~7 years ago), including formal user research and validated problem discovery. It's now being rebuilt as a solo project, made feasible by AI-era tools.

### The Core Insight
These kids aren't learning Bangla in a classroom. They're learning it so they can *talk to Nanu*. The emotional driver is family connection, not academic achievement. The product must feel like play, not school.

---

## 2. Target Audience

### Primary User: The Child
- Age range: ~5–9 years old
- English-dominant speaker
- Bengali diaspora background (Australia, UK, US, Canada etc.)
- Limited or zero Bangla literacy
- Likely has access to a tablet or desktop

### Secondary User: The Parent
- The buyer/decision-maker
- Motivated by preserving cultural connection for their child
- Frustrated that existing tools (Duolingo etc.) are too adult, too academic, not emotionally engaging
- The crowdfunding target — needs to be sold on the *vision* fast

---

## 3. The Core Game Concept

### Central Mechanic: The Child Is the Teacher
**The child teaches Hattim — not the other way around.**

Hattim hatches from an egg knowing absolutely nothing. The child's job is to teach him words, phrases, and eventually conversations. This flips the traditional "app teaches child" dynamic and creates:
- Agency and ownership for the child
- Emotional investment ("my Hattim")
- Intrinsic motivation to keep teaching him more

This is the **primary differentiator** and the emotional hook of the entire product.

### The Hatching Intro
The app opens with an egg. The child taps it repeatedly. Hattim hatches, wide-eyed and clueless. The story begins.

---

## 4. Character: Hattim

### Visual Design
- Chubby, friendly teal 2D cartoon monster
- Orange horns and orange spots on arms
- Clean light teal belly patch
- Cel-shaded art style — bold outlines, flat fills
- Designed for kids: round, soft, non-threatening

### Personality
- Curious, enthusiastic, a little silly
- Genuinely doesn't know anything — the child's reactions guide him
- Celebrates wins (ThumbsUp, Excited) and gets sad/confused when lost (CheerUp)

### Existing Animation Assets (WebM/VP9)
| Animation | Status |
|---|---|
| Idle | ✅ Done |
| Wave | ✅ Done |
| Pointing | ✅ Done |
| Excited | ✅ Done |
| CheerUp | ✅ Done |
| ThumbsUp | ✅ Done |
| Eating | ✅ Done |
| No (head shake) | ⚠️ Gap — one Viggle AI attempt pending |

### Animation Pipeline (Scalable)
- Original assets from a commissioned designer (WebM format)
- New animations being generated via **Viggle AI** (Video Generation mode, Seedance 2.0)
- Reference PNG of Hattim used as anchor — *not* Mix mode (distorts non-human proportions)
- Goal: demonstrate to investors that new animations don't require re-engaging the original designer

---

## 5. Curriculum Design

### Guiding Principle
Rich custom animation is reserved for **story moments** (hatching, hungry reveal, win states). Word learning uses **reusable templates** (tap-to-match, flashcards, word cards) that scale to hundreds of words without custom animation per word.

### Content Scope (Current Focus)
**Lesson 1: Names**
- Teaching phrase: *"Amar naam Hattim"* (My name is Hattim)
- Teaching phrase: *"Tomar naam ki?"* (What is your name?)
- Child is prompted **word by word**
- Hattim responds via gesture animations + word cards
- Name capture: Web Speech API (extracts what follows "naam") with type-in fallback
- Ends with a **credit moment**: child taps Hattim → ThumbsUp celebration

**Parked for Later**
- Food module: Kola, Dudh, Dim, Ruti (banana, milk, egg, bread)
- World 2 friend character (design status unknown)

### Lesson Architecture Pattern
```
Intro card → Word-by-word prompts → Hattim response (animation + card) 
→ Child repeats → Confirmation → Credit moment → Next lesson teaser
```

---

## 6. AI Integration Tiers

| Tier | Technology | Purpose | Status |
|---|---|---|---|
| 1 | Web Speech API + ElevenLabs | Voice input + Bangla audio output | Planned |
| 1 | ElevenLabs | Bangla phrase audio | Not yet recorded |
| 2 | OpenAI Whisper | Improved speech recognition fallback | Planned |
| 3 | Claude API | Conversational Hattim ("wow factor") | Partially scriptable for demo |

Tier 3 is the investor "wow" feature — even if partially scripted initially, it demonstrates the vision of a genuinely responsive Hattim.

---

## 7. What's Been Built

### App Screens (HTML/CSS/JS — Single File)
1. **Egg tap intro** — child taps egg repeatedly, it cracks and hatches
2. **Logo reveal** — Hattim's World branding moment
3. **Story video** — narrative context screen
4. **Lesson One intro card** — sets up the first lesson

### Tech Stack
- Plain HTML / CSS / JS — no frameworks
- Hosted on **Netlify** (drag-and-drop deploy)
- Single growing HTML file — new screens appended, old screens never touched
- VSCode + Live Server for local dev

### Dev Rules (Critical)
- **Never overwrite existing CSS blocks** — only add new rules
- **Never touch earlier positioned elements** when adding new screens
- Design-first in Keynote → export PNG → Claude builds one screen at a time from the PNG

---

## 8. Art Direction & UI

### Visual Style
- Bright, saturated, child-friendly palette
- Hattim character centred and prominent
- Word cards: clean, large typography, high contrast
- Cel-shaded illustration style throughout

### Animation Approach
- CSS motion animations **rejected** — too cheap-looking for this character
- Preference: static character image with subtle pulse over whole-body CSS wobble
- WebM assets play for specific emotional responses only

### Layout Principle
- Designed desktop-first for demo
- "Best viewed on desktop" message planned — no mobile rebuild pre-launch

---

## 9. Build Workflow

```
1. Sajid designs screen in Keynote
2. Export as PNG
3. Hand PNG to Claude (one screen at a time)
4. Claude builds that screen into the existing HTML file
5. Sajid tests in VSCode + Live Server
6. Sajid tweaks CSS values directly and confirms back
7. Repeat for next screen
```

---

## 10. Strategic Context

### What This Is Right Now
A **crowdfunding demo** — a pitch tool dressed as a game. Not a finished product. Quality and emotional impact matter more than feature completeness.

**One polished module beats two rushed ones.**

### Who We're Pitching To
Parents — diaspora families who feel the pain of cultural disconnection. The demo needs to make a parent *feel* the product before they read a word.

### Secondary Pitch Signal
The Viggle AI animation pipeline demonstrates to investors that the product is **scalable without a dedicated animator** on retainer.

---

## 11. Open Questions & Parked Decisions

| Topic | Status | Notes |
|---|---|---|
| "No" animation (head shake) | ⚠️ One Viggle attempt pending | Park animation work after this attempt |
| Button 3 design (before child's name is known) | 🔲 Open | The "?" placeholder design |
| Friend invite mechanic | 🔲 Open | Mic or tap? |
| Bangla audio recording | 🔲 Not done | Needed before full lesson demo |
| World 2 friend character | 🔲 Parked | Design status unknown |
| Flinto prototype files | 🔲 Unexplored | From original product dev — may contain design history |
| Mobile layout | 🔲 Parked | Post-launch priority |

---

## 12. Lesson Design Reference (for Claude Code)

When designing new lesson screens, follow these rules:

### Constraints
- One concept per screen — never overload
- Bangla words always displayed in **both Bangla script and romanised form**
- Child's name must be captured and used personally in prompts (e.g. "Great job, Aisha!")
- Every lesson must end with a **celebration moment** before transitioning
- Hattim must always react — silence/stillness is never the right answer

### Reusable Components
- **Word card**: Bangla word (large) / romanised (smaller) / English translation (smallest)
- **Tap-to-confirm**: Child taps Hattim to signal they've taught him something
- **Repeat prompt**: Mic icon + instruction to say the word aloud
- **Celebration screen**: Hattim plays ThumbsUp or Excited animation + confetti or stars

### Voice Input Pattern
```
1. Show word/phrase to child
2. Prompt: "Can you teach Hattim how to say this?"
3. Web Speech API listens
4. On recognition → Hattim reacts with matching animation
5. Fallback: tap-to-confirm if speech fails
```

### Lesson Structure Template
```markdown
## Lesson [N]: [Topic]

**Learning Goal:** [What the child can say/do by the end]
**Key Phrases:** 
- [Bangla script] — [Romanised] — [English]

**Screen Flow:**
1. Intro card — Hattim looks curious/confused
2. [Word/phrase 1] — prompt → child repeats → Hattim reacts
3. [Word/phrase 2] — prompt → child repeats → Hattim reacts
4. Credit moment — child taps Hattim → ThumbsUp
5. Transition to next lesson or World Map

**Hattim Animations Used:** [list]
**Open Questions:** [list]
```

---

## 13. Contacts & Tools

| Tool | Purpose |
|---|---|
| Netlify | Hosting (drag-and-drop deploy) |
| Viggle AI (Seedance 2.0) | New Hattim animations |
| Adobe Illustrator / Photoshop | Asset prep |
| Keynote | Screen mockup design |
| VSCode + Live Server | Local development |
| Web Speech API | Voice recognition |
| ElevenLabs | Bangla audio output (planned) |
| Python / Pillow | Background removal, watermark cleanup |
| Blender / Spline / Mixamo | 3D asset pipeline (earlier phase, parked) |

---

*This document is the single source of truth for Hattim's World. Update after every major decision.*
