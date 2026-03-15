"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Search, 
  FlaskConical, 
  Zap, 
  LineChart, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    title: "Insight Research",
    description: "Analyzing user behavior data to identify friction points and drop-off zones.",
    icon: Search,
    color: "bg-primary"
  },
  {
    title: "Test Hypothesis",
    description: "Formulating a strategic plan to test variations and improve conversion metrics.",
    icon: FlaskConical,
    color: "bg-secondary"
  },
  {
    title: "Rapid Optimization",
    description: "Implementing data-driven changes across landing pages and funnels.",
    icon: Zap,
    color: "bg-primary"
  },
  {
    title: "Analysis",
    description: "Measuring results against benchmarks using strict statistical significance.",
    icon: LineChart,
    color: "bg-secondary"
  },
  {
    title: "Sustainable Growth",
    description: "Scaling the winners and moving to the next set of conversion opportunities.",
    icon: TrendingUp,
    color: "bg-primary"
  }
];

export function CROProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-primary">Optimization Roadmap</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          A continuous loop of measurement and improvement to ensure your website's performance never plateaus.
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
                   <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Phase 0{i+1}</div>
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
