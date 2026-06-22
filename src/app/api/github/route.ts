import { fetchGitHubProfile, fetchGitHubRepos } from "@/lib/github";
import { NextResponse } from "next/server";
const GITHUB_USER = "LfJohnVo";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  try {
    if (type === "profile") {
      const profile = await fetchGitHubProfile(GITHUB_USER);
      return NextResponse.json(profile);
    }
    if (type === "repos") {
      const repos = await fetchGitHubRepos(GITHUB_USER);
      return NextResponse.json(repos);
    }
    return NextResponse.json({ error: "Invalid type parameter" }, { status: 400 });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
