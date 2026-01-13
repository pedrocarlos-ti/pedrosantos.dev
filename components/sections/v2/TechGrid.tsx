"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
  proficiency: number;
}

const techItems: TechItem[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB", proficiency: 5 },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#fff", proficiency: 5 },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6", proficiency: 5 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E", proficiency: 5 },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4", proficiency: 5 },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB", proficiency: 4 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933", proficiency: 4 },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E10098", proficiency: 4 },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248", proficiency: 3 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032", proficiency: 5 },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#764ABC", proficiency: 4 },
  { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", color: "#47848F", proficiency: 3 },
];

const proficiencyLabels = ["", "Basic", "Intermediate", "Advanced", "Expert", "Master"];

const floatAnimation = (delay: number) => ({
  y: [0, -8, 0],
  transition: {
    duration: 3 + Math.random() * 2,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay * 0.2,
  },
});

export function TechGrid() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
        {techItems.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            animate={hoveredTech === null ? floatAnimation(i) : {}}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="group"
          >
            <motion.div
              className="relative flex flex-col items-center p-4 md:p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-border transition-all duration-300 cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              style={{
                boxShadow: hoveredTech === tech.name 
                  ? `0 20px 40px -15px ${tech.color}30, 0 0 0 1px ${tech.color}20` 
                  : 'none',
              }}
            >
              {/* Glow background */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Icon with subtle rotation on hover */}
              <motion.div 
                className="relative w-12 h-12 md:w-14 md:h-14 mb-3"
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* Name */}
              <span className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>

              {/* Proficiency dots - always visible but subtle, highlighted on hover */}
              <div className="flex gap-1 justify-center mt-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <motion.div
                    key={level}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      level <= tech.proficiency 
                        ? hoveredTech === tech.name 
                          ? 'bg-foreground scale-110' 
                          : 'bg-muted-foreground/40'
                        : 'bg-muted-foreground/20'
                    }`}
                    animate={hoveredTech === tech.name && level <= tech.proficiency ? {
                      scale: [1, 1.3, 1],
                      transition: { delay: level * 0.05, duration: 0.3 }
                    } : {}}
                  />
                ))}
              </div>

              {/* Proficiency label on hover */}
              <motion.span
                className="text-[10px] text-muted-foreground mt-1 h-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredTech === tech.name ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {proficiencyLabels[tech.proficiency]}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
