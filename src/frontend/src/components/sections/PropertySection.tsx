import { budgetOptions, locations } from "@/data/properties";
import { useFilterStore } from "@/store/filterStore";
import type { PropertyCategory, PropertyType } from "@/types/property";
import { Phone, TrendingUp, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Button } from "../ui/PropertyButton";
import { PropertyCard } from "../ui/PropertyCard";

const TYPE_OPTIONS: Array<PropertyType | "All"> = ["All", "Buy", "Rent"];
const CATEGORY_OPTIONS: Array<PropertyCategory> = [
  "Apartment",
  "Villa",
  "Shop",
  "Plot",
];
const LOCATION_CHIPS = [
  "All",
  "Karelibagh",
  "Near Airport",
  "Central Vadodara",
];

function getUrlParams(): Partial<{
  type: string;
  budget: string;
  location: string;
  category: string;
}> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    type: params.get("type") ?? undefined,
    budget: params.get("budget") ?? undefined,
    location: params.get("location") ?? undefined,
    category: params.get("category") ?? undefined,
  };
}

function pushUrlParams(filters: {
  type: string;
  budget: string;
  location: string;
  category: string;
}) {
  const params = new URLSearchParams();
  if (filters.type !== "All") params.set("type", filters.type);
  if (filters.budget !== "all") params.set("budget", filters.budget);
  if (filters.location !== "All") params.set("location", filters.location);
  if (filters.category !== "All") params.set("category", filters.category);
  const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
  window.history.pushState({}, "", newUrl);
}

export function PropertySection() {
  const {
    filters,
    filtered,
    setType,
    setBudget,
    setLocation,
    setCategory,
    reset,
  } = useFilterStore();

  // Restore from URL on mount — stable setters, safe to omit
  // biome-ignore lint/correctness/useExhaustiveDependencies: setters are stable
  useEffect(() => {
    const p = getUrlParams();
    if (p.type && ["Buy", "Rent", "All"].includes(p.type))
      setType(p.type as PropertyType | "All");
    if (p.budget) setBudget(p.budget);
    if (p.location) setLocation(p.location);
    if (
      p.category &&
      ["Apartment", "Villa", "Shop", "Plot"].includes(p.category ?? "")
    )
      setCategory(p.category as PropertyCategory);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync filters to URL
  useEffect(() => {
    pushUrlParams(filters);
  }, [filters]);

  const hasActiveFilters =
    filters.type !== "All" ||
    filters.location !== "All" ||
    filters.budget !== "all" ||
    filters.category !== "All";

  return (
    <section
      id="properties"
      data-ocid="properties.section"
      className="py-14 md:py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-3">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-3">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-body font-semibold">
                  Live Listings
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Properties in Karelibagh &amp; Vadodara
              </h2>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
              <span className="font-body text-sm text-muted-foreground font-semibold">
                {filtered.length} listing{filtered.length !== 1 ? "s" : ""}{" "}
                found
              </span>
            </div>
          </div>
        </motion.div>

        {/* ─── FILTER BAR ─── */}
        <div data-ocid="properties.filter.section" className="mb-8 space-y-3">
          {/* Buy / Rent toggle pills */}
          <div className="flex flex-wrap gap-2 items-center">
            {TYPE_OPTIONS.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setType(type)}
                data-ocid={`properties.filter.type.${type.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-display font-bold border transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none ${
                  filters.type === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {type === "All" ? "All Types" : type}
              </button>
            ))}
            <span className="hidden sm:block w-px h-6 bg-border mx-1" />
            {CATEGORY_OPTIONS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  setCategory(filters.category === cat ? "All" : cat)
                }
                data-ocid={`properties.filter.category.${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-display font-bold border transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none ${
                  filters.category === cat
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Location chips (scrollable on mobile) */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x">
            {LOCATION_CHIPS.map((loc) => {
              const val = loc === "Central Vadodara" ? "Sayajigunj" : loc;
              const active = filters.location === val;
              return (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocation(active ? "All" : val)}
                  data-ocid={`properties.filter.location.${loc.toLowerCase().replace(/\s+/g, "_")}`}
                  className={`shrink-0 snap-start px-4 py-2 rounded-full text-sm font-body font-semibold border transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {loc}
                </button>
              );
            })}
          </div>

          {/* Budget + clear row */}
          <div className="flex flex-col sm:flex-row gap-3">
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
            {hasActiveFilters && (
              <button
                type="button"
                onClick={reset}
                data-ocid="properties.filter.reset_button"
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-body font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth shrink-0"
              >
                <X className="w-3.5 h-3.5" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* ─── PROPERTY CARDS ─── */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-ocid="properties.empty_state"
            className="text-center py-16 bg-card rounded-2xl border border-border"
          >
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              No properties match your filters
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xs mx-auto">
              Try adjusting your filters — or call us for 200+ off-market
              listings.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button
                variant="outline"
                onClick={reset}
                data-ocid="properties.empty_state.reset_button"
              >
                <X className="w-4 h-4" /> Clear Filters
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
          </motion.div>
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
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="snap-start shrink-0 w-[78vw] max-w-[300px]"
                >
                  <PropertyCard property={property} index={i} />
                </motion.div>
              ))}
            </div>

            {/* Desktop: 3-column grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
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
              Ask About Unlisted Properties
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
