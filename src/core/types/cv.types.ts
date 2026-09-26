export interface Highlight {
  label: string;
  text: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  highlights: Highlight[];
  email: string;
  phone?: string;
  location?: string;
  linkedIn?: string;
  github?: string;
}

export interface Experience {
  company: string;
  client?: string;
  sector?: string;
  position: string;
  startDate: string;
  endDate: string;
  location?: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  period: string;
  status?: string;
  url?: string;
  achievements: string[];
  technologies: string[];
}

export interface PreviousExperience {
  period: string;
  company: string;
  position: string;
  technologies: string[];
}

export interface Education {
  year: string;
  degree: string;
  school: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  previousExperiences: PreviousExperience[];
  education: Education[];
  skills: SkillGroup[];
  languages: Language[];
}
