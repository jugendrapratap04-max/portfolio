"use client";

import { config } from "@/config/portfolio.config";
import { Icon } from "@/lib/icon";

/**
 * Infinite auto-scrolling row of tech/skills. Pauses on hover.
 * Pulls from the skills list in the config so it stays in sync.
 */
export function TechMarquee() {
  const items = config.skills.filter((s) => !s.hidden).map((s) => ({ name: s.name, icon: s.icon }));
  if (items.length === 0) return null;
  // duplicate the list so the -50% translate loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask relative w-full overflow-hidden border-y border-border py-5">
      <div className="marquee gap-4">
        {loop.map((it, i) => (
          <span
            key={`${it.name}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-muted"
          >
            <Icon name={it.icon} size={16} className="text-accent" />
            {it.name}
          </span>
        ))}
      </div>
    </div>
  );
}
