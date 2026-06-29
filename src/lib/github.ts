/**
 * Tiny GitHub API helper. Uses only PUBLIC, unauthenticated endpoints so it
 * works with zero setup. If you add a GITHUB_TOKEN env var the rate limit goes
 * from 60/hr to 5000/hr. Data is fetched server-side and cached for 1 hour.
 */

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
  updated_at: string;
}

const API = "https://api.github.com";

function headers(): HeadersInit {
  const h: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    (h as Record<string, string>).Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return h;
}

const NEXT_REVALIDATE = { next: { revalidate: 3600 } } as RequestInit;

export async function getGithubUser(username: string): Promise<GithubUser | null> {
  if (!username || username.startsWith("<")) return null;
  try {
    const res = await fetch(`${API}/users/${username}`, { headers: headers(), ...NEXT_REVALIDATE });
    if (!res.ok) return null;
    return (await res.json()) as GithubUser;
  } catch {
    return null;
  }
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  if (!username || username.startsWith("<")) return [];
  try {
    const res = await fetch(
      `${API}/users/${username}/repos?per_page=100&sort=updated`,
      { headers: headers(), ...NEXT_REVALIDATE }
    );
    if (!res.ok) return [];
    return (await res.json()) as GithubRepo[];
  } catch {
    return [];
  }
}

/** Aggregate language usage across non-forked repos. */
export function languageBreakdown(repos: GithubRepo[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  repos.filter((r) => !r.fork && r.language).forEach((r) => {
    counts.set(r.language!, (counts.get(r.language!) ?? 0) + 1);
  });
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** Choose repos to show as "pinned": manual list if given, else top by stars. */
export function selectPinned(repos: GithubRepo[], pinned: string[], limit = 6): GithubRepo[] {
  const own = repos.filter((r) => !r.fork);
  if (pinned.length) {
    return pinned
      .map((name) => own.find((r) => r.name.toLowerCase() === name.toLowerCase()))
      .filter((r): r is GithubRepo => Boolean(r));
  }
  return [...own].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, limit);
}
