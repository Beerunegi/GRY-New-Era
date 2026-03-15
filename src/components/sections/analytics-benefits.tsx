"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  BadgeCheck, 
  Lightbulb, 
  TrendingUp, 
  Wallet,
  Activity
} from "lucide-react";

const benefits = [
  {
    title: "Eliminate Ad Waste",
    description: "Identify exactly which keywords, campaigns, and demographics are burning budget without converting.",
    icon: Wallet
  },
  {
    title: "Confident Scaling",
    description: "When you know your exact Cost Per Acquisition (CPA), you can scale ad channels with zero hesitation.",
    icon: TrendingUp
  },
  {
    title: "Audience Intelligence",
    description: "Understand the exact path users take from discovery to purchase across multiple devices.",
    icon: Lightbulb
  },
  {
    title: "Data Trust",
    description: "End the disputes between platform reporting. Get a single source of truth for all marketing efforts.",
    icon: BadgeCheck
  }
];

export function AnalyticsBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The ROI of <br />
            <span className="text-primary">Perfect Tracking</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Analytics isn't just about pretty charts. It's the foundational layer that makes every other marketing activity—SEO, PPC, Social—measurably more effective.
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
                <div className="mb-8 text-center">
                   <Activity className="w-16 h-16 text-primary mx-auto mb-6" />
                   <h3 className="text-4xl font-black mb-4 tracking-tight">Signal vs Noise</h3>
                   <p className="text-muted-foreground">Stop relying on platform claims. We implement server-side tracking and advanced attribution to give you the real story.</p>
                </div>
                
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                   <div className="flex justify-between items-center px-2">
                       <span className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">Attribution Accuracy</span>
                       <span className="text-primary font-black">99.9%</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
