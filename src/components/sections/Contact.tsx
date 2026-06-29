"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { config } from "@/config/portfolio.config";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/lib/icon";

interface FormData { name: string; email: string; subject: string; message: string; }

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [sent, setSent] = useState(false);
  const honeypot = useRef<HTMLInputElement>(null);
  const c = config.contact;

  // EmailJS values: env vars take priority over config.
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || c.emailjsServiceId;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || c.emailjsTemplateId;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || c.emailjsPublicKey;

  const onSubmit = async (data: FormData) => {
    // Honeypot: real users never fill this hidden field — bots do. Drop silently.
    if (honeypot.current?.value) {
      setSent(true);
      reset();
      return;
    }
    if (serviceId && templateId && publicKey) {
      try {
        // Dynamically imported so the dependency only loads when used.
        // @ts-ignore -- @emailjs/browser is installed via `npm install`.
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(serviceId, templateId, { ...data }, { publicKey });
        setSent(true);
        reset();
        return;
      } catch {
        // fall through to mailto
      }
    }
    if (c.fallbackToMailto) {
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${config.personal.email}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
      setSent(true);
      reset();
    }
  };

  const details = [
    { icon: Mail, label: config.personal.email, href: `mailto:${config.personal.email}` },
    config.personal.phone ? { icon: Phone, label: config.personal.phone, href: `tel:${config.personal.phone}` } : null,
    { icon: MapPin, label: config.personal.location, href: undefined },
  ].filter(Boolean) as { icon: typeof Mail; label: string; href?: string }[];

  const socials = config.socials.filter((s) => s.enabled !== false && !s.url.startsWith("<"));

  return (
    <SectionWrapper id="contact" eyebrow="Let's talk" title="Get In Touch" subtitle="Have an opportunity, question, or just want to say hi? My inbox is open.">
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        {/* Left: details */}
        <div className="space-y-4">
          {details.map((d) => (
            <a key={d.label} href={d.href} className="glass flex items-center gap-4 rounded-card p-4 transition-colors hover:border-accent">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white"><d.icon size={20} /></span>
              <span className="text-sm">{d.label}</span>
            </a>
          ))}
          {socials.length > 0 && (
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:border-accent hover:text-accent">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: form */}
        {c.formEnabled && (
          <GlassCard>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mb-3 text-emerald-400" size={48} />
                <p className="text-lg font-semibold">{c.successMessage}</p>
                <button onClick={() => setSent(false)} className="mt-4 text-sm text-accent hover:underline">Send another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input {...register("name", { required: "Name is required" })} placeholder="Your name" className="w-full rounded-xl bg-surface px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-accent" />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} placeholder="Your email" className="w-full rounded-xl bg-surface px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-accent" />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                </div>
                <input {...register("subject", { required: "Subject is required" })} placeholder="Subject" className="w-full rounded-xl bg-surface px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-accent" />
                {errors.subject && <p className="-mt-2 text-xs text-red-400">{errors.subject.message}</p>}
                <textarea {...register("message", { required: "Message is required", minLength: { value: 10, message: "A little more detail, please" } })} rows={5} placeholder="Your message" className="w-full resize-none rounded-xl bg-surface px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-accent" />
                {errors.message && <p className="-mt-2 text-xs text-red-400">{errors.message.message}</p>}
                {/* Honeypot field for basic spam protection (hidden from humans) */}
                <input ref={honeypot} type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-95 disabled:opacity-60">
                  {isSubmitting ? "Sending…" : (<><Send size={16} /> Send Message</>)}
                </button>
              </form>
            )}
          </GlassCard>
        )}
      </div>
    </SectionWrapper>
  );
}
