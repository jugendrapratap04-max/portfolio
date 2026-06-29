"use client";

import { ArrowUp } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { Icon } from "@/lib/icon";

export function Footer() {
  const socials = config.socials.filter((s) => s.enabled !== false && !s.url.startsWith("<"));
  return (
    <footer className="relative mt-12 border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <a href="#hero" className="font-heading text-xl font-bold">
          <span className="text-gradient">{config.personal.name}</span>
        </a>

        {socials.length > 0 && (
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        )}

        <p className="max-w-md text-sm text-muted">{config.footer.note}</p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {config.personal.name}. All rights reserved.
        </p>

        {config.footer.showBackToTop && (
          <a
            href="#hero"
            className="mt-2 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowUp size={14} /> Back to top
          </a>
        )}
      </div>
    </footer>
  );
}
