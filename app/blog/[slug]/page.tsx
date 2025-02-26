"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/sections/BlogPreview";

// Sample blog posts data - in a real app, this would come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Performant React Applications",
    excerpt:
      "Learn how to optimize your React applications for better performance. This guide covers code splitting, memoization, and other techniques to make your apps faster.",
    content:
      "React has become one of the most popular JavaScript libraries for building user interfaces. However, as applications grow in complexity, performance can become an issue. In this article, we'll explore various techniques to optimize your React applications, including code splitting with React.lazy and Suspense, memoization with useMemo and useCallback, virtualization for long lists, and more. By implementing these techniques, you can significantly improve the performance of your React applications and provide a better user experience.\n\nCode Splitting with React.lazy and Suspense\n\nCode splitting is a technique that allows you to split your code into smaller chunks, which can be loaded on demand. This can significantly improve the initial load time of your application, especially if it's large.\n\nHere's how you can implement code splitting with React.lazy and Suspense:\n\nMemoization with useMemo and useCallback\n\nMemoization is a technique used to optimize expensive calculations by caching the results and returning the cached result when the same inputs occur again.\n\nReact provides two hooks for memoization: useMemo and useCallback.\n\nuseMemo\n\nThe useMemo hook is used to memoize expensive calculations.\n\nuseCallback\n\nThe useCallback hook is similar to useMemo, but it's used to memoize functions.\n\nVirtualization for Long Lists\n\nIf your application renders long lists of data, you can use virtualization to only render the items that are currently visible in the viewport. This can significantly improve performance.\n\nThere are several libraries available for virtualization in React, such as react-window and react-virtualized.\n\nConclusion\n\nBy implementing these techniques, you can significantly improve the performance of your React applications. Remember to always measure the performance before and after optimization to ensure that your changes are actually improving the user experience.",
    slug: "building-performant-react-applications",
    date: "2023-10-15",
    readTime: "8 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "React",
    image: "/images/placeholder.svg",
    tags: ["React", "Performance", "JavaScript", "Web Development"],
  },
  {
    id: "2",
    title: "Getting Started with Next.js App Router",
    excerpt:
      "Explore the new App Router in Next.js 13+ and learn how to build modern web applications with this powerful framework.",
    content:
      "Next.js 13 introduced a revolutionary new routing system called the App Router. This new approach to routing in Next.js applications brings several benefits, including nested layouts, server components, streaming, and more. In this comprehensive guide, we'll walk through the key concepts of the App Router, including file-system based routing, layout components, loading states, error handling, and more.\n\nFile-System Based Routing\n\nThe App Router uses a file-system based router where folders are used to define routes. Each folder represents a route segment that maps to a URL segment. To create a UI for a route, create a page file inside a folder.\n\nLayout Components\n\nLayout components enable you to share UI between multiple pages. A layout wraps a page or child layouts, and persists across navigations, maintaining state and avoiding expensive re-renders.\n\nServer Components\n\nNext.js 13 introduces React Server Components, which allow you to render components on the server. This can significantly improve performance by reducing the JavaScript sent to the client.\n\nStreaming\n\nStreaming enables you to progressively render UI from the server. This allows the user to see parts of the page before the entire page is rendered, improving perceived performance.\n\nConclusion\n\nThe App Router in Next.js 13+ represents a significant evolution in how we build web applications with Next.js. By leveraging features like server components, streaming, and nested layouts, we can create faster, more responsive, and more maintainable applications.",
    slug: "getting-started-with-nextjs-app-router",
    date: "2023-11-02",
    readTime: "10 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "Next.js",
    image: "/images/placeholder.svg",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
  },
  {
    id: "3",
    title: "The Power of TailwindCSS: A Practical Guide",
    excerpt:
      "Discover why TailwindCSS has become so popular and how to use it effectively in your projects. Learn best practices and tips for creating beautiful UIs.",
    content:
      "TailwindCSS has revolutionized the way developers approach CSS. Instead of writing custom CSS, Tailwind provides a set of utility classes that can be composed to build any design. This approach offers several advantages, including faster development, consistent design, and easier maintenance. In this guide, we'll explore the key features of TailwindCSS and how to use it effectively in your projects.\n\nUtility-First Approach\n\nTailwindCSS takes a utility-first approach to CSS. Instead of writing custom CSS for each component, you use utility classes directly in your HTML. This approach allows you to build complex designs without leaving your HTML or writing a single line of custom CSS.\n\nResponsive Design\n\nTailwindCSS makes responsive design incredibly easy with its responsive modifiers. You can apply different styles at different breakpoints by prefixing utility classes with responsive modifiers like sm:, md:, lg:, and xl:.\n\nCustomization\n\nOne of the strengths of TailwindCSS is its customizability. You can customize everything from colors and spacing to typography and breakpoints through the tailwind.config.js file.\n\nDark Mode\n\nTailwindCSS provides built-in support for dark mode. You can use the dark: modifier to apply different styles when dark mode is enabled.\n\nConclusion\n\nTailwindCSS offers a powerful and flexible approach to styling web applications. By leveraging its utility classes, responsive modifiers, and customization options, you can build beautiful and responsive UIs with minimal effort.",
    slug: "the-power-of-tailwindcss",
    date: "2023-11-20",
    readTime: "7 min read",
    author: {
      name: "Pedro Santos",
      avatar: "/images/avatar-placeholder.svg",
    },
    category: "CSS",
    image: "/images/placeholder.svg",
    tags: ["TailwindCSS", "CSS", "Web Design", "Frontend"],
  },
];

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Button>
        </Link>

        <Card className="overflow-hidden border-0 shadow-none">
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="mt-8 text-2xl font-bold">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="mt-6 text-xl font-bold">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                } else if (paragraph.startsWith("```")) {
                  const codeContent = paragraph
                    .split("\n")
                    .slice(1, -1)
                    .join("\n");
                  return (
                    <pre key={index} className="rounded-lg bg-muted p-4">
                      <code className="text-sm">{codeContent}</code>
                    </pre>
                  );
                } else {
                  return <p key={index}>{paragraph}</p>;
                }
              })}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
