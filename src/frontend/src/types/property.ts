export type PropertyType = "Buy" | "Rent";
export type PropertyCategory = "Apartment" | "Villa" | "Shop" | "Plot";

export interface Property {
  id: string;
  title: string;
  price: number;
  priceLabel: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  tag: "HOT DEAL" | "NEW" | "PREMIUM" | "FAST MOVING" | null;
  description: string;
  amenities: string[];
  category: PropertyCategory;
  image?: string;
}

export interface FilterState {
  type: PropertyType | "All";
  budget: string;
  location: string;
  category: PropertyCategory | "All";
}
