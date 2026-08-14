// ============================================================
// STRICT TYPESCRIPT INTERFACES — Portfolio Domain
// ============================================================

export interface ProjectLinks {
  github?: string;
  live?: string;
  vercel?: string;
  backendSource?: string;
  appetize?: string;
  video?: string;
}

export interface IProject {
  _id?: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  timeline: string;
  tag: string;
  tagColor?: string;
  tech: string[];
  links: ProjectLinks;
  featured?: boolean;
  order?: number;
}

export interface ISkillCategory {
  _id?: string;
  id: string;
  title: string;
  icon: string;
  iconColor?: string;
  type: "bars" | "tags";
  items: Array<{
    label: string;
    pct?: number;
  }>;
  order?: number;
}

export interface IExperience {
  _id?: string;
  id: string;
  role: string;
  company: string;
  location: string;
  timeline: string;
  accentColor?: string;
  bullets: string[];
  order?: number;
}

export interface IEducation {
  _id?: string;
  id: string;
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  cgpa: string;
  highlights?: string[];
  order?: number;
}

export interface ICertification {
  _id?: string;
  id: string;
  title: string;
  issuer: string;
  icon: string;
  iconColor?: string;
  order?: number;
}

export interface IPortfolioMetrics {
  totalProjects: number;
  totalInternships: number;
  totalCertifications: number;
  latestCgpa: string;
  primaryTechStack: string[];
}

export interface IPortfolioData {
  metrics: IPortfolioMetrics;
  skills: ISkillCategory[];
  projects: IProject[];
  experience: IExperience[];
  education: IEducation[];
  certifications: ICertification[];
}

export interface IContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  ipAddress?: string;
  createdAt?: string | Date;
}
