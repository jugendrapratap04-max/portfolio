"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";

export function Blog() {
  const posts = config.blog.filter((p) => !p.hidden);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const filtered = posts.filter(
    (p) => (cat === "All" || p.category === cat) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())
  );

  if (posts.length === 0) {
    return (
      <SectionWrapper id="blog" eyebrow="Writing" title="Blog">
        <p className="text-center text-muted">Posts are coming soon — this section is ready whenever you are.</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="blog" eyebrow="Writing" title="Blog">
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm transition-all ${cat === c ? "bg-brand-gradient text-white" : "glass text-muted hover:text-foreground"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search posts…" className="w-full rounded-full glass py-2.5 pl-9 pr-4 text-sm outline-none focus:border-accent" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08 }}
          >
            <GlassCard className="h-full">
              <span className="text-xs text-accent">{p.category}</span>
              <h3 className="mt-1 flex items-start justify-between gap-2 font-heading text-lg font-semibold">
                {p.title} <ArrowUpRight size={16} className="shrink-0 text-muted" />
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{p.excerpt}</p>
              <p className="mt-4 text-xs text-muted">{p.date}{p.readTime ? ` · ${p.readTime}` : ""}</p>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
