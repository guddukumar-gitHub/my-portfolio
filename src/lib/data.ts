// Import JSON
import developerData from "@/data/developer.json";
import socialsData from "@/data/socials.json";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import productsData from "@/data/products.json";

// Import Types
import type {
  Developer,
  Social,
  SkillCategory,
  Project,
  Product,
} from "@/types";

/* =========================
   Typed Data Exports
========================= */

export const developer: Developer = developerData;

export const socials: Social[] = socialsData;

export const skills: SkillCategory[] = skillsData;

export const projects: Project[] = projectsData;

export const products: Product[] = productsData;

/* =========================
   Helper Functions
========================= */

// Get highlighted projects
export function getHighlightedProjects(): Project[] {
  return projects.filter((project) => project.highlight);
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Get all project slugs (for dynamic routes)
export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
