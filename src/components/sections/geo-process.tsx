"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Dna, 
  Workflow, 
  Sparkle, 
  MonitorCheck, 
  ArrowUpRight 
} from "lucide-react";

const steps = [
  {
    title: "AI Analysis & Audit",
    description: "We benchmark your current brand presence across major AI models like Gemini and GPT-4.",
    icon: Dna,
    color: "bg-primary"
  },
  {
    title: "Semantic Data Prep",
    description: "Restructuring your data architecture to be machine-readable and highly authoritative.",
    icon: Workflow,
    color: "bg-secondary"
  },
  {
    title: "Content Engineering",
    description: "Crafting expert-level content that matches the training patterns of generative systems.",
    icon: Sparkle,
    color: "bg-primary"
  },
  {
    title: "Model Feedback Loop",
    description: "Continuous testing and signal injection to force AI citation and brand recognition.",
    icon: MonitorCheck,
    color: "bg-secondary"
  }
];

export function GEOProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-primary">GEO Roadmap</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          A scientific, iterative framework to ensure your brand becomes a fundamental part of the AI search ecosystem.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {steps.map((step, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="relative group"
             >
                <div className="p-8 rounded-[2rem] bg-card border border-border h-full hover:shadow-xl transition-all duration-500 relative z-10">
                   <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-6 h-6" />
                   </div>
                   <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Phase 0{i+1}</div>
                   <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                   <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                   </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                     <ArrowUpRight className="w-8 h-8 text-primary/20" />
                  </div>
                )}
             </motion.div>
           ))}
        </div>
      </div>
    </Section>
  );
}
