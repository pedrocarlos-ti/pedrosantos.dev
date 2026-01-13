"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ArrowRight, ChevronDown, Download } from "lucide-react";
import Link from "next/link";
import { TechCarousel } from "@/components/sections/TechCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { V2ContactSection } from "@/components/sections/v2/ContactSection";
import { V2ProjectsSection } from "@/components/sections/v2/ProjectsSection";

const featuredProjects = [
  {
    id: 1,
    title: "Select Script",
    description: "A VS Code extension providing a quick and intuitive dropdown selector for your package.json scripts.",
    image: "/images/placeholder.svg",
    tags: ["TypeScript", "VS Code Extension", "Developer Tools"],
    link: "/projects",
  },
  {
    id: 2,
    title: "AI Tree",
    description: "A platform for learning and sharing knowledge about AI with interactive visualizations and community features.",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    link: "/projects",
  },
  {
    id: 3,
    title: "Electron Draw",
    description: "Professional screen annotation tool built with Electron featuring transparent window overlay and drawing tools.",
    image: "/images/placeholder.svg",
    tags: ["Electron", "TypeScript", "Desktop App", "UI/UX"],
    link: "/projects",
  },
];

const experienceItems = [
  {
    title: "Founder & Frontend Developer",
    subtitle: "Melro.io",
    date: "2023 - Present",
    icon: <Briefcase className="h-4 w-4" />,
    description: "Founded Melro.io, a technology company focused on providing customized software solutions for local businesses.",
  },
  {
    title: "Frontend Developer",
    subtitle: "Aubay Portugal",
    date: "2021 - Present",
    icon: <Briefcase className="h-4 w-4" />,
    description: "Working as part of an agile team, developing new features using React, GraphQL, and modern testing practices.",
  },
  {
    title: "Software Engineer",
    subtitle: "N3urons",
    date: "2018 - 2021",
    icon: <Briefcase className="h-4 w-4" />,
    description: "Planned, architected, and developed scalable software solutions using React, React Native, and Node.js.",
  },
];

const educationItems = [
  {
    title: "React Native Specialization",
    subtitle: "Rocketseat",
    date: "2025",
    icon: <GraduationCap className="h-4 w-4" />,
    description: "Comprehensive specialization in React Native development.",
  },
  {
    title: "Meta React Native Specialization",
    subtitle: "Coursera",
    date: "2023",
    icon: <GraduationCap className="h-4 w-4" />,
    description: "Mobile app development from fundamentals to advanced concepts.",
  },
  {
    title: "Software Engineering Specialization",
    subtitle: "Unibratec",
    date: "2016 - 2018",
    icon: <GraduationCap className="h-4 w-4" />,
    description: "Specialization focused on SOA and IoT architectures.",
  },
];

const certificationItems = [
  {
    title: "Mastering Next.js 13 with TypeScript",
    subtitle: "Mosh Hamedani",
    date: "2024",
    icon: <Award className="h-4 w-4" />,
    description: "Advanced course in Next.js 13 with TypeScript.",
  },
  {
    title: "Scrum Foundation Professional Certificate",
    subtitle: "CertiProf",
    date: "2020",
    icon: <Award className="h-4 w-4" />,
    description: "Professional certification in Scrum methodology.",
  },
];

export default function V2LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      {/* Hero Section - Full viewport with parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        {/* Floating decorative blurred circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/8 blur-[120px]"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-blue-500/8 blur-[80px]"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, 40, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="block">Frontend Developer</span>
              <span className="block bg-gradient-to-r from-muted-foreground/70 via-primary/60 to-muted-foreground/70 bg-clip-text text-transparent">specializing in React & AI</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              I&apos;m <span className="text-foreground font-semibold">Pedro Santos</span>, 
              crafting exceptional digital experiences with modern web technologies. 
              Founder of{" "}
              <Link 
                href="https://melro.io" 
                target="_blank" 
                className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                Melro.io
              </Link>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <Button
                  size="lg"
                  className="relative rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all bg-primary"
                  onClick={() => scrollToSection("about")}
                >
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium hover:bg-accent transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-3"
            >
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/pedrocarlos-ti", label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/pedrocarlos-santos", label: "LinkedIn" },
                { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/pcsantos_dev", label: "Twitter" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:pedrocarlos.ti@gmail.com", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-3 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollToSection("tech")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </section>

      {/* Tech Carousel Section */}
      <motion.section
        id="tech"
        className="py-24 md:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Technologies
            </span>
            <div className="relative inline-block">
              <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl" />
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold">
                Technical Expertise
              </h2>
            </div>
          </motion.div>
          <TechCarousel />
        </div>
      </motion.section>

      {/* Projects Section */}
      <V2ProjectsSection projects={featuredProjects} />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 md:py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Decorative animated elements */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/40"
          animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 rounded-full bg-purple-500/30"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-500/40"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Background
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 8 years in technology, I&apos;ve evolved from support roles to software development, 
              specializing in creating scalable applications using agile methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start max-w-6xl mx-auto">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24 p-6 md:p-8 rounded-2xl bg-card border border-border/50 text-center">
                <motion.div
                  className="relative mb-6 inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-sm" />
                  <Avatar className="h-32 w-32 rounded-full border-4 border-background shadow-xl relative">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/18473317?v=4"
                      alt="Pedro Santos"
                    />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">Pedro Santos</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Software Engineer specializing in React, Next.js, and AI integration
                </p>

                <div className="flex flex-col gap-3">
                  <Button 
                    className="w-full rounded-full" 
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full rounded-full" 
                    asChild
                  >
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    Based in Covilhã, Portugal
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tabs Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8">
                <Tabs defaultValue="skills" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted/50 p-1 rounded-full">
                    <TabsTrigger value="skills" className="rounded-full text-sm">Skills</TabsTrigger>
                    <TabsTrigger value="experience" className="rounded-full text-sm">Experience</TabsTrigger>
                    <TabsTrigger value="education" className="rounded-full text-sm">Education</TabsTrigger>
                    <TabsTrigger value="certifications" className="rounded-full text-sm">Certs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills" className="mt-0">
                    <TechStack />
                  </TabsContent>
                  <TabsContent value="experience" className="mt-0">
                    <Timeline items={experienceItems} />
                  </TabsContent>
                  <TabsContent value="education" className="mt-0">
                    <Timeline items={educationItems} />
                  </TabsContent>
                  <TabsContent value="certifications" className="mt-0">
                    <Timeline items={certificationItems} />
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <V2ContactSection />
    </main>
  );
}
