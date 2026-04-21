import { useState } from "react";
import { properties } from "../data/properties";
import type {
  FilterState,
  PropertyCategory,
  PropertyType,
} from "../types/property";

export function useFilterStore() {
  const [filters, setFilters] = useState<FilterState>({
    type: "All",
    budget: "all",
    location: "All",
    category: "All",
  });

  const filtered = properties.filter((p) => {
    if (filters.type !== "All" && p.type !== filters.type) return false;
    if (filters.location !== "All" && p.location !== filters.location)
      return false;
    if (filters.category !== "All" && p.category !== filters.category)
      return false;
    if (filters.budget !== "all") {
      const b = filters.budget;
      if (b === "buy-low" && (p.type !== "Buy" || p.price >= 2000000))
        return false;
      if (
        b === "buy-mid" &&
        (p.type !== "Buy" || p.price < 2000000 || p.price >= 5000000)
      )
        return false;
      if (
        b === "buy-high" &&
        (p.type !== "Buy" || p.price < 5000000 || p.price >= 10000000)
      )
        return false;
      if (b === "buy-ultra" && (p.type !== "Buy" || p.price < 10000000))
        return false;
      if (b === "rent-low" && (p.type !== "Rent" || p.price >= 15000))
        return false;
      if (
        b === "rent-mid" &&
        (p.type !== "Rent" || p.price < 15000 || p.price >= 30000)
      )
        return false;
      if (b === "rent-high" && (p.type !== "Rent" || p.price < 30000))
        return false;
    }
    return true;
  });

  const setType = (type: PropertyType | "All") =>
    setFilters((f) => ({ ...f, type }));
  const setBudget = (budget: string) => setFilters((f) => ({ ...f, budget }));
  const setLocation = (location: string) =>
    setFilters((f) => ({ ...f, location }));
  const setCategory = (category: PropertyCategory | "All") =>
    setFilters((f) => ({ ...f, category }));
  const reset = () =>
    setFilters({
      type: "All",
      budget: "all",
      location: "All",
      category: "All",
    });

  return {
    filters,
    filtered,
    setType,
    setBudget,
    setLocation,
    setCategory,
    reset,
  };
}
