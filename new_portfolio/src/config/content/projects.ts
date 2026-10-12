import type { Project } from "@/types/content";

const gh = (repo: string) => `https://github.com/Aviral-Saxenaa/${repo}`;

export const projects: Project[] = [
  {
    name: "TripMate AI",
    art: "trip",
    lines: ["TRIP", "MATE AI"],
    colors: { bg: "pink", title: "ink", shadow: "acid", band: "ink", bandText: "paper" },
    meta: "2025",
    tag: "Multi-agent travel planner",
    category: "AI Multi-Agent System",
    problem:
      "Planning multi-destination trips manually requires juggling flights, hotels, and sights across dozens of tabs.",
    built:
      "A multi-agent AI travel companion that orchestrates LangGraph and LangChain agents to research, budget, and generate tailored day-by-day travel schedules.",
    result: {
      value: "Autonomous",
      unit: "Multi-agent research, real-time budgeting & automated itinerary generation.",
    },
    stack: ["Python", "LangGraph", "FastAPI", "React", "Render"],
    live: "https://tripplannerai-a-multi-agent-travel.onrender.com/",
    repo: "https://github.com/Aviral-Saxenaa/TripPlannerAI-A-Multi-Agent-Travel-Companion",
  },
  {
    name: "aviralsaxena.me",
    art: "site",
    lines: ["AVIRAL", "SAXENA.me"],
    colors: { bg: "cyan", title: "ink", shadow: "pink", band: "ink", bandText: "paper" },
    meta: "2026",
    tag: "Interactive skater portfolio",
    category: "Interactive WebApp",
    problem: "Standard portfolio templates feel static, repetitive, and lack personality.",
    built:
      "Skatepark theme built entirely in code: a 2D skater rig posed along scroll checkpoints, dynamic deck flipping, and custom SVG assets.",
    result: { value: "Zero 3D libs", unit: "No Three.js overhead: 2D rig, scroll-driven physics, Lighthouse 99." },
    stack: ["Next.js", "TypeScript", "Lenis", "SVG"],
    live: "https://aviralsaxena.me",
    repo: "https://github.com/Aviral-Saxenaa/new-portfolio",
  },
  {
    name: "Whyghosted",
    art: "ghost",
    lines: ["WHY", "GHOSTED?"],
    colors: { bg: "ink", title: "white", shadow: "pink", band: "pink", bandText: "ink", bolt: "paper" },
    meta: "LIVE",
    tag: "Interview ghosting, exposed",
    category: "Community web app",
    problem:
      "Candidates are often left without updates after interviews, with no easy way to compare or share those experiences.",
    built:
      "A playful, anonymous company-ghosting leaderboard where candidates can share interview experiences and see which companies have earned the biggest Ghost Score.",
    result: { value: "No reply?", unit: "Share the story anonymously and help other candidates compare experiences." },
    stack: ["Next.js", "TypeScript", "Community"],
    live: "https://whyghosted.vercel.app/",
  },
  {
    name: "Snipify",
    art: "snip",
    lines: ["SNIP", "IFY"],
    colors: { bg: "acid", title: "ink", shadow: "pink", band: "ink", bandText: "paper" },
    meta: "LIVE",
    tag: "Code snippets, together",
    category: "Collaborative developer tool",
    problem:
      "Sharing code and keeping edits in sync is awkward when snippets are scattered across chats and documents.",
    built:
      "A collaborative code workspace for writing and sharing snippets, with live code updates between people in the same session.",
    result: { value: "Live sync", unit: "Keep shared code edits in step as collaborators work." },
    stack: ["React", "JavaScript", "WebSockets"],
    live: "https://mysnipify.vercel.app/",
    repo: gh("Snipify"),
  },
];
