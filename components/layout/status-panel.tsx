"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import { nowItems, nowUpdated } from "@/content/now";

type Exchange = { prompt: string; answer: string };
type Phase = "typing-prompt" | "thinking" | "streaming-answer" | "resting";

function short(text: string, max = 90) {
  return text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text;
}
function lower(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function buildExchanges(): Exchange[] {
  const focus = nowItems.find((n) => n.kind === "working");
  const side = nowItems.find((n) => n.kind === "building");

  return [
    {
      prompt: "what are you up to right now?",
      answer: focus
        ? short(focus.text) + (side ? ` On the side, ${lower(short(side.text, 70))}.` : "")
        : "Shipping production work and building on the side.",
    },
    {
      prompt: "open to work?",
      answer: `${profile.availability.types
        .map((t) => (t === "full-time" ? "Full-time" : "Contract"))
        .join(" + ")}. ${short(profile.availability.note ?? "", 90)}`,
    },
    {
      prompt: "what's your stack?",
      answer: `${profile.stack.join(" · ")}. Web, mobile, and desktop — Tauri made the last one feel like a web app.`,
    },
    {
      prompt: "based where?",
      answer: `${profile.location}. Remote-friendly, EU timezones.`,
    },
  ];
}

const PROMPT_SPEED = 34;
const ANSWER_SPEED = 16;
const THINK_MS = 680;
const REST_MS = 2400;
const GAP_MS = 500;

export function StatusPanel() {
  const exchanges = useRef<Exchange[]>(buildExchanges());
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-prompt");
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [visible, setVisible] = useState(true);
  const reduced = useRef(false);

  // Pause when offscreen (battery + doesn't animate when you can't see it)
  useEffect(() => {
    const el = document.getElementById("status-panel");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Respect reduced motion
  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const exchange = exchanges.current[i];

  useEffect(() => {
    if (!visible) return;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing-prompt") {
      if (reduced.current) {
        setPrompt(exchange.prompt);
        timer = setTimeout(() => setPhase("thinking"), 200);
      } else if (prompt.length < exchange.prompt.length) {
        timer = setTimeout(
          () => setPrompt(exchange.prompt.slice(0, prompt.length + 1)),
          PROMPT_SPEED,
        );
      } else {
        timer = setTimeout(() => setPhase("thinking"), 360);
      }
    } else if (phase === "thinking") {
      timer = setTimeout(() => setPhase("streaming-answer"), THINK_MS);
    } else if (phase === "streaming-answer") {
      if (reduced.current) {
        setAnswer(exchange.answer);
        timer = setTimeout(() => setPhase("resting"), 600);
      } else if (answer.length < exchange.answer.length) {
        timer = setTimeout(
          () => setAnswer(exchange.answer.slice(0, answer.length + 1)),
          ANSWER_SPEED,
        );
      } else {
        timer = setTimeout(() => setPhase("resting"), REST_MS);
      }
    } else {
      timer = setTimeout(() => {
        setI((i + 1) % exchanges.current.length);
        setPrompt("");
        setAnswer("");
        setPhase("typing-prompt");
      }, GAP_MS);
    }
    return () => clearTimeout(timer);
  }, [phase, prompt, answer, i, exchange, visible]);

  const updated = new Date(nowUpdated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const showPromptCursor =
    !reduced.current && phase === "typing-prompt" && prompt.length < exchange.prompt.length;
  const showAnswerCursor =
    !reduced.current &&
    (phase === "streaming-answer" || phase === "thinking" || phase === "resting");

  return (
    <aside
      id="status-panel"
      aria-label="About Pedro, streamed"
      className="relative w-full overflow-hidden rounded-lg border border-border bg-card/40"
    >
      {/* Brand edge */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/30 to-transparent"
      />

      {/* Header — AI-product surface feel */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <Sparkles className="h-3 w-3 text-brand" />
          ask pedro
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          streaming
        </span>
      </div>

      {/* Body — the scripted exchange */}
      <div className="min-h-[180px] px-4 py-4">
        {/* Prompt */}
        <p className="font-mono text-[12px] leading-relaxed text-muted-foreground">
          <span className="text-brand">{"→ "}</span>
          {prompt}
          {showPromptCursor && (
            <span className="ml-px inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-brand/70 align-baseline" />
          )}
        </p>

        {/* Thinking / answer */}
        <div className="mt-3">
          {phase === "thinking" ? (
            <p className="font-mono text-[12px] text-muted-foreground/60">
              thinking
              <span className="inline-flex">
                <span className="animate-bounce [animation-delay:-0.3s]">.</span>
                <span className="animate-bounce [animation-delay:-0.15s]">.</span>
                <span className="animate-bounce">.</span>
              </span>
            </p>
          ) : (
            (answer || phase === "streaming-answer") && (
              <p className="text-[13.5px] leading-relaxed text-foreground">
                {answer}
                {showAnswerCursor && (
                  <span className="ml-px inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-brand/70 align-baseline" />
                )}
              </p>
            )
          )}
        </div>
      </div>

      {/* Footer — honest + status-bar feel */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          synced {updated}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          scripted · no llm
        </span>
      </div>
    </aside>
  );
}
