"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Building2, 
  Handshake, 
  MagnetLine, 
  TrendingUp,
  ShieldAlert
} from "lucide-react";

const benefits = [
  {
    title: "Restore Conversions",
    description: "Erase the hesitation caused by negative reviews and watch your sales cycle shorten immediately.",
    icon: TrendingUp
  },
  {
    title: "Attract Top Talent",
    description: "A pristine corporate reputation ensures HR can recruit and retain the best employees in the industry.",
    icon: MagnetLine
  },
  {
    title: "Partnership Trust",
    description: "B2B deals require trust. A clean search page ensures vendor and partner relationships remain strong.",
    icon: Handshake
  },
  {
    title: "Brand Equity",
    description: "Protect the overall valuation and perception of your company from malicious attacks.",
    icon: Building2
  }
];

export function ORMBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The ROI of <br />
            <span className="text-primary">A Good Name</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Reputation management pays for itself. The cost of a lost customer due to a bad review far outweighs the investment in proactively controlling your brand's digital presence.
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
             <div className="relative z-10 w-full h-full rounded-[3rem] bg-card border border-border p-12 overflow-hidden flex flex-col justify-center text-center">
                <ShieldAlert className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                <h3 className="text-4xl font-black mb-4 tracking-tight">Don't Bleed Sales</h3>
                <p className="text-muted-foreground mb-8">Businesses risk losing up to <strong className="text-foreground">22%</strong> of customers if just one negative article is found by users considering buying their product.</p>
                
                <div className="w-full bg-muted/50 p-4 rounded-xl border border-border text-sm font-bold uppercase tracking-widest">
                  Secure Your Brand Today
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
