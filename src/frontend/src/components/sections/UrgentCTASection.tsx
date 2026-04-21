import { MessageCircle, Phone, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/PropertyButton";

export function UrgentCTASection() {
  return (
    <section
      id="urgent-cta"
      data-ocid="urgent_cta.section"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "oklch(0.45 0.18 10)" }}
    >
      {/* Animated pulsing glow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.35, 0.18] }}
          transition={{
            duration: 2.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-[700px] h-[700px] rounded-full border-4"
          style={{ borderColor: "oklch(0.75 0.2 90 / 0.5)" }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{
            duration: 2.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="w-[900px] h-[900px] rounded-full border-2"
          style={{ borderColor: "oklch(0.75 0.2 90 / 0.3)" }}
        />
      </div>

      {/* Decorative gold dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-10 w-3 h-3 rounded-full opacity-40 animate-blink"
        style={{ background: "oklch(0.75 0.2 90)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-10 w-2 h-2 rounded-full opacity-30 animate-blink"
        style={{ background: "oklch(0.75 0.2 90)", animationDelay: "0.7s" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <span
            className="w-3 h-3 rounded-full animate-blink"
            style={{ background: "oklch(0.65 0.19 142)" }}
          />
          <span
            className="font-body text-sm font-semibold tracking-wide uppercase"
            style={{ color: "oklch(0.75 0.2 90 / 0.9)" }}
          >
            Available Right Now
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl md:text-5xl leading-tight mb-3"
          style={{ color: "#FFFFFF" }}
        >
          Need a Property Urgently?{" "}
          <span style={{ color: "oklch(0.75 0.2 90)" }}>
            We're Available RIGHT NOW
          </span>
        </motion.h2>

        {/* Gujarati urgency line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-display font-bold text-xl md:text-2xl mb-2"
          style={{ color: "oklch(0.75 0.2 90)" }}
        >
          હવે જ સંપર્ક કરો — ૨૪/૭
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="font-body text-sm mb-8"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          (Contact us now — 24/7)
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="font-body text-base md:text-lg mb-10"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Call or WhatsApp right now. We'll show you options within the hour —
          guaranteed. No forms, no delays.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="accent"
            size="xl"
            as="a"
            href="tel:+919876543210"
            data-ocid="urgent_cta.call_button"
            className="w-full sm:w-auto animate-pulse-scale min-w-[220px]"
          >
            <Phone className="w-5 h-5 shrink-0" />
            Call Now +91 98765 43210
          </Button>

          <Button
            variant="whatsapp"
            size="xl"
            as="a"
            href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20property%20urgently%20%E2%80%94%20please%20call%20me"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="urgent_cta.whatsapp_button"
            className="w-full sm:w-auto min-w-[220px]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            WhatsApp Instantly
          </Button>
        </motion.div>

        {/* Reassurance row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-body"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <span className="flex items-center gap-1.5">
            <Zap
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.75 0.2 90)" }}
            />
            Replies in &lt;2 minutes
          </span>
          <span className="hidden sm:block">·</span>
          <span>🕐 Open 24/7, 365 days</span>
          <span className="hidden sm:block">·</span>
          <span>📍 Karelibagh, Vadodara</span>
        </motion.div>
      </div>
    </section>
  );
}
