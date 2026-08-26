export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  summary: string;
  email: string;
  phone?: string;
  location?: string;
  linkedIn?: string;
  github?: string;
}

export interface Experience {
  company: string;
  client?: string;
  position: string;
  startDate: string;
  endDate: string;
  location?: string;
  context: string;
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
  previousExperiences: PreviousExperience[];
  education: Education[];
  skills: SkillGroup[];
  languages: Language[];
}
