import { Suspense } from "react";
import { fetchGitHubProfile, fetchGitHubRepos, type GitHubUser } from "@/infrastructure/api/github";
import Navbar from "@/shared/ui/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import TechStack from "@/features/tech-stack/TechStack";
import Projects from "@/features/projects/Projects";
import Experience from "@/features/experience/Experience";
import GitHubRepos from "@/features/github/GitHubRepos";
import Stats from "@/features/stats/Stats";
import Contact from "@/features/contact/Contact";
const GITHUB_USER = "LfJohnVo";
async function getGitHubData(): Promise<{
  user: GitHubUser | null;
  totalStars: number;
}> {
  try {
    const [user, repos] = await Promise.allSettled([
      fetchGitHubProfile(GITHUB_USER),
      fetchGitHubRepos(GITHUB_USER),
    ]);
    const resolvedUser = user.status === "fulfilled" ? user.value : null;
    const totalStars =
      repos.status === "fulfilled"
        ? repos.value.reduce((sum, r) => sum + r.stargazers_count, 0)
        : 0;
    return { user: resolvedUser, totalStars };
  } catch {
    return { user: null, totalStars: 0 };
  }
}
export default async function HomePage() {
  const { user, totalStars } = await getGitHubData();
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats user={user} totalStars={totalStars} />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Suspense
        fallback={
          <div className="py-24 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <GitHubRepos />
      </Suspense>
      <Contact />
    </main>
  );
}
