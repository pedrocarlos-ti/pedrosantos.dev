import { Link } from "next-view-transitions";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { getFeaturedProjects } from "@/content/projects";
import { nowItems, nowUpdated, nowKindLabel } from "@/content/now";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { SectionHeading } from "@/components/layout/section";
import { SocialRow } from "@/components/layout/social-row";
import { StatusPanel } from "@/components/layout/status-panel";
import { projectStatusMeta } from "@/components/sections/projects/project-status";
import { SmartLink } from "@/components/layout/smart-link";

const NOW_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};
const POST_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="container py-16 md:py-24">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="fade-up grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="label-brand">
              {profile.role} · {profile.location}
            </p>
            {profile.availability.open && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/5 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-brand">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                open to work
              </span>
            )}
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-foreground/90 md:text-2xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              See selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 font-mono text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-8">
            <SocialRow />
          </div>

          {/* One-line stack summary — surfaces the toolkit without a paragraph */}
          <div
            className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] text-muted-foreground/70"
            aria-label="Tech stack"
          >
            {profile.stack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-baseline gap-2">
                <span>{tech}</span>
                {idx < profile.stack.length - 1 && (
                  <span aria-hidden className="text-muted-foreground/40">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Status panel — the hero's signature, dashboard widget not a card */}
        <div className="lg:pt-2">
          <StatusPanel />
        </div>
      </section>

      {/* ── Now ──────────────────────────────────────────────── */}
      <section className="mt-24 md:mt-32">
        <SectionHeading
          index="01"
          eyebrow="Now"
          title="What I'm doing right now"
          description="A living snapshot. Updated when things actually change, not on a schedule."
          action={
            <span className="label hidden sm:inline">
              updated {formatDate(nowUpdated, NOW_DATE_FORMAT)}
            </span>
          }
        />
        <ul className="divide-y divide-border border-y border-border">
          {nowItems.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[140px_1fr] md:items-baseline md:gap-6"
            >
              <span className="label-brand">{nowKindLabel[item.kind]}</span>
              <div>
                {item.href ? (
                  <SmartLink
                    href={item.href}
                    className="text-[1.0625rem] leading-relaxed text-foreground transition-colors hover:text-brand"
                  >
                    {item.text}
                    {!item.href.startsWith("/") && (
                      <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </SmartLink>
                ) : (
                  <p className="text-[1.0625rem] leading-relaxed text-foreground">
                    {item.text}
                  </p>
                )}
                <p className="mt-1 label">{formatDate(item.date, NOW_DATE_FORMAT)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Selected work ────────────────────────────────────── */}
      <section className="mt-24 md:mt-32">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Things I've built, with the story attached"
          description="Not a logo wall. Each one has a problem, an approach, and what I learned."
          action={
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-brand"
            >
              all work
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />
        <ul className="border-y border-border divide-y divide-border">
          {featured.map((project) => {
            const meta = projectStatusMeta(project.status);
            return (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative grid grid-cols-1 gap-3 py-6 pl-4 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:pl-5"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 hidden h-0 w-px -translate-y-1/2 bg-brand transition-all duration-300 group-hover:h-[calc(100%-1rem)] md:block"
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                        {project.title}
                      </h3>
                      <span className="label">{meta.label}</span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <p className="mt-2 font-mono text-[12px] text-muted-foreground/80">
                      {project.stack.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[13px] text-muted-foreground/70 transition-colors group-hover:text-brand">
                    <span className="hidden md:inline">read the case study →</span>
                    <ArrowRight className="h-4 w-4 md:hidden" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── Writing ──────────────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="mt-24 md:mt-32">
          <SectionHeading
            index="03"
            eyebrow="Writing"
            title="Notes from rebuilding and building"
            action={
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-brand"
              >
                all posts
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            }
          />
          <ul className="border-y border-border divide-y divide-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-brand">
                        {post.title}
                      </h3>
                      <span className="hidden shrink-0 font-mono text-[11px] text-muted-foreground/60 sm:inline">
                        {formatDate(post.date, POST_DATE_FORMAT)}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-1 max-w-xl text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-[12px] text-muted-foreground sm:inline">
                    {post.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Closer ───────────────────────────────────────────── */}
      <section className="mt-28 md:mt-40">
        <div className="flex flex-col items-start gap-5 border-t border-border pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="label mb-3">Sounds like a fit?</p>
            <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s talk.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Open to full-time roles and contract work. The form is the fastest
              way — or just email me directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-foreground px-5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
