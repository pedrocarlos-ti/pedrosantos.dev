"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
  proficiency: number; // 1-5
  category: "frontend" | "backend" | "tools" | "database";
}

const techItems: TechItem[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB", proficiency: 5, category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#fff", proficiency: 5, category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6", proficiency: 5, category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E", proficiency: 5, category: "frontend" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4", proficiency: 5, category: "frontend" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB", proficiency: 4, category: "frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933", proficiency: 4, category: "backend" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E10098", proficiency: 4, category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248", proficiency: 3, category: "database" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032", proficiency: 5, category: "tools" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#764ABC", proficiency: 4, category: "frontend" },
  { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", color: "#47848F", proficiency: 3, category: "tools" },
];

const proficiencyLabels = ["", "Basic", "Intermediate", "Advanced", "Expert", "Master"];

export function TechGrid() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {techItems.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="group relative"
          >
            <motion.div
              className="relative flex flex-col items-center p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              style={{
                boxShadow: hoveredTech === tech.name 
                  ? `0 8px 30px -10px ${tech.color}40` 
                  : 'none',
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>

              {/* Proficiency bar - shows on hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredTech === tech.name ? 1 : 0,
                  height: hoveredTech === tech.name ? 'auto' : 0,
                }}
                className="w-full mt-2 overflow-hidden"
              >
                <div className="flex gap-0.5 justify-center mb-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <motion.div
                      key={level}
                      className={`w-2 h-2 rounded-full ${
                        level <= tech.proficiency 
                          ? 'bg-primary' 
                          : 'bg-muted'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredTech === tech.name ? 1 : 0 }}
                      transition={{ delay: level * 0.05 }}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-center text-muted-foreground">
                  {proficiencyLabels[tech.proficiency]}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
