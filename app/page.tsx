"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, AtSign } from "lucide-react";
import Link from "next/link";
import { AnimatedSphere } from "@/components/three/AnimatedSphere";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Download,
  GraduationCap,
  Send,
} from "lucide-react";
import { TechCarousel } from "@/components/sections/TechCarousel";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "Select Script",
    description:
      "A VS Code extension providing a quick and intuitive dropdown selector for your package.json scripts.",
    image: "/images/placeholder.svg",
    tags: ["TypeScript", "VS Code Extension", "Developer Tools"],
    link: "/projects",
  },
  {
    id: 2,
    title: "AI Tree",
    description:
      "A platform for learning and sharing knowledge about AI with interactive visualizations and community features.",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    link: "/projects",
  },
  {
    id: 3,
    title: "Electron Draw",
    description:
      "Professional screen annotation tool built with Electron featuring transparent window overlay and drawing tools.",
    image: "/images/placeholder.svg",
    tags: ["Electron", "TypeScript", "Desktop App", "UI/UX"],
    link: "/projects",
  },
];

// Form schema for contact form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

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

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
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
              <span className="font-semibold text-primary">Pedro Santos</span>{" "}
              👋, a frontend developer specializing in React, Next.js, and AI
              integration. I'm also the founder of{" "}
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
            <span className="text-sm font-medium text-muted-foreground mb-2">
              Scroll
            </span>
            <div className="h-6 w-1 rounded-full bg-muted-foreground/30" />
          </div>
        </motion.div>
      </section>

      {/* Tech Carousel Section */}
      <motion.section
        className="py-16"
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
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Technical Expertise
            </h2>
          </motion.div>
          <TechCarousel />
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        className="bg-gradient-to-b from-muted/50 to-transparent py-20 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
              A selection of my recent open source work using React, TypeScript,
              and advanced web technologies
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="transition-all group-hover:translate-x-1"
                      >
                        <Link href={project.link}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                variant="outline"
                className="gap-2 rounded-full"
              >
                <Link
                  href="https://github.com/pedrocarlos-ti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Section - Adapted from About Page */}
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
                      <Timeline
                        items={[
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
                        ]}
                      />
                    </TabsContent>
                    <TabsContent value="education">
                      <Timeline
                        items={[
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
                        ]}
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section - Adapted from Contact Page */}
      <motion.section
        id="contact"
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
            <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    You can reach me through any of the following methods.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      {
                        title: "Email",
                        value: "pedrocarlos.ti@gmail.com",
                        href: "mailto:pedrocarlos.ti@gmail.com",
                      },
                      {
                        title: "LinkedIn",
                        value: "in/pedrocarlos-santos",
                        href: "https://linkedin.com/in/pedrocarlos-santos",
                      },
                      {
                        title: "Twitter",
                        value: "@pcsantos_dev",
                        href: "https://twitter.com/pcsantos_dev",
                      },
                      {
                        title: "Location",
                        value: "Lisbon, Portugal",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-sm font-medium text-muted-foreground">
                          {item.title}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-primary hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-medium">{item.value}</span>
                        )}
                      </div>
                    ))}

                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Melro.io</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For business inquiries related to Melro.io services, you
                        can also reach out at:
                      </p>
                      <a
                        href="mailto:developer@melro.io"
                        className="text-primary hover:underline"
                      >
                        developer@melro.io
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// Contact Form Component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      // Success
      setFormStatus({
        type: "success",
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      // Error
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Me a Message</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 md:gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Message subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project, questions, or feedback..."
                      className="min-h-40 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide as much detail as possible.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  <span>Sending...</span>
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Send className="h-4 w-4 mr-2" />
                  <span>Send Message</span>
                </motion.div>
              )}
            </Button>
          </form>
        </Form>

        {/* Form submission status */}
        {formStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg ${
              formStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {formStatus.type === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              )}
              {formStatus.message}
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
