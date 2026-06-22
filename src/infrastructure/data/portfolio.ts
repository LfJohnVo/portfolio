export type Lang = "en" | "es";
export const PROFILE = {
  name: "Jonathan Vargas",
  role: {
    en: "Software Engineering Manager & Full Stack Developer",
    es: "Gerente de Ingeniería de Software & Desarrollador Full Stack",
  },
  tagline: {
    en: "Building scalable systems, AI-powered products, and high-performing engineering teams.",
    es: "Construyendo sistemas escalables, productos con IA y equipos de ingeniería de alto rendimiento.",
  },
  rolesList: {
    en: [
      "Software Engineering Manager",
      "Full Stack Developer",
      "AI & LLM Engineer",
      "Software Architect",
    ],
    es: [
      "Gerente de Ingeniería de Software",
      "Desarrollador Full Stack",
      "Ingeniero de IA y LLM",
      "Arquitecto de Software",
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
      "Software Engineering Manager with 10+ years of experience designing and delivering high-impact products across fintech, logistics, SaaS, and government sectors. Currently at Silent4business, I bridge technical depth with product vision — leading distributed teams, architecting cloud-native systems, and shipping full-stack solutions that scale.",
      "Passionate about AI/LLMs, blockchain, and developer tooling. I enjoy mentoring engineers, defining engineering culture, and driving cross-functional alignment between product and engineering. Actively seeking senior engineering or EM roles outside Mexico, where I can bring global engineering best practices to international teams.",
    ],
    es: [
      "Gerente de Ingeniería de Software con más de 10 años diseñando y entregando productos de alto impacto en sectores de fintech, logística, SaaS y gobierno. Actualmente en Silent4business, integro la profundidad técnica con la visión de producto — liderando equipos distribuidos, diseñando sistemas cloud-native y construyendo soluciones full-stack escalables.",
      "Apasionado por la IA/LLMs, blockchain y herramientas para desarrolladores. Disfruto mentorear ingenieros, definir cultura de ingeniería y alinear producto con tecnología. Activamente en búsqueda de roles senior de ingeniería o Engineering Manager fuera de México, aportando las mejores prácticas de ingeniería global a equipos internacionales.",
    ],
  },
  highlights: {
    en: [
      "10+ years in software engineering",
      "Led teams of 5–20 engineers",
      "Full stack: Laravel · Go · Next.js · React · Python",
      "AI/LLM integrations & automation pipelines",
      "Blockchain & smart contract development",
      "DevOps: Docker, CI/CD, AWS/GCP",
    ],
    es: [
      "10+ años en ingeniería de software",
      "Lideré equipos de 5 a 20 ingenieros",
      "Full stack: Laravel · Go · Next.js · React · Python",
      "Integraciones de IA/LLM y pipelines de automatización",
      "Desarrollo de blockchain y smart contracts",
      "DevOps: Docker, CI/CD, AWS/GCP",
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
      en: "Progressed from Full Stack Developer to Engineering Manager. Led cross-functional teams, coordinated between product and development, and drove architecture decisions. Explored and implemented AI/LLM tools to optimize workflows and reduce development bottlenecks.",
      es: "Evolucioné de Desarrollador Full Stack a Gerente de Ingeniería. Lideré equipos multidisciplinarios, coordiné producto y desarrollo, y tomé decisiones de arquitectura. Implementé herramientas de IA/LLM para optimizar flujos de trabajo y reducir cuellos de botella.",
    },
    tags: ["Team Leadership", "AI / LLMs", "Architecture", "Full Stack"],
  },
  {
    id: "liverpool",
    company: "El Puerto de Liverpool",
    logo: "🛍️",
    role: {
      en: "Senior Analyst",
      es: "Analista Sr",
    },
    period: "Aug 2022 – Jan 2024",
    location: "Mexico",
    description: {
      en: "Served as a Senior Analyst, driving technical analysis and contributing to the modernization of digital retail solutions at one of Mexico's largest department store chains.",
      es: "Me desempeñé como Analista Sr, impulsando análisis técnicos y contribuyendo a la modernización de las soluciones de retail digital en una de las cadenas de tiendas departamentales más grandes de México.",
    },
    tags: ["Analysis", "Retail Tech", "Enterprise Systems"],
  },
  {
    id: "integrador-tech",
    company: "Integrador Technology",
    logo: "💻",
    role: {
      en: "Full Stack Engineer",
      es: "Ingeniero Full Stack",
    },
    period: "Jan 2019 – Aug 2023",
    location: "Mexico",
    description: {
      en: "Developed full-stack web solutions and led comprehensive SEO strategies (on-site & off-site). Integrated advanced Google Analytics tracking and improved global Alexa search rankings for client platforms.",
      es: "Desarrollé soluciones web full-stack y lideré estrategias integrales de SEO (on-site y off-site). Integré el seguimiento avanzado de Google Analytics y mejoré el ranking global de búsqueda en Alexa para las plataformas de clientes.",
    },
    tags: ["Full Stack", "SEO", "Google Analytics", "Web Dev"],
  },
  {
    id: "freelance-consultant",
    company: "Independiente / Freelance",
    logo: "🌍",
    role: {
      en: "IT Consultant",
      es: "Consultor de TI",
    },
    period: "Jan 2019 – Dec 2022",
    location: "Mexico",
    description: {
      en: "Provided independent consulting services to various businesses, offering architectural guidance, software development, and digital transformation strategies.",
      es: "Proporcioné servicios de consultoría independiente a diversas empresas, ofreciendo orientación en arquitectura, desarrollo de software y estrategias de transformación digital.",
    },
    tags: ["Consulting", "Architecture", "Digital Transformation"],
  },
  {
    id: "nido",
    company: "Nido (Polymath Ventures)",
    logo: "🚀",
    role: {
      en: "Full Stack Developer Jr",
      es: "Desarrollador Full Stack Jr",
    },
    period: "Jul 2020 – Dec 2020",
    location: "Remote",
    description: {
      en: "Contributed to early-stage product development as a junior full-stack developer in a fast-paced startup environment under Polymath Ventures.",
      es: "Contribuí al desarrollo de productos en etapa temprana como desarrollador full-stack junior en un entorno de startup dinámico bajo Polymath Ventures.",
    },
    tags: ["Startup", "Full Stack", "Agile"],
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
    projects: { en: "Projects", es: "Proyectos" },
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
  projects: {
    badge: { en: "Featured Work", es: "Proyectos Destacados" },
    title: { en: "Projects", es: "Proyectos" },
    subtitle: {
      en: "A selection of projects that showcase my technical range and problem-solving approach.",
      es: "Una selección de proyectos que demuestran mi amplitud técnica y enfoque de resolución de problemas.",
    },
    viewAll: { en: "View all on GitHub →", es: "Ver todos en GitHub →" },
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
    label: { en: "Frontend", es: "Frontend" },
    emoji: "🎨",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Astro" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Alpine.js" },
      { name: "Livewire" },
      { name: "jQuery" },
      { name: "Chart.js" },
    ],
  },
  {
    label: { en: "Backend", es: "Backend" },
    emoji: "⚙️",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Go" },
      { name: "Go Fiber" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "C#" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "MariaDB" },
    ],
  },
  {
    label: { en: "DevOps", es: "DevOps" },
    emoji: "🚀",
    items: [
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "GitLab CI" },
      { name: "Travis CI" },
      { name: "Linux" },
      { name: "Bash" },
      { name: "Docker" },
      { name: "Portainer" },
      { name: "Nginx" },
      { name: "Apache" },
      { name: "Datadog" },
      { name: "New Relic" },
      { name: "Sentry" },
      { name: "SonarQube" },
      { name: "Vercel" },
      { name: "RabbitMQ" },
    ],
  },
  {
    label: { en: "AI / LLM", es: "IA / LLM" },
    emoji: "🤖",
    items: [
      { name: "AI Agents" },
      { name: "RAG Pipelines" },
      { name: "LLM Apps" },
      { name: "Antigravity" },
      { name: "LangChain" },
      { name: "Prompt Engineering" },
      { name: "n8n" },
    ],
  },
  {
    label: { en: "Architecture", es: "Arquitectura" },
    emoji: "🏗️",
    items: [
      { name: "Clean Architecture" },
      { name: "Backend Architecture" },
      { name: "API Design" },
      { name: "Workflow Automation" },
      { name: "Microservices" },
      { name: "Event-Driven" },
      { name: "Domain-Driven Design" },
      { name: "CQRS / Event Sourcing" },
      { name: "API Gateway" },
      { name: "Hexagonal Architecture" },
    ],
  },
];
export interface Project {
  id: string;
  name: string;
  description: { en: string; es: string };
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  language?: string;
}
export const PROJECTS: Project[] = [
  {
    id: "agente-mcp-postgres",
    name: "Agente MCP PostgreSQL",
    description: {
      en: "AI agent with MCP (Model Context Protocol) integration for PostgreSQL. Automates database reporting and analysis using LLM pipelines, LangChain, and structured tool calls.",
      es: "Agente de IA con integración MCP (Model Context Protocol) para PostgreSQL. Automatiza reportes y análisis de bases de datos usando pipelines LLM, LangChain y llamadas a herramientas estructuradas.",
    },
    tags: ["Python", "LangChain", "PostgreSQL", "MCP", "AI Agents"],
    github: "https://github.com/LfJohnVo",
    featured: true,
    language: "Python",
  },
  {
    id: "laravel-api-boilerplate",
    name: "Laravel API Boilerplate",
    description: {
      en: "Production-ready Laravel REST API boilerplate with JWT authentication, role-based access control, versioned API routing, and Docker setup.",
      es: "Boilerplate de API REST Laravel listo para producción con autenticación JWT, control de acceso por roles, rutas versionadas y configuración Docker.",
    },
    tags: ["Laravel", "PHP", "REST API", "Docker", "JWT"],
    github: "https://github.com/LfJohnVo",
    featured: true,
    language: "PHP",
  },
  {
    id: "go-microservices",
    name: "Go Microservices",
    description: {
      en: "Cloud-native microservices system written in Go. Features gRPC communication, event-driven messaging with Kafka, distributed tracing, and Kubernetes deployment manifests.",
      es: "Sistema de microservicios cloud-native escrito en Go. Incluye comunicación gRPC, mensajería orientada a eventos con Kafka, rastreo distribuido y manifiestos de despliegue en Kubernetes.",
    },
    tags: ["Go", "gRPC", "Kafka", "Kubernetes", "Microservices"],
    github: "https://github.com/LfJohnVo",
    featured: true,
    language: "Go",
  },
  {
    id: "nextjs-dashboard",
    name: "Next.js Dashboard",
    description: {
      en: "Enterprise analytics dashboard built with Next.js App Router, featuring real-time charts, role-based views, SSR data fetching, and beautiful responsive UI.",
      es: "Dashboard de analíticas empresarial construido con Next.js App Router, con gráficas en tiempo real, vistas por roles, fetching SSR y UI responsiva.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts", "React"],
    github: "https://github.com/LfJohnVo",
    featured: true,
    language: "TypeScript",
  },
  {
    id: "blockchain-contracts",
    name: "Smart Contracts Suite",
    description: {
      en: "Solidity smart contracts for DeFi protocols: ERC-20/721 tokens, staking mechanisms, multi-sig wallets, and automated audit scripts.",
      es: "Smart contracts en Solidity para protocolos DeFi: tokens ERC-20/721, mecanismos de staking, wallets multi-sig y scripts de auditoría automatizados.",
    },
    tags: ["Solidity", "Hardhat", "Ethereum", "DeFi", "Web3"],
    github: "https://github.com/LfJohnVo",
    featured: false,
    language: "Solidity",
  },
  {
    id: "devops-toolkit",
    name: "DevOps Toolkit",
    description: {
      en: "Collection of CI/CD pipeline templates, Helm charts, Terraform modules, and shell scripts for rapid infrastructure provisioning on AWS and GCP.",
      es: "Colección de plantillas de pipeline CI/CD, charts de Helm, módulos de Terraform y scripts shell para aprovisionar infraestructura rápidamente en AWS y GCP.",
    },
    tags: ["Terraform", "Helm", "AWS", "GCP", "GitHub Actions"],
    github: "https://github.com/LfJohnVo",
    featured: false,
    language: "HCL",
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
