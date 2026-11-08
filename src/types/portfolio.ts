/**
 * Strict TypeScript interfaces for Chew Ler Yang's Portfolio.
 * Separating data structures from UI components for effortless maintenance.
 */

export type SkillCategory =
  | 'All'
  | 'Performance & Analytics'
  | 'Copywriting & Content'
  | 'Social & Brand Strategy'
  | 'Design & Web Tools'
  | 'Core Competencies';

export type ProjectCategory =
  | 'All'
  | 'Performance & E-Commerce'
  | 'Social & Content Strategy'
  | 'Brand & Web Production';

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroMetric {
  id: string;
  value: string;
  label: string;
  context: string;
  organization: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  level: string;
  summary: string;
  appliedAt: string;
  iconName:
    | 'TrendingUp'
    | 'PenTool'
    | 'BarChart3'
    | 'Megaphone'
    | 'Palette'
    | 'Globe'
    | 'FileSpreadsheet'
    | 'Sparkles'
    | 'Users'
    | 'Lightbulb'
    | 'Puzzle'
    | 'MessageSquare';
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  clientOrOrg: string;
  period: string;
  category: Exclude<ProjectCategory, 'All'>;
  featured: boolean;
  summary: string;
  challenge: string;
  strategy: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  deliverables: string[];
  accentGradient: string;
  externalUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyDescriptor: string;
  location: string;
  period: string;
  type: 'Internship' | 'Capstone Project';
  highlights: string[];
  keyMetrics: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
  status: string;
  summary: string;
}

export interface ContactConfig {
  web3FormsAccessKey: string;
  endpointUrl: string;
  heading: string;
  subheading: string;
  availabilityNote: string;
  responseSla: string;
  inquiryTypes: string[];
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  tagline: string;
  kicker: string;
  headlinePrimary: string;
  headlineSerifAccent: string;
  bio: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  wixPortfolioUrl: string;
  resumePdfUrl: string;
  portraitUrl: string;
  currentStatus: string;
}

export interface PortfolioContent {
  profile: ProfileData;
  navigation: NavItem[];
  marqueeItems: string[];
  heroMetrics: HeroMetric[];
  sectionHeaders: {
    stack: { index: string; title: string; subtitle: string };
    projects: { index: string; title: string; subtitle: string };
    experience: { index: string; title: string; subtitle: string };
    education: { index: string; title: string; subtitle: string };
    contact: { index: string; title: string; subtitle: string };
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  contact: ContactConfig;
}

export interface ContactFormValues {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormValues, string>>;
}
