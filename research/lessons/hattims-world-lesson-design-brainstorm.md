# Hattim's World — Lesson Design Brainstorm
**Session date:** April 2026  
**Status:** Decisions locked, screen design pending  
**Next step:** Sajid builds Keynote mockup for Lesson 1 screens

---

## What we decided to build next

The immediate build is **Lesson 1: Names** — a single, complete lesson module covering:

- Hattim introduces himself: *"Amar naam Hattim"*
- Hattim asks the child: *"Tomar naam ki?"*
- Child responds using Bangla sentence structure
- Hattim reacts, captures the child's name, uses it going forward

Food module (Kola, Dudh, Dim, Ruti) is parked until Names is complete.

---

## AI strategy — the three tiers

We mapped out three levels of AI integration. All three are in scope for the full product. For the demo, we lead with Tier 1 and use Tier 3 as the "wow" moment.

### Tier 1 — Smart audio (no AI API needed)
- Bangla narrator voice generated via **ElevenLabs** or similar TTS tool
- Child speaks → **Web Speech API** (built into Chrome/Safari, free) transcribes
- Simple text matching — did they say "amar naam" + a word after it?
- Hattim reacts with a pose/animation based on result

### Tier 2 — Voice recognition
- Child's audio sent to **OpenAI Whisper** for more accurate transcription
- Bangla phonetics scored — correct vs close vs wrong
- Hattim reacts differently depending on accuracy
- Child's name captured by voice and stored for the session

### Tier 3 — Conversational Hattim (the wow factor)
- Powered by **Claude API**
- Hattim can't speak but responds through word cards, emoji, gesture animations
- Child types or speaks → Claude generates Hattim's personalised reaction
- Hattim remembers what the child taught him across the session
- Uses child's name throughout — feels like a real friendship forming

**Demo strategy:** Build Tier 1 to function. Show Tier 3 as the vision moment — can be partially scripted for the demo, doesn't need to be fully live.

---

## The universal lesson template

Every lesson in Hattim's World — names, food, animals, colours, greetings — follows the same three-phase structure. Only Phase 3 changes per module.

### Phase 1 — Demonstrate
*Hattim shows it. Child watches.*

- Word-by-word gesture/pose reveal
- Narrator speaks each word out loud
- English translation appears on screen simultaneously
- Full sentence plays at natural pace to close

### Phase 2 — Practice
*Child taps along. Hattim reacts.*

- Same word-buttons appear — child must tap them in the correct sequence
- Each correct tap triggers: word audio + Hattim's corresponding pose
- Wrong tap: button simply doesn't respond (no failure state, silent guidance)
- Full sentence plays automatically when sequence is complete
- By the end of this phase, child has "said" every word twice

### Phase 3 — Perform
*Child does it. Hattim learns.*

Activity type swaps depending on the module:

| Module | Phase 3 activity |
|---|---|
| Names | Child speaks their name using Bangla sentence structure |
| Food | Hear a Bangla word, tap the matching food image |
| Animals | Hear a Bangla word, tap the matching animal |
| Colours | Match colour word to colour swatch |
| Sentences | Tap words in correct order to form a sentence |

All Phase 3 activities end with: Hattim reacts → credit/try again moment → win state.

---

## Lesson 1 beat-by-beat design

### Phase 1A — Demo: "Amar naam Hattim"

1. Narrator: *"Do you wanna be friends with Hattim?"*
2. Hattim idle animation — looking at the child (screen)
3. Child responds: says "Yes" / "Ha" / taps OK button (mic open or button, TBD)
4. Narrator: *"Let's first get to know our names..."*
5. Narrator to Hattim: *"Hattim, how about you introduce yourself — tell us your name"*
6. *(Creative leap: Hattim understands the narrator)*

**Word-by-word reveal:**
- **Amar** → Hattim points to himself (pose) → Narrator says "Amar" → English word "My" appears
- **Naam** → Speech bubble appears with "Naam" → Narrator says "Naam" → English word "Name" appears
- **Hattim** → Excited animation with "Hattim" name badge → Narrator says "Hattim" → English "Hattim"

7. Narrator: *"Good job Hattim! Let's say this together..."*

### Phase 2A — Practice: "Amar naam Hattim"

- Three buttons appear — one per word, each showing Hattim's corresponding pose
- Child taps in sequence: Amar → Naam → Hattim
- Each tap: pose animates + narrator speaks that word
- Full phrase plays at natural pace when all three tapped correctly

### Phase 1B — Demo: "Tomar naam ki?"

Same pattern as above, new words:

- **Tomar** → Hattim pointing pose (points outward at child) → "Tomar" → "Your"
- **Naam** → Same speech bubble (reused asset — child already knows this word) → "Naam" → "Name"
- **Ki** → Hattim shrug/confused pose (asset confirmed available) → "Ki" → "What?"

### Phase 2B — Practice: "Tomar naam ki?"

- Same three-button tap sequence
- Child taps: Tomar → Naam → Ki
- Full question plays at natural pace

