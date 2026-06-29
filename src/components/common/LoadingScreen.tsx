"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { config } from "@/config/portfolio.config";

/** Brief branded loading overlay shown on first paint. */
export function LoadingScreen() {
  const [done, setDone] = useState(!config.animations.enableLoadingScreen);

  useEffect(() => {
    if (!config.animations.enableLoadingScreen) return;
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-gradient text-2xl font-bold text-white shadow-glow"
            >
              {config.personal.firstName.charAt(0)}
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-surface">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="h-full w-1/2 bg-brand-gradient"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
