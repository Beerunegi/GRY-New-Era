import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "compact" | "none";
}) {
  const paddings = {
    default: "py-20 md:py-32",
    compact: "py-12 md:py-20",
    none: "py-0",
  };

  return (
    <section id={id} className={cn(paddings[variant], className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">{children}</div>
    </section>
  );
}
