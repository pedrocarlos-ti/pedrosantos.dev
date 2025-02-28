"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Briefcase, Download, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";

// Timeline item interface
interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
  description: string;
}

export function AboutSection() {
  const experienceItems: TimelineItem[] = [
    {
      title: "Software Engineer",
      subtitle: "Melro.io",
      date: "2023 - Present",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Building innovative AI-powered solutions using React, Next.js, and TypeScript.",
    },
    {
      title: "Frontend Developer",
      subtitle: "Previous Company",
      date: "2020 - 2023",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Developed and maintained web applications using React and related technologies.",
    },
    {
      title: "Web Developer",
      subtitle: "First Job",
      date: "2018 - 2020",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Worked on building responsive websites and applications.",
    },
  ];

  const educationItems: TimelineItem[] = [
    {
      title: "Computer Science",
      subtitle: "University Name",
      date: "2014 - 2018",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Bachelor's degree with focus on software development and computer science principles.",
    },
    {
      title: "Web Development Certification",
      subtitle: "Training Program",
      date: "2017",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Specialized training in modern web development frameworks and practices.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Learn about my experience, skills, and journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                  >
                    <div className="absolute -inset-0.5 rounded-full bg-primary/20 blur-sm"></div>
                    <Avatar className="h-48 w-48 rounded-full border-4 border-primary/20">
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/18473317?v=4"
                        alt="Pedro Santos"
                      />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">Pedro Santos</h3>
                  <p className="text-muted-foreground mb-4 text-center">
                    Frontend Developer specializing in React, Next.js and AI
                    integration
                  </p>

                  <div className="grid grid-cols-1 gap-3 w-full">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="mailto:pedrocarlos.ti@gmail.com">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="/resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Download CV
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main content column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="skills">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills">
                    <TechStack />
                  </TabsContent>
                  <TabsContent value="experience">
                    <Timeline items={experienceItems} />
                  </TabsContent>
                  <TabsContent value="education">
                    <Timeline items={educationItems} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
