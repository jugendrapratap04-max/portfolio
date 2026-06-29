"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { useTheme } from "@/components/common/ThemeProvider";

/** Sticky glass navbar with active-section highlight. Links auto-hide if their section is off. */
export function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Only show nav links whose target section is enabled.
  const items = config.navigation.filter((n) => {
    const key = n.href.replace("#", "") as keyof typeof config.sections;
    return key in config.sections ? config.sections[key] : true;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 sm:px-6 ${
          scrolled ? "glass shadow-soft" : ""
        }`}
      >
        <a href="#hero" className="font-heading text-lg font-bold tracking-tight">
          <span className="text-gradient">{config.personal.firstName}</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {items.map((it) => {
            const id = it.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={it.href} className="relative">
                <a
                  href={it.href}
                  className={`text-sm transition-colors ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}`}
                >
                  {it.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-brand-gradient"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {config.theme.enableThemeToggle && (
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full glass transition-colors hover:border-accent"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-glow md:inline-block"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
