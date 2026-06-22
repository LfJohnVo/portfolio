# Jonathan Vargas - Developer Portfolio

A bilingual (English/Spanish) interactive developer portfolio built with modern web technologies, showcasing experience, projects, skills, and GitHub repositories.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Custom SVG

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

### 3. Add your Avatar Image

The application expects an avatar image to exist in the `public` directory.
1. Place your profile picture inside the `public/` folder.
2. Rename the image exactly to `avatar.jpg`.

*(Note: Without this image, the hero section avatar will show a broken link)*

### 4. Start the Development Server

Start the local server in development mode:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🗂️ Project Structure

- `src/app`: Next.js App Router layout and pages.
- `src/components`: Reusable UI components (`Hero`, `Navbar`, `Projects`, etc.).
- `src/context`: React Context providers (like `LangContext` for EN/ES toggle).
- `src/data`: All portfolio static data (profile info, projects, tech stack). Editing `src/data/portfolio.ts` will instantly update the site content.
- `src/lib`: Helper functions and API integrations (e.g., GitHub fetcher).

## 🌐 Bilingual Support

This portfolio has native English/Spanish support without relying on external routing logic. All translations are handled via `LangContext` and configured directly in `src/data/portfolio.ts`.

## 📦 Building for Production

To create an optimized production build, run:

```bash
npm run build
```

After the build completes, you can start the production server:

```bash
npm run start
```

---
*Built with ❤️ by Jonathan Vargas.*
