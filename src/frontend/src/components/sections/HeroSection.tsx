import { Button } from "@/components/ui/PropertyButton";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ACTIVITY_FEED = [
  "Ravi just enquired 2 mins ago",
  "Priya enquired 5 mins ago — found her dream flat!",
  "Mehul called 8 mins ago about a shop in Karelibagh",
  "Sneha asked about 2BHK rent 12 mins ago",
  "Nilesh enquired for plot near airport 18 mins ago",
];

export function HeroSection() {
  const [activityIndex, setActivityIndex] = useState(0);
  const [activityVisible, setActivityVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityVisible(false);
      setTimeout(() => {
        setActivityIndex((prev) => (prev + 1) % ACTIVITY_FEED.length);
        setActivityVisible(true);
      }, 400);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-property.dim_1200x800.jpg')`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />
      {/* Extra darkening for readability */}
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Online indicator */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-card/15 backdrop-blur-sm border border-success/50 px-4 py-2 rounded-full mb-6"
          data-ocid="hero.online_badge"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-success animate-blink flex-shrink-0" />
          <span className="text-primary-foreground text-sm font-body font-semibold tracking-wide">
            Agent Online Now — Replies in &lt;2 min
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display font-bold text-primary-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-3"
        >
          Fastest Property Dealer{" "}
          <span className="text-accent">in Vadodara</span>
        </motion.h1>

        {/* Gujarati trust phrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-accent font-display font-bold text-base md:text-lg mb-3 tracking-wide"
          data-ocid="hero.gujarati_text"
        >
          તરત જવાબ 24/7 | 100% વિશ્વાસ
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="text-primary-foreground/80 font-body text-base md:text-lg max-w-xl mb-8 leading-relaxed"
        >
          Available 24/7 — Call or WhatsApp anytime for instant property deals
          in Karelibagh &amp; Vadodara
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-10"
        >
          <Button
            variant="primary"
            size="xl"
            as="a"
            href="tel:+919876543210"
            data-ocid="hero.call_button"
            className="animate-pulse-scale min-h-[56px] sm:min-w-[200px]"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            Call Now — Free
          </Button>
          <Button
            variant="whatsapp"
            size="xl"
            as="a"
            href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property%20in%20Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.whatsapp_button"
            className="min-h-[56px] sm:min-w-[220px]"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            WhatsApp Instantly
          </Button>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="flex items-center gap-2.5 bg-card/20 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-2.5"
          data-ocid="hero.activity_feed"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-blink flex-shrink-0" />
          <span
            className="text-primary-foreground/85 font-body text-xs md:text-sm transition-all duration-400"
            style={{
              opacity: activityVisible ? 1 : 0,
              transition: "opacity 0.35s ease",
            }}
          >
            🔔 {ACTIVITY_FEED[activityIndex]}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
