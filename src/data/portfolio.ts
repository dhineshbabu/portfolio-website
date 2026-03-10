import { SkillCategory, Achievement, ExperienceEntry, Certification } from "@/types";

export const PERSONAL_INFO = {
  name: "Dhineshbabu Muthuraj",
  title: "Sr. Software Development Engineer (Performance)",
  company: "Workday",
  yearsExp: 15,
  location: "Fremont, California",
  email: "kanudhinesh@gmail.com",
  image: "/image/portfolio_website_image.jpg",
  resume: "/resume/Dhineshbabu Muthuraj_Resume.pdf",
  summary:
    "Performance Engineer with 15+ years of experience in Performance and Resiliency engineering for leading industries and product companies. Expert in performance engineering, architecture discussions, performance testing, SRE, and observability tools. Actively working on integration of AI tools and Agents for automation of performance bottleneck identification.",
  socials: {
    linkedin: "https://www.linkedin.com/in/dhineshbabumuthu/",
    github: "https://github.com/dhineshbabu",
    twitter: "https://x.com/dhineshperf",
    leetcode: "https://leetcode.com/u/kanudhinesh/",
  },
};

export const SKILLS: SkillCategory[] = [
  {
    label: "AI & Automation",
    tools: ["Langgraph", "RAG-based Tools", "Cursor", "Jupyter Notebooks", "Claude Code", "Google Gemini", "ChatGPT", "Openclaw"],
    accent: "#a855f7",
  },
  {
    label: "Programming Languages",
    tools: ["Python", "Java", "JavaScript", "Groovy"],
    accent: "#f97316",
  },
  {
    label: "Observability & Monitoring",
    tools: ["Grafana", "Dynatrace", "Splunk", "AppDynamics", "Prometheus", "AWS CloudWatch", "OpenTelemetry", "Jaeger", "Sumo Logic"],
    accent: "#22d3ee",
  },
  {
    label: "Cloud Platforms",
    tools: ["AWS", "Google Cloud", "Microsoft Azure"],
    accent: "#3b82f6",
  },
  {
    label: "CI/CD",
    tools: ["Jenkins", "AWS CodePipeline", "CodeBuild", "Docker", "Kubernetes"],
    accent: "#10b981",
  },
  {
    label: "UI Performance",
    tools: ["Google Lighthouse", "Sitespeed", "Fiddler", "HTTP Watch", "DOM Performance API"],
    accent: "#ec4899",
  },
  {
    label: "Database",
    tools: ["Oracle (AWR Analysis)", "MySQL", "AWS RDS", "AWS RDS Proxy"],
    accent: "#ef4444",
  },
  {
    label: "Performance Testing",
    tools: ["LoadRunner", "JMeter", "Neoload", "Gatling"],
    accent: "#f59e0b",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "AI-Powered Bottleneck Detection",
    description:
      "Integrated AI tools and agents to automate performance bottleneck identification and outage root cause analysis using logs, dashboards, and metrics.",
    icon: "Zap",
  },
  {
    title: "Data Analysis with Jupyter",
    description:
      "Developed Jupyter notebooks for performance data analysis and pattern identification with resiliency guardrails for enterprise applications.",
    icon: "BookOpen",
  },
  {
    title: "Google Lighthouse Monitoring",
    description:
      "Developed a Node.js codebase for automated Google Lighthouse UI performance monitoring integrated with QA/UAT CI/CD pipelines.",
    icon: "Monitor",
  },
  {
    title: "Architecture Design Decisions",
    description:
      "Key contributor to product architecture decision-making that impacts global customers — evaluating performance trade-offs, scalability strategies, and infrastructure choices across enterprise systems.",
    icon: "Search",
  },
  {
    title: "Software Benchmarking & Capacity Planning",
    description:
      "Conducted comprehensive software benchmarking across CPU architectures, cloud instance types, and infrastructure configurations to support data-driven capacity planning decisions.",
    icon: "BarChart",
  },
  {
    title: "Database Performance Engineering",
    description:
      "Deep Oracle AWR analysis, query tuning, and cloud RDS monitoring with Performance Insights to identify and resolve database bottlenecks across enterprise-scale applications.",
    icon: "Database",
  },
  {
    title: "End-to-End ETL Performance Strategy",
    description:
      "Defined comprehensive performance engineering strategy for ETL pipelines including ETL tuning and Oracle query optimization at enterprise scale.",
    icon: "GitBranch",
  },
  {
    title: "AWS CI/CD Workshop",
    description:
      "Primary contributor for an external CI/CD workshop hosted by AWS, demonstrating best practices with Docker and Python.",
    icon: "Cloud",
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Workday, Inc.",
    role: "Sr. Software Development Engineer (Performance)",
    period: "Jun 2024 – Present",
    current: true,
    location: "Pleasanton, California",
  },
  {
    company: "Cognizant Technology Solutions US Corp.",
    role: "Software Performance Engineer → Senior Project Manager",
    period: "Dec 2022 – May 2024",
    current: false,
    location: "United States",
  },
  {
    company: "Cognizant Technology Solutions India Pvt. Ltd.",
    role: "Software Performance Engineer → Senior Project Manager",
    period: "Jul 2010 – Dec 2022",
    current: false,
    location: "India",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Solutions Architect Associate", issuer: "AWS", accent: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { name: "Developer Associate", issuer: "AWS", accent: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { name: "Cloud Practitioner", issuer: "AWS", accent: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { name: "AI Practitioner Foundational", issuer: "AWS", accent: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", accent: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  { name: "AI Fundamentals", issuer: "Microsoft Azure", accent: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
  { name: "Data Fundamentals", issuer: "Microsoft Azure", accent: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
  { name: "Azure Fundamentals", issuer: "Microsoft Azure", accent: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
  { name: "Linux Professional Certified", issuer: "LPI", accent: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", accent: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  { name: "Neotys Certified Professional", issuer: "Neotys", accent: "#10b981", bg: "rgba(16,185,129,0.1)" },
  { name: "Oracle Foundations Associate", issuer: "Oracle", accent: "#ef4444", bg: "rgba(239,68,68,0.1)" },
];
