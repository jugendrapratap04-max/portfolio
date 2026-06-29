"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/config/portfolio.config";

/** Glowing dot + ring cursor. Disabled on touch devices automatically. */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!config.animations.enableCustomCursor) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(Boolean(el.closest("a, button, [data-cursor]")));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-accent/60"
        animate={{ x: pos.x - 18, y: pos.y - 18, scale: hover ? 1.6 : 1, opacity: hover ? 0.9 : 0.4 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ height: 36, width: 36 }}
      />
    </>
  );
}
