"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/lib/icon";

export function Skills() {
  const visible = config.skills.filter((s) => !s.hidden);
  const categories = ["All", ...config.skillCategories];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? visible : visible.filter((s) => s.category === active);

  return (
    <SectionWrapper id="skills" eyebrow="What I work with" title="Skills & Tech" subtitle="A snapshot of the tools and concepts I use — and keep improving.">
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              active === c ? "bg-brand-gradient text-white shadow-glow" : "glass text-muted hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s, i) => (
          <motion.div
            key={s.name}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
          >
            <GlassCard className="group h-full">
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                  <Icon name={s.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-heading font-semibold">{s.name}</h3>
                  <p className="text-xs text-accent">{s.level}</p>
                </div>
                <span className="ml-auto text-sm font-semibold text-muted">{s.proficiency}%</span>
              </div>
              {s.description && <p className="mb-3 text-sm text-muted">{s.description}</p>}
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-brand-gradient"
                />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
