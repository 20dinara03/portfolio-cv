export type SkillGroup = {
  name: string;
  subtitle?: string;
  items: string[];
};

export const skillCategories: SkillGroup[] = [
  {
    name: "Frontend",
    subtitle: "Primary commercial specialization",
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
    name: "Web Development",
    subtitle: "Production application patterns",
    items: [
      "REST APIs",
      "Authentication",
      "Responsive UI",
      "Form Validation",
    ],
  },
  {
    name: "Backend / Additional Engineering",
    subtitle: "University coursework and projects — not my primary commercial role",
    items: [
      "Java",
      "Spring Boot",
      "SQL",
      "PostgreSQL",
      "Node.js / Express",
      "C# / .NET",
      "Python",
      "C / C++",
      "Django",
      "Flutter / Dart",
      "Firebase",
    ],
  },
  {
    name: "Tools",
    subtitle: "Daily workflow and delivery",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Figma",
      "WordPress",
      "Vite",
      "React Hook Form",
      "Axios",
      "Framer Motion",
    ],
  },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "B1/B2" },
  { name: "English", level: "B2" },
  { name: "Slovak", level: "Good passive comprehension" },
];
