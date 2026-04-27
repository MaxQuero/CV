export interface MajorExperience {
  type: 'major';
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  star: {
    situation: string;
    task: string;
    action: string[];
    result: string;
  };
  technologies?: string[];
}

export interface FoundationExperience {
  type: 'foundation';
  period: string;
  company: string;
  position: string;
  description: string;
  technologies?: string[];
}

export type Experience = MajorExperience | FoundationExperience;

export interface Education {
  year: string;
  level: string;
  degree: string;
  school: string;
}

export interface CVData {
  personalInfo: {
    firstName: string;
    lastName: string;
    title: string;
    tagline: string;
    email: string;
    phone?: string;
    location?: string;
    /** URL (ex. `/photo.jpg` dans `public/`) — affichage web + export PDF */
    photoUrl?: string;
    linkedIn?: string;
    github?: string;
    website?: string;
  };
  majorExperiences: MajorExperience[];
  foundationExperiences: FoundationExperience[];
  education: Education[];
  skills: {
    category: string;
    items: string[];
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  interests?: string[];
}

