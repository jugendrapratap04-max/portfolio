"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";

export function Experience() {
  const items = config.experience.filter((e) => !e.hidden);
  if (items.length === 0) return null; // auto-hide when empty

  return (
    <SectionWrapper id="experience" eyebrow="Where I've worked" title="Experience">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
        {items.map((e, i) => (
          <motion.div
            key={`${e.role}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
          >
            <span className="absolute left-2.5 top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-gradient text-white md:left-auto md:right-[-14px] md:translate-x-1/2"
              style={i % 2 === 0 ? { right: "-14px" } : { left: "-14px" }}>
              <Briefcase size={14} />
            </span>
            <GlassCard>
              <p className="text-xs text-accent">{e.startDate} — {e.endDate} · {e.type}</p>
              <h3 className="mt-1 font-heading text-lg font-semibold">{e.role}</h3>
              <p className="text-sm text-muted">{e.organization}{e.location ? ` · ${e.location}` : ""}</p>
              {e.description && <p className="mt-2 text-sm text-muted">{e.description}</p>}
              {e.highlights && (
                <ul className="mt-2 list-inside list-disc text-sm text-muted">
                  {e.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
