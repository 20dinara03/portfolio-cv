export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  dateTime: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

/** Professional experience — reverse chronological */
export const experienceList: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "WebStead",
    companyUrl: "https://webstead.ru/",
    period: "August 2024 – October 2026",
    dateTime: "2024-08/2026-10",
    location: "Moscow, Russia",
    summary:
      "Developed and maintained commercial SaaS, e-commerce, and corporate web applications using React, Next.js, TypeScript, and JavaScript.",
    bullets: [
      "Implemented interactive dashboards, authentication-related interfaces, CRUD functionality, complex forms, and REST API integrations",
      "Built reusable UI components and responsive interfaces, using Redux Toolkit for application state management where needed",
      "Worked with existing codebases, investigated bugs, improved UI functionality, and delivered features through Git-based workflows",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "REST APIs",
      "Git",
    ],
  },
  {
    role: "Junior Backend Developer",
    company: "Meridian LLC",
    period: "September 2023 – May 2024",
    dateTime: "2023-09/2024-05",
    location: "Kazan, Russia",
    summary:
      "Backend development for geospatial data management — Java/Spring Boot services, Python data processing, and spatial databases.",
    bullets: [
      "Developed backend services and REST APIs using Java and Spring Boot for geospatial data management",
      "Processed, validated, and transformed data collected through field surveys and drone imagery using Python",
      "Implemented spatial data storage and database queries using PostgreSQL, PostGIS, and Hibernate",
      "Worked with unit testing, debugging, and development workflows using JUnit, Git, and Docker",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Python",
      "PostgreSQL",
      "PostGIS",
      "Hibernate",
      "REST API",
      "Docker",
      "JUnit",
      "Git",
    ],
  },
];

/** @deprecated use experienceList — kept for compatibility during migration */
export const experience = experienceList[0];
