"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Star } from "lucide-react";
import { config } from "@/config/portfolio.config";
import type { Project } from "@/config/types";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { TiltCard } from "@/components/common/TiltCard";

function statusColor(status: Project["status"]) {
  switch (status) {
    case "Completed": return "text-emerald-400";
    case "In Progress": return "text-amber-400";
    case "Planned": return "text-sky-400";
    default: return "text-muted";
  }
}

export function Projects() {
  const all = config.projects.filter((p) => !p.hidden);
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [open, setOpen] = useState<Project | null>(null);
  const list = filter === "featured" ? all.filter((p) => p.featured) : all;

  return (
    <SectionWrapper id="projects" eyebrow="Things I've built" title="Projects" subtitle="A growing collection of what I'm working on.">
      <div className="mb-10 flex justify-center gap-2">
        {(["all", "featured"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm capitalize transition-all ${
              filter === f ? "bg-brand-gradient text-white shadow-glow" : "glass text-muted hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
          >
            <TiltCard className="h-full">
              <div
                onClick={() => setOpen(p)}
                className="glass flex h-full cursor-pointer flex-col overflow-hidden rounded-card shadow-soft transition-shadow hover:shadow-glow"
              >
                <div className="relative h-44 w-full overflow-hidden bg-brand-gradient">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full place-items-center text-4xl font-bold text-white/90">
                      {p.title.replace(/[<>]/g, "").charAt(0) || "P"}
                    </div>
                  )}
                  {p.featured && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white backdrop-blur">
                      <Star size={12} className="fill-amber-400 text-amber-400" /> Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                    <span className={`text-xs font-medium ${statusColor(p.status)}`}>{p.status}</span>
                  </div>
                  {p.subtitle && <p className="mb-2 text-sm text-accent">{p.subtitle}</p>}
                  <p className="mb-4 line-clamp-3 text-sm text-muted">{p.description}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-surface px-2 py-1 text-xs text-muted">{t}</span>
                    ))}
                    {p.techStack.length > 4 && (
                      <span className="rounded-md bg-surface px-2 py-1 text-xs text-muted">+{p.techStack.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-card p-7"
            >
              <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface hover:text-accent">
                <X size={18} />
              </button>

              <h3 className="font-heading text-2xl font-bold">{open.title}</h3>
              {open.subtitle && <p className="mt-1 text-accent">{open.subtitle}</p>}

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className={`rounded-full bg-surface px-3 py-1 ${statusColor(open.status)}`}>{open.status}</span>
                {open.difficulty && <span className="rounded-full bg-surface px-3 py-1 text-muted">{open.difficulty}</span>}
                {open.type && <span className="rounded-full bg-surface px-3 py-1 text-muted">{open.type}</span>}
              </div>

              <p className="mt-4 text-muted">{open.description}</p>

              {open.problem && (<div className="mt-4"><h4 className="font-semibold text-foreground">Problem</h4><p className="text-sm text-muted">{open.problem}</p></div>)}
              {open.solution && (<div className="mt-3"><h4 className="font-semibold text-foreground">Solution</h4><p className="text-sm text-muted">{open.solution}</p></div>)}

              {open.features && open.features.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground">Features</h4>
                  <ul className="mt-1 list-inside list-disc text-sm text-muted">
                    {open.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              )}

              {open.futurePlans && open.futurePlans.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground">Future Plans</h4>
                  <ul className="mt-1 list-inside list-disc text-sm text-muted">
                    {open.futurePlans.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {open.techStack.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs text-muted">{t}</span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {open.github && !open.github.startsWith("<") && (
                  <a href={open.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:border-accent">
                    <Github size={16} /> Code
                  </a>
                )}
                {open.demo && !open.demo.startsWith("<") && (
                  <a href={open.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
