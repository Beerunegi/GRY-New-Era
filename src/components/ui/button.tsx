import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95";

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg shadow-primary/20",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-muted text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 py-2",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
