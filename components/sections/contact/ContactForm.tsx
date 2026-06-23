"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setDone(true);
      form.reset();
      toast.success("Message sent — I'll get back to you soon.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-border bg-card p-8">
        <CheckCircle2 className="h-6 w-6 text-brand" />
        <h3 className="text-lg font-semibold text-foreground">Message sent</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. I&apos;ll reply to your email shortly —
          usually within a day or two.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-2 font-mono text-[13px] text-brand hover:underline"
        >
          send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          error={form.formState.errors.name?.message}
          {...form.register("name")}
          placeholder="Your name"
        />
        <Field
          label="Email"
          type="email"
          error={form.formState.errors.email?.message}
          {...form.register("email")}
          placeholder="you@company.com"
        />
      </div>
      <Field
        label="Subject"
        error={form.formState.errors.subject?.message}
        {...form.register("subject")}
        placeholder="What's this about?"
      />
      <div className="space-y-2">
        <label htmlFor="message" className="label block">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell me about the role, the project, or what you're building..."
          {...form.register("message")}
          className="w-full resize-none rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand focus:ring-1 focus:ring-brand"
        />
        {form.formState.errors.message && (
          <p className="font-mono text-[12px] text-destructive">
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            send message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  type = "text",
  ...props
}: {
  label: string;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label htmlFor={label} className="label block">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand focus:ring-1 focus:ring-brand"
        {...props}
      />
      {error && (
        <p className="font-mono text-[12px] text-destructive">{error}</p>
      )}
    </div>
  );
}
