"use client";

import { motion } from "framer-motion";

const clients = [
  "Acme Corp", "GlobalTech", "Nexus", "Stark Ind.", "Wayne Ent.",
  "Massive Dynamic", "Cyberdyne", "Umbrella Corp", "Initech", "Soylent"
];

export function ClientsMarquee() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Mask for smooth fade edge effects */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 py-4"
          animate={{ x: [0, -1035] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-foreground/80 transition-colors"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
