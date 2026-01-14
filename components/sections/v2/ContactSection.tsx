"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, CheckCircle2, XCircle } from "lucide-react";
import { XIcon } from "@/components/ui/x-icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function V2ContactSection() {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setFormStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "pedrocarlos.ti@gmail.com",
      href: "mailto:pedrocarlos.ti@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "pedro-santos",
      href: "https://linkedin.com/in/pedro-santos",
    },
    {
      icon: <XIcon className="h-5 w-5" />,
      label: "X",
      value: "@pcgs_tsx",
      href: "https://x.com/pcgs_tsx",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Belmonte, Portugal",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Decorative gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Contact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-6 md:p-8 h-full hover:border-primary/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const content = (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  );

                  if (item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {content}
                      </Link>
                    );
                  }

                  return content;
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="font-semibold mb-2">Melro.io</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  For business inquiries:
                </p>
                <Link
                  href="mailto:developer@melro.io"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  developer@melro.io
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-6 md:p-8 hover:border-primary/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="rounded-2xl h-11 bg-background/50"
                              {...field}
                            />
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
                          <FormLabel className="text-sm font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              className="rounded-2xl h-11 bg-background/50"
                              {...field}
                            />
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
                        <FormLabel className="text-sm font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What's this about?"
                            className="rounded-2xl h-11 bg-background/50"
                            {...field}
                          />
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
                        <FormLabel className="text-sm font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project, questions, or feedback..."
                            className="min-h-32 resize-none rounded-2xl bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full sm:w-auto rounded-full px-8 h-11"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {formStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-2xl flex items-center gap-3 ${
                    formStatus.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
