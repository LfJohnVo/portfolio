export type Lang = "en" | "es";
export const PROFILE = {
  name: "Jonathan Vargas",
  role: {
    en: "Software Engineering Manager & AI Automation Architect",
    es: "Gerente de Ingeniería de Software & Arquitecto de Automatización IA",
  },
  tagline: {
    en: "Architecting scalable systems, building AI-driven products, and leading high-performing engineering teams.",
    es: "Arquitectando sistemas escalables, construyendo productos con IA y liderando equipos de ingeniería de alto rendimiento.",
  },
  rolesList: {
    en: [
      "Software Engineering Manager",
      "AI Automation Architect",
      "Full Stack Engineer",
      "Systems Architect",
    ],
    es: [
      "Gerente de Ingeniería de Software",
      "Arquitecto de Automatización IA",
      "Ingeniero Full Stack",
      "Arquitecto de Sistemas",
    ],
  },
  location: "México",
  openToWork: {
    en: "Open to international opportunities",
    es: "Abierto a oportunidades internacionales",
  },
  company: "Silent4business",
  blog: "https://cvjohn.vercel.app",
  github: "https://github.com/LfJohnVo",
  linkedin: "https://www.linkedin.com/in/lfjohnvo/",
  githubUser: "LfJohnVo",
  avatarUrl: "/avatar.jpg",
  bio: {
    en: [
      "I am a Software Engineering Manager and Architect with over 10 years of experience delivering high-impact technological solutions across fintech, logistics, SaaS, and government sectors. At Silent4business, I bridge the gap between deep technical execution and strategic product vision—leading distributed teams to build cloud-native systems and scalable full-stack applications.",
      "My current focus is heavily invested in AI Workflows, LLM Automation, and Web3 architectures. I excel at defining engineering culture, mentoring developers, and driving cross-functional alignment. I am actively seeking remote leadership or senior architecture roles where I can leverage my global engineering mindset to scale ambitious international products.",
    ],
    es: [
      "Soy Gerente de Ingeniería de Software y Arquitecto con más de 10 años de experiencia entregando soluciones tecnológicas de alto impacto en sectores fintech, logística, SaaS y gobierno. En Silent4business, cierro la brecha entre la ejecución técnica profunda y la visión estratégica de producto—liderando equipos distribuidos para construir sistemas cloud-native y aplicaciones full-stack escalables.",
      "Mi enfoque actual se centra en flujos de trabajo de IA (AI Workflows), automatización con LLMs y arquitecturas Web3. Destaco en definir la cultura de ingeniería, mentorear desarrolladores y alinear equipos multidisciplinarios. Busco activamente roles de liderazgo remoto o arquitectura senior donde pueda aprovechar mi mentalidad de ingeniería global para escalar productos internacionales ambiciosos.",
    ],
  },
  highlights: {
    en: [
      "10+ years in software engineering",
      "Led technical teams of 5–20 engineers",
      "Enterprise Architecture: Go · Laravel · Next.js",
      "AI/LLM integrations & automation pipelines",
      "Smart contract development & Web3",
      "Cloud & DevOps: Docker, CI/CD, AWS/GCP",
    ],
    es: [
      "10+ años en ingeniería de software",
      "Lideré equipos técnicos de 5 a 20 ingenieros",
      "Arquitectura Empresarial: Go · Laravel · Next.js",
      "Integraciones de IA/LLM y pipelines de automatización",
      "Desarrollo de Smart Contracts y Web3",
      "Cloud & DevOps: Docker, CI/CD, AWS/GCP",
    ],
  },
};
export const CAREER_STATS = {
  en: [
    { value: "10+", label: "Years Experience" },
    { value: "20+", label: "Engineers Led" },
    { value: "50+", label: "Projects Delivered" },
    { value: "5+", label: "Tech Stacks" },
  ],
  es: [
    { value: "10+", label: "Años de experiencia" },
    { value: "20+", label: "Ingenieros liderados" },
    { value: "50+", label: "Proyectos entregados" },
    { value: "5+", label: "Stacks tecnológicos" },
  ],
};
export const EXPERIENCE = [
  {
    id: "silent4business",
    company: "Silent4Business",
    logo: "🏢",
    role: {
      en: "Software Engineering Manager",
      es: "Gerente de Ingeniería de Software",
    },
    period: "Jul 2020 – Present",
    location: "CDMX, Mexico (Hybrid)",
    description: {
      en: "Orchestrated the engineering lifecycle from Full Stack execution to Engineering Management. Architected enterprise-grade systems, bridged technical capabilities with product strategy, and mentored a team of 15+ engineers. Pioneered the adoption of AI/LLM automation pipelines to eliminate developmental bottlenecks, achieving significant workflow optimizations.",
      es: "Orquesté el ciclo de vida de ingeniería, desde ejecución Full Stack hasta la Gerencia. Diseñé sistemas de grado empresarial, alineé capacidades técnicas con estrategia de producto y mentoreé a un equipo de más de 15 ingenieros. Fui pionero en la adopción de pipelines de automatización con IA/LLMs, eliminando cuellos de botella y logrando optimizaciones operativas masivas.",
    },
    tags: ["Engineering Management", "AI/LLMs", "System Architecture", "Cloud-Native"],
  },
  {
    id: "liverpool",
    company: "El Puerto de Liverpool",
    logo: "🛍️",
    role: {
      en: "Senior Technical Analyst",
      es: "Analista Técnico Sr",
    },
    period: "Aug 2022 – Jan 2024",
    location: "Mexico",
    description: {
      en: "Spearheaded technical systems analysis and integration architectures for one of Mexico's largest retail chains. Modernized legacy retail systems, optimizing digital operations and ensuring high availability during peak traffic events.",
      es: "Lideré el análisis técnico y las arquitecturas de integración de sistemas para una de las cadenas de retail más grandes de México. Modernicé sistemas legacy, optimizando las operaciones digitales y asegurando alta disponibilidad durante eventos de tráfico masivo.",
    },
    tags: ["Systems Integration", "Retail Architecture", "High Availability"],
  },
  {
    id: "integrador-tech",
    company: "Integrador Technology",
    logo: "💻",
    role: {
      en: "Full Stack Engineer & Web Architect",
      es: "Ingeniero Full Stack & Arquitecto Web",
    },
    period: "Jan 2019 – Aug 2023",
    location: "Mexico",
    description: {
      en: "Designed and engineered end-to-end web applications. Directed comprehensive technical SEO strategies, integrated advanced telemetry (Google Analytics), and drove substantial organic growth across B2B client platforms.",
      es: "Diseñé e implementé aplicaciones web end-to-end. Dirigí estrategias técnicas integrales de SEO, integré telemetría avanzada (Google Analytics) e impulsé un crecimiento orgánico sustancial en múltiples plataformas de clientes B2B.",
    },
    tags: ["Full Stack", "Technical SEO", "Telemetry", "Web Architecture"],
  },
  {
    id: "freelance-consultant",
    company: "Independent Consultant",
    logo: "🌍",
    role: {
      en: "Software Architect & IT Consultant",
      es: "Arquitecto de Software & Consultor TI",
    },
    period: "Jan 2019 – Dec 2022",
    location: "Mexico",
    description: {
      en: "Delivered strategic consulting to diverse enterprises. Engineered custom software solutions, audited cloud infrastructures, and executed digital transformation initiatives resulting in streamlined operations.",
      es: "Entregué consultoría estratégica a diversas empresas. Diseñé soluciones de software a medida, audité infraestructuras en la nube y ejecuté iniciativas de transformación digital que resultaron en la optimización de operaciones.",
    },
    tags: ["Consulting", "Infrastructure", "Digital Transformation"],
  },
  {
    id: "nido",
    company: "Nido (Polymath Ventures)",
    logo: "🚀",
    role: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
    },
    period: "Jul 2020 – Dec 2020",
    location: "Remote",
    description: {
      en: "Built core MVP features within a high-velocity startup environment backed by Polymath Ventures. Focused on rapid iteration, scalable database modeling, and agile full-stack delivery.",
      es: "Construí funcionalidades core del MVP dentro de un entorno de startup de alta velocidad respaldado por Polymath Ventures. Me enfoqué en la iteración rápida, el modelado escalable de bases de datos y entregas full-stack ágiles.",
    },
    tags: ["MVP Development", "Agile", "Startups"],
  },
  {
    id: "red-solutions",
    company: "Red Solutions",
    logo: "⚙️",
    role: {
      en: "Junior Developer",
      es: "Desarrollador Jr",
    },
    period: "Apr 2018 – Jan 2019",
    location: "Mexico City",
    description: {
      en: "Acted as a web and desktop software consultant for the 'Central operativo de estacionamientos' project, heavily utilizing Oracle EBS databases.",
      es: "Actué como consultor de software web y de escritorio para el proyecto 'Central operativo de estacionamientos', utilizando intensamente bases de datos Oracle EBS.",
    },
    tags: ["Oracle EBS", "Desktop Apps", "Web Apps"],
  }
];
export const LABELS = {
  nav: {
    about: { en: "About", es: "Acerca de" },
    stack: { en: "Stack", es: "Stack" },
    experience: { en: "Experience", es: "Experiencia" },

    repos: { en: "Repos", es: "Repos" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    viewGithub: { en: "View GitHub", es: "Ver GitHub" },
    explore: { en: "Explore ↓", es: "Explorar ↓" },
  },
  about: {
    badge: { en: "About Me", es: "Sobre mí" },
    title: { en: "Engineering at Scale", es: "Ingeniería a escala" },
    subtitle: {
      en: "Turning complex challenges into elegant, performant software.",
      es: "Convirtiendo desafíos complejos en software elegante y eficiente.",
    },
    githubProfile: { en: "GitHub Profile", es: "Perfil GitHub" },
  },
  experience: {
    badge: { en: "Career", es: "Carrera" },
    title: { en: "Work Experience", es: "Experiencia Laboral" },
    subtitle: {
      en: "10+ years building products across startups, agencies, and enterprise clients.",
      es: "10+ años construyendo productos para startups, agencias y clientes empresariales.",
    },
    present: { en: "Present", es: "Actualidad" },
  },
  stack: {
    badge: { en: "Tech Stack", es: "Stack Técnico" },
    title: { en: "Tools & Technologies", es: "Herramientas y Tecnologías" },
    subtitle: {
      en: "A curated selection of the technologies I use to design, build, and ship software.",
      es: "Una selección de las tecnologías que uso para diseñar, construir y entregar software.",
    },
  },

  repos: {
    badge: { en: "Open Source", es: "Código Abierto" },
    title: { en: "GitHub Repositories", es: "Repositorios de GitHub" },
    subtitle: {
      en: "Live from the GitHub API — all my public repositories, searchable and filterable.",
      es: "Directo desde la API de GitHub — todos mis repositorios públicos, con búsqueda y filtros.",
    },
    search: { en: "Search repositories...", es: "Buscar repositorios..." },
    allLanguages: { en: "All Languages", es: "Todos los lenguajes" },
    recentlyUpdated: { en: "Recently Updated", es: "Actualizado recientemente" },
    mostStars: { en: "Most Stars", es: "Más estrellas" },
    nameAZ: { en: "Name A–Z", es: "Nombre A–Z" },
    reset: { en: "Reset", es: "Limpiar" },
    showing: { en: "Showing", es: "Mostrando" },
    of: { en: "of", es: "de" },
    repositories: { en: "repositories", es: "repositorios" },
    loadMore: { en: "Load more", es: "Cargar más" },
    remaining: { en: "remaining", es: "restantes" },
    noResults: { en: "No repositories match your filters.", es: "Ningún repositorio coincide con los filtros." },
    clearFilters: { en: "Clear filters", es: "Limpiar filtros" },
    noDescription: { en: "No description available.", es: "Sin descripción disponible." },
  },
  contact: {
    title: {
      en: "Let's build something great together",
      es: "Construyamos algo increíble juntos",
    },
    subtitle: {
      en: "Open to international roles in engineering management and senior full-stack development. Let's connect.",
      es: "Abierto a roles internacionales en gestión de ingeniería y desarrollo full-stack senior. ¡Conectemos.",
    },
    builtWith: { en: "Built with", es: "Construido con" },
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
    openToWork: {
      en: "🌍 Open to international opportunities",
      es: "🌍 Abierto a oportunidades internacionales",
    },
  },
  stats: {
    title: { en: "GitHub Stats", es: "Estadísticas de GitHub" },
    repos: { en: "Public Repos", es: "Repos Públicos" },
    followers: { en: "Followers", es: "Seguidores" },
    following: { en: "Following", es: "Siguiendo" },
    stars: { en: "Total Stars", es: "Estrellas Totales" },
  },
};
export interface TechItem {
  name: string;
  icon?: string;
}
export interface TechCategory {
  label: { en: string; es: string };
  emoji: string;
  items: TechItem[];
}
export const TECH_STACK: TechCategory[] = [
  {
    label: { en: "Architecture & Systems", es: "Arquitectura y Sistemas" },
    emoji: "🏗️",
    items: [
      { name: "Microservices" },
      { name: "Event-Driven" },
      { name: "Domain-Driven Design" },
      { name: "API Gateway" },
      { name: "Hexagonal Architecture" },
      { name: "Clean Architecture" },
      { name: "CQRS" },
    ],
  },
  {
    label: { en: "AI & Automation", es: "IA y Automatización" },
    emoji: "🤖",
    items: [
      { name: "LLM Orchestration" },
      { name: "RAG Pipelines" },
      { name: "AI Agents" },
      { name: "LangChain" },
      { name: "Prompt Engineering" },
      { name: "n8n / Workflow Automation" },
    ],
  },
  {
    label: { en: "Backend & Cloud", es: "Backend y Cloud" },
    emoji: "⚙️",
    items: [
      { name: "Go" },
      { name: "Laravel (PHP)" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Docker" },
      { name: "AWS / GCP" },
      { name: "CI/CD Pipelines" },
    ],
  },
  {
    label: { en: "Frontend & Web3", es: "Frontend y Web3" },
    emoji: "🚀",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Smart Contracts" },
      { name: "Solidity" },
    ],
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  PHP: "#4F5D95",
  Rust: "#dea584",
  Solidity: "#AA6746",
  HTML: "#e34c26",
  CSS: "#563d7c",
  HCL: "#844FBA",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};
