"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readingTime: string;
  category: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Performant React Applications",
    excerpt: "Learn how to optimize your React applications for better performance and user experience.",
    coverImage: "/images/blog/blog-1.jpg",
    date: "May 15, 2025",
    readingTime: "8 min read",
    category: "React",
    slug: "building-performant-react-applications",
  },
  {
    id: "2",
    title: "The Power of Next.js App Router",
    excerpt: "Exploring the benefits and features of Next.js App Router for modern web development.",
    coverImage: "/images/blog/blog-2.jpg",
    date: "April 28, 2025",
    readingTime: "6 min read",
    category: "Next.js",
    slug: "power-of-nextjs-app-router",
  },
  {
    id: "3",
    title: "Styling with Tailwind CSS: Best Practices",
    excerpt: "Tips and tricks for using Tailwind CSS effectively in your projects.",
    coverImage: "/images/blog/blog-3.jpg",
    date: "April 10, 2025",
    readingTime: "5 min read",
    category: "CSS",
    slug: "styling-with-tailwind-css-best-practices",
  },
];

export function BlogPreview() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h2 className="mb-2 text-3xl font-bold">From My Blog</h2>
            <p className="text-muted-foreground">
              Thoughts, insights, and tutorials on web development
            </p>
          </div>
          <Button variant="outline" asChild className="rounded-full">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 mt-2 text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary hover:underline hover:underline-offset-4"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="p-0 hover:bg-transparent hover:text-primary"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
