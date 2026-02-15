
// define TypeScript interfaces for the developer portfolio data
export interface Developer {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  avatar: string;
  logo: string;
  bio: string;
  resume: string;
  availability: string;
  experienceYears: number;
  freelanceAvailable: boolean;
}


// define interface for social media links
export interface Social {
  name: string;
  username: string;
  url: string;
  icon: string;
}


// define interface for skills
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}


// define interface for projects
export interface Technology {
  name: string;
  logo: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  liveURL: string;
  githubURL: string;
  logo: string;
  technologies: Technology[];
  highlight: boolean;
}

// define interface for products
export interface Product extends Project { }
