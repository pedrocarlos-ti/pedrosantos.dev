"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type TechItem = {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
  css?: string;
  category: "frontend" | "backend" | "mobile" | "design" | "tools";
};

const techStack: TechItem[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Building interactive UIs with React and its ecosystem including hooks, context, and state management solutions.",
    proficiency: 95,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "Creating performant, SEO-friendly applications with server-side rendering and static site generation.",
    proficiency: 90,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Extensive experience with modern JavaScript (ES6+) features and patterns.",
    proficiency: 95,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Building type-safe applications with TypeScript to improve code quality and developer experience.",
    proficiency: 90,
    category: "frontend",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Crafting semantic, accessible HTML markup for better SEO and user experience.",
    proficiency: 95,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "Creating responsive layouts and animations with modern CSS techniques.",
    proficiency: 90,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description:
      "Rapidly building custom designs with utility-first CSS framework.",
    proficiency: 95,
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Building server-side applications and APIs with Node.js.",
    proficiency: 85,
    category: "backend",
  },
  {
    name: "Bun",
    icon: "https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png",
    description:
      "Leveraging Bun as a fast JavaScript runtime, bundler, test runner and package manager.",
    proficiency: 80,
    category: "backend",
  },
  {
    name: "Appwrite",
    icon: "https://avatars.githubusercontent.com/u/25003669?s=200&v=4",
    description:
      "Building applications with Appwrite's backend-as-a-service platform for authentication, databases, and storage.",
    proficiency: 85,
    category: "backend",
  },
  {
    name: "Electron",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
    description:
      "Creating cross-platform desktop applications using web technologies.",
    proficiency: 80,
    category: "frontend",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Developing cross-platform mobile applications with React Native.",
    proficiency: 80,
    category: "mobile",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    description: "Creating fluid animations and interactive UI components.",
    proficiency: 85,
    css: "dark:invert",
    category: "design",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Version control and collaboration using Git and GitHub.",
    proficiency: 90,
    category: "tools",
  },
];

const categories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "mobile", name: "Mobile" },
  { id: "design", name: "Design" },
  { id: "tools", name: "Tools" },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTech =
    activeCategory === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Technical Expertise</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I work with to build modern, responsive, and
            user-friendly applications
          </p>
        </motion.div>

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ y: -5 }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex cursor-pointer flex-col items-center rounded-xl border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="mb-4 h-16 w-16">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className={`h-full w-full object-contain ${tech.css}`}
                      />
                    </div>
                    <h3 className="text-center text-sm font-medium">
                      {tech.name}
                    </h3>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                    <div className="pt-2">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs font-medium">Proficiency</span>
                        <span className="text-xs font-medium">
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary transition-all"
                          style={{ width: `${tech.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
