"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";
import { Briefcase, Download, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    name: "React",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        width={32}
        height={32}
      />
    ),
    level: 95,
  },
  {
    name: "Next.js",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        width={32}
        height={32}
      />
    ),
    level: 90,
  },
  {
    name: "TypeScript",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        width={32}
        height={32}
      />
    ),
    level: 90,
  },
  {
    name: "TailwindCSS",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        alt="TailwindCSS"
        width={32}
        height={32}
      />
    ),
    level: 90,
  },
  {
    name: "Node.js",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        width={32}
        height={32}
      />
    ),
    level: 85,
  },
  {
    name: "AI Integration",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
        <path d="M7 10v2"></path>
        <path d="M17 10v2"></path>
        <path d="M8 16s1.5 1 4 1 4-1 4-1"></path>
        <path d="M9 7h1"></path>
        <path d="M14 7h1"></path>
      </svg>
    ),
    level: 85,
  },
  {
    name: "React Native",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React Native"
        width={32}
        height={32}
      />
    ),
    level: 85,
  },
  {
    name: "UI/UX Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r="2.5"></circle>
        <path d="M17.5 10h-10a2.5 2.5 0 0 0 0 5h10a2.5 2.5 0 0 0 0-5z"></path>
        <circle cx="6.5" cy="17.5" r="2.5"></circle>
      </svg>
    ),
    level: 80,
  },
];

const timelineItems = [
  {
    title: "Software Engineer",
    subtitle: "Melro.io",
    date: "2023 - Present",
    description:
      "Developing innovative AI-powered applications using Next.js, React, and TypeScript. Leading frontend development and exploring cutting-edge AI technologies to create user-friendly solutions.",
    tags: ["React", "Next.js", "TypeScript", "AI", "OpenAI"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Senior Frontend Developer",
    subtitle: "Tech Company",
    date: "2020 - 2023",
    description:
      "Led frontend development for multiple projects, implementing modern React applications with Next.js, TypeScript, and TailwindCSS. Mentored junior developers and established best practices for the team.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Team Leadership"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Frontend Developer",
    subtitle: "Digital Agency",
    date: "2017 - 2020",
    description:
      "Developed responsive web applications and collaborated with designers to create engaging user experiences. Worked on projects for clients in various industries including e-commerce, finance, and healthcare.",
    tags: ["React", "JavaScript", "CSS", "UI/UX", "Client Projects"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Software Support Specialist",
    subtitle: "IT Company",
    date: "2013 - 2017",
    description:
      "Started my career in tech providing software support before transitioning to development. Gained valuable experience in understanding user needs and solving technical challenges.",
    tags: ["Technical Support", "Customer Service", "Problem Solving"],
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Postgraduate Degree in Software Engineering",
    subtitle: "University",
    date: "2018 - 2019",
    description:
      "Advanced studies in software engineering principles, design patterns, and modern development methodologies.",
    tags: ["Software Engineering", "Design Patterns", "Advanced Studies"],
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
  },
  {
    title: "Bachelor's Degree in Information Systems",
    subtitle: "University",
    date: "2009 - 2013",
    description:
      "Studied information systems with a focus on software development and IT infrastructure. Built a strong foundation in computer science principles.",
    tags: ["Information Systems", "Software Development", "Computer Science"],
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-transparent opacity-30" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Software Engineer specializing in React, Next.js, and AI integration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2 flex flex-col items-center justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 rounded-full bg-primary/20 blur-sm"></div>
                <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-background shadow-xl relative">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/18473317?v=4"
                    alt="Pedro Santos"
                  />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
              </motion.div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://github.com/pedrocarlos-ti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ y: -5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://twitter.com/pedrocarlos_ti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ y: -5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/pedrocarlos-ti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ y: -5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </motion.a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Pedro Santos</h2>
                <p className="text-xl font-medium text-primary mb-4">
                  Software Engineer & AI Enthusiast
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-base md:text-lg">
                  I&apos;m a passionate Software Engineer with over a decade of
                  experience in the tech industry, specializing in React,
                  Next.js, and AI integration. I&apos;m the founder of{" "}
                  <Link href="https://melro.io" className="font-medium text-foreground hover:text-primary transition-colors" target="_blank">
                    Melro.io
                  </Link>{" "}
                  🐦‍⬛, where I lead the development of innovative AI-powered solutions for businesses.
                </p>
                <p>
                  With a degree in Information Systems and a postgraduate degree
                  in Software Engineering, I navigate through all phases of the
                  software development lifecycle—from conceptualization to final
                  deployment—utilizing agile methodologies to build scalable
                  applications.
                </p>
                <p>
                  I&apos;m particularly excited about exploring the latest
                  advancements in AI and incorporating them into my projects,
                  pushing the boundaries of what&apos;s possible in software
                  engineering.
                </p>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">Experience:</span>
                  </div>
                  <span>10+ years in Software Development</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="font-medium">Contact:</span>
                  </div>
                  <span>pedrocarlos.ti@gmail.com</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium">Location:</span>
                  </div>
                  <span>Remote, Brazil</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="rounded-full"
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
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
              <TabsList className="grid w-full max-w-md grid-cols-2">
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
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="mb-6 text-center text-3xl font-bold">
            Featured Projects
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Some of my recent work and open-source contributions
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold">Melro.io</h3>
              <p className="mb-4 text-muted-foreground">
                AI-powered platform for innovative applications and solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Next.js
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  React
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  AI
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold">AI-Tree</h3>
              <p className="mb-4 text-muted-foreground">
                Platform for learning and sharing knowledge about AI
                technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  TypeScript
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  React
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  AI
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold">Electron Draw</h3>
              <p className="mb-4 text-muted-foreground">
                Professional screen annotation tool built with Electron and AI.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  TypeScript
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Electron
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  AI
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Melro.io Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="mb-6 text-center text-3xl font-bold">
            Melro.io - My Company
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Innovative AI-powered solutions for businesses
          </p>
          
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-transparent p-8 backdrop-blur-sm mb-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-4">About Melro.io</h3>
                <p className="mb-4 text-muted-foreground">
                  I founded Melro.io to bring innovative technological solutions to businesses, combining my expertise in web development and AI integration.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Our mission is to help companies leverage cutting-edge technology to solve real-world problems and achieve their business goals.
                </p>
                <Button 
                  asChild 
                  className="rounded-full mt-2"
                >
                  <Link href="https://melro.io" target="_blank">
                    Visit Melro.io Website
                  </Link>
                </Button>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Services We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <span className="font-medium">AI-powered MVPs</span>
                      <p className="text-sm text-muted-foreground">Rapid development of AI-enhanced minimum viable products</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Custom Software Development</span>
                      <p className="text-sm text-muted-foreground">Tailored applications built with modern technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Technology Consulting</span>
                      <p className="text-sm text-muted-foreground">Strategic guidance on technology implementation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              While Melro.io represents my business endeavors, this portfolio showcases my personal skills and experience as a software engineer.
            </p>
            <Button 
              variant="outline" 
              asChild 
              className="rounded-full"
            >
              <Link href="/contact">
                Contact Me for Business Inquiries
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
