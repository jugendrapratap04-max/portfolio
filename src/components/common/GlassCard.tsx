"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div"> & { children: ReactNode };

/** Reusable glassmorphism card with a soft hover lift + border glow. */
export function GlassCard({ children, className, ...rest }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={`glass rounded-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow ${className ?? ""}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
