import { cn } from "@/lib/utils";
import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "whatsapp" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  children,
  className,
  as: Tag = "button",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-bold rounded-lg tap-scale transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 shadow-glow-red active:scale-95",
    accent:
      "bg-accent text-accent-foreground hover:opacity-90 shadow-glow active:scale-95",
    whatsapp:
      "bg-success text-success-foreground hover:opacity-90 active:scale-95",
    ghost: "bg-transparent text-foreground hover:bg-muted active:scale-95",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95",
  };

  const sizes = {
    sm: "text-xs px-3 py-2 min-h-[36px]",
    md: "text-sm px-4 py-2.5 min-h-[44px]",
    lg: "text-base px-6 py-3 min-h-[48px]",
    xl: "text-lg px-8 py-4 min-h-[56px]",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  if (Tag === "a") {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {loading ? (
          <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
        ) : null}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {loading ? (
        <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
      ) : null}
      {children}
    </button>
  );
}
