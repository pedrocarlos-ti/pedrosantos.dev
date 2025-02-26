"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";
import { Briefcase, Download, GraduationCap, Award, Mail } from "lucide-react";
import Link from "next/link";

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

const timelineItems = [
  {
    title: "Senior Frontend Developer",
    subtitle: "Tech Company",
    date: "2021 - Present",
    description:
      "Leading frontend development for multiple projects, implementing modern React applications with Next.js, TypeScript, and TailwindCSS. Mentoring junior developers and establishing best practices for the team.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Team Leadership"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Frontend Developer",
    subtitle: "Digital Agency",
    date: "2018 - 2021",
    description:
      "Developed responsive web applications and collaborated with designers to create engaging user experiences. Worked on projects for clients in various industries including e-commerce, finance, and healthcare.",
    tags: ["React", "JavaScript", "CSS", "UI/UX", "Client Projects"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Junior Web Developer",
    subtitle: "Startup",
    date: "2016 - 2018",
    description:
      "Started my career building websites and learning modern frontend technologies. Contributed to the development of the company's main product and gained experience in agile methodologies.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Design"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Bachelor's Degree in Computer Science",
    subtitle: "University Name",
    date: "2012 - 2016",
    description:
      "Studied computer science with a focus on web development and user interface design. Participated in various hackathons and coding competitions.",
    tags: ["Computer Science", "Web Development", "UI Design"],
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
  },
  {
    title: "Web Development Certification",
    subtitle: "Online Learning Platform",
    date: "2015",
    description:
      "Completed an intensive web development bootcamp, learning modern frontend and backend technologies.",
    tags: ["Full Stack", "Certification", "Bootcamp"],
    icon: <Award className="h-4 w-4 text-primary" />,
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
          Frontend developer specializing in creating modern, responsive, and user-friendly web applications
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20 flex flex-col-reverse items-center gap-12 md:flex-row"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">Pedro Santos</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
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
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Avatar className="h-48 w-48 border-4 border-background shadow-lg">
            <AvatarImage
              src="/images/avatar-placeholder.svg"
              alt="Pedro Santos"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-20"
      >
        <Tabs defaultValue="skills" className="w-full">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="mb-6 text-3xl font-bold">Skills & Expertise</h2>
            <TabsList>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="skills" className="mt-0">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden border shadow-sm transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl">
                        {skill.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="mb-2 font-medium">{skill.name}</h3>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="mt-2 text-right text-xs text-muted-foreground">
                        {skill.level}%
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tech" className="mt-0">
            <TechStack />
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Career Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="mb-6 text-center text-3xl font-bold">My Journey</h2>
        <p className="mb-12 text-center text-muted-foreground">
          A timeline of my professional career and education
        </p>
        <Timeline items={timelineItems} />
      </motion.div>
    </div>
  );
}
