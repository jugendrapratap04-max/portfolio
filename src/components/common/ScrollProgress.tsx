"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { config } from "@/config/portfolio.config";

/** Thin gradient progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  if (!config.animations.enableScrollProgress) return null;
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9990] h-1 w-full origin-left bg-brand-gradient"
    />
  );
}
