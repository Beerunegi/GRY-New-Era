"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert, ShieldCheck, Eye } from "lucide-react";
import Image from "next/image";

export function ORMHero() {
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
              <ShieldAlert className="w-3.5 h-3.5" /> Protect Your Digital Image
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Control the Narrative. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary selection:bg-primary/20">Build Unshakeable Trust.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Your reputation is your most valuable asset. We suppress negative content, highlight positive reviews, and bulletproof your brand's presence across the search ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="h-14 px-10 text-base shadow-xl shadow-primary/20 font-bold group">
                Recover Your Reputation <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border/50 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/5 border border-primary/10">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">Brand Protection</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary/5 border border-secondary/10">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">24/7 Monitoring</div>
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
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" 
                alt="Online Reputation Management Dashboard" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-primary/10" />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl hidden md:block">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em]">Verified 5-Star Average</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
