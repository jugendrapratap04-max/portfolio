import { config } from "@/config/portfolio.config";
import { getGithubUser, getGithubRepos, languageBreakdown, selectPinned } from "@/lib/github";
import { GithubView } from "./GithubView";

/**
 * Server component: fetches live GitHub data (cached 1h) and hands it to the
 * client view. If the username isn't set, the whole section is skipped.
 */
export async function GitHubSection() {
  const { username } = config.github;
  const user = await getGithubUser(username);
  if (!user) return null;

  const repos = await getGithubRepos(username);
  const pinned = selectPinned(repos, config.github.pinnedRepos);
  const languages = languageBreakdown(repos).slice(0, 8);
  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);

  return (
    <GithubView
      user={user}
      pinned={pinned}
      languages={languages}
      totalStars={totalStars}
      options={config.github}
    />
  );
}
