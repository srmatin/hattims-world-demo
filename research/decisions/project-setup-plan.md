# Hattim's World: Project Setup Plan

## Context

You have an HTML demo built in Claude.ai, brand assets (logo, character poses, animations, videos, brand guideline) on an external drive, and a brainstorming project in Claude.ai. The goal is to set this up properly so Claude Code can continue the HTML demo and later evolve it into a real iOS + Android app — without losing the Claude.ai brainstorming context or having to re-explain the brand every session.

---

## Step 1: Copy Everything to Local

Copy the full project folder from the external drive to your Mac:

```
~/projects/hattims-world/
```

**Why local:** External drives are slow and disconnect mid-session. Claude Code works on local files. Keep the external drive as a backup only going forward.

---

## Step 2: Establish the Folder Structure

Once copied, organise the project folder like this:

```
~/projects/hattims-world/
├── demo/                  # HTML demo (current work)
│   ├── index.html
│   ├── assets/            # all images, animations, videos used in demo
│   └── ...
├── brand/                 # brand source files (read-only reference)
│   ├── brand-guideline.pdf (or .docx)
│   ├── logo/
│   ├── characters/
│   └── animations/
├── research/              # brainstorm outputs from Claude.ai (paste here)
│   └── session-notes/
├── app/                   # future React Native app (create when ready)
└── CLAUDE.md              # project instructions for Claude Code
```

Assets under 500MB go into git normally. No special handling needed.

---

## Step 3: Create CLAUDE.md for This Project

Create `~/projects/hattims-world/CLAUDE.md` with this content:

```markdown
# Hattim's World

## What This Is
A language learning game for iOS + Android. Currently in HTML demo phase.
Brainstorming happens in Claude.ai; demo iteration and app build happens here in Claude Code.

## Brand
Brand guideline is at `brand/brand-guideline.pdf`.
Always read it before generating any copy, UI text, or visual descriptions.
Character assets are in `brand/characters/`. Animations in `brand/animations/`.

## Current State
- HTML demo: `demo/index.html`
- Brainstorm notes: `research/session-notes/`

## Tech Stack (when building the real app)
- Framework: React Native (iOS + Android)
- Start from demo/ HTML as the design reference

## Wiki Knowledge Base
Path: /Users/sajidrizwanmatin/claude-obsidian

When you need context about Sajid (background, goals, communication style):
1. Read wiki/hot.md first (~500 words)
2. If not enough, read wiki/index.md
3. Do NOT read the wiki for general coding questions
```

---

## Step 4: Export and Save the Brand Guideline

The brand guideline was created in Claude design and is specific to Hattim's World — it lives in the project, not the global wiki.

Export it from Claude design (download as PDF or copy the content) and save it directly into the project:

```
~/projects/hattims-world/brand/brand-guideline.pdf
```

If it's text-based rather than a PDF, save it as `brand/brand-guideline.md` — Claude Code can read markdown directly, which is better for iteration.

**Why it belongs in the project, not the wiki:** The wiki is for personal context that spans all projects (career, SMSF, etc.). The brand guideline is project-specific and will evolve with the game. Keeping it in `brand/` means:
- Git tracks every revision (full history of brand decisions)
- Claude Code reads it directly without going through the wiki
- When you revise it, you update one file in one place

**When you need to revise the brand guideline:** Open the project in Claude Code and say "update the brand guideline — [what changed]". Claude Code edits the file, git records the change. You always have the previous version in git history.

---

## Step 5: Extract Claude.ai Brainstorm Context

In your Claude.ai project, ask:
> "Summarize everything we've decided so far: game concept, mechanics, target audience, art direction, open questions, and what's been built in the HTML demo."

Save the output as `research/session-notes/brainstorm-2026-05-05.md`.

This becomes the source of truth Claude Code reads instead of the chat history.

---

## Step 6: Initialise Git

From the project folder in Claude Code:

```bash
git init
git add .
git commit -m "init: HTML demo + brand assets"
```

Add a `.gitignore` for OS files:

```
.DS_Store
*.log
```

---

## The Ongoing Workflow

```
Claude.ai (brainstorm)
        ↓
Copy summary to research/session-notes/
        ↓
Claude Code (reads files + CLAUDE.md + wiki)
        ↓
Iterate on demo/index.html
        ↓
/save to wiki (key decisions filed)
        ↓
Paste wiki/hot.md into next Claude.ai session
```

No re-explaining. No context lost between tools.

---

## When to Start the Real App

Stay in HTML demo until:
- Core game loop is validated (you can play through it)
- All key screens exist as HTML mockups
- Brand and character assets are finalised

Then Claude Code scaffolds a React Native project using `demo/` as the design spec. The HTML becomes the blueprint, not throwaway work.

---

## Files to Create / Actions

| Action | Where |
|--------|-------|
| Copy project folder from external drive | `~/projects/hattims-world/` |
| Create folder structure above | local |
| Create CLAUDE.md | `~/projects/hattims-world/CLAUDE.md` |
| Export brand guideline from Claude design | `brand/brand-guideline.pdf` or `.md` |
| Paste Claude.ai brainstorm summary | `research/session-notes/brainstorm-2026-05-05.md` |
| git init | `~/projects/hattims-world/` |
