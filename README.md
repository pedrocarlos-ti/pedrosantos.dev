# Pedro Santos - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TailwindCSS, and ShadCN UI.

## Features

- Dark/Light mode toggle
- Modern, minimalist design with smooth animations
- Fully responsive for all device sizes
- Fast performance with Next.js App Router
- Modular component architecture
- SEO optimized

## Pages

- **Home** (`/`) — Tight builder hero, a living "Now" section, selected work that links out to case studies, latest writing, and a contact teaser.
- **Work** (`/projects`) — All projects as a scannable list, each linking to a case study.
- **Project case study** (`/projects/[slug]`) — Problem → approach → outcome → learnings, with metadata, links, and prev/next.
- **About** (`/about`) — Narrative-driven: how I think, experience as stories, education kept minimal at the bottom.
- **Writing** (`/blog`) — Post listing. **Post** (`/blog/[slug]`) — Markdown rendered from `content/blog/`.
- **Contact** (`/contact`) — Simple working form (Resend) with clear full-time + contract availability.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Email**: [Resend](https://resend.com/) for contact form submissions
- **Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Create a `.env.local` file in the root directory with your Resend configuration:

   ```
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM_EMAIL=Contact Form <contact@mail.pedrosantos.dev>
   RESEND_TO_EMAIL=your-email@gmail.com
   ```

   - `RESEND_API_KEY`: Your Resend API key (get one at [Resend.com](https://resend.com))
   - `RESEND_FROM_EMAIL`: The email address to send from (must use your verified domain in Resend)
   - `RESEND_TO_EMAIL`: Your email address where contact form submissions will be sent (optional, defaults to pedrocarlos.ti@gmail.com)

4. Start the development server:

   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pedrosantos.dev/
├── app/                  # Next.js App Router pages
│   ├── about/            # /about
│   ├── blog/             # /blog + /blog/[slug]
│   ├── contact/          # /contact
│   ├── projects/         # /projects + /projects/[slug]
│   ├── api/send-email/   # Contact form API route (Resend)
│   ├── globals.css       # Theme tokens + prose styles
│   ├── layout.tsx        # Root layout (header + footer shell, fonts, SEO)
│   └── page.tsx          # Home
├── content/              # ← EDIT HERE to update the site
│   ├── blog/             # Blog posts as *.md (frontmatter + markdown)
│   ├── profile.ts        # Name, role, tagline, socials, availability
│   ├── projects.ts       # Projects + case studies (problem/approach/outcome)
│   ├── now.ts            # "Now" section items + last-updated date
│   ├── experience.ts     # Work history as narrative stories
│   └── education.ts      # Minimal education/study list
├── components/
│   ├── layout/           # Header, footer, section heading, socials, status
│   ├── sections/         # Page-specific sections (contact form, project status)
│   └── ui/               # shadcn/ui primitives
├── lib/
│   ├── types.ts          # TypeScript types for all content
│   ├── blog.ts           # Markdown loader (gray-matter + marked)
│   ├── markdown.ts       # renderMarkdown helper
│   └── structured-data.ts
└── ...                   # Config files
```

## Component Organization

The project follows a modular component architecture:

- **Layout Components**: Header, footer, and other layout elements
- **Section Components**: Reusable page sections like TechStack, BlogPreview
- **UI Components**: Shadcn UI components with custom styling
- **Page Components**: Main page components in the app directory

## Scripts

- `bun dev` - Start the development server
- `bun build` - Build the production application
- `bun start` - Start the production server
- `bun lint` - Run ESLint
- `bun format` - Format code with Prettier
- `bun typecheck` - Run TypeScript type checking
- `bun analyze` - Analyze bundle size
- `bun clean` - Clean build cache

## Styling Conventions

- Dark mode first, high-contrast, tool-like (think Linear / Vercel dashboard, not a 2018 portfolio).
- One accent color (`brand`, electric blue/cyan) for links, status, and key CTAs only — otherwise contrast does the work.
- Monospace (`--font-geist-mono`) for all metadata: dates, tags, status, labels, keyboard hints. Use the `.label` / `.label-brand` utilities.
- Information-dense but scannable. Prefer content over decoration. Borders + whitespace over shadows and gradients.
- Motion is subtle and purposeful only (gentle `.fade-up` on the hero, hover color transitions). No scroll-triggered everything, no floating orbs, no parallax.
- Long-form text uses the `.prose` classes (blog posts + case-study sections). Case studies are structured (Problem / Approach / Outcome / Learnings), not image-heavy.
- No generic stat walls ("8+ years", "50+ projects") or tech-logo walls. Real work with real depth only.

## Customization

### Themes

The site uses next-themes for theme management. You can customize the theme colors in `tailwind.config.ts`.

### Content — what to edit monthly

All content lives in `content/` and `lib/types.ts`. No page code needs touching for routine updates.

| To change… | Edit this |
| --- | --- |
| Your bio, tagline, socials, availability | `content/profile.ts` |
| The "Now" section + its "updated" date | `content/now.ts` |
| Projects & case studies (problem/approach/outcome) | `content/projects.ts` |
| Work history (narrative stories) | `content/experience.ts` |
| Education / study list | `content/education.ts` |
| Blog posts | Add a new `*.md` file in `content/blog/` |
| Content shapes / new fields | `lib/types.ts` |

### Adding a blog post

Create `content/blog/my-post.md` with frontmatter:

```md
---
title: "My post title"
description: "One-line summary for listings and SEO."
date: "2026-07-01"
tags: ["meta", "design"]
draft: false
---

Body in standard markdown — headings, lists, code blocks, links.
```

The loader (`lib/blog.ts`) picks it up automatically. `draft: true` hides a post in production but shows it in dev. Reading time is auto-calculated.

### Theme

Dark mode is default. The one intentional accent color (electric blue/cyan) and all neutral tokens live as HSL CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark). Monospace metadata uses the `.label` / `.label-brand` utility classes.

## Deployment

The site is configured for deployment on Vercel:

```bash
vercel
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Bun](https://bun.sh/)
- [Resend](https://resend.com/)
