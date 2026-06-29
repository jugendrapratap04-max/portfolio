"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/** Consistent section shell with a fade-up reveal and standard heading block. */
export function SectionWrapper({ id, title, eyebrow, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 ${className ?? ""}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          )}
          {title && (
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient">{title}</span>
            </h2>
          )}
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-brand-gradient" />
        </motion.div>
      )}
      {children}
    </section>
  );
}
