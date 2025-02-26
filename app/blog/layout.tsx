import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pedro Santos - Frontend Developer",
  description: "Thoughts, tutorials, and insights on web development, design, and technology",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
