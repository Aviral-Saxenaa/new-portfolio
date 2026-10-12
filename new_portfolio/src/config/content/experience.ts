import type { ExperienceEntry } from "@/types/content";
import { site } from "@/config/site";

export const experience: ExperienceEntry[] = [
  {
    from: "Jan 2026",
    to: "Jun 2026",
    title: "Software Engineer Intern",
    org: site.employer.name,
    orgUrl: site.employer.url,
    badge: "WMS & AI SYSTEMS",
    stamp: { value: "+40%", caption: "search speed", ring: "semantic AI · RAG" },
    points: [
      "Engineered modules for **warehouse management software (WMS)**, developing high-throughput REST APIs and microservice communication contracts.",
      "Built an **AI-powered semantic search chatbot** using RAG pipelines and vector embeddings, speeding up internal documentation and record queries by **40%**.",
      "Developed **real-time operational dashboards** and telemetry monitoring tools to track inventory throughput and critical warehouse workflows.",
      "Documented software architectures, validated test procedures with comprehensive QA suites, and enforced API reliability standards.",
    ],
  },
  {
    from: "Dec 2024",
    to: "Jan 2025",
    title: "Frontend Developer Intern",
    org: "Mahamela Innovations",
    badge: "FRONTEND · REMOTE",
    stamp: { value: "REACT", caption: "UI systems", ring: "responsive · components" },
    points: [
      "Built responsive, accessible user interfaces using **React.js, Next.js, and Tailwind CSS** for customer-facing web platforms.",
      "Collaborated closely with product teams to design reusable component libraries, reducing frontend feature delivery time by **25%**.",
      "Optimized client-side bundle sizes and rendering performance across various mobile viewports and network conditions.",
    ],
  },
  {
    from: "2024",
    title: "Technical Member",
    org: "Indian Society for Technical Education",
    badge: "TECH SOCIETY · SRM",
    stamp: { value: "MENTOR", caption: "workshops", ring: "community · dev" },
    points: [
      "Organized hands-on technical workshops, hackathons, and web development masterclasses for 200+ student developers.",
      "Collaborated on internal society web applications and mentored junior members in modern JavaScript, React, and Git workflows.",
    ],
  },
  {
    from: site.education.from,
    to: site.education.to,
    title: site.education.degree,
    org: site.education.school,
    badge: "CGPA 9.2 / 10",
    stamp: { value: "9.2", caption: "CGPA", ring: "Cloud Computing · B.Tech" },
    points: [
      "Pursuing **B.Tech in Cloud Computing** with an academic score of **9.2/10 CGPA**.",
      "Graduated Senior Secondary (CBSE) from **Jaycees Public School** with **95%** distinction.",
      "Core coursework in **Distributed Systems, Cloud Architecture (GCP, AWS), Operating Systems, Microservices, and Database Engineering**.",
    ],
  },
];
