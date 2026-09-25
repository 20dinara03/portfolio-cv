export type ProjectStatus = "Live" | "Completed" | "In Development" | "Private";

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
  type: "commercial" | "academic";
  status: ProjectStatus;
  featured: boolean;
  commercial: boolean;
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
