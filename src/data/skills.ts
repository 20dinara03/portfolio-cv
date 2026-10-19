export type SkillGroup = {
  name: string;
  subtitle?: string;
  items: string[];
};

export const skillCategories: SkillGroup[] = [
  {
    name: "Primary commercial stack",
    subtitle: "Technologies I use most in production work",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "HTML",
      "CSS",
      "SCSS",
    ],
  },
  {
    name: "Frontend application development",
    subtitle: "Patterns from commercial SaaS and e-commerce work",
    items: [
      "REST APIs",
      "Authentication",
      "Form validation",
      "Reusable components",
      "Responsive interfaces",
      "Git",
    ],
  },
  {
    name: "Additional academic / project experience",
    subtitle: "University coursework and projects — supporting knowledge",
    items: [
      "Java",
      "Spring Boot",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Node.js",
      "Flutter",
      "Firebase",
      "Python",
      "C / C++",
      "C# / .NET",
      "Figma",
      "WordPress",
    ],
  },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "B2" },
  { name: "English", level: "B2" },
  {
    name: "Slovak",
    level: "Basic / passive comprehension supported by Czech",
  },
];
