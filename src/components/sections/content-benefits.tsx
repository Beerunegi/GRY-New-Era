"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  BarChart3, 
  Heart, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  Award
} from "lucide-react";

const benefits = [
  {
    title: "Organic Authority",
    description: "Consistently informative content establishes you as the go-to expert in your niche.",
    icon: Award
  },
  {
    title: "Cost-Effective Leads",
    description: "Unlike paid ads, content marketing compounds in value over time, lowering CPA.",
    icon: Zap
  },
  {
    title: "Customer Trust",
    description: "High-quality, helpful content builds a deeper connection and trust with your users.",
    icon: ShieldCheck
  },
  {
    title: "Scalable Traffic",
    description: "Evergreen content continues to drive traffic and leads long after it's published.",
    icon: TrendingUp
  }
];

export function ContentBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The Long-Term <br />
            <span className="text-primary">Content Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            In a world of noise, meaningful content is your strongest differentiator. We help you cut through the clutter with value-driven storytelling.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-square max-w-[500px] mx-auto">
             <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
             <div className="relative z-10 w-full h-full rounded-[3rem] bg-card border border-border p-12 overflow-hidden flex flex-col justify-center">
                <div className="mb-8 text-center text-primary">
                   <div className="text-6xl font-black mb-2">447%</div>
                   <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Average Traffic Increase</p>
                </div>
                
                <div className="space-y-6">
                   <div className="p-4 rounded-xl bg-muted/30 border border-border flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                         <BarChart3 className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold">Compound Growth YoY</div>
                   </div>
                   <div className="p-4 rounded-xl bg-muted/30 border border-border flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                         <Heart className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold">Brand Loyalty Metrics</div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
