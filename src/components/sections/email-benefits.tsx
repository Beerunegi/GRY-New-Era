"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  BadgeDollarSign, 
  Users, 
  Zap, 
  Smartphone,
  MailOpen
} from "lucide-react";

const benefits = [
  {
    title: "Unmatched ROI",
    description: "Email marketing consistently delivers the highest return on investment of any digital channel.",
    icon: BadgeDollarSign
  },
  {
    title: "Direct Access",
    description: "Bypass algorithms and communicate directly with your audience in their private inbox.",
    icon: Users
  },
  {
    title: "Scalable Automation",
    description: "Nurture thousands of prospects simultaneously and automatically with personalized flows.",
    icon: Zap
  },
  {
    title: "Mobile Domination",
    description: "With most emails read on phones, you reach customers wherever they are, instantly.",
    icon: Smartphone
  }
];

export function EmailBenefits() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Why Email <br />
            <span className="text-primary">Marketing Wins</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            In an era of rented audiences on social platforms, building an email list is building real business equity. It's the ultimate tool for sustainable, controllable growth.
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
                   <MailOpen className="w-16 h-16 mx-auto mb-6" />
                   <div className="text-6xl font-black mb-2">$42</div>
                   <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Average Return per $1 Spent</p>
                </div>
                
                <div className="space-y-4 text-center mt-6">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-bold text-sm">
                      <Zap className="w-4 h-4" /> The Most Profitable Channel
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
