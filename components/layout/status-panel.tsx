import Link from "next/link";
import { profile } from "@/content/profile";
import { nowItems } from "@/content/now";
import type { NowItem } from "@/lib/types";

function firstNow(kind: NowItem["kind"]): NowItem | undefined {
  return nowItems.find((n) => n.kind === kind);
}

function shortFocus(text: string, max = 64) {
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
    <div className="grid grid-cols-[68px_1fr] items-baseline gap-3 border-t border-border/60 px-4 py-2.5 first:border-t-0">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
        {label}
      </span>
      <span className="font-mono text-[12.5px] leading-snug text-foreground">
        {children}
      </span>
    </div>
  );
}

export function StatusPanel() {
  const focus = firstNow("working");
  const side = firstNow("building");

  return (
    <aside
      aria-label="Current status"
      className="relative w-full overflow-hidden rounded-lg border border-border bg-card/60"
    >
      {/* Brand corner mark — the one place the accent shows structurally */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/40 to-transparent"
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {"// status"}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          live
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border/60">
        <div className="grid grid-cols-[68px_1fr] items-baseline gap-3 px-4 py-2.5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
            avail
          </span>
          <span className="font-mono text-[12.5px] leading-snug text-foreground">
            <span className="text-brand">●</span>{" "}
            {profile.availability.types
              .map((t) => (t === "full-time" ? "full-time" : "contract"))
              .join(" + ")}
          </span>
        </div>
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
    </aside>
  );
}
