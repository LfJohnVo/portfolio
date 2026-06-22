# Developer Portfolio

A bilingual (English/Spanish) interactive developer portfolio built with modern web technologies, showcasing experience, skills, and live GitHub repositories.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Code Generation**: [Plop.js](https://plopjs.com/)

## 🛠️ Local Setup & Installation

Follow these steps to mount the project correctly in your local environment.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/LfJohnVo/portfolio.git
cd portfolio
```

### 2. Install dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Start the Development Server

Start the local server in development mode:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🗂️ Clean Architecture (Feature-Sliced Design)

This project uses a modular, scalable architecture inspired by Feature-Sliced Design to ensure maintainability:

- `src/app`: Next.js App Router entry points (`page.tsx`, `layout.tsx`).
- `src/core`: Core application configurations, providers, and global contexts (e.g., `LangContext` for EN/ES toggle).
- `src/features`: Domain-specific functional blocks (`hero`, `about`, `experience`, `github`, `tech-stack`, etc.). Each feature is self-contained.
- `src/infrastructure`: External integrations (GitHub API endpoints) and static data (`portfolio.ts`). Edit `src/infrastructure/data/portfolio.ts` to instantly update the site content.
- `src/shared`: Globally reusable UI components (`Button`, `Badge`, `Card`, `Navbar`, `MotionWrapper`).

## ⚙️ Component Generator

To speed up development and ensure consistency, this project uses **Plop.js** to generate components.

To create a new UI component in `src/shared/ui` with its respective interface, run:

```bash
npm run generate
```

The CLI will prompt you for the component name and automatically scaffold the necessary files.

## 🌐 Bilingual Support

This portfolio has native English/Spanish support without relying on external routing logic. All translations are handled via `LangContext` and configured directly in `src/infrastructure/data/portfolio.ts`.

## 📦 Building for Production

To create an optimized production build, run:

```bash
npm run build
```

After the build completes, you can start the production server:

```bash
npm start
```

---

*Built with ❤️ by Jonathan Vargas.*
