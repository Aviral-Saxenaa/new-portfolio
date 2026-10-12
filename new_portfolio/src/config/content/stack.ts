import type { DurometerTier, WheelGroup } from "@/types/content";

/** Highest `min` that a wheel's durometer reaches wins. */
export const durometerTiers: DurometerTier[] = [
  { min: 99, label: "daily" },
  { min: 92, label: "shipped" },
  { min: 0, label: "built with" },
];

/** Marks drawn on the durometer legend bar (scale runs from `range[0]` to `range[1]`). */
export const durometerScale = { range: [78, 101] as const, marks: [84, 92, 99] };

export const tierFor = (duro: number) => durometerTiers.find((t) => duro >= t.min)?.label ?? "";

export const wheelGroups: WheelGroup[] = [
  {
    name: "AI & agents",
    color: "pink",
    text: "ink",
    items: [
      { name: "AI Agents", duro: 99 },
      { name: "LangChain", duro: 96 },
      { name: "LangGraph", duro: 95 },
      { name: "RAG", duro: 95 },
      { name: "Embeddings", duro: 95 },
      { name: "Vector DBs", duro: 92 },
      { name: "Prompt Eng", duro: 92 },
      { name: "Python", duro: 95 },
      { name: "LLMs", duro: 92 },
    ],
  },
  {
    name: "Backend & data",
    color: "acid",
    text: "ink",
    items: [
      { name: "Node.js", duro: 99 },
      { name: "Express", duro: 99 },
      { name: "REST APIs", duro: 99 },
      { name: "PostgreSQL", duro: 95 },
      { name: "MySQL", duro: 95 },
      { name: "MongoDB", duro: 92 },
      { name: "Firebase", duro: 92 },
      { name: "WebSockets", duro: 92 },
      { name: "SQL", duro: 95 },
      { name: "C++", duro: 88 },
    ],
  },
  {
    name: "Frontend",
    color: "white",
    text: "ink",
    items: [
      { name: "JavaScript", duro: 99 },
      { name: "React.js", duro: 99 },
      { name: "Next.js", duro: 95 },
      { name: "TypeScript", duro: 95 },
      { name: "Tailwind CSS", duro: 99 },
      { name: "HTML5 / CSS3", duro: 99 },
      { name: "React Native", duro: 90 },
      { name: "Material UI", duro: 88 },
    ],
  },
  {
    name: "DevOps & cloud",
    color: "blue",
    text: "white",
    items: [
      { name: "Git", duro: 99 },
      { name: "Docker", duro: 95 },
      { name: "GCP", duro: 92 },
      { name: "AWS", duro: 90 },
      { name: "Postman", duro: 95 },
      { name: "Linux / Bash", duro: 92 },
      { name: "Nginx", duro: 88 },
      { name: "Figma", duro: 88 },
    ],
  },
];
