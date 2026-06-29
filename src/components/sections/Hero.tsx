"use client";

import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { config } from "@/config/portfolio.config";
import { TypingText } from "@/components/common/TypingText";
import { MagneticButton } from "@/components/common/MagneticButton";
import { Aurora } from "@/components/common/Aurora";
import { Icon } from "@/lib/icon";

export function Hero() {
  const { personal, socials, animations } = config;
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animations.enableParallax) return;
    const onMove = (e: MouseEvent) => {
      setParallax({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [animations.enableParallax]);

  const socialLinks = socials.filter((s) => s.enabled !== false && !s.url.startsWith("<"));

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24">
      <Aurora />
      <div className="absolute inset-0 -z-20 bg-brand-radial opacity-20" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ transform: `translate(${parallax.x * 0.3}px, ${parallax.y * 0.3}px)` }}
        >
          {personal.availableForWork && (
            <span className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>
          )}

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
          </h1>

          <p className="mt-4 text-xl text-muted sm:text-2xl">
            <TypingText words={personal.typingRoles} className="font-mono text-accent" />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{personal.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href={personal.resumeUrl} download variant="primary">
              <Download size={16} /> Resume
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              <FolderGit2 size={16} /> View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail size={16} /> Contact
            </MagneticButton>
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transform: `translate(${parallax.x * -0.5}px, ${parallax.y * -0.5}px)` }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 animate-pulse rounded-full bg-brand-gradient opacity-30 blur-3xl" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-border bg-surface shadow-glow sm:h-72 sm:w-72">
            {/* Fallback initial sits BEHIND; the photo (if it loads) covers it. */}
            <div className="absolute inset-0 grid place-items-center bg-brand-gradient text-7xl font-bold text-white">
              {personal.firstName.charAt(0)}
            </div>
            {/* Drop your photo at public/profile.jpg. */}
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="relative z-10 h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}
