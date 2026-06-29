"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  download?: boolean;
  className?: string;
};

/** Button/link with a subtle magnetic pull toward the cursor. */
export function MagneticButton({ children, href, onClick, variant = "primary", download, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.25, y: (e.clientY - (r.top + r.height / 2)) * 0.25 });
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand-gradient text-white shadow-glow hover:opacity-95"
      : "glass text-foreground hover:border-accent";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      download={download}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {children}
    </motion.a>
  );
}
