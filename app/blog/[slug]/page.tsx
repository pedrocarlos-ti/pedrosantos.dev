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
      "React has become one of the most popular JavaScript libraries for building user interfaces. However, as applications grow in complexity, performance can become an issue. In this article, we'll explore various techniques to optimize your React applications, including code splitting with React.lazy and Suspense, memoization with useMemo and useCallback, virtualization for long lists, and more. By implementing these techniques, you can significantly improve the performance of your React applications and provide a better user experience.\n\n## Code Splitting with React.lazy and Suspense\n\nCode splitting is a technique that allows you to split your code into smaller chunks, which can be loaded on demand. This can significantly improve the initial load time of your application, especially if it's large.\n\nHere's how you can implement code splitting with React.lazy and Suspense:\n\n```jsx\nimport React, { Suspense } from 'react';\n\nconst HeavyComponent = React.lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <HeavyComponent />\n      </Suspense>\n    </div>\n  );\n}\n```\n\n## Memoization with useMemo and useCallback\n\nMemoization is a technique used to optimize expensive calculations by caching the results and returning the cached result when the same inputs occur again.\n\nReact provides two hooks for memoization: useMemo and useCallback.\n\n### useMemo\n\nThe useMemo hook is used to memoize expensive calculations:\n\n```jsx\nimport { useMemo } from 'react';\n\nfunction MyComponent({ data }) {\n  const processedData = useMemo(() => {\n    // Expensive calculation\n    return data.map(item => item * 2);\n  }, [data]); // Only recalculate if data changes\n\n  return <div>{processedData.join(', ')}</div>;\n}\n```\n\n### useCallback\n\nThe useCallback hook is similar to useMemo, but it's used to memoize functions:\n\n```jsx\nimport { useCallback } from 'react';\n\nfunction MyComponent({ onSubmit }) {\n  const handleSubmit = useCallback((event) => {\n    event.preventDefault();\n    onSubmit();\n  }, [onSubmit]); // Only recreate if onSubmit changes\n\n  return <form onSubmit={handleSubmit}>...</form>;\n}\n```\n\n## Virtualization for Long Lists\n\nIf your application renders long lists of data, you can use virtualization to only render the items that are currently visible in the viewport. This can significantly improve performance.\n\nThere are several libraries available for virtualization in React, such as react-window and react-virtualized.\n\nHere's an example using react-window:\n\n```jsx\nimport { FixedSizeList } from 'react-window';\n\nfunction MyList({ items }) {\n  const Row = ({ index, style }) => (\n    <div style={style}>\n      {items[index]}\n    </div>\n  );\n\n  return (\n    <FixedSizeList\n      height={500}\n      width={300}\n      itemSize={50}\n      itemCount={items.length}\n    >\n      {Row}\n    </FixedSizeList>\n  );\n}\n```\n\n## Conclusion\n\nBy implementing these techniques, you can significantly improve the performance of your React applications. Remember to always measure the performance before and after optimization to ensure that your changes are actually improving the user experience.",
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
      "Next.js 13 introduced a revolutionary new routing system called the App Router. This new approach to routing in Next.js applications brings several benefits, including nested layouts, server components, streaming, and more. In this comprehensive guide, we'll walk through the key concepts of the App Router, including file-system based routing, layout components, loading states, error handling, and data fetching strategies. By the end of this article, you'll have a solid understanding of how to leverage the App Router to build modern, performant web applications with Next.js.\n\n## Understanding the App Router\n\nThe App Router is a new routing system introduced in Next.js 13 that uses a file-system based approach to define routes. It's built on React Server Components and provides a more intuitive way to create complex applications.\n\nHere are some key features of the App Router:\n\n- **File-system based routing**: Routes are defined by the file structure in the app directory\n- **Nested layouts**: Create shared layouts for multiple routes\n- **Server Components**: Render components on the server for improved performance\n- **Streaming**: Stream UI from the server for faster initial load\n- **Data fetching**: Fetch data for specific routes\n\n## File-System Based Routing\n\nIn the App Router, routes are defined by the file structure in the app directory. Each folder represents a route segment, and the page.js or page.tsx file in that folder defines the UI for that route.\n\nFor example:\n\n```
app/
├── page.tsx           # Home route (/)
├── about/
│   └── page.tsx       # About route (/about)
└── blog/
    ├── page.tsx       # Blog index route (/blog)
    └── [slug]/
        └── page.tsx   # Dynamic blog post route (/blog/post-1)
```\n\n## Nested Layouts\n\nOne of the most powerful features of the App Router is the ability to create nested layouts. You can define a layout.js or layout.tsx file in any folder, and it will be applied to all routes in that folder and its subfolders.\n\nFor example:\n\n```jsx\n// app/blog/layout.tsx\nexport default function BlogLayout({ children }) {\n  return (\n    <div className=\"blog-layout\">\n      <aside>Blog Sidebar</aside>\n      <main>{children}</main>\n    </div>\n  );\n}\n```\n\nThis layout will be applied to all routes under /blog, including dynamic routes like /blog/post-1.\n\n## Server Components\n\nThe App Router is built on React Server Components, which allow you to render components on the server. This can significantly improve performance by reducing the amount of JavaScript sent to the client.\n\nBy default, all components in the App Router are Server Components. If you need to use client-side features like useState or useEffect, you can mark a component as a Client Component by adding the \"use client\" directive at the top of the file:\n\n```jsx\n\"use client\";\n\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```\n\n## Data Fetching\n\nThe App Router provides several ways to fetch data for your routes:\n\n### 1. Server Components\n\nYou can fetch data directly in Server Components:\n\n```jsx\n// app/users/page.tsx\nasync function getUsers() {\n  const res = await fetch('https://api.example.com/users');\n  return res.json();\n}\n\nexport default async function UsersPage() {\n  const users = await getUsers();\n  \n  return (\n    <div>\n      <h1>Users</h1>\n      <ul>\n        {users.map(user => (\n          <li key={user.id}>{user.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n```\n\n### 2. Route Handlers\n\nYou can create API routes using route handlers:\n\n```jsx\n// app/api/users/route.ts\nexport async function GET() {\n  const res = await fetch('https://api.example.com/users');\n  const data = await res.json();\n  \n  return Response.json(data);\n}\n```\n\n## Conclusion\n\nThe App Router in Next.js 13+ represents a significant evolution in how we build web applications with React. By leveraging Server Components, nested layouts, and improved data fetching capabilities, you can create more performant and maintainable applications.\n\nAs you continue to explore the App Router, remember that it's designed to be incrementally adoptable. You can start using it in a new project or gradually migrate an existing project from the Pages Router.",
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
      "TailwindCSS has revolutionized the way developers approach CSS by providing a utility-first framework that allows for rapid UI development without leaving your HTML. In this practical guide, we'll explore the core concepts of TailwindCSS, including utility classes, responsive design, customization, and component extraction. We'll also cover advanced topics such as using plugins, optimizing for production, and integrating with popular frameworks like React and Next.js. Whether you're new to TailwindCSS or looking to deepen your knowledge, this guide will help you leverage the full power of this innovative CSS framework.",
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
