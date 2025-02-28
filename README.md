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

- **Home** - Introduction and featured projects
- **About** - Personal information, skills, and experience
- **Projects** - Showcase of projects with filtering
- **Blog** - Articles and tutorials
- **Contact** - Contact form and information

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

3. Create a `.env.local` file in the root directory with your Resend API key:

   ```
   RESEND_API_KEY=your_resend_api_key
   ```

   You can get an API key by signing up at [Resend.com](https://resend.com)

4. Start the development server:

   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pedrosantos.dev/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── blog/             # Blog pages
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── layout/           # Layout components (header, footer)
│   ├── sections/         # Page section components
│   ├── three/            # Three.js/canvas components
│   └── ui/               # UI components from shadcn/ui
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
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

- Use TailwindCSS for styling
- Follow consistent container styling with `mx-auto` and proper padding (`px-4 md:px-6`)
- Use proper spacing between sections (`mb-20`)
- Use background gradients for visual interest (`from-muted/50 to-transparent`)
- Use clean, bold headings without gradient text effects
- Use card-based layouts for skills and projects
- Use Framer Motion for hover animations

## Customization

### Themes

The site uses next-themes for theme management. You can customize the theme colors in `tailwind.config.ts`.

### Content

Update your personal information, projects, and blog posts in their respective components:

- Update personal info in `app/page.tsx` and `app/about/page.tsx`
- Update projects in the `featuredProjects` array in `app/page.tsx`
- Update blog posts in the `defaultPosts` array in `components/sections/BlogPreview.tsx`

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
