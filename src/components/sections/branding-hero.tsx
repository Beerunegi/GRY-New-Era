"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Gem } from "lucide-react";
import Image from "next/image";

export function BrandingHero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 uppercase tracking-wider backdrop-blur-sm border border-primary/20">
              <Palette className="w-3.5 h-3.5" /> Design that Commands Attention
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Visual Identity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary selection:bg-primary/20">Built for Growth</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              We don't just make things look pretty. We engineer brand identities, logos, and marketing creatives that communicate authority, build instant trust, and drive conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="h-14 px-10 text-base shadow-xl shadow-primary/20 font-bold group">
                Build Your Brand <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border/50 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/5 border border-primary/10">
                  <Gem className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">Premium Quality</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary/5 border border-secondary/10">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">Original Concepts</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group bg-muted">
              <Image 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop" 
                alt="Brand Identity Design Elements" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-primary/10" />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl hidden md:block">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white scale-75">
                   <Palette className="w-4 h-4" />
                </div>
                <div className="text-xl font-black text-foreground">Award Winning</div>
              </div>
              <div className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em] ml-11">Creative Agency</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
