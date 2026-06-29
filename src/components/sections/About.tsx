"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Rocket, Sparkles, MapPin, Code2 } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

/** Modern "bento grid" About section. */
export function About() {
  const edu = config.education[0];
  const learning = edu?.description ?? "";

  return (
    <SectionWrapper id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Big bio card */}
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="glass rounded-card p-7 shadow-soft sm:col-span-2 lg:row-span-2"
        >
          <Sparkles className="mb-4 text-accent" size={26} />
          <p className="text-lg leading-relaxed text-muted">{config.personal.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Data Science", "Machine Learning", "Python", "Problem Solving", "Lifelong Learner"].map((t) => (
              <span key={t} className="rounded-full bg-surface px-4 py-1.5 text-sm text-foreground">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Study card */}
        <motion.div custom={1} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="glass rounded-card p-6 shadow-soft transition-shadow hover:shadow-glow">
          <GraduationCap className="mb-3 text-accent" size={24} />
          <h3 className="font-heading text-base font-semibold">What I Study</h3>
          <p className="mt-1 text-sm text-muted">
            {edu ? `${edu.degree.replace("B.Tech in ", "")} at ${edu.institution}` : "Computer Science (Data Science)"}
          </p>
        </motion.div>

        {/* Location card */}
        <motion.div custom={2} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="glass rounded-card p-6 shadow-soft transition-shadow hover:shadow-glow">
          <MapPin className="mb-3 text-accent" size={24} />
          <h3 className="font-heading text-base font-semibold">Based In</h3>
          <p className="mt-1 text-sm text-muted">{config.personal.location}</p>
        </motion.div>

        {/* Goal card */}
        <motion.div custom={3} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="glass rounded-card p-6 shadow-soft transition-shadow hover:shadow-glow">
          <Target className="mb-3 text-accent" size={24} />
          <h3 className="font-heading text-base font-semibold">Career Goal</h3>
          <p className="mt-1 text-sm text-muted">Grow into a strong Software / AI Engineer solving real problems.</p>
        </motion.div>

        {/* Building card */}
        <motion.div custom={4} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="glass rounded-card p-6 shadow-soft transition-shadow hover:shadow-glow">
          <Code2 className="mb-3 text-accent" size={24} />
          <h3 className="font-heading text-base font-semibold">What I Build</h3>
          <p className="mt-1 text-sm text-muted">ML models, data-analysis pipelines and clean, practical software.</p>
        </motion.div>

        {/* Currently learning card (wide) */}
        <motion.div custom={5} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="glass rounded-card p-6 shadow-soft transition-shadow hover:shadow-glow sm:col-span-2">
          <Rocket className="mb-3 text-accent" size={24} />
          <h3 className="font-heading text-base font-semibold">Currently Learning</h3>
          <p className="mt-1 text-sm text-muted">
            {learning || "DSA, Java, Machine Learning, Agentic AI, AI workflow automation and advanced Python."}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
