# /goal Prompt: Evolve pedrosantos.dev (v2)

Redesign and iteratively improve this portfolio site (pedrosantos.dev) to feel like a 2026 professional builder's home base rather than a classic template portfolio.

## Core Objective

Create a site that quickly answers "What does it feel like to work with or hire this engineer?" while also honestly representing the founder work happening on the side.

The site must serve two audiences simultaneously without compromise:

- Primary: Hiring managers and clients looking for full-time roles or contract work (this pays the bills to fund the company).
- Secondary: Other builders and the open-source/indie community.

## Hard Constraints (Do Not Violate)

- No AI features whatsoever in this phase (no chat, no "Ask Pedro", no command palette AI, no LLM anything). Pure static site.
- No live data. Everything is static (content files, TS data modules, or markdown in content/).
- No "live GitHub activity", no external API polling on the frontend.
- Keep maintenance simple: owner should be able to update content monthly by editing a few files.

## Positioning & Tone

Tone: Professional builder. Direct, confident, slightly informal.

Voice example: "Hey — I'm Pedro Santos. I ship production React/Next.js work during the day and build my own things on the side. Here's what I'm working on right now. If something resonates, let's talk."

Positioning to convey:

- I am a capable software engineer open to full-time and contract opportunities.
- I deliberately keep a meaningful side project (Melro.io) alive.
- I value shipping real things, developer experience, and clean product thinking.
- Melro.io is presented as an authentic long-term experiment, not the main headline.

## Current State (as of mid-2026)

The site has already moved in the right direction on the `new-site` branch:

- Multi-page Next.js 15 App Router site (/, /projects, /projects/[slug], /blog, /blog/[slug], /about, /contact)
- Narrow editorial layout (max-w-3xl) — already excellent
- "Now" section on homepage that feels alive and honest
- Project model with status (active/shipped/experiment), year, tags, description + longDescription
- Clean ProjectCard and PostList components
- Heavy, effective use of font-mono for metadata/labels + Geist sans for body
- Accent color used sparingly (currently warm orange)
- Good SEO foundation (metadata, JSON-LD, sitemap, robots)
- One real blog post explaining the rebuild intent
- Dark theme as default, minimal visual noise

Weaknesses to fix:

- Project "stories" are still quite shallow (especially Melro.io, Select Script, AI Tree).
- /about still feels somewhat resume-like (separate experience list + education list + skills pills).
- Homepage hero and structure are good but can be tighter and more distinctive.
- Very little "problem → approach → outcome / reflection" narrative anywhere.
- Some leftover generic portfolio patterns in copy and layout.
- Project detail pages are functional but not compelling as case studies.
- Missing strong, specific outcomes and decision stories that prove how the person thinks.

## Design & Aesthetic Direction

Lean further into "tool, not brochure":

- Continue and double-down on the current narrow + mono-labels direction.
- Information-dense but scannable. Prefer content over decoration.
- Subtle, purposeful motion only (no scroll-triggered everything or floating orbs).
- High-contrast dark mode first. Light mode as secondary.
- One accent color used intentionally for links, status, key CTAs.
- Monospace for all metadata, dates, tags, labels, keyboard-style hints.
- Clean borders, generous but not excessive whitespace, strong typography hierarchy.
- On project pages, favor structured long-form text + minimal visuals over image-heavy cards.
- Remove or heavily de-emphasize generic "tech logo walls" and certification-style lists.

## Content Priorities (Ranked)

1. **Projects as case studies** (highest impact)
   - Rewrite every featured project with real narrative: what problem existed, what approach was taken, what was actually built, what the outcome or key learning was.
   - Make Melro.io feel like a real ongoing founder story.
   - Give Select Script and AI Tree proper context and personality.
   - Project detail pages should feel worth reading and linking to.

2. **Homepage clarity**
   - Strong opening that communicates role + intent in one breath.
   - Prominent, living "Now" section.
   - "Selected work" that teases depth (link to real stories).
   - Clear, low-friction CTAs for both career opportunities and "let's talk about what you're building".

3. **About page evolution**
   - Reduce pure resume format.
   - Turn experience into short contextual stories.
   - Weave technical focus and skills into the narrative and into project context instead of standalone lists.
   - Keep education minimal or move to the bottom.
   - Focus section should feel like "how I think" more than a checklist.

4. **Blog & writing**
   - The existing "Rebuilding my site" post is a good signal. Encourage more posts over time.
   - Make sure blog feels like a natural, first-class part of the site.

5. **Contact & opportunity signaling**
   - Make it unmistakably clear that the person is open to both full-time and contract work.
   - Keep the form simple and working.

## Success Criteria (Measurable)

- A recruiter or potential client can articulate who I am and what I'm looking for within 10 seconds on the homepage.
- A developer reading a project page comes away with a clear sense of how I approach problems.
- The site feels personal and opinionated without being precious or flashy.
- All content can be updated by editing TypeScript data files or markdown in `content/`.
- No generic "50+ projects", "8+ years", or empty stats.
- Visual identity feels consistent with modern developer tools (Cursor, Linear, Vercel dashboard vibe) more than 2018–2024 portfolio templates.

## Working Process (Follow This When Using as /goal)

1. Begin by deeply exploring the entire current codebase (app/, components/, lib/, content/, config files). Do not rely on memory.
2. Immediately create a structured todo list using the todo_write tool. Keep it updated as work progresses.
3. Report real progress regularly using the `update_goal` tool:
   - After major discoveries or decisions
   - After completing meaningful chunks
   - When blocked or when you need owner input on tone/content
   - With `completed: true` only when the objective (or a clear scoped milestone) is genuinely done
4. Work in small, reviewable increments. Prefer shipping one improved project story or section over a giant rewrite.
5. Draft strong copy in the owner's voice. When the voice feels off, propose alternatives and note what to tweak.
6. Use real terminal commands (`bun dev`, typecheck, build) to verify changes.
7. Surface key questions early rather than guessing (audience nuance, specific project details, tone calibration).
8. Default to concrete changes over long discussions — but stop for confirmation on high-impact structural or copy decisions.

## Scope for First Major Milestone

Focus first on:

- Homepage positioning + "Now" section refinement
- 2–3 fully rewritten project case studies with rich detail pages
- About page that feels like a person, not a CV
- Consistent polish across navigation, CTAs, and typography

Later phases can expand blog content and add more experiments.

Start now. First action: thoroughly audit the site and produce an initial plan + prioritized todo list using the proper tools.
