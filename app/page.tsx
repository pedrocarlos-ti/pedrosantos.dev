"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 py-12 md:py-20 mx-auto">
      {/* Hero Section */}
      <motion.div
        className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frontend Developer specializing in React and AI
        </motion.h1>

        <motion.p
          className="mb-8 text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hello, I&apos;m Pedro Santos 👋, a frontend developer with a passion
          for creating modern, responsive, and user-friendly web applications
          with cutting-edge technologies.
        </motion.p>

        <motion.div
          className="mb-10 flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-full px-6"
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
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="mx-auto mt-16 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="mb-10 text-center text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/placeholder.svg"
                  alt={`Project ${i}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Project {i}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  A brief description of this amazing project and the
                  technologies used.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      React
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Next.js
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    View <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
