"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Rocket, 
  DollarSign, 
  Users, 
  ShieldCheck, 
  Zap, 
  Target
} from "lucide-react";

const benefits = [
  {
    title: "Increased Revenue",
    description: "Turn more of your existing traffic into paying customers immediately.",
    icon: DollarSign
  },
  {
    title: "Scientific ROI",
    description: "Every change is backed by data, ensuring your marketing budget works harder.",
    icon: Rocket
  },
  {
    title: "Better User Insight",
    description: "Understand your audience's needs and pain points better than ever before.",
    icon: Users
  },
  {
    title: "Competitive Edge",
    description: "Outperform competitors by providing a superior and smoother digital experience.",
    icon: ShieldCheck
  }
];

export function CROBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The Ultimate <br />
            <span className="text-primary">Performance Hack</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            While others focus only on getting traffic, we focus on what happens after the click. CRO is the fastest way to grow your business without spending a dime more on advertising.
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
                   <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                   <h3 className="text-4xl font-black mb-4 tracking-tight">Data Mastery</h3>
                   <p className="text-muted-foreground">Transforming raw user data into profitable business decisions through scientific testing.</p>
                </div>
                
                <div className="space-y-4">
                   <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-primary rounded-full" />
                   </div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Conversion Growth</span>
                      <span className="text-primary">85%</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
