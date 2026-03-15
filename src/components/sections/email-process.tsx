"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Map, 
  Palette, 
  Settings, 
  Workflow, 
  LineChart
} from "lucide-react";

const steps = [
  {
    title: "Strategy",
    description: "Defining audience segments, goals, and mapping the entire customer email journey.",
    icon: Map,
    color: "bg-primary"
  },
  {
    title: "Design & Copy",
    description: "Crafting persuasive subject lines, engaging content, and Conversion-focused layouts.",
    icon: Palette,
    color: "bg-secondary"
  },
  {
    title: "Campaign Setup",
    description: "Importing lists, configuring templates, and ensuring technical deliverability checks.",
    icon: Settings,
    color: "bg-primary"
  },
  {
    title: "Automation",
    description: "Building the logic flows and triggers for hands-free drip campaigns.",
    icon: Workflow,
    color: "bg-secondary"
  },
  {
    title: "Reporting",
    description: "Monitoring performance data and running A/B tests to continually improve ROI.",
    icon: LineChart,
    color: "bg-primary"
  }
];

export function EmailProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-primary">Workflow</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          A systematic approach to ensuring every email sent achieves its maximum potential.
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
                   <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Phase 0{i+1}</div>
                   <h3 className="text-lg font-bold mb-4">{step.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
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
