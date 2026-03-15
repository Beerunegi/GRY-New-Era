"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary-5),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-base mb-6">
              Our Journey
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-8">
              Pioneering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Frontier</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a collective of digital architects, data scientists, and creative storytellers dedicated to scaling ambitious brands through innovative technology and strategic marketing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl skew-y-3 lg:-skew-y-3 hover:skew-y-0 transition-transform duration-700 border border-white/10"
          >
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Office Environment" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
