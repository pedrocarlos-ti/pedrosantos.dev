"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSphere } from "@/components/three/AnimatedSphere";
import { TechCarousel } from "@/components/sections/TechCarousel";
import { CardContent } from "@/components/ui/card";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "Select Script",
    description:
      "A VS Code extension providing a quick and intuitive dropdown selector for your package.json scripts.",
    image: "/images/placeholder.svg",
    tags: ["TypeScript", "VS Code Extension", "Developer Tools"],
    link: "/projects",
  },
  {
    id: 2,
    title: "AI Tree",
    description:
      "A platform for learning and sharing knowledge about AI with interactive visualizations and community features.",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    link: "/projects",
  },
  {
    id: 3,
    title: "Electron Draw",
    description:
      "Professional screen annotation tool built with Electron featuring transparent window overlay and drawing tools.",
    image: "/images/placeholder.svg",
    tags: ["Electron", "TypeScript", "Desktop App", "UI/UX"],
    link: "/projects",
  },
];

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function Home() {
  return (
    <div className="relative">
      <AnimatedSphere />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-16 pt-24">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
              className="mb-6"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Frontend Developer
                <span className="block">specializing in React and AI</span>
              </h1>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I&apos;m{" "}
              <span className="font-semibold text-primary">Pedro Santos</span>{" "}
              👋, a frontend developer specializing in React, Next.js, and AI
              integration. I'm also the founder of{" "}
              <Link
                href="https://melro.io"
                target="_blank"
                className="font-semibold text-primary hover:underline"
              >
                Melro.io
              </Link>
              , where we build innovative AI-powered solutions.
            </motion.p>

            <motion.div
              className="mb-8 flex flex-col justify-center gap-4 sm:flex-row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 text-base backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                href="https://github.com/pedrocarlos-ti"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full bg-card/80 p-2.5 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full bg-card/80 p-2.5 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full bg-card/80 p-2.5 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:pedrocarlos.ti@gmail.com"
                className="group flex items-center justify-center rounded-full bg-card/80 p-2.5 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-muted-foreground mb-2">
              Scroll
            </span>
            <div className="h-6 w-1 rounded-full bg-muted-foreground/30" />
          </div>
        </motion.div>
      </section>

      {/* Tech Carousel Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Technical Expertise
            </h2>
          </motion.div>
          <TechCarousel />
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        className="bg-gradient-to-b from-muted/50 to-transparent py-20 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
              A selection of my recent open source work using React, TypeScript,
              and advanced web technologies
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="transition-all group-hover:translate-x-1"
                      >
                        <Link href={project.link}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                asChild
                className="rounded-full px-6 py-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Melro.io Section */}
      <motion.section
        className="py-20 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
              Founder of Melro.io
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
              Providing innovative AI-powered solutions for businesses
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-transparent p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <h3 className="text-2xl font-bold mb-4">What We Do</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>AI-powered MVPs for startups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>Custom software development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>Technology consulting</span>
                  </li>
                </ul>
                <Button asChild className="rounded-full">
                  <Link href="https://melro.io" target="_blank">
                    Visit Melro.io
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-transparent p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <h3 className="text-2xl font-bold mb-4">My Role</h3>
                <p className="mb-4 text-muted-foreground">
                  As the founder of Melro.io, I lead our technical direction and
                  work closely with clients to build solutions that solve real
                  business problems.
                </p>
                <p className="text-muted-foreground">
                  My expertise in React, Next.js, and AI integration allows me
                  to create cutting-edge applications that deliver exceptional
                  user experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Me CTA Section */}
      <motion.section
        className="py-16 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 p-10 text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Want to know more about me?
            </h2>
            <p className="mb-8 text-muted-foreground md:text-lg">
              Check out my about page to learn more about my experience, skills,
              journey as a developer, and my work with Melro.io.
            </p>
            <Button
              asChild
              className="rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              <Link href="/about">
                About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
