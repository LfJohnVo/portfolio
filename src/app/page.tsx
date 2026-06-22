import { Suspense } from "react";
import { fetchGitHubProfile, fetchGitHubRepos, type GitHubUser } from "@/lib/github";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GitHubRepos from "@/components/GitHubRepos";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

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
