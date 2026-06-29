"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";

export function Certifications() {
  const items = config.certifications.filter((c) => !c.hidden);
  if (items.length === 0) return null;

  return (
    <SectionWrapper id="certifications" eyebrow="Verified learning" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <motion.div
            key={`${c.title}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <GlassCard className="flex h-full flex-col">
              {c.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.image} alt={c.title} className="mb-4 h-36 w-full rounded-lg object-cover" />
              )}
              <BadgeCheck className="mb-2 text-accent" size={22} />
              <h3 className="font-heading font-semibold">{c.title}</h3>
              <p className="text-sm text-muted">{c.issuer} · {c.date}</p>
              {c.credentialUrl && !c.credentialUrl.startsWith("<") && (
                <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-accent hover:underline">
                  <ExternalLink size={14} /> Verify
                </a>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
