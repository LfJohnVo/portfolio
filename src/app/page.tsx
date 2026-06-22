import { Suspense } from "react";
import { fetchGitHubProfile, fetchGitHubRepos, type GitHubUser } from "@/infrastructure/api/github";
import Navbar from "@/shared/ui/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import TechStack from "@/features/tech-stack/TechStack";
import Experience from "@/features/experience/Experience";
import GitHubRepos from "@/features/github/GitHubRepos";
import GitHubStats from "@/features/stats/GitHubStats";
import Contact from "@/features/contact/Contact";
const GITHUB_USER = "LfJohnVo";
async function getGitHubData(): Promise<{
  user: GitHubUser | null;
  totalStars: number;
  topLanguages: string[];
}> {
  try {
    const [user, repos] = await Promise.allSettled([
      fetchGitHubProfile(GITHUB_USER),
      fetchGitHubRepos(GITHUB_USER),
    ]);
    const reposData = repos.status === "fulfilled" ? repos.value : [];
    const resolvedUser = user.status === "fulfilled" ? user.value : null;
    
    const totalStars = reposData.reduce((sum, r) => sum + r.stargazers_count, 0);

    const languageCounts: Record<string, number> = {};
    reposData.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang]) => lang);

    return { user: resolvedUser, totalStars, topLanguages };
  } catch {
    return { user: null, totalStars: 0, topLanguages: [] };
  }
}
export default async function HomePage() {
  const { user, totalStars, topLanguages } = await getGitHubData();
  return (
    <main>
      <Navbar />
      <Hero />
      <GitHubStats user={user} totalStars={totalStars} topLanguages={topLanguages} />
      <About />
      <Experience />
      <TechStack />
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
