# Hattim's World

## What This Is
A language learning game for kids, targeting iOS + Android. Currently in HTML demo phase.
Brainstorming and ideation happens in Claude.ai. Demo iteration and app build happens here in Claude Code.

## Current State
- **Master brief**: `research/master-brief/hattims-world-project-brief.md` — read this first, every session. Single source of truth for the project.
- HTML demo: `demo/assets/index.html` — the reference UI. Use this as the design source of truth.
- All demo assets (audio, video, images, animations): `demo/assets/`
- Design system (brand rules, tokens, assets): `brand/design-system/`
- Lesson design docs: `research/lessons/`
- Session notes from Claude.ai: `research/session-notes/`

## Brand & Design System
The **hattims-world-design skill** (in `.claude/skills/`) auto-activates for UI/visual/copy work and covers the brand rules. Underlying files, if you need them directly:
1. `brand/design-system/README.md` — full brand guidelines (colours, typography, tone, components)
2. `brand/design-system/colors_and_type.css` — design tokens (use these exact values)

Character poses: `brand/design-system/assets/hattim-*.png`
Animations: `brand/design-system/assets/anim-*.webm`
Logo: `brand/design-system/assets/logo-*.png`
Component previews: `brand/design-system/preview/` — reference only

**Do NOT use `brand/design-system/ui_kits/` as a UI reference.** The HTML there is not representative of the intended design. Always use `demo/assets/index.html` as the UI reference instead.

## Tech Stack
- Current: Plain HTML / CSS / JS — single file at `demo/assets/index.html`, hosted on Netlify
- Future app: React Native (iOS + Android)
- When building the app, use `demo/` as the design spec and reference

## Critical Dev Rules (HTML demo phase)
- Screens share three reusable JS engines (word cards, recall, sequence game). Add new lessons by adding config objects — don't copy-paste screen code.
- Editing existing shared code is allowed (approved July 2026, supersedes the old append-only rule), but verify all screens still work end-to-end after changes.
- One screen at a time — Sajid designs in Keynote, exports PNG, Claude builds from the PNG

## Wiki Knowledge Base
Path: /Users/sajidrizwanmatin/claude-obsidian

When you need context not already in this project:
1. Read wiki/hot.md first (recent context, ~500 words)
2. If not enough, read wiki/index.md (full catalog)
3. If you need domain specifics, read wiki/<domain>/_index.md
4. Only then read individual wiki pages

Do NOT read the wiki for:
- General coding questions or language syntax
- Things already in this project's files or conversation
- Tasks unrelated to this game app
