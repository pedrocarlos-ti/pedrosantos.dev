export type ProjectStatus = "shipped" | "ongoing" | "experimental" | "archived";

export type ProjectLink = {
  label: string;
  href: string;
  kind?: "live" | "source" | "docs" | "other";
};

export type CaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
  learnings?: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  status: ProjectStatus;
  period: string;
  year: number;
  featured: boolean;
  order: number;
  tags: string[];
  stack: string[];
  links: ProjectLink[];
  cover?: string;
  caseStudy: CaseStudy;
  highlights?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
  draft?: boolean;
  body: string;
  content: string;
};

export type NowKind =
  | "building"
  | "working"
  | "learning"
  | "reading"
  | "writing"
  | "exploring";

export type NowItem = {
  id: string;
  kind: NowKind;
  text: string;
  href?: string;
  date: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  story?: string;
  stack?: string[];
  link?: { label: string; href: string };
};

export type EducationItem = {
  title: string;
  org: string;
  period: string;
  note: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "mail";
};

export type Availability = {
  open: boolean;
  types: ("full-time" | "contract")[];
  note?: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  location: string;
  email: string;
  avatarUrl: string;
  socials: SocialLink[];
  availability: Availability;
  founded: { name: string; url: string; role: string; blurb: string };
};
