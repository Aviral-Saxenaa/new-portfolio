import type { Publication, SiteConfig } from "@/types/content";

const url = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aviralsaxena.me").replace(/\/$/, "");
const email = "aviral.saxena.11.70@gmail.com";

export const site: SiteConfig = {
  name: { first: "Aviral", last: "Saxena", full: "Aviral Saxena" },
  role: "Full-Stack Developer & AI Engineer",
  description:
    "Aviral Saxena is a Full-Stack Developer and AI Engineer with expertise in building scalable backend systems, AI agents, RAG pipelines, and interactive web applications.",
  url,
  locale: "en_IN",
  email,
  location: "Delhi, India",
  timezone: { label: "UTC +5:30", iana: "Asia/Kolkata" },
  availability: "Open to SWE, Full-Stack & AI Roles",
  employer: { name: "Miebach Consulting", url: "https://www.miebach.com" },
  education: {
    school: "SRM Institute of Science and Technology, NCR",
    degree: "B.Tech, Cloud Computing",
    from: "2022",
    to: "2026",
  },
  hero: {
    tags: ["Full-stack developer", "Backend & AI engineering", "Cloud architectures"],
    subheading:
      "I build scalable web applications and intelligent systems end to end: **robust backend APIs, AI agents and RAG pipelines**, and high-performance interactive interfaces. Currently engineering solutions at **Miebach Consulting**.",
    scribble: "scroll to drop in ↓",
    ctas: [
      { label: "See my work", href: "#experience", primary: true },
      { label: "Contact", href: "#contact" },
    ],
  },
  contact: {
    pitch:
      "Hiring for Full-Stack, Backend, or AI Engineering roles, or building scalable applications? Tell me what you're working on.",
    reachTitle: "Reach me",
    emailLabel: "Email",
    copyLabel: "Copy",
    copiedLabel: "Copied!",
    openLabel: "Open",
    basedIn: "Based in",
    sticker: "Let's build something!",
    tag: "AS",
    form: {
      title: "Send a message",
      web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || undefined,
      endpoint: "https://api.web3forms.com/submit",
      fromName: "Aviral Portfolio contact form",
      fields: {
        name: { label: "Name", placeholder: "Your name", error: "Name is required" },
        email: { label: "Email", placeholder: "you@company.com", error: "Enter an email I can reply to" },
        message: { label: "Message", placeholder: "What are you building?", error: "Tell me a little about it" },
      },
      send: "Send message",
      sending: "Sending…",
      sent: "Sent. I'll get back to you soon.",
      failed: "That didn't go through. Email me directly:",
      opening: "Opening your email app with the message filled in.",
      subject: "Portfolio: message from {name}",
    },
  },
  socials: [
    { kind: "linkedin", label: "LinkedIn", handle: "saxenaaviral", href: "https://linkedin.com/in/saxenaaviral" },
    { kind: "github", label: "GitHub", handle: "Aviral-Saxenaa", href: "https://github.com/Aviral-Saxenaa" },
    { kind: "website", label: "LeetCode", handle: "Aviral-Saxenaa", href: "https://leetcode.com/Aviral-Saxenaa/" },
  ],
  resume: {
    title: "Résumé",
    href: "https://drive.google.com/file/d/11cAZpb2aei-EgN8kZrWhqxV2HqOIfJDs/view?usp=sharing",
    label: "View PDF",
  },
  footnote: "Skater, skates and every graphic on this page are drawn in code.",
};

export const publications: Publication[] = [];
