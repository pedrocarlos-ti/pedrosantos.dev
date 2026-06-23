import Link from "next/link";
import { profile } from "@/content/profile";
import { nowItems, nowUpdated } from "@/content/now";
import type { NowItem } from "@/lib/types";

function firstNow(kind: NowItem["kind"]): NowItem | undefined {
  return nowItems.find((n) => n.kind === kind);
}

function shortFocus(text: string, max = 60) {
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
    <div className="group/grid grid grid-cols-[64px_1fr] items-baseline gap-3 px-4 py-2 transition-colors hover:bg-brand/[0.04]">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
        {label}
        <span className="text-muted-foreground/30">:</span>
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
      {/* Brand edge — structural accent */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/30 to-transparent"
      />

      {/* Header — terminal-style path bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="font-mono text-[11px] text-muted-foreground/80">
          <span className="text-brand">~</span>
          <span className="text-muted-foreground/40">/</span>
          pedrosantos.dev
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
      <div>
        <div className="group/grid grid grid grid-cols-[64px_1fr] items-baseline gap-3 px-4 py-2 transition-colors hover:bg-brand/[0.04]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60">
            avail<span className="text-muted-foreground/30">:</span>
          </span>
          <span className="font-mono text-[12px] leading-snug text-foreground">
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

      {/* Footer — last sync timestamp */}
      <div className="flex items-center justify-between border-t border-border px-4 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          synced {updated}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground/40">
          v1.0
        </span>
      </div>
    </aside>
  );
}
