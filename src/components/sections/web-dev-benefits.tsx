"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Rocket, 
  Search, 
  Layers, 
  Monitor, 
  Database,
  ShieldCheck 
} from "lucide-react";

const benefits = [
  {
    title: "Conversion-Centric UX",
    description: "Every element is designed to lead users toward your primary business goals.",
    icon: Rocket
  },
  {
    title: "SEO Optimized Code",
    description: "Semantic HTML and fast load times ensure high rankings on search engines.",
    icon: Search
  },
  {
    title: "Enterprise Security",
    description: "Robust security protocols and data protection for you and your users.",
    icon: ShieldCheck
  },
  {
    title: "Future-Ready Stack",
    description: "Built with technologies that are easy to maintain and scale as you grow.",
    icon: Layers
  }
];

export function WebDevBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Why Choose <br />
            <span className="text-primary">Premium Development</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            A website is more than just code; it's your 24/7 salesperson. We ensure it represents your brand at its absolute best while outperforming competition.
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
             <div className="relative z-10 w-full h-full rounded-[3rem] bg-card border border-border p-12 overflow-hidden flex flex-col justify-center">
                <div className="mb-8">
                   <Monitor className="w-16 h-16 text-primary mb-6" />
                   <h3 className="text-4xl font-black mb-4 tracking-tight">99.9% Uptime</h3>
                   <p className="text-muted-foreground">Premium hosting and optimized code mean your business is always open for customers.</p>
                </div>
                
                <div className="space-y-4">
                   <div className="h-2 w-full bg-muted rounded-full">
                      <div className="h-full w-[95%] bg-primary rounded-full" />
                   </div>
                   <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Speed Performance</span>
                      <span className="text-primary">95/100</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
