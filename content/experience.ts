import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    role: "Founder & Software Engineer",
    company: "Melro.io",
    period: "2023 — present",
    current: true,
    summary:
      "Running a side company building customized software for local businesses — scoping, building, and supporting end to end.",
    story:
      "The engineer's version of founding: I own the whole loop, not just the implementation. Most of what I've learned here isn't code — it's how to scope something small enough to ship, how to talk to people who don't think in tickets, and how to tell the difference between a feature that sounds good and one that gets used.",
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
    link: { label: "melro.io", href: "https://melro.io" },
  },
  {
    role: "Software Engineer",
    company: "Aubay Portugal",
    period: "2021 — present",
    current: true,
    summary:
      "Building features on an agile team across a React + GraphQL stack, with a focus on frontend architecture and testing practices.",
    story:
      "Day-to-day production work: shipping features that real users rely on, in a codebase large enough that DX and testing actually matter. I care most about the parts of the job that make the whole team faster — clean component boundaries, patterns people can follow, and reviews that teach rather than just gatekeep.",
    stack: ["React", "GraphQL", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "N3urons",
    period: "2018 — 2021",
    summary:
      "Planned, architected, and developed scalable software across web and mobile using React, React Native, and Node.js.",
    story:
      "Where I learned to build across platforms at the same time. React Native taught me that 'write once, run anywhere' is a lie worth telling carefully — the shared logic is the prize, the platform edges are the tax. This is also where I started caring about architecture before it becomes an emergency.",
    stack: ["React", "React Native", "Node.js"],
  },
];
