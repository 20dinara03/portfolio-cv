import type { CaseStudy, Project } from "@/types/project";

/**
 * Commercial project data verified against local Work repositories and Git history.
 * No commercial source code or private repository URLs are published.
 *
 * Status rule: public domains (not *.webstead.ru) → Live / Completed.
 * Staging/preview on webstead.ru → In Development.
 *
 * Featured order: Moonera first … Spinny last.
 * Project images are site photography/assets (not full-page screenshots).
 */
export const projects: Project[] = [
  {
    id: "moonera",
    name: "Moonera Habitat",
    year: "2025–2026",
    type: "commercial",
    status: "In Development",
    featured: true,
    commercial: true,
    role: "Frontend Developer · Brand / Catalog",
    description: "Luxury furniture brand site — Next.js catalog and product pages driven by a CMS API, with SCSS styling and lead forms. Primary frontend author; staging build in active development.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS",
      "CMS API",
    ],
    image: "/projects/moonera.jpg",
    imageAlt: "Moonera Habitat brand site homepage",
    liveUrl: "https://moonera.webstead.ru",
    responsibilities: [
      "Primary frontend author (100+ commits) on Next.js 16 App Router storefront",
      "Category and product flows consuming CMS / store APIs",
      "Contact and lead forms; gallery-style product presentation",
      "i18n text export tooling and responsive layout polish",
    ],
    caseStudy: {
      productContext: "Moonera Habitat is a luxury furniture brand site with catalog browsing, product detail pages, and brand storytelling, backed by a CMS API.",
      myRole: "Frontend developer and primary Git author implementing the Next.js storefront from design layouts. Staging on moonera.webstead.ru; production deploy not yet published.",
      whatIBuilt: [
        "Next.js 16 App Router site structure with SCSS architecture",
        "Category listing and product detail page flows from CMS data",
        "Contact and lead capture forms",
        "Gallery-style product and brand presentation sections",
      ],
      technicalImplementation: [
        "Next.js 16 App Router with React 19 and TypeScript",
        "SCSS component styles with responsive layouts",
        "CMS / store API integration for catalog content",
        "Form components for contact and lead capture",
      ],
      result: "Staging build in active development — core catalog and product pages implemented; client iteration ongoing.",
    },
  },
  {
    id: "cantexniki",
    name: "Cantexniki",
    year: "2025–2026",
    type: "commercial",
    status: "Live",
    featured: true,
    commercial: true,
    role: "Frontend Developer · E-commerce",
    description: "E-commerce storefront for plumbing and bathroom products — catalog with filters, Redux cart, checkout with delivery/payment options, and responsive commerce UI.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Swiper",
    ],
    image: "/projects/cantexniki.jpg",
    imageAlt: "Cantexniki e-commerce homepage",
    liveUrl: "https://cantexniki.ru",
    responsibilities: [
      "Primary frontend contributor (majority of Git commits) on the Next.js storefront",
      "Catalog navigation, filters, promo tiles, and mobile filter overlays",
      "Checkout sticky aside, payment options, and CDEK delivery integration with the backend",
      "Redux Toolkit state for cart and commerce flows; responsive layouts from Figma",
    ],
    caseStudy: {
      productContext: "Cantexniki is a live e-commerce storefront for plumbing and bathroom products: catalog browsing, filtering, cart, checkout, and lead capture.",
      myRole: "Frontend developer and primary Git author on the React/Next.js storefront — catalog UX, checkout behaviour, Redux state, and API-backed commerce flows.",
      whatIBuilt: [
        "Catalog mega menu, filters, promo tiles, and mobile filter sheet",
        "Checkout sticky summary, payment options, and CDEK wiring to the backend",
        "Cart-related UX and order confirmation redirects",
        "Homepage/hero and catalog layout alignment with Figma",
        "Responsive commerce layouts across desktop and mobile",
      ],
      technicalImplementation: [
        "Next.js 15 with React 19 and TypeScript (152+ TSX modules)",
        "Redux Toolkit + react-redux for cart and preferences",
        "REST API integration for catalog, checkout, and delivery",
        "Framer Motion and Swiper for product presentation",
        "Phone input components for lead and contact forms",
      ],
      challenges: ["Keeping checkout sticky aside and payment controls stable while scrolling", "Portal-based mobile catalog filters that open above page content without scroll conflicts"],
      result: "Live production e-commerce site at cantexniki.ru.",
    },
  },
  {
    id: "poseidon-doors",
    name: "Poseidon Doors",
    year: "2025–2026",
    type: "commercial",
    status: "Live",
    featured: true,
    commercial: true,
    role: "Frontend Developer · E-commerce",
    description: "Door manufacturer storefront (Poseidon Doors) — WooCommerce catalog, product configurator, 3D door viewer, cart, and checkout. Primary frontend contributor.",
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "3D / WebGL",
      "AJAX",
    ],
    image: "/projects/poseidon-doors.jpg",
    imageAlt: "Poseidon Doors storefront homepage",
    liveUrl: "https://poseidondoors.ru",
    responsibilities: [
      "Primary Git author (280+ commits) on the commercial storefront theme and commerce UX",
      "Product page configurator, related products, stock display, and cart line logic",
      "3D door gallery viewer (model-3d / .glb) with colour swatches and modal viewer",
      "Cart and checkout rebuild from Figma; AJAX catalog pagination",
    ],
    caseStudy: {
      productContext: "Poseidon Doors (formerly Dvernoyton) is a live door-manufacturer e-commerce site: catalog, product configuration, 3D preview, cart, and checkout on WordPress / WooCommerce.",
      myRole: "Frontend developer and primary Git author on the theme and storefront UX — product pages, 3D viewer, cart/checkout, and catalog behaviour. Collaborated with others on CI/deploy and infrastructure.",
      whatIBuilt: [
        "Product configurator and pricing UI (including dobor/nalichniki cart sections)",
        "3D product gallery and modal viewer with colour materials",
        "Cart and checkout pages rebuilt from Figma",
        "AJAX catalog pagination without full page reloads",
        "Contact/requisites updates for the poseidondoors.ru brand migration",
      ],
      technicalImplementation: [
        "Custom WordPress theme on WooCommerce",
        "JavaScript/AJAX for catalog pagination and interactive product UI",
        "3D model loading (.glb) with material/colour switching in a modal viewer",
        "Checkout and cart templates integrated with WooCommerce flows",
      ],
      challenges: ["Proxying .glb models through WordPress to avoid S3 CORS issues in the 3D viewer", "Keeping configurator and cart pricing consistent for add-on parts (dobor/nalichniki)"],
      result: "Live production storefront at poseidondoors.ru after brand migration from dvernoyton.com.",
    },
  },
  {
    id: "paradim",
    name: "Paradim",
    year: "2025–2026",
    type: "commercial",
    status: "In Development",
    featured: true,
    commercial: true,
    role: "Frontend Developer · Corporate landing",
    description: "Architecture & construction company site — project gallery, geography map, Lenis smooth scroll, Framer Motion, and validated inquiry forms. Primary frontend author.",
    stack: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "React Hook Form",
      "Lenis",
      "Maps",
    ],
    image: "/projects/paradim.jpg",
    imageAlt: "Paradim architecture landing",
    liveUrl: "https://paradim.webstead.ru",
    responsibilities: [
      "Primary frontend author (50+ commits) on Next.js 16 site",
      "Lenis smooth scroll (including trackpad jank fixes) and Framer Motion sections",
      "Geography map UI and portfolio gallery layouts",
      "Validated inquiry forms with React Hook Form and phone inputs",
    ],
  },
  {
    id: "goodhouse",
    name: "Good House",
    year: "2026",
    type: "commercial",
    status: "In Development",
    featured: true,
    commercial: true,
    role: "Frontend Developer · Site migration",
    description: "Construction company site migrated from Tilda to React + Vite + TypeScript — project catalog, blog, legal pages, and responsive layouts. Active development.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "React Router",
    ],
    image: "/projects/goodhouse.jpg",
    imageAlt: "Good House construction site homepage",
    liveUrl: "https://goodhouse.webstead.ru",
    responsibilities: [
      "Migrated project, blog, and legal pages from Tilda export into React components",
      "Project gallery lightbox and project-card navigation",
      "Mobile layout fixes and brand typography/colour updates",
      "Worked alongside CI/Docker setup for staging on goodhouse.webstead.ru",
    ],
  },
  {
    id: "konstanta",
    name: "Konstanta Stroy",
    year: "2026",
    type: "commercial",
    status: "Live",
    featured: true,
    commercial: true,
    role: "Frontend Developer · Corporate WordPress",
    description: "Construction company WordPress site — custom theme for completed and project houses, portfolios, and request forms integrated with Webstead forms API.",
    stack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Docker",
    ],
    image: "/projects/konstanta.jpg",
    imageAlt: "Konstanta Stroy homepage",
    liveUrl: "https://konstantas.ru",
    responsibilities: ["Primary theme contributor (70+ commits) on custom WordPress content types and catalogs", "Request forms wired to the Webstead forms API", "Catalog ordering and house/project presentation in the custom admin section"],
  },
  {
    id: "velesstroy",
    name: "Velesstroy Career",
    year: "2025",
    type: "commercial",
    status: "Live",
    featured: true,
    commercial: true,
    role: "Frontend Developer · Corporate portal",
    description: "Career portal for an engineering & construction company — bilingual RU/EN, vacancies, and candidate flows.",
    stack: [
      "WordPress",
      "PHP",
      "Potok",
      "Bitrix",
    ],
    image: "/projects/velesstroy.jpg",
    imageAlt: "Velesstroy career portal",
    liveUrl: "https://career.velesstroy.com",
    liveUrlLabel: "RU site",
    secondaryUrl: "https://en.career.velesstroy.com/",
    secondaryUrlLabel: "EN site",
    responsibilities: ["Bilingual delivery: Russian and English career portal versions", "Potok ATS and Bitrix integrations for applications and CRM flows", "Content-heavy corporate UI for vacancies and employer presentation"],
  },
  {
    id: "interbuilding",
    name: "Interbuilding",
    year: "2025",
    type: "commercial",
    status: "Live",
    featured: true,
    commercial: true,
    role: "Frontend Developer · Corporate + promo",
    description: "Interior design company platform — main site with user accounts and a separate promo landing for lead generation.",
    stack: [
      "WordPress",
      "PHP",
      "Accounts",
      "Forms",
    ],
    image: "/projects/interbuilding.jpg",
    imageAlt: "Interbuilding main site",
    liveUrl: "https://interbuilding.ru",
    liveUrlLabel: "Main site",
    secondaryUrl: "https://promo.interbuilding.ru/",
    secondaryUrlLabel: "Promo landing",
    responsibilities: ["Main site with services, portfolio, multi-step briefs, and contact flows", "User accounts and messaging integrated into the production site", "Separate promo landing for fixed-price renovation campaigns"],
  },
  {
    id: "spinny",
    name: "Spinny",
    year: "2025–2026",
    type: "commercial",
    status: "Live",
    featured: true,
    commercial: true,
    role: "Frontend Developer · SaaS",
    description: "SaaS platform for interactive spin-wheel marketing widgets. Customer dashboard with authentication, widget CRUD, sector editor, statistics, CRM integrations, and tariff management.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "REST APIs",
      "JWT",
      "React Hook Form",
    ],
    image: "/projects/spinny.jpg",
    imageAlt: "Spinny marketing site homepage",
    liveUrl: "https://spinny.ru",
    liveUrlLabel: "Marketing site",
    secondaryUrl: "https://lk.spinny.ru/",
    secondaryUrlLabel: "Dashboard",
    responsibilities: [
      "Implemented wheel editor flows: design, sectors, win probabilities, integrations, and install",
      "Built JWT-authenticated REST API integration with loading, toast, and error states",
      "Developed drag-and-drop sector builder (@dnd-kit) and React Hook Form + Yup validation",
      "Added exit-intent lead capture, widget background dimming settings, and Yandex Metrika goals",
    ],
    caseStudy: {
      productContext: "Spinny is a SaaS product for creating interactive spin-wheel marketing widgets. The customer dashboard (lk.spinny.ru) is where business users manage widgets, configure sectors, view statistics, connect CRM integrations, and manage plans.",
      myRole: "Frontend developer on the customer dashboard and widget frontend — UI, API integration, authentication-related flows, and editor features. Work shared with other contributors; my commits focus on editor UX, auth safety, widget behaviour, and analytics.",
      whatIBuilt: [
        "Wheel editor pages: design, sectors, integrations, and install flow polish",
        "Sector win-chance logic, redistribution warnings, and colour persistence",
        "JWT / unauthenticated safety around wheel data fetching in the App Router",
        "Drag-and-drop sector builder with @dnd-kit",
        "React Hook Form + Yup validation across editor forms",
        "Exit-intent lead capture toggle and Yandex Metrika spin/view goals",
      ],
      technicalImplementation: [
        "Next.js App Router with React 19 and TypeScript",
        "Axios REST client with JWT auth (jose) and toast/skeleton feedback",
        "React Hook Form + Yup / @hookform/resolvers for validated multi-step forms",
        "@dnd-kit for sortable sector editing",
        "UMD widget build pipeline (Rollup) for embeddable wheel scripts",
      ],
      challenges: ["Keeping sector win probabilities consistent (sum to 100%) while editing colours and order", "Preventing crashes when unauthenticated users hit wheel data paths in RSC"],
      result: "Live production marketing site and customer dashboard used by Spinny customers.",
    },
  },
  {
    id: "doors-russia",
    name: "DOORS RUSSIA",
    year: "2025–2026",
    type: "commercial",
    status: "In Development",
    featured: false,
    commercial: true,
    role: "Frontend Developer · E-commerce SPA",
    description: "Door-manufacturer catalog SPA with product configurator, filters, pagination, cart context, and checkout flows. React + Vite + TypeScript; staging build in active development.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "React Router",
      "REST APIs",
      "Context API",
    ],
    image: "/projects/doors-russia.jpg",
    imageAlt: "DOORS RUSSIA storefront catalog",
    liveUrl: "https://doors-russia.webstead.ru",
    responsibilities: [
      "Primary frontend author — catalog filters, sorting, pagination, and product pages",
      "Product door configurator (colours, opening types, fittings) with matchable options",
      "Cart context, header cart UI, and checkout recommendation cards",
      "REST API integration for catalog media and product data; form webhooks via Webstead forms",
    ],
    caseStudy: {
      productContext: "DOORS RUSSIA is a door-manufacturer catalog and ordering SPA covering collections, filtering, product configuration, cart, and checkout-oriented flows.",
      myRole: "Frontend developer and primary Git author building the SPA architecture, catalog, configurator, and cart UI. Staging build; still iterating with the client.",
      whatIBuilt: [
        "Catalog filters, sorting, and pagination against backend product data",
        "Product door configurator with colours, opening types, and fittings",
        "Cart context, header cart, and checkout recommendation cards",
        "REST API client for catalog and product media",
        "Site forms submitted via Webstead forms webhook",
      ],
      technicalImplementation: [
        "React 19 + Vite + TypeScript SPA",
        "React Router for catalog, product, cart, and content pages",
        "React Context for cart state",
        "REST API modules under src/api",
        "Responsive layouts matched to Figma across desktop and mobile",
      ],
      challenges: ["Configurator options that stay consistent with backend availability (matchable-only choices)", "Aligning catalog filter UX with a related WordPress storefront while keeping a React SPA architecture"],
      result: "Staging build in active development — catalog, configurator, and cart flows implemented; client iteration ongoing.",
    },
  },
  {
    id: "abpetrov",
    name: "AB Petrov Architecture",
    year: "2026",
    type: "commercial",
    status: "In Development",
    featured: false,
    commercial: true,
    role: "Frontend Developer · Corporate site",
    description: "Architecture bureau site rebuilt in Next.js from a Tilda design — CMS-driven projects, forms with phone validation, video, careers, and contacts. Primary frontend author.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Sass",
      "CMS API",
    ],
    image: "/projects/abpetrov.jpg",
    imageAlt: "AB Petrov Architecture homepage",
    liveUrl: "https://abpetrov.webstead.ru",
    responsibilities: [
      "Primary frontend author — Next.js App Router pages (projects, about, video, careers, contacts)",
      "Connected project pages to the portfolio CMS API",
      "Phone fields with country flag, mask, and validation; Webstead forms submission",
      "CMS photo-variant crossfade and motion aligned with the original Tilda layout",
    ],
  },
  {
    id: "st-doors",
    name: "ST-Doors",
    year: "2025–2026",
    type: "commercial",
    status: "In Development",
    featured: false,
    commercial: true,
    role: "Frontend Developer · CMS / storefront",
    description: "Specialized doors storefront on Joomla — migration/maintenance, Projects section with category filters, photo bank grid, and contacts updates. Active development.",
    stack: [
      "Joomla",
      "PHP",
      "JavaScript",
      "CSS",
      "Docker",
    ],
    image: "/projects/st-doors.jpg",
    imageAlt: "ST-Doors catalog homepage",
    liveUrl: "https://st-doors.webstead.ru/",
    responsibilities: [
      "Primary frontend author on theme and projects UX (80+ commits)",
      "Projects listing with category filters without full page reload",
      "Photo bank grid layout fixes and header scroll behaviour",
      "Contacts and company requisites updates; Docker/CI staging deploys",
    ],
  },
  {
    id: "lauhtin",
    name: "Lauhtin",
    year: "2026",
    type: "commercial",
    status: "In Development",
    featured: false,
    commercial: true,
    role: "Frontend Developer · Landing",
    description: "Marketing landing with HTML/CSS/JS — request cards, FAQ motion, form controls, and Docker/nginx staging deploy.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "Nginx",
    ],
    image: "/projects/lauhtin.jpg",
    imageAlt: "Lauhtin landing homepage",
    liveUrl: "https://lauhtin.webstead.ru",
    responsibilities: ["Primary frontend author — hover interactions, FAQ motion, and form control polish", "Request-card hover photography using img tags for reliable loading", "Nginx, Docker Compose, and GitLab CI staging setup for lauhtin.webstead.ru"],
  },
  {
    id: "bc-sites",
    name: "Kuptsov · Business-center sites",
    year: "2025",
    type: "commercial",
    status: "Live",
    featured: false,
    commercial: true,
    role: "Frontend Developer · Main site + generator",
    description: "Main Kuptsov Realty site plus a Handlebars template generator shipping dozens of business-center promo landings.",
    stack: [
      "Node.js",
      "Handlebars",
      "SCSS",
      "Static gen",
    ],
    image: "/projects/kuptsov.jpg",
    imageAlt: "Kuptsov Realty main site",
    liveUrl: "https://kuptsovwrealty.ru",
    liveUrlLabel: "Main site",
    secondaryUrl: "https://bc-h2o.ru/",
    secondaryUrlLabel: "Example BC site",
    responsibilities: ["Main agency site with property presentation and lead flows", "Node + Handlebars generator for many similar BC promo sites", "Form-sending logic and Safari/iOS scrolling fixes across generated templates"],
  },
  {
    id: "etrans",
    name: "Etrans",
    year: "2025",
    type: "commercial",
    status: "Live",
    featured: false,
    commercial: true,
    role: "Frontend Developer · Logistics platform",
    description: "International logistics site with geo IP routing, delivery calculator, and personal account entry.",
    stack: [
      "WordPress",
      "PHP",
      "Geo IP",
      "Swiper",
    ],
    image: "/projects/etrans.jpg",
    imageAlt: "Etrans logistics homepage",
    liveUrl: "https://etrans.info/",
    liveUrlLabel: "RU / CIS",
    secondaryUrl: "https://etrans.me/",
    secondaryUrlLabel: "International",
    responsibilities: ["Geo IP routing: Russia/CIS → etrans.info; other countries → etrans.me", "Custom WordPress theme with service carousels and contact flows", "Personal account entry and delivery-calculation CTA"],
  },
  {
    id: "daikin",
    name: "Daikin Climate",
    year: "2025",
    type: "commercial",
    status: "Live",
    featured: false,
    commercial: true,
    role: "Frontend Developer · E-commerce",
    description: "Official Daikin dealer storefront — catalog, promos, installation services, and cart.",
    stack: ["WordPress", "PHP", "E-commerce"],
    image: "/projects/daikin.jpg",
    imageAlt: "Daikin Climate homepage",
    liveUrl: "https://daikin-climate.com",
  },
  {
    id: "aura",
    name: "Aura Project",
    year: "2025",
    type: "commercial",
    status: "In Development",
    featured: false,
    commercial: true,
    role: "Frontend Developer · Luxury brand",
    description: "Architecture bureau site for luxury real estate — mission, process, portfolio, and contact flows. Staging preview.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/aura.jpg",
    imageAlt: "Aura Project homepage",
    liveUrl: "https://auraproject.webstead.ru/",
  },
  {
    id: "vector",
    name: "Vektor",
    year: "2025",
    type: "commercial",
    status: "Live",
    featured: false,
    commercial: true,
    role: "Frontend Developer · E-commerce",
    description: "Moisture-resistant doors storefront — catalog, online configurator, gallery, and cart.",
    stack: ["WordPress", "PHP", "Docker"],
    image: "/projects/vektor.jpg",
    imageAlt: "Vektor doors storefront",
    liveUrl: "https://vlagostoykie-dveri.ru/",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.commercial);
}

