import { Suspense } from "react";
import { fetchGitHubProfile, fetchGitHubRepos } from "@/infrastructure/api/github";
import GitHubStats from "./GitHubStats";

const GITHUB_USER = "LfJohnVo";

async function GitHubStatsData() {
  try {
    const [userResult, reposResult] = await Promise.allSettled([
      fetchGitHubProfile(GITHUB_USER),
      fetchGitHubRepos(GITHUB_USER),
    ]);
    
    const reposData = reposResult.status === "fulfilled" ? reposResult.value : [];
    const resolvedUser = userResult.status === "fulfilled" ? userResult.value : null;
    
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

    return <GitHubStats user={resolvedUser} totalStars={totalStars} topLanguages={topLanguages} />;
  } catch (error) {
    console.error("Failed to load GitHub stats", error);
    return <GitHubStats user={null} totalStars={0} topLanguages={[]} />;
  }
}

export default function GitHubStatsContainer() {
  return (
    <Suspense fallback={
      <section className="py-16 bg-slate-950 relative overflow-hidden flex items-center justify-center min-h-[400px]">
         <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </section>
    }>
      <GitHubStatsData />
    </Suspense>
  );
}
