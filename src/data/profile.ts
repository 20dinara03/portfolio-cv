export const profile = {
  name: "Dinara Garipova",
  professionalTitle: "Frontend Developer",
  primaryStack: ["React", "Next.js", "TypeScript"] as const,
  tagline:
    "Frontend Developer with around two years of commercial experience building SaaS and e-commerce applications with React, Next.js, and TypeScript. I enjoy turning complex workflows into intuitive interfaces — from interactive dashboards and forms to API-connected product features.",

  /** Update this single line when relocation status changes */
  relocationStatus: "Bratislava, Slovakia — relocating November 2026",

  location: "Bratislava, Slovakia — relocating November 2026",
  targetLocation: "Bratislava, Slovakia",

  email: "garipovad020@gmail.com",
  emailSecondary: "dg_Yelena-Servis@mail.ru",
  github: "https://github.com/20dinara03",
  portfolio: "https://portfolio-cv-ashy.vercel.app",
  /** Keep pointing at the current resume file until a new PDF is added */
  resumeUrl: "/resume/dinara-garipova-cv.pdf",

  university: "https://www.fit.vut.cz/",
  company: {
    name: "WebStead",
    url: "https://webstead.ru/",
  },

  about: [
    "I'm a frontend developer who enjoys bringing ideas to life, especially when a project combines thoughtful design with interesting technical challenges. I like understanding how things work, experimenting with different approaches, and continuously improving what I create.",
    "Outside of coding, I love staying active. I enjoy working out at the gym, figure skating, and dancing. I'm also passionate about cooking — especially experimenting with restaurant-style dishes and adapting recipes to make them high in protein and lower in fat without sacrificing flavor.",
    "Recently, I've also become interested in assembling and improving models for an automated greenhouse project. It's a fun way to explore how software and physical systems can work together, and to keep learning beyond traditional web development.",
  ],

  education: [
    {
      degree: "Master's Degree in Application Development",
      school:
        "Faculty of Information Technology, Brno University of Technology (VUT FIT)",
      period: "2024 — 2026",
      focus: "Web & mobile applications, software engineering",
      note: "Completed 2026 · program in Czech · combined with commercial frontend work at WebStead",
      highlight: true,
    },
    {
      degree: "Bachelor's Degree in Information Systems and Technology",
      school:
        "Faculty of Information Technology, Brno University of Technology (VUT FIT)",
      period: "2021 — 2024",
      focus: "Computer science fundamentals, algorithms, systems programming",
      note: "Completed",
      highlight: false,
    },
    {
      degree: "BSc, Information Systems and Technologies",
      school: "Kazan National Research Technical University (KNRTU)",
      period: "2021 — 2026",
      focus: "Information systems, applied IT",
      note: "Completed 2026 · parallel track alongside VUT FIT",
      highlight: false,
    },
  ],
};
