# Portfolio

A premium, highly interactive, and bilingual (English/Spanish) developer portfolio built for the modern web. It is designed to showcase high-level software engineering expertise, architectural patterns, leadership experience, and live integrations with the GitHub API.

## Key Features

- **Dynamic GitHub Integrations:** Live fetching of repositories and dynamic language calculation using the GitHub REST API.
- **Resilient Data Fetching:** Implements React `Suspense` and an asynchronous `GitHubStatsContainer` to stream server components seamlessly without layout shifts. Robust error handling (Rate Limiting fallbacks) built-in.
- **Futuristic UI Components:** Includes a fully animated `GitHubCommandCenter` that mimics a terminal dashboard, and premium framer-motion micro-animations based on spring physics.
- **SEO & Accessibility Ready:** Implements `JSON-LD` Person schema for rich search results, precise `h1-h3` heading hierarchy, and fully accessible ARIA-compliant navigation.
- **Bilingual Core:** Built-in Context API (`LangContext`) to switch between English and Spanish without external routing or re-renders.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Code Generation**: [Plop.js](https://plopjs.com/)

## Architecture (Feature-Sliced Design)

This project strictly adheres to a modular, scalable architecture inspired by Feature-Sliced Design to ensure enterprise-grade maintainability:

- `src/app`: Next.js App Router entry points (`page.tsx`, `layout.tsx`).
- `src/core`: Core application configurations, providers, and global contexts.
- `src/features`: Domain-specific functional blocks (`hero`, `command-center`, `stats`, `experience`, `github`, etc.). Each feature is fully self-contained.
- `src/infrastructure`: External integrations (`github.ts`) and static data (`portfolio.ts`). Edit `src/infrastructure/data/portfolio.ts` to instantly update the site content.
- `src/shared`: Globally reusable UI components (`Button`, `Badge`, `Navbar`, `MotionWrapper`).

## Local Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/LfJohnVo/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## Component Generator

To speed up development and ensure consistency, this project uses **Plop.js** to generate components.
To create a new UI component in `src/shared/ui` with its respective interface, run:

```bash
npm run generate
```

The CLI will prompt you for the component name and automatically scaffold the necessary files.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

After the build completes, you can start the production server:

```bash
npm start
```

---

*Architected and built by [Jonathan Vargas](https://github.com/LfJohnVo) for the modern web.*
