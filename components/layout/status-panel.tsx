"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import { nowItems, nowUpdated } from "@/content/now";

type Exchange = { prompt: string; answer: string };
type Phase = "typing-prompt" | "thinking" | "streaming-answer" | "resting";

type Msg = {
  id: number;
  prompt: string;
  answer: string;
  state: "done" | "typing" | "thinking" | "streaming";
};

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
    {
      prompt: "anything else to share?",
      answer: `${profile.founded.name} — ${short(profile.founded.blurb, 100)} Going slow on purpose.`,
    },
  ];
}

const PROMPT_SPEED = 55;
const ANSWER_SPEED = 28;
const THINK_MS = 1400;
const REST_MS = 2200;
const GAP_MS = 700;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

export function StatusPanel() {
  const exchanges = useMemo(() => buildExchanges(), []);
  const reduced = useReducedMotion();

  const rootRef = useRef<HTMLElement>(null);

  // Full transcript as stacked messages; the last is the live one.
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [live, setLive] = useState(0); // index of the live exchange
  const [phase, setPhase] = useState<Phase>("typing-prompt");
  const [partial, setPartial] = useState(""); // current typed text (prompt or answer)
  const [visible, setVisible] = useState(true);
  const [atBottom, setAtBottom] = useState(true);
  const [done, setDone] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Reduced motion: render the full transcript statically, nothing animated.
  useEffect(() => {
    if (!reduced) return;
    setMsgs(
      exchanges.map((e, id) => ({
        id,
        prompt: e.prompt,
        answer: e.answer,
        state: "done",
      })),
    );
    setLive(exchanges.length);
    setDone(true);
  }, [reduced, exchanges]);

  // Pause when the panel isn't on screen — battery + doesn't animate on its own.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const exchange = exchanges[live];

  // Track whether the body is scrolled to the bottom — auto-scroll only then.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
      setAtBottom(distance < 24);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-scroll only the chat container — never the window. (scrollIntoView
  // would also scroll all ancestor scroll containers, fighting page scroll.)
  // Per-keystroke updates scroll instantly; structural changes (new message /
  // phase transition) scroll smoothly. Reduced motion forces instant always.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !atBottom) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduced ? "auto" : "auto" });
  }, [partial, atBottom, reduced]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !atBottom) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [msgs, phase, atBottom, reduced]);

  // Inject the live message slot when moving to a new exchange.
  useEffect(() => {
    if (reduced || done) return;
    setMsgs((prev) => {
      if (prev.some((m) => m.id === live)) return prev;
      return [
        ...prev,
        { id: live, prompt: "", answer: "", state: "typing" },
      ];
    });
  }, [live, reduced, done]);

  // Drive the scripted build-up.
  useEffect(() => {
    if (!visible || reduced || done) return;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing-prompt") {
      if (partial.length < exchange.prompt.length) {
        timer = setTimeout(
          () => setPartial(exchange.prompt.slice(0, partial.length + 1)),
          PROMPT_SPEED,
        );
      } else {
        setMsgs((prev) =>
          prev.map((m) =>
            m.id === live ? { ...m, prompt: exchange.prompt, state: "thinking" } : m,
          ),
        );
        timer = setTimeout(() => setPhase("thinking"), 320);
      }
    } else if (phase === "thinking") {
      timer = setTimeout(() => {
        setMsgs((prev) =>
          prev.map((m) => (m.id === live ? { ...m, state: "streaming" } : m)),
        );
        setPartial("");
        setPhase("streaming-answer");
      }, THINK_MS);
    } else if (phase === "streaming-answer") {
      if (partial.length < exchange.answer.length) {
        timer = setTimeout(
          () => setPartial(exchange.answer.slice(0, partial.length + 1)),
          ANSWER_SPEED,
        );
      } else {
        setMsgs((prev) =>
          prev.map((m) =>
            m.id === live ? { ...m, answer: exchange.answer, state: "done" } : m,
          ),
        );
        timer = setTimeout(() => setPhase("resting"), REST_MS);
      }
    } else {
      timer = setTimeout(() => {
        if (live + 1 < exchanges.length) {
          setPartial("");
          setLive((p) => p + 1);
          setPhase("typing-prompt");
        } else {
          setDone(true);
        }
      }, GAP_MS);
    }
    return () => clearTimeout(timer);
  }, [phase, partial, live, exchange, visible, reduced, done, exchanges]);

  const bottleneck = useMemo(
    () =>
      new Date(nowUpdated).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    [],
  );

  return (
    <aside
      ref={rootRef}
      aria-label="About Pedro, streamed"
      className="relative flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card/40"
    >
      {/* Brand edge */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/30 to-transparent"
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <Sparkles className="h-3 w-3 text-brand" />
          ask pedro
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          {done ? "done" : "streaming"}
        </span>
      </div>

      {/* Screen-reader transcript — static, live-announced. */}
      <div className="sr-only" aria-live="polite">
        {exchanges.map((e, id) => (
          <p key={id}>
            Q: {e.prompt} A: {e.answer}
          </p>
        ))}
      </div>

      {/* Body — the stacked transcript, scrollable like a chat. */}
      <div
        ref={scrollRef}
        aria-hidden
        className="h-72 overflow-y-auto px-4 py-3 [scrollbar-width:thin]"
      >
        <div className="flex flex-col gap-3">
          {msgs.map((m) => {
            const isLive = m.id === live && !done;
            const isTypingPrompt = isLive && phase === "typing-prompt";
            const isStreaming = isLive && phase === "streaming-answer";
            const renderedPrompt = isTypingPrompt ? partial : m.prompt;
            const renderedAnswer = isStreaming ? partial : m.answer;

            return (
              <div key={m.id} className="flex flex-col gap-2">
                {/* User prompt — aligned right like a chat bubble */}
                <div className="flex justify-end">
                  <p className="max-w-[85%] rounded-[10px] rounded-br-sm border border-border bg-muted/40 px-3 py-1.5 font-mono text-[12px] leading-relaxed text-foreground">
                    {renderedPrompt}
                    {isTypingPrompt && partial.length < exchange.prompt.length && (
                      <span className="ml-px inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-brand/70 align-baseline motion-reduce:hidden" />
                    )}
                  </p>
                </div>

                {/* Answer / thinking */}
                <div className="min-h-[1.25rem] pl-1">
                  {isLive && m.state === "thinking" ? (
                    <p className="font-mono text-[12px] text-muted-foreground/70">
                      <span>thinking</span>
                      <span className="inline-flex motion-reduce:hidden">
                        <span className="animate-bounce [animation-delay:-0.3s]">.</span>
                        <span className="animate-bounce [animation-delay:-0.15s]">.</span>
                        <span className="animate-bounce">.</span>
                      </span>
                    </p>
                  ) : (
                    (renderedAnswer || isStreaming) && (
                      <p className="max-w-[92%] text-[13.5px] leading-relaxed text-foreground/90">
                        {renderedAnswer}
                        {isStreaming &&
                          partial.length < exchange.answer.length &&
                          !reduced && (
                            <span className="ml-px inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-brand/70 align-baseline" />
                          )}
                      </p>
                    )
                  )}
                </div>
              </div>
            );
          })}

          {/* End of transcript */}
          {done && !reduced && (
            <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
              end of transcript
            </p>
          )}
        </div>
      </div>

      {/* Footer — simple */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          synced {bottleneck}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          runs locally · no llm
        </span>
      </div>
    </aside>
  );
}