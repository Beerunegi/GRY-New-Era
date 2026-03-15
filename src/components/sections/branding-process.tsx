"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Search, 
  Lightbulb, 
  PencilRuler, 
  Wrench, 
  Send
} from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "Deep-dive workshops to understand your mission, audience, competitors, and unique value proposition.",
    icon: Search,
    color: "bg-primary"
  },
  {
    title: "Concept",
    description: "Developing strategic mood boards, color palettes, and initial visual directions for feedback.",
    icon: Lightbulb,
    color: "bg-secondary"
  },
  {
    title: "Design",
    description: "Creating the actual assets, moving from rough sketches to high-fidelity vector graphics.",
    icon: PencilRuler,
    color: "bg-primary"
  },
  {
    title: "Refinement",
    description: "Collaborative revision rounds to adjust line weights, spacing, typography, and color balances.",
    icon: Wrench,
    color: "bg-secondary"
  },
  {
    title: "Delivery",
    description: "Exporting all assets in required formats alongside a comprehensive digital brand guideline document.",
    icon: Send,
    color: "bg-primary"
  }
];

export function BrandingProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Design <span className="text-primary">Process</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          A structured, collaborative approach to bringing your brand vision to life without the guesswork.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {steps.map((step, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="relative group h-full"
             >
                <div className="p-8 rounded-[2rem] bg-card border border-border h-full hover:shadow-xl transition-all duration-500 relative z-10 flex flex-col">
                   <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <step.icon className="w-5 h-5" />
                   </div>
                   <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Step 0{i+1}</div>
                   <h3 className="text-lg font-bold mb-4">{step.title}</h3>
                   <p className="text-base text-muted-foreground leading-relaxed mt-auto">
                      {step.description}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </Section>
  );
}
