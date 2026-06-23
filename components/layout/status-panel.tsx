import Link from "next/link";
import { profile } from "@/content/profile";
import { nowItems, nowUpdated } from "@/content/now";
import type { NowItem } from "@/lib/types";

function firstNow(kind: NowItem["kind"]): NowItem | undefined {
  return nowItems.find((n) => n.kind === kind);
}

function shortFocus(text: string, max = 58) {
  return text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text;
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[64px_1fr] items-baseline gap-3 border-t border-border/50 px-4 py-2.5">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
        {label}
      </span>
      <span className="font-mono text-[12px] leading-snug text-foreground">
        {children}
      </span>
    </div>
  );
}

export function StatusPanel() {
  const focus = firstNow("working");
  const side = firstNow("building");
  const updated = new Date(nowUpdated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <aside
      aria-label="Current status"
      className="relative w-full overflow-hidden rounded-lg border border-border bg-card/40"
    >
      {/* Brand edge — the one structural accent */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/30 to-transparent"
      />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          status
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          live
        </span>
      </div>

      {/* Availability — the headline row, with an uptime-style indicator */}
      <div className="border-b border-border/50 px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
            availability
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand">
            open
          </span>
        </div>
        <p className="mt-2 text-sm font-medium leading-snug text-foreground">
          {profile.availability.types
            .map((t) => (t === "full-time" ? "Full-time" : "Contract"))
            .join(" + ")}
        </p>
        {/* Uptime-style bar — 12 segments, all lit = fully available */}
        <div className="mt-3 flex gap-[3px]" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="h-1 flex-1 rounded-full bg-brand"
              style={{ opacity: 1 - i * 0.05 }}
            />
          ))}
        </div>
        <p className="mt-2 font-mono text-[10px] text-muted-foreground/50">
          {profile.availability.note}
        </p>
      </div>

      {/* Spec rows */}
      <div>
        <Row label="based">{profile.location}</Row>
        {focus && <Row label="focus">{shortFocus(focus.text)}</Row>}
        {side && (
          <Row label="side">
            {side.href && side.href.startsWith("/") ? (
              <Link href={side.href} className="hover:text-brand transition-colors">
                {shortFocus(side.text)}
              </Link>
            ) : side.href ? (
              <a
                href={side.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                {shortFocus(side.text)}
              </a>
            ) : (
              shortFocus(side.text)
            )}
          </Row>
        )}
        <Row label="stack">{profile.stack.slice(0, 5).join(" · ")}</Row>
      </div>

      {/* Footer — last sync */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          last sync {updated}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          all systems go
        </span>
      </div>
    </aside>
  );
}
