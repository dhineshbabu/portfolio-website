export interface SkillCategory {
  label: string;
  tools: string[];
  accent: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  current: boolean;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  accent: string;
  bg: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
