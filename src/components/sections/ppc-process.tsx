"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Users, 
  Settings, 
  Rocket, 
  RefreshCcw, 
  BarChart 
} from "lucide-react";

const steps = [
  {
    title: "Market & Keyword Discovery",
    description: "We identify high-intent keywords and competitor strategies to build a winning foundation.",
    icon: Users,
    color: "bg-primary"
  },
  {
    title: "Strategic Campaign Setup",
    description: "Crafting compelling ad copies and setting up optimized landing page flows for conversion.",
    icon: Settings,
    color: "bg-secondary"
  },
  {
    title: "Bid & Budget Optimization",
    description: "Aggressive bid management and negative keyword filtering to ensure zero budget leakage.",
    icon: Rocket,
    color: "bg-primary"
  },
  {
    title: "A/B Testing & Scaling",
    description: "Continuous testing of ad creatives to find the highest performers and scale the results.",
    icon: RefreshCcw,
    color: "bg-secondary"
  },
  {
    title: "ROI-Focused Reporting",
    description: "Transparent, data-rich reports showing exactly how your budget translates into sales.",
    icon: BarChart,
    color: "bg-primary"
  }
];

export function PPCProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-secondary">PPC Workflow</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          A scientific, data-driven methodology to guarantee maximum performance from every ad dollar.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connection Line */}
        <div className="absolute top-0 bottom-0 left-[2.25rem] md:left-1/2 w-[1px] bg-secondary/20 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`relative flex flex-col sm:flex-row items-center gap-8 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
            >
              {/* Icon Circle */}
              <div className="absolute left-[2.25rem] sm:left-1/2 w-12 h-12 rounded-full border-4 border-background bg-card flex items-center justify-center -translate-x-1/2 z-10 shadow-lg group">
                 <step.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              </div>

              {/* Content Card */}
              <div className="w-full sm:w-1/2 sm:px-8 ml-12 sm:ml-0">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center text-white font-bold text-sm mb-4`}>
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Empty Spacer for Desktop Layout */}
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
