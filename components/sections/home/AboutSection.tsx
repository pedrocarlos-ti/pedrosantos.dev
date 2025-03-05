"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Mail, Award } from "lucide-react";
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
      title: "Founder & Frontend Developer",
      subtitle: "Melro.io",
      date: "2023 - Present",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Founded Melro.io, a technology company focused on providing customized software solutions for local businesses. Developed MVPs with AI integration, personalized applications, and technological consulting services to help small businesses grow and optimize their operations.",
    },
    {
      title: "Frontend Developer",
      subtitle: "Aubay Portugal",
      date: "2021 - Present",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Working as part of an agile team, developing new features and optimizing the codebase using technologies like JavaScript, React, GraphQL, React Testing Library, and Storybook for documentation.",
    },
    {
      title: "Software Engineer",
      subtitle: "N3urons",
      date: "2018 - 2021",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Planned, architected, and developed scalable software solutions using React, React Native, Node.js, MongoDB/OracleDB, Socket.IO, and IBM Cloud services to solve business problems.",
    },
    {
      title: "Business Analyst - Fluig",
      subtitle: "TOTVS",
      date: "2018",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Implemented Fluig platform modules (Identity, Analytics, ESB, Social, WCM, ECM, BPM) and integrated systems, while developing BPM workflows using HTML, CSS, JavaScript, jQuery, and RESTful APIs.",
    },
    {
      title: "Business Intelligence Analyst",
      subtitle: "TOTVS",
      date: "2016 - 2017",
      icon: <Briefcase className="h-4 w-4" />,
      description:
        "Consulted and implemented GoodData BI solutions, performing requirements analysis, ETL processes, data warehouse creation, and developing analytical engines using MAQL for high-performance queries.",
    },
  ];

  const educationItems: TimelineItem[] = [
    {
      title: "React Native Specialization",
      subtitle: "Rocketseat",
      date: "2025",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Comprehensive specialization in React Native development, covering advanced mobile application development techniques, state management, and best practices. Skills: React, React Native, React Hooks, JavaScript.",
    },
    {
      title: "Meta React Native Specialization",
      subtitle: "Coursera",
      date: "2023",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Comprehensive specialization in React Native development by Meta, covering mobile app development from fundamentals to advanced concepts. Skills: Git, React Native, React.js, REST APIs, React Hooks, Version Control, UI.",
    },
    {
      title: "CS50's Mobile App Development with React Native",
      subtitle: "Harvard University (EDX)",
      date: "2019",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Comprehensive course on mobile application development using React Native framework, covering JavaScript, React fundamentals, and cross-platform mobile development.",
    },
    {
      title: "Software Engineering Specialization",
      subtitle: "Unibratec",
      date: "2016 - 2018",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Specialization in Software Engineering focused on service-oriented architecture (SOA) and Internet of Things (IoT), including agile project management techniques. Coursework included: Software Engineering, Data Structures, Algorithms, Computer Networks, and Database Systems.",
    },
    {
      title: "Bachelor of Information Systems",
      subtitle: "UNINABUCO (Faculdade Joaquim Nabuco)",
      date: "2010 - 2015",
      icon: <GraduationCap className="h-4 w-4" />,
      description:
        "Focused on developing and maintaining information systems for organizational data management, supporting operational, tactical, and strategic areas. Coursework included: Information Systems, Computer Science, Mathematics, Statistics, and Business Administration.",
    },
  ];

  const certificationItems: TimelineItem[] = [
    {
      title: "Mastering Next.js 13 with TypeScript",
      subtitle: "Mosh Hamedani",
      date: "2024",
      icon: <Award className="h-4 w-4" />,
      description:
        "Advanced course in Next.js 13 with TypeScript, focusing on server components, routing, and modern web development patterns.",
    },
    {
      title: "Complete React Developer",
      subtitle: "Udemy",
      date: "2022",
      icon: <Award className="h-4 w-4" />,
      description:
        "Comprehensive course covering React development with Redux, Hooks, GraphQL, and other modern web technologies.",
    },
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      subtitle: "CertiProf",
      date: "2020",
      icon: <Award className="h-4 w-4" />,
      description:
        "Professional certification in Scrum methodology and agile project management practices.",
    },
    {
      title: "Certified Kanban Associate (Kanban-ASC)",
      subtitle: "International Scrum Institute",
      date: "2020",
      icon: <Award className="h-4 w-4" />,
      description:
        "Certification in Kanban methodology for visualizing work, limiting work in progress, and maximizing efficiency.",
    },
    {
      title: "COBIT 4.1 FOUNDATION",
      subtitle: "ISACA",
      date: "2018",
      icon: <Award className="h-4 w-4" />,
      description:
        "Foundation-level certification in IT governance framework and best practices.",
    },
    {
      title: "ADVPL Advanced & Fundamental",
      subtitle: "TOTVS",
      date: "2017",
      icon: <Award className="h-4 w-4" />,
      description:
        "Certification in ADVPL programming language for TOTVS ERP customization and development.",
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
            With over 8 years in technology, I&apos;ve evolved from support
            roles to software development, specializing in creating scalable
            applications using agile methodologies
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
                    Software Engineer specializing in React, Next.js, and AI
                    integration with 8+ years of experience in technology
                  </p>

                  <div className="grid grid-cols-1 gap-3 w-full">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="#contact">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                      </Link>
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
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="certifications">
                      Certifications
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills">
                    <TechStack />
                  </TabsContent>
                  <TabsContent value="experience">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Experience</h3>
                      <Timeline items={experienceItems} />
                    </div>
                  </TabsContent>
                  <TabsContent value="education">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Education</h3>
                      <Timeline items={educationItems} />
                    </div>
                  </TabsContent>
                  <TabsContent value="certifications">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Certifications</h3>
                      <Timeline items={certificationItems} />
                    </div>
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
