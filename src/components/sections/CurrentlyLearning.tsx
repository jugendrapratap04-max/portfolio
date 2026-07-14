"use client";

import { motion } from "framer-motion";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/lib/icon";

/** What Jugendra is actively skilling up on right now. Data lives in the config. */
export function CurrentlyLearning() {
  const items = config.learning.filter((l) => !l.hidden);
  if (items.length === 0) return null;

  return (
    <SectionWrapper
      id="learning"
      eyebrow="Always growing"
      title="Currently Learning"
      subtitle="The skills I'm actively building toward my next internship."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((l, i) => (
          <motion.div
            key={`${l.name}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
          >
            <GlassCard className="flex h-full flex-col">
              <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white">
                <Icon name={l.icon} size={20} />
              </span>
              <h3 className="font-heading font-semibold">{l.name}</h3>
              {l.detail && <p className="mt-1 text-sm text-muted">{l.detail}</p>}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
