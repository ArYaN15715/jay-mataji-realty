import { cn } from "@/lib/utils";
import { MessageCircle, Phone } from "lucide-react";
import React, { useState, useEffect } from "react";

export function FloatingCTAs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-4 z-50 flex flex-col gap-3 transition-smooth",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      {/* Activity pulse */}
      <div
        data-ocid="floating.activity_toast"
        className="hidden md:flex bg-card border border-border shadow-elevated rounded-xl px-4 py-2.5 items-center gap-2 animate-slide-in-up text-sm"
      >
        <span className="w-2 h-2 rounded-full bg-success animate-blink shrink-0" />
        <span className="font-body text-muted-foreground text-xs">
          Someone enquired 3 min ago
        </span>
      </div>

      {/* Floating pill (mobile) */}
      <div className="flex md:hidden items-center gap-3 bg-card border border-border shadow-elevated rounded-full px-4 py-3">
        <a
          href="tel:+919876543210"
          data-ocid="floating.call_button"
          className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-glow-red tap-scale animate-pulse-scale"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5 text-primary-foreground" />
        </a>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-display font-bold text-foreground leading-tight">
            Quick Connect
          </span>
          <span className="text-[10px] font-body text-muted-foreground leading-tight">
            Instant reply guaranteed
          </span>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="floating.whatsapp_button"
          className="w-12 h-12 bg-success rounded-full flex items-center justify-center shadow-glow tap-scale"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-success-foreground" />
        </a>
      </div>

      {/* Desktop floating buttons */}
      <div className="hidden md:flex flex-col gap-2 items-end">
        <a
          href="https://wa.me/919876543210?text=Hi%20Jay%20Mataji%2C%20I%20need%20a%20property"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="floating.desktop_whatsapp_button"
          className="w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-elevated tap-scale transition-smooth hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-success-foreground" />
        </a>
        <a
          href="tel:+919876543210"
          data-ocid="floating.desktop_call_button"
          className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center shadow-glow-red tap-scale transition-smooth hover:scale-110 animate-pulse-scale"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 text-primary-foreground" />
        </a>
      </div>
    </div>
  );
}
