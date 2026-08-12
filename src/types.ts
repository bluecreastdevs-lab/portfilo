export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'cybersecurity' | 'other';
  icon: string;
  level: string; // e.g. "Advanced", "Proficient"
  description: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Web App' | 'E-Commerce' | 'Cybersecurity' | 'Full-Stack';
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  highlights: string[];
  securityFeature?: string;
  clientType?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  validationNumber?: string;
  verifyUrl: string;
  badge: string; // icon or type
  description: string;
  skillsCovered: string[];
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  internshipId?: string;
  type: 'Cybersecurity Pentesting' | 'Web Development' | 'Freelance Agency';
  description: string;
  highlights: string[];
  technologies: string[];
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  popularFor: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappFormatted: string;
  instagram: string;
  linkedin: string;
  github: string;
  location: string;
  address: string;
  workingHours: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  subTagline: string;
  heroText: string;
  aboutText: string;
  foundedYear: string;
  college: string;
  batch: string;
  program: string;
  location: string;
  serviceRegions: string[];
  contact: ContactInfo;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
