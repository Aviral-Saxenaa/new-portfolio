import type { Project } from "@/types/content";

const gh = (repo: string) => `https://github.com/Aviral-Saxenaa/${repo}`;

export const projects: Project[] = [
  {
    name: "TripMate AI",
    art: "upload",
    lines: ["TRIP", "MATE AI"],
    colors: { bg: "pink", title: "ink", shadow: "acid", band: "ink", bandText: "paper" },
    meta: "2025",
    tag: "Multi-agent travel planner",
    category: "AI Multi-Agent System",
    problem: "Planning multi-destination trips manually requires juggling flights, hotels, and sights across dozens of tabs.",
    built:
      "A multi-agent AI travel companion that orchestrates LangGraph and LangChain agents to research, budget, and generate tailored day-by-day travel schedules.",
    result: { value: "Autonomous", unit: "Multi-agent research, real-time budgeting & automated itinerary generation." },
    stack: ["Python", "LangGraph", "FastAPI", "React", "Render"],
    live: "https://tripplannerai-a-multi-agent-travel.onrender.com/",
    repo: "https://github.com/Aviral-Saxenaa/TripPlannerAI-A-Multi-Agent-Travel-Companion",
  },
  {
    name: "Snipify",
    art: "monitor",
    lines: ["SNIP", "IFY"],
    colors: { bg: "acid", title: "ink", shadow: "pink", band: "ink", bandText: "paper" },
    meta: "2025",
    tag: "Real-time tutoring & mentoring",
    category: "Interactive WebApp",
    problem: "Learners lacked real-time interactive mentoring channels and fast question search.",
    built:
      "Interactive platform with live WebRTC peer Q&A, AI-driven semantic search over practice questions, and gamified reward systems.",
    result: { value: "40% Faster", unit: "Semantic query response speed; student engagement rose 20%." },
    stack: ["React", "Firebase", "WebRTC", "AI Embeddings", "Jest"],
    live: "https://tripplannerai-a-multi-agent-travel.onrender.com/",
    repo: gh("Snipify"),
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
    name: "Warehouse AI",
    art: "stream",
    lines: ["WAREHOUSE", "AI CHAT"],
    colors: { bg: "blue", title: "acid", shadow: "ink", band: "acid", bandText: "ink" },
    meta: "2026",
    tag: "Semantic search & WMS chatbot",
    category: "AI & Microservices",
    problem: "Operators lost hours locating warehouse documentation and debugging shipment anomalies.",
    built:
      "An AI-powered semantic search engine and RAG chatbot integrated into warehouse software via REST APIs and telemetry dashboards.",
    result: { value: "Instant retrieval", unit: "Semantic matching across warehouse schemas and SOP records." },
    stack: ["Python", "LangChain", "FastAPI", "PostgreSQL", "Docker"],
    repo: "https://github.com/Aviral-Saxenaa",
  },
  {
    name: "DevPulse",
    art: "lyrics",
    lines: ["DEV", "PULSE"],
    colors: { bg: "ink", title: "acid", shadow: "pink", band: "paper", bandText: "ink", bolt: "paper" },
    meta: "2025",
    tag: "Live API logs & telemetry",
    category: "Developer tool",
    problem: "Debugging distributed microservices required constantly refreshing log aggregator views.",
    built:
      "A lightweight SSE telemetry service streaming real-time API latency and health metrics straight to a live developer dashboard.",
    result: { value: "Sub-second", unit: "Live streaming API metrics with automatic client reconnects." },
    stack: ["Express", "SSE", "React", "Node.js"],
    repo: "https://github.com/Aviral-Saxenaa",
  },
];
