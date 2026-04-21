import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import type React from "react";
import { FloatingCTAs } from "./FloatingCTAs";
import { StickyActionBar } from "./StickyActionBar";

interface LayoutProps {
  children: React.ReactNode;
}

const QUICK_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  const whatsappUrl =
    "https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StickyActionBar />

      {/* Main content with top padding for fixed header */}
      <main className="flex-1 pt-14 md:pt-16">{children}</main>

      {/* Premium dark footer */}
      <footer
        data-ocid="footer.section"
        style={{ background: "#1a0808" }}
        className="text-white"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="mb-3">
                <div
                  className="font-display font-bold text-xl leading-tight"
                  style={{ color: "#FFD700" }}
                >
                  Jay Mataji Real Estate
                </div>
                <div
                  className="font-body text-sm mt-0.5"
                  style={{ color: "rgba(255,215,0,0.65)" }}
                >
                  જય માતાજી રિયલ એસ્ટેટ
                </div>
              </div>
              <p className="font-body text-sm leading-relaxed mb-5 text-white/60">
                Vadodara's fastest and most trusted property dealer. Operating
                24/7 in Karelibagh and surrounding areas since 2006.
              </p>
              <div
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-body font-semibold"
                style={{
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  color: "#FFD700",
                }}
              >
                <Star className="w-4 h-4 fill-[#FFD700]" />
                <span>5.0 on Google</span>
                <span className="opacity-40">·</span>
                <span>Always Available</span>
              </div>
            </div>

            {/* Contact column */}
            <div>
              <h3
                className="font-display font-bold text-base mb-5"
                style={{ color: "#FFD700" }}
              >
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+919876543210"
                    data-ocid="footer.call_link"
                    className="flex items-center gap-3 font-body text-sm group"
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110"
                      style={{ background: "oklch(0.45 0.18 10)" }}
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">
                        +91 98765 43210
                      </span>
                      <span className="text-white/45 text-xs">
                        Tap to call — available 24/7
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="footer.whatsapp_link"
                    className="flex items-center gap-3 font-body text-sm group"
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110"
                      style={{ background: "oklch(0.55 0.19 142)" }}
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">
                        WhatsApp Instantly
                      </span>
                      <span className="text-white/45 text-xs">
                        Reply guaranteed in &lt;2 min
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 font-body text-sm">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        color: "#FFD700",
                      }}
                    >
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">
                        Karelibagh, Vadodara
                      </span>
                      <span className="text-white/45 text-xs">
                        Gujarat 390018, India
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick links column */}
            <div>
              <h3
                className="font-display font-bold text-base mb-5"
                style={{ color: "#FFD700" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-ocid={`footer.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                      className="font-body text-sm transition-smooth hover:translate-x-1 inline-flex items-center gap-1.5 text-white/60 hover:text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(link.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span style={{ color: "#FFD700", opacity: 0.55 }}>›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* SEO tags */}
              <div className="mt-8">
                <p className="font-body text-xs leading-relaxed text-white/20">
                  Property dealer Karelibagh Vadodara · 24 hour real estate
                  agent Vadodara · Urgent property Vadodara
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <span>© {year} Jay Mataji Real Estate. All rights reserved.</span>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.caffeine_link"
              className="transition-smooth hover:opacity-80"
              style={{ color: "rgba(255,215,0,0.45)" }}
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Always-visible floating CTAs */}
      <FloatingCTAs />
    </div>
  );
}
