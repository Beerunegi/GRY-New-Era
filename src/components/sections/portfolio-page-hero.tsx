"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";

export function PortfolioPageHero() {
  return (
    <Section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 uppercase tracking-wider backdrop-blur-sm border border-primary/20">
            Our Work
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Proof is in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of high-converting websites, dominant SEO campaigns, and scroll-stopping creative work designed for industry leaders.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
