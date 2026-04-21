import { MapPin, MessageCircle, Phone, Star } from "lucide-react";

const YEAR = new Date().getFullYear();
const HOSTNAME_ENCODED =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";
const CAFFEINE_URL = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${HOSTNAME_ENCODED}`;

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function FooterSection() {
  return (
    <footer data-ocid="footer.section" className="bg-[#2C2C2C] text-[#f5f5f5]">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* ─── Brand column ─── */}
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
                style={{ color: "rgba(255,215,0,0.75)" }}
              >
                જય માતાજી રિયલ એસ્ટેટ
              </div>
            </div>
            <p
              className="font-body text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Vadodara's fastest and most trusted property dealer. Operating
              24/7 in Karelibagh and surrounding areas since 2006.
            </p>

            {/* Social trust */}
            <div
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-body font-semibold"
              style={{
                background: "rgba(255,215,0,0.12)",
                border: "1px solid rgba(255,215,0,0.25)",
                color: "#FFD700",
              }}
            >
              <Star className="w-4 h-4 fill-[#FFD700]" />
              <span>5.0 ⭐ on Google</span>
              <span className="opacity-50">·</span>
              <span>Always Available</span>
              <span className="opacity-50">·</span>
              <span>100% Local</span>
            </div>
          </div>

          {/* ─── Contact column ─── */}
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
                  className="flex items-center gap-3 font-body text-sm transition-smooth group"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110"
                    style={{ background: "oklch(0.45 0.18 10)", color: "#fff" }}
                  >
                    <Phone className="w-4 h-4" />
                  </span>
                  <span>
                    <span
                      className="block font-semibold"
                      style={{ color: "#fff" }}
                    >
                      +91 98765 43210
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.72rem",
                      }}
                    >
                      Tap to call — available 24/7
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp_link"
                  className="flex items-center gap-3 font-body text-sm transition-smooth group"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110"
                    style={{
                      background: "oklch(0.55 0.19 142)",
                      color: "#fff",
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <span>
                    <span
                      className="block font-semibold"
                      style={{ color: "#fff" }}
                    >
                      WhatsApp Instantly
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.72rem",
                      }}
                    >
                      Reply guaranteed in &lt;2 min
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
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
                    <span
                      className="block font-semibold"
                      style={{ color: "#fff" }}
                    >
                      Karelibagh, Vadodara
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.72rem",
                      }}
                    >
                      Gujarat 390018, India
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* ─── Quick Links column ─── */}
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
                    className="font-body text-sm transition-smooth hover:translate-x-1 inline-flex items-center gap-1.5"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span style={{ color: "#FFD700", opacity: 0.6 }}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SEO keywords strip */}
      <div
        className="border-t"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
          <p
            className="font-body text-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Best property dealer near Karelibagh Vadodara &nbsp;|&nbsp; 24 hours
            real estate agent Vadodara &nbsp;|&nbsp; Urgent property Vadodara
            &nbsp;|&nbsp; Property dealer near airport Vadodara &nbsp;|&nbsp;
            Buy Rent property Karelibagh Gujarat
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          <span>© {YEAR} Jay Mataji Real Estate. All rights reserved.</span>
          <a
            href={CAFFEINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.caffeine_link"
            className="transition-smooth hover:opacity-80"
            style={{ color: "rgba(255,215,0,0.5)" }}
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
