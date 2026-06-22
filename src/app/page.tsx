import { Suspense } from "react";
import Navbar from "@/shared/ui/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import TechStack from "@/features/tech-stack/TechStack";
import Experience from "@/features/experience/Experience";
import GitHubRepos from "@/features/github/GitHubRepos";
import GitHubStatsContainer from "@/features/stats/GitHubStatsContainer";
import GitHubCommandCenter from "@/features/command-center/GitHubCommandCenter";
import Contact from "@/features/contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GitHubCommandCenter />
      <GitHubStatsContainer />
      <About />
      <Experience />
      <TechStack />
      <Suspense
        fallback={
          <div className="py-24 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        }
      >
        <GitHubRepos />
      </Suspense>
      <Contact />
    </main>
  );
}
