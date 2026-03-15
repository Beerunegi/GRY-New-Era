"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Radar, 
  Map, 
  PenTool, 
  Star, 
  LineChart
} from "lucide-react";

const steps = [
  {
    title: "Deep Audit",
    description: "Scanning the entire web to find all mentions, reviews, and sentiment regarding your brand.",
    icon: Radar,
    color: "bg-primary"
  },
  {
    title: "Strategy",
    description: "Developing a custom plan outlining which assets to build, suppress, and optimize.",
    icon: Map,
    color: "bg-secondary"
  },
  {
    title: "Asset Creation",
    description: "Producing high-authority content, press releases, and profiles to own your search results.",
    icon: PenTool,
    color: "bg-primary"
  },
  {
    title: "Review Gen",
    description: "Implementing automated systems to consistently capture positive 5-star reviews from real customers.",
    icon: Star,
    color: "bg-secondary"
  },
  {
    title: "Reporting",
    description: "Providing transparent metrics on search result shifts, sentiment changes, and review velocity.",
    icon: LineChart,
    color: "bg-primary"
  }
];

export function ORMProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The <span className="text-primary">Restoration</span> Process
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          A systematic, multi-phase approach to taking back control of your brand's digital narrative.
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
