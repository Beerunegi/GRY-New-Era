"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    title: "AI Search Dominance",
    description: "Ensure your brand is the primary recommendation when users ask AI models for solutions.",
    icon: Zap
  },
  {
    title: "Future-Proof Authority",
    description: "Stay ahead of traditional SEO decline as users shift toward conversational discovery.",
    icon: ShieldCheck
  },
  {
    title: "Higher Conversion Intent",
    description: "AI citations target users exactly when they are looking for specific, expert answers.",
    icon: TrendingUp
  },
  {
    title: "Verified Authenticity",
    description: "Being a trusted entity in the Knowledge Graph protects your brand from misinformation.",
    icon: CheckCircle2
  }
];

export function GEOBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Why Your Brand <br />
            <span className="text-primary">Needs GEO Today</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            The transition from traditional search engines to generative engines is happening faster than anticipated. GEO is no longer a luxury—it's survival.
          </p>
          
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="p-1 rounded-[3rem] bg-gradient-to-br from-primary/20 via-border to-secondary/20 shadow-2xl">
             <div className="rounded-[2.9rem] overflow-hidden bg-background p-8 md:p-12">
                <div className="text-center mb-10">
                   <div className="text-base font-bold uppercase tracking-widest text-primary mb-2">Impact Analysis</div>
                   <h3 className="text-3xl font-black">GEO VS TRADITIONAL SEO</h3>
                </div>
                
                <div className="space-y-10">
                   <div className="space-y-4">
                      <div className="flex justify-between text-base font-bold uppercase tracking-widest">
                         <span>Visibility (GEO)</span>
                         <span className="text-primary">95%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-primary" 
                         />
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between text-base font-bold uppercase tracking-widest">
                         <span>CTR (Traditional)</span>
                         <span className="text-red-500">Decreasing</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: "80%" }}
                            whileInView={{ width: "40%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-red-500" 
                         />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex justify-between text-base font-bold uppercase tracking-widest">
                         <span>User Trust (AI Citations)</span>
                         <span className="text-secondary">88%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "88%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-secondary" 
                         />
                      </div>
                   </div>
                </div>

                <div className="mt-12 text-center">
                   <p className="text-sm text-muted-foreground font-medium italic">
                      *Based on internal 2024 search trend data and model adoption rates.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
