export type WorkProject = {
  id: string;
  name: string;
  role: string;
  url?: string;
  urlLabel?: string;
  secondaryUrl?: string;
  secondaryUrlLabel?: string;
  image?: string;
  imageAlt?: string;
  gradient: string;
  accent: string;
  tags: string[];
  description: string;
  highlights: string[];
  /** Optional status badge, e.g. "In development" */
  status?: string;
  /** Best match for target React/TS / fullstack junior roles */
  featured?: boolean;
};

export const workProjects: WorkProject[] = [
  {
    id: "spinny",
    name: "Spinny",
    role: "Lead Frontend · SaaS",
    url: "https://lk.spinny.ru/",
    urlLabel: "Dashboard",
    secondaryUrl: "https://spinny.ru",
    secondaryUrlLabel: "Marketing site",
    image: "/projects/spinny-widget.png",
    imageAlt: "Spinny interactive spin-wheel widget",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    accent: "#a855f7",
    tags: ["Next.js 15", "React 19", "TypeScript", "REST", "JWT", "DnD"],
    featured: true,
    description:
      "SaaS platform for interactive spin-wheel marketing widgets. Primary work: the customer dashboard — auth, widget CRUD, sector editor, stats, and tariffs.",
    highlights: [
      "Built the customer dashboard (lk.spinny.ru): widgets list, active toggles, opens/spins/conversion stats",
      "Wheel editor flow: fields, design, sectors (colors, probabilities), install & integrations",
      "REST API layer with axios, JWT auth, skeleton loaders, and toast error/success states",
      "Reusable DnD builder (@dnd-kit), React Hook Form + Yup validation — TypeScript throughout",
    ],
  },
  {
    id: "cantexniki",
    name: "Cantexniki",
    role: "Lead Frontend · E-commerce",
    url: "https://cantexniki.ru",
    image: "/projects/cantexniki-hero.png",
    imageAlt: "Cantexniki e-commerce homepage — plumbing storefront",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accent: "#f97316",
    tags: ["Next.js 15", "React 19", "Redux Toolkit", "TypeScript", "REST"],
    featured: true,
    description:
      "E-commerce storefront for plumbing and bathroom products — catalog, filters, product cards, cart state. Direct Redux experience requested by React roles.",
    highlights: [
      "Global state with Redux Toolkit (cart, preferences)",
      "Product catalog with filters, carousels, and responsive commerce UX",
      "Animated UI with Framer Motion + Swiper; phone inputs and lead flows",
      "Integrated with backend REST APIs for catalog data",
    ],
  },
  {
    id: "velesstroy",
    name: "Velesstroy Career",
    role: "Frontend · Corporate portal",
    url: "https://career.velesstroy.com",
    urlLabel: "RU site",
    secondaryUrl: "https://en.career.velesstroy.com/",
    secondaryUrlLabel: "EN site",
    image: "/projects/velesstroy.png",
    imageAlt: "Velesstroy career portal — English landing",
    gradient: "from-orange-700 via-amber-700 to-yellow-800",
    accent: "#f59e0b",
    tags: ["WordPress", "PHP", "Potok", "Bitrix", "HR portal"],
    featured: true,
    description:
      "Career portal for a major engineering & construction company — RU + EN versions, vacancies, employer brand, and candidate flows.",
    highlights: [
      "Bilingual delivery: Russian site and English version (en.career.velesstroy.com)",
      "Internal hiring stack: work with Potok (ATS) and Bitrix integrations for applications and CRM flows",
      "Content-heavy corporate UI for vacancies, benefits, and employer presentation",
    ],
  },
  {
    id: "interbuilding",
    name: "Interbuilding",
    role: "Lead Frontend · Corporate + promo",
    url: "https://interbuilding.ru",
    urlLabel: "Main site",
    secondaryUrl: "https://promo.interbuilding.ru/",
    secondaryUrlLabel: "Promo landing",
    image: "/projects/interbuilding.png",
    imageAlt: "Interbuilding main site — interior design hero with account access",
    gradient: "from-stone-600 via-neutral-700 to-zinc-800",
    accent: "#a8a29e",
    tags: ["WordPress", "PHP", "Accounts", "Forms", "Lead gen"],
    featured: true,
    description:
      "Full interior design & renovation company platform — main site with user accounts and messaging, plus a separate promo landing for lead generation.",
    highlights: [
      "Main site (interbuilding.ru): services, portfolio, team, multi-step briefs, and contact flows",
      "User accounts and message sending integrated into the production site",
      "Separate promo landing (promo.interbuilding.ru) for fixed-price apartment renovation campaigns",
    ],
  },
  {
    id: "bc-sites",
    name: "Kuptsov · business-center sites",
    role: "Lead Frontend · Main site + generator",
    url: "https://kuptsovwrealty.ru",
    urlLabel: "Main site",
    secondaryUrl: "https://bc-h2o.ru/",
    secondaryUrlLabel: "Example BC site",
    image: "/projects/kuptsov.png",
    imageAlt: "Kuptsov Realty main site — Moscow business-center experts",
    gradient: "from-cyan-800 via-blue-900 to-indigo-950",
    accent: "#22d3ee",
    tags: ["Node.js", "Handlebars", "Static gen", "SCSS", "Lead gen"],
    featured: true,
    description:
      "Two layers of work: the main Kuptsov Realty site, plus a template generator that ships dozens of business-center promo landings (e.g. bc-h2o.ru) from shared templates.",
    highlights: [
      "Main agency site (kuptsovwrealty.ru) — property presentation and lead flows",
      "Node + Handlebars generator for many similar BC promo sites from one template system",
      "Example generated site: H2O business center (bc-h2o.ru) — layout, infrastructure, plans, callback forms",
    ],
  },
  {
    id: "etrans",
    name: "Etrans",
    role: "Frontend · Logistics platform",
    url: "https://etrans.info/",
    urlLabel: "RU / CIS (.info)",
    secondaryUrl: "https://etrans.me/",
    secondaryUrlLabel: "International (.me)",
    image: "/projects/etrans.png",
    imageAlt: "Etrans logistics homepage — air freight hero",
    gradient: "from-indigo-700 via-blue-800 to-slate-900",
    accent: "#818cf8",
    tags: ["WordPress", "PHP", "Geo IP", "Swiper", "Logistics"],
    featured: true,
    description:
      "International logistics company site — services, directions, news, delivery calculator, and personal account. Audience is routed by IP: Russia & CIS land on .info, other countries on .me.",
    highlights: [
      "Geo IP routing: visitors from Russia/CIS → etrans.info; everyone else → etrans.me",
      "Custom WordPress theme with service carousels, industry directions, and contact flows",
      "Personal account entry and delivery-calculation CTA on the live production site",
    ],
  },
  {
    id: "daikin",
    name: "Daikin Climate",
    role: "Frontend · WordPress / e-commerce",
    url: "https://daikin-climate.com",
    image: "/projects/daikin.png",
    imageAlt: "Daikin Climate homepage — official dealer storefront",
    gradient: "from-blue-600 via-cyan-700 to-teal-800",
    accent: "#22d3ee",
    tags: ["WordPress", "PHP", "E-commerce", "Catalog"],
    description:
      "Official Daikin dealer storefront — catalog, promos, installation services, and cart on WordPress.",
    highlights: [
      "Homepage with hero banners, promo cards, and catalog entry points",
      "Product catalog and dealer-style commerce UX",
      "Responsive WordPress delivery for a known brand",
    ],
  },
  {
    id: "aura",
    name: "Aura Project",
    role: "Lead Frontend · Luxury brand",
    url: "https://auraproject.webstead.ru/",
    image: "/projects/aura.png",
    imageAlt: "Aura Project — philosophy of luxury living hero",
    gradient: "from-yellow-700 via-amber-800 to-stone-900",
    accent: "#eab308",
    tags: ["HTML/CSS/JS", "Luxury", "Landing", "Architecture"],
    description:
      "Architecture bureau site for exclusive luxury real estate — mission, process, portfolio, and founders. Philosophy of luxury living.",
    highlights: [
      "Atmospheric full-bleed hero with brand storytelling and CTA",
      "Sections for mission, process steps, activity directions, and portfolio",
      "Contact / discuss-project flows for high-end client outreach",
    ],
  },
  {
    id: "vector",
    name: "Vektor",
    role: "Frontend · WordPress / e-commerce",
    url: "https://vlagostoykie-dveri.ru/",
    image: "/projects/vektor.png",
    imageAlt: "Vektor — moisture-resistant doors storefront",
    gradient: "from-zinc-600 via-slate-700 to-gray-900",
    accent: "#eab308",
    tags: ["WordPress", "PHP", "E-commerce", "Catalog", "Docker"],
    description:
      "Moisture-resistant doors storefront (MSK Vektor) — catalog, online door configurator, gallery, and cart on WordPress.",
    highlights: [
      "Product catalog for Poseidon, CPL, Zeus, Dionysus lines and moldings",
      "Homepage with promo slider, online door configurator CTA, and order flows",
      "Dockerized WordPress setup and GitLab CI deploy pipeline",
    ],
  },
  {
    id: "paradim",
    name: "Paradim",
    role: "Lead Frontend · Landing",
    url: "https://paradim.webstead.ru",
    image: "/projects/paradim.png",
    imageAlt: "Paradim architecture landing — multi-panel project hero (in development)",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accent: "#14b8a6",
    tags: ["Next.js 16", "Framer Motion", "React Hook Form", "Maps"],
    status: "In development",
    description:
      "Architecture & construction company landing in progress — project gallery, maps, smooth scroll, inquiry forms.",
    highlights: [
      "Lenis smooth scroll + Framer Motion section animation",
      "Yandex Maps integration for project geography",
      "Validated inquiry forms (React Hook Form + phone)",
      "Still iterating with the client — not production-final yet",
    ],
  },
  {
    id: "moonera",
    name: "Moonera Habitat",
    role: "Lead Frontend · Brand / catalog",
    url: "https://moonera.webstead.ru",
    image: "/projects/moonera.png",
    imageAlt: "Moonera Habitat brand site — timeless beauty hero (in development)",
    gradient: "from-slate-700 via-zinc-800 to-neutral-900",
    accent: "#d4af37",
    tags: ["Next.js 16", "React 19", "TypeScript", "SCSS", "Tailwind"],
    status: "In development",
    description:
      "Luxury furniture brand site in progress — catalog, product pages, refined visual storytelling. Pixel-accurate build from finished design layouts.",
    highlights: [
      "Next.js 16 App Router with SCSS + Tailwind architecture",
      "Category and product detail flows for furniture collections",
      "Contact / lead forms and gallery-style presentation",
      "Still iterating with the client — not production-final yet",
    ],
  },
  {
    id: "doors-russia",
    name: "DOORS RUSSIA",
    role: "Lead Frontend · E-commerce SPA",
    url: "https://doors-russia.webstead.ru",
    image: "/projects/doors-russia.png",
    imageAlt: "DOORS RUSSIA storefront — catalog hero and collections (in development)",
    gradient: "from-red-700 via-rose-800 to-red-900",
    accent: "#dc2626",
    tags: ["React 19", "Vite", "TypeScript", "React Router", "REST"],
    status: "In development",
    description:
      "Door-manufacturer catalog SPA in progress — filtering, product flows, warehouse info, checkout. Vite + React stack; not production-final yet.",
    highlights: [
      "React 19 + Vite + TypeScript SPA with catalog and collection tabs",
      "Online configurator and warehouse/delivery modules in progress",
      "REST API integration for catalog and orders",
      "Responsive layouts — actively iterating with the client",
    ],
  },
  {
    id: "st-doors",
    name: "ST-Doors",
    role: "Frontend · CMS migration",
    url: "https://st-doors.webstead.ru/",
    image: "/projects/st-doors.png",
    imageAlt: "ST-Doors catalog — specialized doors storefront (in development)",
    gradient: "from-sky-700 via-blue-800 to-indigo-900",
    accent: "#38bdf8",
    tags: ["Joomla 6", "PHP", "Docker", "CI/CD", "Migration"],
    status: "In development",
    description:
      "Inherited a broken Joomla 3 storefront — I did not build it from scratch. Restoring and migrating it from Joomla 3 to Joomla 6; staging build in progress.",
    highlights: [
      "Took over a failing legacy codebase and bringing it back to a working production state",
      "Full upgrade path Joomla 3 → Joomla 6 (CMS, extensions, e-commerce stack)",
      "Dockerized local/dev setup and GitLab CI deploy scripts for ongoing releases",
    ],
  },
];
