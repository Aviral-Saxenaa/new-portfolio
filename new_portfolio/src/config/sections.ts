import type { Checkpoint } from "@/types/content";

export const checkpoints: Checkpoint[] = [
  { id: "start", title: "Start", alias: "drop in" },
  {
    id: "experience",
    title: "Experience",
    alias: "run log",
    blurb: "Work, leadership, and the projects that shaped how I build.",
  },
  {
    id: "projects",
    title: "Projects",
    alias: "the decks",
    blurb: "Open a deck to explore the problem, implementation, and results.",
  },
  {
    id: "stack",
    title: "Stack",
    alias: "the wheels",
    blurb: "Tools and technologies I use to build reliable products.",
  },
  {
    id: "certificates",
    title: "Certificates",
    alias: "the binder",
    blurb: "A collection of learning milestones and certifications.",
  },
  { id: "contact", title: "Contact", alias: "finish line" },
];

export const checkpointNumber = (id: string) => {
  const index = checkpoints.findIndex((checkpoint) => checkpoint.id === id);
  return `#${String(index).padStart(2, "0")}`;
};

export const getCheckpoint = (id: string) => {
  const checkpoint = checkpoints.find((item) => item.id === id);
  if (!checkpoint) throw new Error(`Unknown checkpoint "${id}"`);
  return checkpoint;
};

export const labels = {
  checkpoint: "Checkpoint",
  finishBanner: "Run complete!",
  finishTrophy: "🏆",
  backToStart: { icon: "↑", text: "Back to start" },
  railHint: ["drag to navigate", "ride the page ↓"],
  runReadout: "Progress",
  experienceColumns: ["When", "Where", "What I did"],
  now: "Now",
  rangeSeparator: " — ",
  flipHint: "Open project details",
  deckClose: "Close",
  deckLinks: { live: "Live", demo: "Demo", repo: "Code" },
  deckResult: ["Problem", "Built", "Result"],
  binderPrev: "Previous page",
  binderNext: "Next page",
  binderPage: "Page",
  pointsShown: 3,
  morePoints: (count: number) => `+${count} more`,
  fewerPoints: "Show less",
  binderHint: { x: "drag to flip ↑", y: "drag to flip ←" },
};
