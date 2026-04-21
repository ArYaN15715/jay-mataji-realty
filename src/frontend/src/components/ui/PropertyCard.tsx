import { cn } from "@/lib/utils";
import type { Property } from "@/types/property";
import { Bath, BedDouble, Home, MapPin, Phone, Ruler } from "lucide-react";
import { useState } from "react";
import { Button } from "./PropertyButton";

const TAG_STYLES: Record<string, string> = {
  "HOT DEAL": "bg-primary text-white",
  NEW: "bg-emerald-500 text-white",
  PREMIUM: "bg-accent text-accent-foreground",
  "FAST MOVING": "bg-orange-500 text-white",
};

interface PropertyCardProps {
  property: Property;
  index?: number;
  className?: string;
}

export function PropertyCard({
  property,
  index = 0,
  className,
}: PropertyCardProps) {
  const [imgError, setImgError] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hi Jay Mataji, I'm interested in: ${property.title} (${property.priceLabel}) at ${property.location}`,
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMsg}`;

  return (
    <div
      data-ocid={`property.item.${index + 1}`}
      className={cn(
        "bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-muted">
        {property.image && !imgError ? (
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full gradient-hero flex flex-col items-center justify-center gap-2">
            <Home className="w-12 h-12 text-white/40" />
            <span className="text-white/50 text-xs font-body">
              Photo Coming Soon
            </span>
          </div>
        )}

        {/* Bottom gradient overlay for price readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Price badge — bottom left on image */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5">
          <span className="text-accent font-display font-bold text-base leading-none">
            {property.priceLabel}
          </span>
        </div>

        {/* Tag badge — top right */}
        {property.tag && (
          <div
            className={cn(
              "absolute top-3 right-3 text-xs font-display font-bold px-2.5 py-1 rounded-full shadow-sm",
              TAG_STYLES[property.tag] ?? "bg-primary text-white",
            )}
          >
            {property.tag}
          </div>
        )}

        {/* Type badge — top left */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-foreground text-xs font-display font-bold px-2.5 py-1 rounded-full border border-white/50">
          {property.type === "Buy" ? "🏠 Buy" : "🔑 Rent"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-bold text-foreground text-base mb-1 line-clamp-1 leading-tight">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
          <MapPin className="w-3 h-3 shrink-0 text-primary" />
          <span className="truncate">{property.location}, Vadodara</span>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <BedDouble className="w-3.5 h-3.5 text-primary/70" />
              <span className="font-medium">{property.bedrooms} BHK</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Bath className="w-3.5 h-3.5 text-primary/70" />
              <span className="font-medium">{property.bathrooms} Bath</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Ruler className="w-3.5 h-3.5 text-primary/70" />
            <span className="font-medium">{property.area} sqft</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            as="a"
            href="tel:+919876543210"
            data-ocid={`property.call_button.${index + 1}`}
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            className="flex-1"
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`property.whatsapp_button.${index + 1}`}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
