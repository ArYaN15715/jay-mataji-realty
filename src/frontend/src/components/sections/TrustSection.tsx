import { Button } from "@/components/ui/PropertyButton";
import { MessageCircle, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

const TRUST_POINTS = [
  {
    icon: Star,
    value: "5.0",
    label: "Google Rating",
    sub: "Every client, every time",
    color: "text-accent",
    bg: "bg-accent/10 border-accent/25",
  },
  {
    icon: Phone,
    value: "24/7",
    label: "Response",
    sub: "We call back in 2 mins",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/25",
  },
  {
    icon: MessageCircle,
    value: "410+",
    label: "Deals Closed",
    sub: "Karelibagh local expert",
    color: "text-success",
    bg: "bg-success/10 border-success/25",
  },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      data-ocid="trust.section"
      className="py-16 md:py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Decorative tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Available Anytime badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex justify-center mb-6"
        >
          <span
            data-ocid="trust.available_badge"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display font-bold text-sm px-5 py-2 rounded-full shadow-glow"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-foreground/70 animate-blink" />
            Available Anytime — 24/7/365
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            We Pick Up — <span className="text-primary">Day or Night</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            If we miss your call for any reason, we call back{" "}
            <strong className="text-foreground">within 2 minutes</strong>. No
            excuses. That's the Jay Mataji promise.
          </p>
        </motion.div>

        {/* Trust points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {TRUST_POINTS.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              data-ocid={`trust.point.${i + 1}`}
              className={`flex flex-col items-center text-center bg-card border rounded-2xl p-6 shadow-card ${point.bg}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${point.bg}`}
              >
                <point.icon className={`w-6 h-6 ${point.color}`} />
              </div>
              <div
                className={`font-display font-bold text-3xl md:text-4xl ${point.color} mb-1`}
              >
                {point.value}
              </div>
              <div className="font-display font-bold text-foreground text-sm md:text-base mb-1">
                {point.label}
              </div>
              <div className="font-body text-muted-foreground text-xs">
                {point.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gujarati authenticity + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-card border border-border rounded-2xl p-7 md:p-10 shadow-elevated text-center"
          data-ocid="trust.cta_card"
        >
          {/* Gujarati copy */}
          <p
            className="font-display font-bold text-foreground text-xl md:text-2xl mb-2"
            data-ocid="trust.gujarati_text"
          >
            જય માતાજી — 100% ભરોસો
          </p>
          <p className="font-body text-muted-foreground text-sm mb-6">
            Jay Mataji — 100% Trust · Karelibagh's Most Reliable Property Dealer
          </p>

          {/* Promise bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm font-body">
            <div className="flex items-center gap-2 bg-success/10 border border-success/25 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-success animate-blink" />
              <span className="text-foreground font-semibold">
                Missed call? We call back in 2 min
              </span>
            </div>
            <div className="flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2">
              <span className="text-accent">⭐</span>
              <span className="text-foreground font-semibold">
                5.0 Google Rating
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-2">
              <span className="text-primary">📍</span>
              <span className="text-foreground font-semibold">
                Local Karelibagh Expert
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              as="a"
              href="tel:+919876543210"
              data-ocid="trust.call_button"
              className="animate-pulse-scale"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              as="a"
              href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property%20in%20Vadodara"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="trust.whatsapp_button"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
