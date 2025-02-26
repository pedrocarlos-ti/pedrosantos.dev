"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", level: 90 },
  { name: "Next.js", icon: "▲", level: 85 },
  { name: "TypeScript", icon: "TS", level: 80 },
  { name: "TailwindCSS", icon: "🌊", level: 90 },
  { name: "Node.js", icon: "🟢", level: 75 },
  { name: "GraphQL", icon: "◯", level: 70 },
  { name: "AI Integration", icon: "🤖", level: 80 },
  { name: "UI/UX Design", icon: "🎨", level: 75 },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2021 - Present",
    description:
      "Leading frontend development for multiple projects, implementing modern React applications with Next.js, TypeScript, and TailwindCSS.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications and collaborated with designers to create engaging user experiences.",
  },
  {
    title: "Junior Web Developer",
    company: "Startup",
    period: "2016 - 2018",
    description:
      "Started my career building websites and learning modern frontend technologies.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-4xl font-bold">About Me</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Get to know more about my background, skills, and experience
        </p>
      </motion.div>

      <div className="grid gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center md:items-start"
        >
          <Avatar className="mb-8 h-32 w-32 border-4 border-background shadow-lg">
            <AvatarImage
              src="/images/avatar-placeholder.svg"
              alt="Pedro Santos"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <h2 className="mb-6 text-2xl font-bold">Pedro Santos</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a passionate frontend developer with over 6 years of
              experience building modern web applications. I specialize in
              React, Next.js, and creating beautiful user interfaces with
              TailwindCSS.
            </p>
            <p>
              My approach combines technical expertise with a keen eye for
              design, ensuring that the applications I build are not only
              functional but also provide an exceptional user experience.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying
              outdoor activities.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-6 text-2xl font-bold">My Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{skill.name}</h3>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="mb-8 text-2xl font-bold">Experience</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
