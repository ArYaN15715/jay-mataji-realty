import { Button } from "@/components/ui/PropertyButton";
import { Home, MessageCircle, Phone } from "lucide-react";

export function StickyActionBar() {
  return (
    <>
      {/* Desktop sticky top bar */}
      <header
        data-ocid="header.bar"
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-card/96 backdrop-blur-md border-b border-border shadow-subtle h-16 items-center px-6 justify-between"
      >
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label="Jay Mataji Home"
        >
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-glow-red group-hover:scale-105 transition-smooth">
            <Home className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-display font-bold text-foreground text-sm leading-tight tracking-wide">
              JAY MATAJI
            </div>
            <div className="text-muted-foreground text-[10px] leading-tight font-body uppercase tracking-wider">
              Real Estate Agency · Vadodara
            </div>
          </div>
        </a>

        {/* Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {[
            { label: "Properties", href: "#properties" },
            { label: "Why Us", href: "#why-us" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-fast relative group"
              data-ocid={`nav.${item.label.toLowerCase().replace(" ", "_")}_link`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(item.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Online indicator + CTAs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-success/10 border border-success/25 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-success animate-blink shrink-0" />
            <span className="text-xs font-body font-semibold text-success">
              Agent Online
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            as="a"
            href="tel:+919876543210"
            data-ocid="header.call_button"
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            as="a"
            href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="header.whatsapp_button"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Mobile compact header */}
      <header
        data-ocid="header.mobile_bar"
        className="flex md:hidden fixed top-0 left-0 right-0 z-50 bg-card/96 backdrop-blur-md border-b border-border shadow-subtle h-14 items-center px-4 justify-between"
      >
        <a
          href="#hero"
          className="flex items-center gap-2"
          aria-label="Jay Mataji Home"
        >
          <div className="w-8 h-8 rounded-md gradient-primary flex items-center justify-center shadow-glow-red">
            <Home className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-display font-bold text-foreground text-xs leading-tight">
              JAY MATAJI
            </div>
            <div className="text-muted-foreground text-[9px] leading-tight font-body uppercase tracking-wide">
              Real Estate
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-success/10 border border-success/25 px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
            <span className="text-[10px] font-body font-semibold text-success">
              Online
            </span>
          </div>
          <Button
            variant="primary"
            size="sm"
            as="a"
            href="tel:+919876543210"
            className="px-3 py-1.5 text-xs min-h-0 h-8"
            data-ocid="header.mobile_call_button"
          >
            <Phone className="w-3 h-3" />
            Call
          </Button>
        </div>
      </header>
    </>
  );
}
