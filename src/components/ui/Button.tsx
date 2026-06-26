import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isLoading?: boolean;
  loadingLabel?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  loadingLabel = "Loading",
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      aria-busy={isLoading || undefined}
      className={cn(
        "ds-button",
        `ds-button-${variant}`,
        `ds-button-${size}`,
        className,
      )}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {isLoading ? loadingLabel : children}
    </button>
  );
}
