import {
  Award,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Layout } from "./components/layout/Layout";
import { Button } from "./components/ui/PropertyButton";
import { PropertyCard } from "./components/ui/PropertyCard";
import { budgetOptions, locations, properties } from "./data/properties";
import { useFilterStore } from "./store/filterStore";
import type { PropertyCategory, PropertyType } from "./types/property";

const CATEGORIES: Array<PropertyCategory | "All"> = [
  "All",
  "Apartment",
  "Villa",
  "Shop",
  "Plot",
];

const WHY_US = [
  {
    icon: Clock,
    title: "24/7 Available",
    desc: "Day, night, weekend — we answer instantly. No missed calls, no delays.",
  },
  {
    icon: Zap,
    title: "Fastest Deals",
    desc: "Most properties closed in 3–7 days. Speed is our unfair advantage.",
  },
  {
    icon: Shield,
    title: "Zero Paperwork Hassle",
    desc: "We handle all legal docs, registration, and verification for you.",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    desc: "10+ years in Karelibagh. We know every street, every rate, every trick.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    role: "Bought 3BHK in Karelibagh",
    quote:
      "Jay Mataji ne 5 din ma mara sapna nu ghar aapyu. Kharekhar fastest dealer che Vadodara ma!",
    rating: 5,
  },
  {
    name: "Priya Shah",
    role: "Rented 2BHK in Fatehgunj",
    quote:
      "Within 24 hours of calling, I had 3 options to see. Closed the deal the same day. Excellent service!",
    rating: 5,
  },
  {
    name: "Mihir Desai",
    role: "Sold Commercial Shop",
    quote:
      "Best price, no nonsense. Mane buyer pan emne j aapyo. No hassle, just results.",
    rating: 5,
  },
];

const STATS = [
  { value: "410+", label: "Properties Sold" },
  { value: "18", label: "Years Experience" },
  { value: "5.0★", label: "Google Rating" },
  { value: "24/7", label: "Availability" },
];

