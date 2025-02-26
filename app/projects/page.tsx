"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, React, and a headless CMS. Includes product filtering, cart functionality, and secure checkout.",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "TailwindCSS", "Headless CMS"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description:
      "An application that uses AI to generate content for blogs, social media, and marketing materials. Built with React and integrated with OpenAI's API.",
    image: "/images/placeholder.svg",
    tags: ["React", "AI", "TypeScript", "API Integration"],
    category: "ai",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description:
      "A real-time analytics dashboard for monitoring business metrics. Features interactive charts, data filtering, and customizable widgets.",
    image: "/images/placeholder.svg",
    tags: ["React", "D3.js", "WebSockets", "TailwindCSS"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "Mobile Task Manager",
    description:
      "A cross-platform mobile app for task management with features like reminders, categories, and progress tracking.",
    image: "/images/placeholder.svg",
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "mobile",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 5,
    title: "AI Image Recognition Tool",
    description:
      "A tool that uses machine learning to identify objects in images and provide detailed information about them.",
    image: "/images/placeholder.svg",
    tags: ["React", "TensorFlow.js", "AI", "Next.js"],
    category: "ai",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description:
      "A web application for tracking personal finances, including expense categorization, budget planning, and visual reports.",
    image: "/images/placeholder.svg",
    tags: ["React", "Chart.js", "Firebase", "TailwindCSS"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
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
    <div className="container py-12 md:py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A showcase of my recent work, side projects, and experiments
        </p>
      </motion.div>

      <motion.div
        className="mb-12 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="min-w-24 rounded-full px-6"
          >
            {category.name}
          </Button>
        ))}
      </motion.div>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full overflow-hidden border shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1 text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild className="rounded-full">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
