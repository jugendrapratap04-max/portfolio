"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";

export function Education() {
  const items = config.education.filter((e) => !e.hidden);
  if (items.length === 0) return null;

  return (
    <SectionWrapper id="education" eyebrow="My background" title="Education">
      <div className="mx-auto max-w-3xl space-y-6">
        {items.map((e, i) => (
          <motion.div
            key={`${e.degree}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                <GraduationCap size={22} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold">{e.degree}</h3>
                  <span className="text-xs text-accent">{e.startDate} — {e.endDate}</span>
                </div>
                <p className="text-sm text-muted">{e.institution}{e.location ? ` · ${e.location}` : ""}</p>
                {e.grade && <p className="mt-1 text-sm font-medium text-foreground">{e.grade}</p>}
                {e.description && <p className="mt-2 text-sm text-muted">{e.description}</p>}
                {e.coursework && e.coursework.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.coursework.map((c) => (
                      <span key={c} className="rounded-md bg-surface px-2 py-1 text-xs text-muted">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