export function getMoreCommercialProjects(): Project[] {
  return projects.filter((p) => !p.featured && p.commercial);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

/** All commercial projects get a detail page at /projects/[slug] */
export function getCommercialProjects(): Project[] {
  return projects.filter((p) => p.commercial);
}

/** @deprecated use getCommercialProjects — kept for compatibility */
export function getCaseStudyProjects(): Project[] {
  return getCommercialProjects();
}

/** Prefer authored caseStudy; otherwise build a detail view from project fields. */
export function resolveCaseStudy(project: Project): CaseStudy {
  if (project.caseStudy) return project.caseStudy;

  const whatIBuilt =
    project.responsibilities && project.responsibilities.length > 0
      ? project.responsibilities
      : project.technicalHighlights && project.technicalHighlights.length > 0
        ? project.technicalHighlights
        : [project.description];

  const technicalImplementation = project.stack.map(
    (tech) => `${tech} used in this commercial project`,
  );

  const host = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";

  const resultByStatus: Record<string, string> = {
    Live: host
      ? `Live production project at ${host}.`
      : "Live production project.",
    Completed: "Completed commercial delivery.",
    "In Development":
      "Staging / in development — not all functionality is production-final yet.",
    Private: "Private / internal commercial project.",
  };

  return {
    productContext: project.description,
    myRole: `${project.role} on a WebStead commercial client project.`,
    whatIBuilt,
    technicalImplementation,
    result: resultByStatus[project.status] ?? project.status,
  };
}
