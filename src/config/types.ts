/* =============================================================================
   TYPE DEFINITIONS for the portfolio configuration.
   You normally never need to touch this file — it just gives you
   autocomplete + safety while editing portfolio.config.ts.
   ============================================================================= */

import type { LucideIcon } from "lucide-react";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
export type ProjectStatus = "Completed" | "In Progress" | "Planned" | "Archived";
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface SocialLink {
  /** Lucide icon name, e.g. "Github". Must exist in lucide-react. */
  icon: string;
  label: string;
  url: string;
  /** Set false to hide without deleting. */
  enabled?: boolean;
}

export interface Skill {
  name: string;
  /** Lucide icon name OR an emoji string. */
  icon: string;
  category: string;
  level: SkillLevel;
  /** 0–100, drives the progress bar. */
  proficiency: number;
  description?: string;
  hidden?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  techStack: string[];
  image?: string;
  github?: string;
  demo?: string;
  status: ProjectStatus;
  difficulty?: Difficulty;
  type?: string;
  futurePlans?: string[];
  featured?: boolean;
  hidden?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  type: string; // Internship | Freelance | Volunteer | Research | Full-time
  location?: string;
  startDate: string;
  endDate: string; // or "Present"
  description?: string;
  highlights?: string[];
  hidden?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  grade?: string;
  coursework?: string[];
  description?: string;
  hidden?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  hidden?: boolean;
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  description?: string;
  hidden?: boolean;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  url: string;
  readTime?: string;
  hidden?: boolean;
}

export interface NavItem {
  label: string;
  href: string; // "#section-id"
}

export interface ThemeConfig {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  radiusCard: string;
  fontSans: string;
  fontHeading: string;
  fontMono: string;
  /** Start in dark mode. */
  defaultDark: boolean;
  /** Show the light/dark toggle button. */
  enableThemeToggle: boolean;
}

export interface AnimationConfig {
  enableLoadingScreen: boolean;
  enableCustomCursor: boolean;
  enableScrollProgress: boolean;
  enableParallax: boolean;
  enableTypingAnimation: boolean;
  enableFloatingShapes: boolean;
}

export interface SectionToggles {
  hero: boolean;
  about: boolean;
  skills: boolean;
  projects: boolean;
  experience: boolean;
  education: boolean;
  certifications: boolean;
  achievements: boolean;
  github: boolean;
  blog: boolean;
  contact: boolean;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  ogImage: string;
  twitterHandle?: string;
  favicon: string;
  robots: string;
}

export interface ContactConfig {
  formEnabled: boolean;
  /** EmailJS values can also be supplied via env vars (see .env.example). */
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
  emailjsPublicKey?: string;
  /** Fallback mailto when EmailJS isn't configured. */
  fallbackToMailto: boolean;
  successMessage: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    firstName: string;
    headline: string;
    /** Strings cycled by the typing animation. */
    typingRoles: string[];
    tagline: string;
    bio: string;
    role: string;
    email: string;
    phone?: string;
    location: string;
    resumeUrl: string;
    profileImage: string;
    heroImage?: string;
    availableForWork: boolean;
  };
  socials: SocialLink[];
  navigation: NavItem[];
  sections: SectionToggles;
  skills: Skill[];
  skillCategories: string[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  achievements: Achievement[];
  blog: BlogPost[];
  github: {
    username: string;
    showStats: boolean;
    showPinned: boolean;
    showContributionGraph: boolean;
    showLanguages: boolean;
    pinnedRepos: string[]; // optional manual pin list; empty = auto top repos
  };
  contact: ContactConfig;
  theme: ThemeConfig;
  animations: AnimationConfig;
  seo: SeoConfig;
  footer: {
    note: string;
    showBackToTop: boolean;
  };
}

export type { LucideIcon };
