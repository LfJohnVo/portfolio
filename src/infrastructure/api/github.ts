export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
  visibility: string;
}
export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
}
export class GitHubAPIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "GitHubAPIError";
  }
}

async function fetchWithTimeout(resource: RequestInfo, options: RequestInit & { timeout?: number } = {}) {
  const { timeout = 8000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function fetchGitHubProfile(username: string): Promise<GitHubUser> {
  try {
    const res = await fetchWithTimeout(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-app",
      },
      next: { revalidate: 3600 },
      timeout: 5000,
    });
    if (!res.ok) {
      throw new GitHubAPIError(res.status, `GitHub API error: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub Profile:", error);
    throw error;
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetchWithTimeout(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "portfolio-app",
        },
        next: { revalidate: 3600 },
        timeout: 8000,
      }
    );
    if (!res.ok) {
      throw new GitHubAPIError(res.status, `GitHub API error: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub Repos:", error);
    throw error;
  }
}
