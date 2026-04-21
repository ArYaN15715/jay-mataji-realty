import { Award, Clock, MapPin, Shield, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: Clock,
    title: "24/7 Available",
    description:
      "Day, night, weekend — we pick up every call. No voicemail, no delays, just instant access to your property agent.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "WhatsApp reply in under 2 minutes. Most enquiries converted to property viewings the same day.",
  },
  {
    icon: Shield,
    title: "Quick Deals",
    description:
      "Close in 3–7 days. We handle documentation, registration, and all paperwork so you don't have to wait.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "10+ years in Karelibagh. We know every lane, every rate, every upcoming development before it hits the market.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      data-ocid="why_choose_us.section"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-body font-semibold">
              Our Edge
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Why Vadodara{" "}
            <span className="relative inline-block">
              Trusts Us
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full" />
            </span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            While other agents keep you waiting, we act instantly. No excuses,
            no delays — just results.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              data-ocid={`why_choose_us.card.${i + 1}`}
              className="group bg-card border-t-4 border-t-accent border border-border rounded-xl p-5 md:p-6 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-smooth text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow-red group-hover:scale-110 transition-smooth flex-shrink-0">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base md:text-lg mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gujarati promise banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-2xl px-7 py-5">
            <p className="font-display font-bold text-foreground text-lg md:text-xl mb-1">
              "અમે ૨૪/૭ ઉપલબ્ધ છીએ — આ અમારું વચન છે."
            </p>
            <p className="font-body text-muted-foreground text-sm">
              We are available 24/7 — this is our promise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
