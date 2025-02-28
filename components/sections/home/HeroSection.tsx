"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { AnimatedSphere } from "@/components/three/AnimatedSphere";

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

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <AnimatedSphere />

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
            <span className="font-semibold text-primary">Pedro Santos</span> 👋,
            a frontend developer specializing in React, Next.js, and AI
            integration. I&apos;m also the founder of{" "}
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
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    const headerHeight = 64; // Adjust based on your header height
                    const targetPosition =
                      aboutSection.getBoundingClientRect().top +
                      window.pageYOffset -
                      headerHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                About Me
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    const headerHeight = 64; // Adjust based on your header height
                    const targetPosition =
                      contactSection.getBoundingClientRect().top +
                      window.pageYOffset -
                      headerHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                size="lg"
                className="rounded-full px-8 py-6 text-base backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
              >
                Contact Me
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
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
          <span className="text-xs md:text-sm font-medium text-muted-foreground/70 mb-2">
            Scroll
          </span>
          <motion.div 
            className="h-10 w-[2px] rounded-full bg-muted-foreground/20"
            initial={{ height: "10px" }}
            animate={{ height: "24px" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
