"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard, Project } from "@/components/sections/ProjectCard";

// Sample project data
const projects: Project[] = [
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
      "Automatic package.json detection",
    ],
    techDetails:
      "Built with TypeScript and the VS Code Extension API. Implements a smart detection algorithm to identify the appropriate package manager and provides a native VS Code UI experience.",
    screenshots: ["/images/placeholder.svg", "/images/placeholder.svg"],
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
      "Community-driven learning paths",
    ],
    techDetails:
      "Built with Next.js, React, and TypeScript on the frontend. Uses Tailwind CSS and Mantine UI for styling. Backend powered by Supabase with PostgreSQL database and Edge Functions.",
    screenshots: ["/images/placeholder.svg", "/images/placeholder.svg"],
  },
  {
    id: 9,
    title: "Electron Draw",
    description: "Professional screen annotation tool built with Electron.",
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
      "Multi-monitor support",
    ],
    techDetails:
      "Built with Electron and TypeScript. Implements custom drawing tools and transparent window management. Designed for both casual and professional use cases.",
    screenshots: ["/images/placeholder.svg", "/images/placeholder.svg"],
  },
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
            A showcase of my personal work and open source projects focusing on
            web development, TypeScript, and AI integration.
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
