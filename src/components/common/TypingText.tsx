"use client";

import { useEffect, useState } from "react";
import { config } from "@/config/portfolio.config";

/** Typewriter effect that cycles through an array of strings. */
export function TypingText({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!config.animations.enableTypingAnimation) {
      setSub(words[0] ?? "");
      return;
    }
    const current = words[index % words.length] ?? "";
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      const next = deleting ? current.slice(0, sub.length - 1) : current.slice(0, sub.length + 1);
      setSub(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  return (
    <span className={className}>
      {sub}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}
