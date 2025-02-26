"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Email",
    href: "mailto:hello@pedrosantos.dev",
    icon: <Mail className="h-5 w-5" />,
  },
];

export function Footer() {
  return (
    <motion.footer
      className="border-t bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-xl font-bold transition-colors hover:text-primary"
            >
              Pedro Santos
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
              Frontend Developer specializing in React and AI. Creating modern,
              responsive, and user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={link.name}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Pedro Santos. All rights reserved.</p>
          <p className="mt-2">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TailwindCSS
            </Link>
            , and{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              shadcn/ui
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
