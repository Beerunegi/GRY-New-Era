"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-base mb-6">
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Transforming Ambition into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Dominance</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't just provide services; we engineer growth engines. Explore our suite of data-driven solutions designed to scale your brand in the new digital era.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="Digital Growth Analysis" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
      
      {/* Visual separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
