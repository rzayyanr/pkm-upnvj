import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white" | "onDark" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex touch-manipulation items-center justify-center gap-2 font-medium rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veteran-700 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-veteran-700 text-white hover:bg-veteran-800",
  secondary:
    "border border-veteran-700 text-veteran-700 hover:bg-veteran-50 bg-white",
  ghost: "text-veteran-700 hover:bg-veteran-50",
  white: "bg-white text-veteran-800 hover:bg-veteran-50",
  onDark:
    "border border-white text-white hover:bg-veteran-700 bg-transparent",
  danger: "bg-api-500 text-white hover:bg-api-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-13 px-8 text-lg",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentProps<typeof Link>;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
