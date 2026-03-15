"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Diamond, 
  Coins, 
  ShieldCheck, 
  TrendingUp,
  Sparkles
} from "lucide-react";

const benefits = [
  {
    title: "Premium Pricing Power",
    description: "Businesses with high-quality, professional branding command higher prices because the perceived value is greater.",
    icon: Coins
  },
  {
    title: "Instant Credibility",
    description: "A cohesive identity signals stability, size, and professionalism, instantly overcoming customer trust objections.",
    icon: ShieldCheck
  },
  {
    title: "Competitive Separation",
    description: "Break out of the 'sea of sameness' in your industry with a unique visual language that competitors can't copy.",
    icon: Diamond
  },
  {
    title: "Higher Conversions",
    description: "Better design means better UX, clearer messaging, and ultimately, lower cost-per-acquisition metrics.",
    icon: TrendingUp
  }
];

export function BrandingBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The ROI of <br />
            <span className="text-primary">Great Design</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Many consider branding an artistic expense. We view it as a business asset. Strong brands spend less on advertising to acquire customers and retain them longer.
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
                <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
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
             <div className="relative z-10 w-full h-full rounded-[3rem] bg-card border border-border p-12 overflow-hidden flex flex-col justify-center text-center">
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-4xl font-black mb-4 tracking-tight">The 10x Multiplier</h3>
                <p className="text-muted-foreground mb-8">Design-driven companies outperform the S&P 500 index by <strong className="text-foreground text-xl">219%</strong> over a 10-year period.</p>
                
                <div className="w-full bg-muted/50 p-4 rounded-xl border border-border text-base font-bold uppercase tracking-widest text-primary">
                  Invest in Identity
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
