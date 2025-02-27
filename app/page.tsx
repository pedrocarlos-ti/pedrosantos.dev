"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSphere } from "@/components/three/AnimatedSphere";
import { TechStack } from "@/components/sections/TechStack";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CardContent } from "@/components/ui/card";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with product filtering, cart functionality, and payment integration.",
    image: "/images/placeholder.svg",
    tags: ["React", "Next.js", "TailwindCSS", "Stripe"],
    link: "/projects/e-commerce-platform",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates content based on user prompts using OpenAI's GPT models.",
    image: "/images/placeholder.svg",
    tags: ["React", "TypeScript", "OpenAI API", "Node.js"],
    link: "/projects/ai-content-generator",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description:
      "Interactive dashboard with real-time analytics, data visualization, and customizable widgets.",
    image: "/images/placeholder.svg",
    tags: ["React", "D3.js", "WebSockets", "Firebase"],
    link: "/projects/dashboard-analytics",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <AnimatedSphere />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend Developer specializing in React and AI
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I&apos;m{" "}
              <span className="font-semibold text-primary">Pedro Santos</span>{" "}
              👋, a frontend developer with a passion for creating modern,
              responsive, and user-friendly web applications with cutting-edge
              technologies.
            </motion.p>

            <motion.div
              className="mb-10 flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:hello@pedrosantos.dev"
                className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-muted/50 to-transparent py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Me</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              I&apos;m a frontend developer with expertise in building modern
              web applications using React, Next.js, and TypeScript. I focus on
              creating intuitive user interfaces and seamless user experiences
              with clean, maintainable code.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <TechStack />
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gradient-to-b from-muted/50 to-transparent py-20 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Here are some of my recent projects. Each one was carefully
              crafted to solve specific problems and deliver exceptional user
              experiences.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <Link href={project.link}>
                          View <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild className="rounded-full px-6">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <BlogPreview />
        </div>
      </section>
    </div>
  );
}
