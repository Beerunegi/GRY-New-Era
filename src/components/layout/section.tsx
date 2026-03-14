import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">{children}</div>
    </section>
  );
}
