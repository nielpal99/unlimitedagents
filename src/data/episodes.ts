export interface Episode {
  /** Zero-padded display number, e.g. "01" */
  number: string;
  /** URL-safe identifier, e.g. "building-ai-that-actually-works" */
  slug: string;
  title: string;
  guest: string;
  guestBio: string;
  duration: string;
  description: string;
  /** ISO 8601 date string, e.g. "2025-01-15" */
  publishedAt: string;
  /** Direct audio file URL or hosted MP3 link */
  audioUrl: string | null;
  /** Episode cover art or guest headshot */
  imageUrl: string | null;
  tags: string[];
}

export const episodes: Episode[] = [
  {
    number: "01",
    slug: "building-ai-that-actually-works",
    title: "Building AI That Actually Works",
    guest: "Coming Soon",
    guestBio: "A founder at the frontier of applied AI, shipping products that solve real-world problems at scale.",
    duration: "45 min",
    description:
      "Our first episode explores what it takes to build AI products that solve real problems.",
    publishedAt: "2025-02-01",
    audioUrl: null,
    imageUrl: null,
    tags: ["applied AI", "product", "founders"],
  },
  {
    number: "02",
    slug: "the-agentic-future",
    title: "The Agentic Future",
    guest: "Coming Soon",
    guestBio: "A pioneer in autonomous agent design, building the infrastructure for the next generation of intelligent software.",
    duration: "50 min",
    description:
      "Diving deep into autonomous agents and how they're reshaping software.",
    publishedAt: "2025-02-15",
    audioUrl: null,
    imageUrl: null,
    tags: ["agents", "autonomy", "future of software"],
  },
  {
    number: "03",
    slug: "from-demo-to-production",
    title: "From Demo to Production",
    guest: "Coming Soon",
    guestBio: "An engineering leader who has repeatedly navigated the treacherous gap between impressive AI demos and reliable production systems.",
    duration: "40 min",
    description:
      "The challenges of taking AI from impressive demos to reliable production systems.",
    publishedAt: "2025-03-01",
    audioUrl: null,
    imageUrl: null,
    tags: ["production", "reliability", "engineering"],
  },
];