export default function App() {
  const {
    filters,
    filtered,
    setType,
    setBudget,
    setLocation,
    setCategory,
    reset,
  } = useFilterStore();
  const propertiesRef = useRef<HTMLDivElement>(null);

  const scrollToProperties = () => {
    propertiesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* ─── HERO SECTION ─── */}
      <section
        id="hero"
        data-ocid="hero.section"
        className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/generated/hero-property.dim_1200x800.jpg')`,
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 gradient-hero" />
        {/* Extra depth layer */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
          {/* Online badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-success/50">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-blink" />
              <span className="text-white text-sm font-body font-semibold tracking-wide">
                Agent Online — Reply in &lt;2 min
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-display font-bold text-4xl md:text-6xl lg:text-7xl text-center leading-[1.08] mb-4 md:mb-6"
          >
            Your Dream Home in{" "}
            <span className="text-gradient-gold">Vadodara</span>
            <br />
            is Just a Click Away.
          </motion.h1>

          {/* Gujarati trust phrase */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-accent font-display font-bold text-base md:text-lg text-center mb-3 tracking-wide"
          >
            તરત જવાબ 24/7 | 100% વિશ્વાસ
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-white/80 font-body text-base md:text-xl text-center mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Vadodara's #1 fastest property dealer. Buy, sell, or rent in
            Karelibagh &amp; surrounding areas — we close deals in days, not
            weeks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button
              variant="accent"
              size="xl"
              as="a"
              href="tel:+919876543210"
              data-ocid="hero.call_button"
              className="animate-pulse-scale"
            >
              <Phone className="w-5 h-5" />
              Call Now — Free
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              as="a"
              href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp_button"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Instantly
            </Button>
          </motion.div>

          {/* Stats — glass-morphism style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center glass rounded-xl p-3 border border-white/15"
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-accent leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToProperties}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-smooth flex flex-col items-center gap-1"
          data-ocid="hero.scroll_button"
          aria-label="Scroll to properties"
        >
          <span className="text-xs font-body">View Properties</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </section>

      {/* ─── MARQUEE ACTIVITY BAR ─── */}
      <section
        className="gradient-primary py-3 overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 text-white font-body text-sm whitespace-nowrap px-8"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-blink" />
                Just called 4 min ago
              </span>
              <span className="text-white/50">·</span>
              <span>⚡ 3 new listings this week</span>
              <span className="text-white/50">·</span>
              <span>🏆 Rated 5.0 on Google</span>
              <span className="text-white/50">·</span>
              <span>📍 Karelibagh · Airport Road · Sayajigunj</span>
              <span className="text-white/50">·</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-blink" />
                Deal closed 12 min ago
              </span>
              <span className="text-white/50">·</span>
              <span>🏠 500+ happy families</span>
              <span className="text-white/50">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROPERTIES SECTION ─── */}
      <section
        id="properties"
        ref={propertiesRef}
        data-ocid="properties.section"
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-1.5 mb-4">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-body font-semibold">
                Featured Properties
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Top Listings in Vadodara
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Hand-picked properties in Karelibagh, Airport Road, and nearby
              areas. Updated daily.
            </p>
          </motion.div>

          {/* Filter bar */}
          <div
            data-ocid="properties.filter.section"
            className="mb-8 bg-muted/40 border border-border rounded-2xl p-4 space-y-3"
          >
            {/* Type + Category filter pills */}
            <div className="flex gap-2 flex-wrap items-center">
              {(["All", "Buy", "Rent"] as const).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setType(type as PropertyType | "All")}
                  data-ocid={`properties.filter.type.${type.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-display font-bold border transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none ${
                    filters.type === type
                      ? "bg-primary text-white border-primary shadow-glow-red"
                      : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {type === "All" ? "All Types" : type}
                </button>
              ))}
              <span className="hidden sm:block w-px h-5 bg-border" />
              {CATEGORIES.slice(1).map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() =>
                    setCategory(
                      cat === filters.category
                        ? "All"
                        : (cat as PropertyCategory),
                    )
                  }
                  data-ocid={`properties.filter.category.${cat.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-display font-bold border transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none ${
                    filters.category === cat
                      ? "bg-accent text-accent-foreground border-accent shadow-glow"
                      : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Location + Budget selects */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={filters.location}
                onChange={(e) => setLocation(e.target.value)}
                data-ocid="properties.filter.location_select"
                className="flex-1 bg-card border border-border rounded-lg px-3 py-2.5 text-sm font-body text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-smooth"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "All" ? "All Locations" : loc}
                  </option>
                ))}
              </select>
              <select
                value={filters.budget}
                onChange={(e) => setBudget(e.target.value)}
                data-ocid="properties.filter.budget_select"
                className="flex-1 bg-card border border-border rounded-lg px-3 py-2.5 text-sm font-body text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-smooth"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {(filters.type !== "All" ||
                filters.location !== "All" ||
                filters.budget !== "all" ||
                filters.category !== "All") && (
                <button
                  type="button"
                  onClick={reset}
                  data-ocid="properties.filter.reset_button"
                  className="px-4 py-2.5 text-sm font-body text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-smooth shrink-0"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Live count */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-body text-muted-foreground font-medium">
                {filtered.length} listing{filtered.length !== 1 ? "s" : ""}{" "}
                found
              </span>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div
              data-ocid="properties.empty_state"
              className="text-center py-16 bg-card rounded-2xl border border-border"
            >
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                No properties match your filters
              </h3>
              <p className="font-body text-muted-foreground mb-6 max-w-xs mx-auto">
                Try adjusting your filters or call us — we have many off-market
                listings.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  variant="outline"
                  onClick={reset}
                  data-ocid="properties.empty_state.reset_button"
                >
                  Clear Filters
                </Button>
                <Button
                  variant="primary"
                  as="a"
                  href="tel:+919876543210"
                  data-ocid="properties.empty_state.call_button"
                >
                  <Phone className="w-4 h-4" /> Call for Options
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Mobile: horizontal swipe carousel */}
              <div className="md:hidden flex gap-4 overflow-x-scroll snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
                {filtered.map((property, i) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="snap-start shrink-0 w-[80vw] max-w-[320px]"
                  >
                    <PropertyCard property={property} index={i} />
                  </motion.div>
                ))}
              </div>

              {/* Desktop: 3-column grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((property, i) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <PropertyCard property={property} index={i} />
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Bottom CTA */}
          {filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="font-body text-muted-foreground mb-4">
                Don't see what you need? We have 200+ unlisted properties.
              </p>
              <Button
                variant="accent"
                size="lg"
                as="a"
                href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property%20not%20listed%20on%20website"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="properties.unlisted_cta_button"
              >
                <MessageCircle className="w-5 h-5" />
                Ask About Unlisted Properties
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        id="why-us"
        data-ocid="why_us.section"
        className="py-16 md:py-24 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
                Trusts Jay Mataji
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full" />
              </span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              While other agents keep you waiting, we act instantly. Here's what
              makes us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`why_us.item.${i + 1}`}
                className="bg-card border border-border border-t-4 border-t-accent rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow-red">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Gujarati trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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

      {/* ─── URGENT CTA BAND ─── */}
      <section
        data-ocid="urgent_cta.section"
        className="relative py-16 md:py-20 gradient-primary overflow-hidden"
      >
        {/* Animated pulsing ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-[600px] h-[600px] rounded-full border-2 border-accent/40"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-success animate-blink" />
              <span className="text-white/80 font-body text-sm font-semibold uppercase tracking-wide">
                Available Right Now
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-3 leading-tight">
              Need a Property Urgently?{" "}
              <span className="text-accent">We're Available RIGHT NOW</span>
            </h2>
            <p className="font-display font-bold text-xl md:text-2xl text-accent mb-2">
              હવે જ સંપર્ક કરો — ૨૪/૭
            </p>
            <p className="font-body text-sm text-white/60 mb-3">
              (Contact us now — 24/7)
            </p>
            <p className="font-body text-base md:text-lg text-white/80 mb-10">
              Call or WhatsApp right now. We'll show you options within the hour
              — guaranteed. No forms, no delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="xl"
                as="a"
                href="tel:+919876543210"
                data-ocid="urgent_cta.call_button"
                className="animate-pulse-scale w-full sm:w-auto min-w-[220px]"
              >
                <Phone className="w-5 h-5" />
                Call Now +91 98765 43210
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                as="a"
                href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20property%20urgently"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="urgent_cta.whatsapp_button"
                className="w-full sm:w-auto min-w-[220px]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Urgently
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-body text-white/50">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-accent" />
                Replies in &lt;2 minutes
              </span>
              <span>·</span>
              <span>🕐 Open 24/7, 365 days</span>
              <span>·</span>
              <span>📍 Karelibagh, Vadodara</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        id="testimonials"
        data-ocid="testimonials.section"
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-accent text-sm font-body font-semibold">
                Client Stories
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              What Our Clients Say
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto text-sm">
              Real stories from Vadodara families who found their perfect
              property with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`testimonials.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="font-body text-foreground text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 gradient-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-display font-bold text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="font-body text-muted-foreground text-xs">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST / STATS SECTION ─── */}
      <section
        id="trust"
        data-ocid="trust.section"
        className="py-16 md:py-24 bg-muted/20 relative overflow-hidden"
      >
        {/* Decorative bg blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

          {/* Trust stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                value: "5.0★",
                label: "Google Rating",
                sub: "Every client, every time",
                color: "text-accent",
                border: "border-accent/25 bg-accent/5",
              },
              {
                value: "24/7",
                label: "Always Available",
                sub: "We call back in 2 mins",
                color: "text-primary",
                border: "border-primary/25 bg-primary/5",
              },
              {
                value: "410+",
                label: "Deals Closed",
                sub: "Karelibagh local expert",
                color: "text-success",
                border: "border-success/25 bg-success/5",
              },
            ].map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`trust.point.${i + 1}`}
                className={`flex flex-col items-center text-center bg-card border rounded-2xl p-6 shadow-card ${point.border}`}
              >
                <div
                  className={`font-display font-bold text-4xl md:text-5xl ${point.color} mb-2`}
                >
                  {point.value}
                </div>
                <div className="font-display font-bold text-foreground text-base mb-1">
                  {point.label}
                </div>
                <div className="font-body text-muted-foreground text-xs">
                  {point.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Promise card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-elevated text-center"
            data-ocid="trust.cta_card"
          >
            <p
              className="font-display font-bold text-foreground text-xl md:text-2xl mb-1"
              data-ocid="trust.gujarati_text"
            >
              જય માતાજી — 100% ભરોસો
            </p>
            <p className="font-body text-muted-foreground text-sm mb-6">
              Jay Mataji — 100% Trust · Karelibagh's Most Reliable Property
              Dealer
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm font-body flex-wrap">
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

      {/* ─── CONTACT SECTION ─── */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Ready to Find Your Property?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              No forms, no waiting. Just call or WhatsApp — and we'll take care
              of everything from listing to registration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <Button
                variant="primary"
                size="xl"
                fullWidth
                as="a"
                href="tel:+919876543210"
                data-ocid="contact.call_button"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                fullWidth
                as="a"
                href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-blink" />
                <span>Typically replies in &lt;2 minutes</span>
              </div>
              <span className="hidden sm:block">·</span>
              <span>📍 Karelibagh, Vadodara, Gujarat</span>
              <span className="hidden sm:block">·</span>
              <span>🕐 Open 24/7, 365 days</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
