# Pedro Santos - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TailwindCSS, and ShadCN UI.

## Features

- 🌓 Dark/Light mode toggle
- 🎨 Modern, minimalist design with smooth animations
- 📱 Fully responsive for all device sizes
- ⚡ Fast performance with Next.js App Router
- 🧩 Modular component architecture
- 🔍 SEO optimized

## Pages

- **Home** - Introduction and featured projects
- **About** - Personal information, skills, and experience
- **Projects** - Showcase of projects with filtering
- **Contact** - Contact form and information

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
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

3. Run the development server:

   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy this website is using [Vercel](https://vercel.com/):

```bash
bun i -g vercel
vercel
```

## Customization

- Update personal information in the page files
- Replace placeholder images with your own in the `public/images` directory
- Modify project data in the `app/projects/page.tsx` file
- Update social links in the header and footer components

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework
