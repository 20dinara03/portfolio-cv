export type ProjectStatus =
  | "Live"
  | "Completed"
  | "In Development"
  | "Planned"
  | "Private";

export type ProjectCategory =
  | "Frontend"
  | "Full-Stack"
  | "Backend"
  | "AI"
  | "Mobile & IoT"
  | "E-commerce";

export type CaseStudy = {
  productContext: string;
  myRole: string;
  whatIBuilt: string[];
  technicalImplementation: string[];
  challenges?: string[];
  result: string;
};

export type Project = {
  id: string;
  name: string;
  year?: string;
  type: "commercial" | "academic" | "personal" | "planned";
  status: ProjectStatus;
  featured: boolean;
  commercial: boolean;
  categories: ProjectCategory[];
  description: string;
  role: string;
  stack: string[];
  responsibilities?: string[];
  technicalHighlights?: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  secondaryUrl?: string;
  secondaryUrlLabel?: string;
  githubUrl?: string;
  caseStudy?: CaseStudy;
  companyVisible?: boolean;
};
