"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard, Project } from "@/components/sections/ProjectCard";
import Link from "next/link";

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, React, and a headless CMS. Includes product filtering, cart functionality, and secure checkout.",
    longDescription:
      "This e-commerce platform provides businesses with a modern, responsive online store that focuses on user experience and conversion optimization. The application is built with performance and SEO in mind, ensuring fast load times and high search engine rankings.",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "TailwindCSS", "Headless CMS", "Stripe"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Advanced product filtering and search",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "User accounts and order history",
      "Admin dashboard for product management",
      "SEO optimization with Next.js"
    ],
    techDetails: "Built with Next.js App Router, React Server Components, TailwindCSS, and integrated with a headless CMS for content management. Payment processing is handled through Stripe API.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description:
      "An application that uses AI to generate content for blogs, social media, and marketing materials. Built with React and integrated with OpenAI's API.",
    longDescription:
      "This tool helps content creators and marketers generate high-quality content quickly using artificial intelligence. It provides various templates and customization options to ensure the generated content matches the user's brand voice and requirements.",
    image: "/images/placeholder.svg",
    tags: ["React", "AI", "TypeScript", "API Integration", "Node.js"],
    category: "ai",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Multiple content types (blog posts, social media, emails)",
      "Customizable templates and tone settings",
      "Content editing and refinement tools",
      "Export to various formats (Markdown, HTML, plain text)",
      "User history and saved templates"
    ],
    techDetails: "Frontend built with React and TypeScript. Backend uses Node.js with Express. Integrates with OpenAI's GPT API for content generation. User data stored in MongoDB.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description:
      "A real-time analytics dashboard for monitoring business metrics. Features interactive charts, data filtering, and customizable widgets.",
    longDescription:
      "This dashboard provides businesses with real-time insights into their key performance indicators. Users can customize their view with drag-and-drop widgets, set up alerts for important metrics, and share reports with team members.",
    image: "/images/placeholder.svg",
    tags: ["React", "D3.js", "WebSockets", "TailwindCSS", "Firebase"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Real-time data updates via WebSockets",
      "Interactive charts and visualizations with D3.js",
      "Customizable dashboard layouts",
      "Data export and reporting features",
      "User permission management",
      "Alert system for metric thresholds"
    ],
    techDetails: "Frontend built with React and TailwindCSS. Data visualization using D3.js. Real-time updates via WebSockets. Authentication and data storage with Firebase.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 4,
    title: "Mobile Task Manager",
    description:
      "A cross-platform mobile app for task management with features like reminders, categories, and progress tracking.",
    longDescription:
      "This mobile application helps users organize their tasks and increase productivity. It includes features like task categorization, priority levels, reminders, and progress tracking to help users stay on top of their responsibilities.",
    image: "/images/placeholder.svg",
    tags: ["React Native", "TypeScript", "Firebase", "Redux"],
    category: "mobile",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Task creation with categories and priority levels",
      "Push notifications for reminders",
      "Progress tracking and statistics",
      "Calendar integration",
      "Dark/light mode support",
      "Offline functionality with data sync"
    ],
    techDetails: "Built with React Native and TypeScript for cross-platform compatibility. State management with Redux. Backend and authentication services provided by Firebase.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 5,
    title: "AI Image Recognition Tool",
    description:
      "A tool that uses machine learning to identify objects in images and provide detailed information about them.",
    longDescription:
      "This application leverages machine learning to analyze images and identify objects, people, scenes, and text within them. It provides detailed information about the recognized elements and allows users to search their image library based on content.",
    image: "/images/placeholder.svg",
    tags: ["React", "TensorFlow.js", "AI", "Next.js", "WebAssembly"],
    category: "ai",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Object and scene recognition in images",
      "Face detection and recognition",
      "Text extraction from images (OCR)",
      "Content-based image search",
      "Batch processing capabilities",
      "Privacy-focused (processing happens client-side)"
    ],
    techDetails: "Built with Next.js and React. Image processing and recognition powered by TensorFlow.js running in the browser. Performance optimizations with WebAssembly for compute-intensive tasks.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description:
      "A web application for tracking personal finances, including expense categorization, budget planning, and visual reports.",
    longDescription:
      "This finance tracker helps users manage their personal finances by tracking income, expenses, and investments. It provides visual reports and insights to help users understand their spending habits and make better financial decisions.",
    image: "/images/placeholder.svg",
    tags: ["React", "Chart.js", "Firebase", "TailwindCSS", "PWA"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Income and expense tracking with categories",
      "Budget planning and monitoring",
      "Visual reports and spending analysis",
      "Financial goal setting and tracking",
      "Recurring transaction management",
      "Data import/export capabilities"
    ],
    techDetails: "Frontend built with React and TailwindCSS. Data visualization with Chart.js. Backend and authentication with Firebase. Implemented as a Progressive Web App (PWA) for offline capabilities.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 7,
    title: "Select Script",
    description:
      "A quick and intuitive dropdown selector for your package.json scripts in VS Code.",
    longDescription:
      "Select Script is a VS Code extension that provides a fast and user-friendly way to run npm, yarn, or pnpm scripts directly from your editor. It automatically detects your package manager and presents your scripts in an intuitive dropdown interface.",
    image: "/images/placeholder.svg",
    tags: ["TypeScript", "VS Code Extension", "Developer Tools", "Node.js"],
    category: "web",
    demoUrl: "",
    githubUrl: "https://github.com/pedrocarlos-ti/select-script",
    features: [
      "Smart package manager detection (npm, yarn, pnpm)",
      "Dedicated terminal for script execution",
      "Keyboard shortcut integration",
      "Native VS Code selection experience",
      "Frequently used scripts tracking",
      "Automatic package.json detection"
    ],
    techDetails: "Built with TypeScript and the VS Code Extension API. Implements a smart detection algorithm to identify the appropriate package manager and provides a native VS Code UI experience.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 8,
    title: "AI Tree",
    description:
      "A platform for learning and sharing knowledge about artificial intelligence.",
    longDescription:
      "AI Tree is a community-driven platform designed to help users create, share, and explore AI knowledge. It features an interactive knowledge tree visualization, personalized learning paths, and collaboration tools.",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "TailwindCSS"],
    category: "ai",
    demoUrl: "",
    githubUrl: "https://github.com/pedrocarlos-ti/ai-tree",
    features: [
      "Create and share AI knowledge branches",
      "Learn and explore AI knowledge from other users",
      "Upvote and comment on favorite branches",
      "Interactive knowledge tree visualization",
      "User-friendly content creation tools",
      "Community-driven learning paths"
    ],
    techDetails: "Built with Next.js, React, and TypeScript on the frontend. Uses Tailwind CSS and Mantine UI for styling. Backend powered by Supabase with PostgreSQL database and Edge Functions.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  },
  {
    id: 9,
    title: "Electron Draw",
    description:
      "Professional screen annotation tool built with Electron.",
    longDescription:
      "Electron Draw is a desktop application that allows users to annotate their screen with professional drawing tools. It features a transparent window overlay, customizable drawing tools, and global shortcuts for quick access.",
    image: "/images/placeholder.svg",
    tags: ["Electron", "TypeScript", "Desktop App", "UI/UX"],
    category: "web",
    demoUrl: "",
    githubUrl: "https://github.com/pedrocarlos-ti/electron-draw",
    features: [
      "Transparent window overlay for screen annotation",
      "Professional drawing tools (pen, shapes, text)",
      "Customizable colors and line thickness",
      "Global shortcuts for quick access",
      "Multi-monitor support"
    ],
    techDetails: "Built with Electron and TypeScript. Implements custom drawing tools and transparent window management. Designed for both casual and professional use cases.",
    screenshots: [
      "/images/placeholder.svg",
      "/images/placeholder.svg"
    ]
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "ai", name: "AI Projects" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of my personal work and open source projects focusing on web development, TypeScript, and AI integration.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="min-w-[90px] text-sm md:min-w-24 md:text-base rounded-full px-3 md:px-6"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
