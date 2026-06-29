"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, BookMarked, ExternalLink } from "lucide-react";
import type { GithubUser, GithubRepo } from "@/lib/github";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";

interface Props {
  user: GithubUser;
  pinned: GithubRepo[];
  languages: { name: string; count: number }[];
  totalStars: number;
  options: { showStats: boolean; showPinned: boolean; showLanguages: boolean; showContributionGraph: boolean };
}

export function GithubView({ user, pinned, languages, totalStars, options }: Props) {
  const stats = [
    { icon: BookMarked, label: "Repositories", value: user.public_repos },
    { icon: Star, label: "Total Stars", value: totalStars },
    { icon: Users, label: "Followers", value: user.followers },
    { icon: Users, label: "Following", value: user.following },
  ];

  return (
    <SectionWrapper id="github" eyebrow="Live from GitHub" title="GitHub Activity" subtitle={`@${user.login} — updated automatically.`}>
      {options.showStats && (
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <GlassCard className="text-center">
                <s.icon className="mx-auto mb-2 text-accent" size={22} />
                <p className="font-heading text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-sm text-muted">{s.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      )}

      {options.showContributionGraph && (
        <div className="mb-8">
          <GlassCard className="overflow-x-auto">
            <p className="mb-3 text-sm font-medium text-muted">Contribution Graph</p>
            {/* Uses a lightweight public image service — no API key required. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/3b82f6/${user.login}`}
              alt={`${user.login}'s GitHub contribution graph`}
              className="min-w-[640px]"
              loading="lazy"
            />
          </GlassCard>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {options.showPinned && pinned.length > 0 && (
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Pinned Repositories</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {pinned.map((r) => (
                <a key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer" className="glass flex flex-col rounded-card p-5 transition-shadow hover:shadow-glow">
                  <div className="mb-2 flex items-center gap-2">
                    <Github size={16} className="text-accent" />
                    <span className="font-heading font-semibold">{r.name}</span>
                    <ExternalLink size={13} className="ml-auto text-muted" />
                  </div>
                  <p className="mb-3 line-clamp-2 text-sm text-muted">{r.description ?? "No description"}</p>
                  <div className="mt-auto flex items-center gap-4 text-xs text-muted">
                    {r.language && <span>{r.language}</span>}
                    <span className="inline-flex items-center gap-1"><Star size={12} /> {r.stargazers_count}</span>
                    <span className="inline-flex items-center gap-1"><GitFork size={12} /> {r.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {options.showLanguages && languages.length > 0 && (
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Top Languages</h3>
            <GlassCard>
              <div className="space-y-3">
                {languages.map((l) => {
                  const max = languages[0].count || 1;
                  return (
                    <div key={l.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{l.name}</span>
                        <span className="text-muted">{l.count}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                        <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${(l.count / max) * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:border-accent">
          <Github size={16} /> View full profile
        </a>
      </div>
    </SectionWrapper>
  );
}
