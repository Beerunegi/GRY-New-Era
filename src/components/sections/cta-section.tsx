"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground text-background">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-foreground overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-primary" /> Let's build something extraordinary
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Ready to Dominate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Market?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto text-balance">
            Stop losing customers to your competitors. Book a free 30-minute strategy session and let's map out your growth blueprint.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 border-0">
              Get Your Free Strategy <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg bg-white/5 border-white/20 hover:bg-white/10 text-white">
              View Pricing Options
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/50">
            No commitment required. 100% free consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