### Phase 3 — Perform: Child responds

1. Hattim does Ki pose (shrug/question)
2. Narrator: *"Tomar naam ki?"*
3. Mic opens on screen

**Prompted word-by-word response:**
- Button 1 **"Amar"** lights up → mic listens → child says "Amar" → confirmed
- Button 2 **"Naam"** lights up → speech bubble shown → child says "Naam" → confirmed
- Button 3 **[?]** lights up → mic open → child says their name → captured

**On name capture:**
- Web Speech API transcribes
- App checks: did they say "amar naam" + any word after?
- Extracts whatever comes after "naam" — that's the name
- Accepts English pronunciation of name (diaspora kids will say their name in English — that's fine)
- Falls back to type-it-in after 2 failed attempts

**Hattim reacts:**
- Excited animation plays centre screen
- Screen shows: *"Tomar naam [Name]!"*
- Name is now locked in for the rest of the session

**Credit moment:**
- Narrator: *"Did Hattim get it right?"*
- Child taps Hattim himself → triggers ThumbsUp animation (asset available)
- Or: "Try again" button → restarts name capture only (not full lesson)
- Max 2 retries → accept best attempt or type fallback

---

## Word-to-gesture mapping

| Bangla | English | Mechanism |
|---|---|---|
| Amar | My | Hattim points to himself — pose |
| Naam | Name | Speech bubble card — visual |
| Hattim | Hattim | Excited pose + name badge |
| Tomar | Your | Hattim points outward — pose |
| Ki | What? | Hattim shrug/confused pose — asset confirmed |

**Principle:** Pronouns and action words → gesture/pose. Abstract nouns (like Naam) → visual word card / speech bubble. This distinction scales naturally to future modules.

---

## Key design decisions locked

- **Child teaches Hattim** — the core narrative inversion. Hattim knows nothing. Child is the teacher.
- **Hattim can't speak** — communicates only through poses, animations, and word cards
- **Narrator is female voice** — English narration throughout, Bangla words spoken by narrator also
- **English + Bangla always together** — English translation always visible when Bangla word appears
- **No failure states in Practice** — wrong tap does nothing (silent guidance only)
- **Type-in fallback** — always available if mic fails or child can't pronounce
- **Child's name used throughout** — once captured, Hattim references it in win state, CTA, session
- **Tap Hattim to give credit** — uses existing ThumbsUp animation asset

---

## Assets confirmed available

| Asset | Format | Use |
|---|---|---|
| Hattim Idle | WebM/VP9 1920×1080 | Watching the child, neutral state |
| Hattim Wave | WebM/VP9 1920×1080 | Greeting moment |
| Hattim Pointing | WebM/VP9 1920×1080 | "Amar" and "Tomar" gestures |
| Hattim Excited | WebM/VP9 1920×1080 | Name reveal, win moments |
| Hattim CheerUp | WebM/VP9 1920×1080 | Encouragement after try again |
| Hattim ThumbsUp | WebM/VP9 1920×1080 | Credit moment |
| Hattim "Ki" pose | Confirmed available | Shrug/question gesture |
| Hatching egg video | Video | Intro — already in HTML |
| Food item PNGs | PNG | Parked for food module |

**Still needed:**
- Bangla audio recordings for phrases (or ElevenLabs generated)
- Name badge graphic for "Hattim" reveal moment
- Narrator voice recording or TTS for English narration

---

## Tech stack (unchanged)

- **Build:** Plain HTML / CSS / JS — no frameworks
- **Host:** Netlify
- **Design ratio:** 16:9 desktop, adaptive for smaller screens
- **Fonts:** Google Fonts (Fredoka for display, Quicksand for body)
- **Speech:** Web Speech API (Tier 1) → Whisper (Tier 2 upgrade path)
- **AI:** Claude API for Tier 3 conversational Hattim
- **Workflow:** Sajid designs each screen in Keynote → exports PNG → Claude builds screen by screen into single HTML file

---

## Open questions (to resolve during Keynote mockup)

1. **Friend invite interaction** — does child say "Yes" (mic) or tap a button? Mic is more magical but adds complexity upfront. Button is safe.
2. **Button 3 design** — what does the "?" button look like before the name is known? Options: blank + mic icon, animated "?", empty word card.
3. **"Try again" scope** — confirmed: restarts name capture only, not full lesson. Cap at 2 retries.
4. **Credit interaction detail** — tapping Hattim confirmed. Does Hattim need to be in a specific pose/position on screen for this to feel natural?
5. **Naam speech bubble** — is this a reusable graphic asset or generated in HTML/CSS?

---

## What's next

1. Sajid builds Keynote mockup — screen by screen for Lesson 1
2. We review mockup together and finalise any open questions above
3. Sajid exports each screen as PNG and hands to Claude one at a time
4. Claude builds each screen into the existing HTML file without touching earlier screens
5. Test on Netlify
6. Then: Bangla audio recording session
