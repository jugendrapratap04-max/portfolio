"use client";

import { motion } from "framer-motion";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Icon } from "@/lib/icon";

export function Achievements() {
  const items = config.achievements.filter((a) => !a.hidden);
  if (items.length === 0) return null;

  return (
    <SectionWrapper id="achievements" eyebrow="By the numbers" title="Achievements">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <GlassCard className="text-center">
              <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                <Icon name={a.icon} size={22} />
              </span>
              <p className="font-heading text-4xl font-bold text-gradient">
                <AnimatedCounter value={a.value} suffix={a.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted">{a.label}</p>
              {a.description && <p className="mt-1 text-xs text-muted">{a.description}</p>}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
