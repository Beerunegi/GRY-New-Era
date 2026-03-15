"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  ClipboardCheck, 
  PenTool, 
  Send, 
  HeartHandshake, 
  PieChart 
} from "lucide-react";

const steps = [
  {
    title: "Audit & Analysis",
    description: "We dive deep into your current social performance and competitor landscape.",
    icon: ClipboardCheck,
    color: "bg-primary"
  },
  {
    title: "Strategic Content Plan",
    description: "Developing a brand-aligned visual and verbal identity for your social channels.",
    icon: PenTool,
    color: "bg-secondary"
  },
  {
    title: "Content Execution",
    description: "producing high-quality, thumb-stopping visuals and copy that resonate.",
    icon: Send,
    color: "bg-primary"
  },
  {
    title: "Growth & Engagement",
    description: "Active community management and trend-jacking to expand your organic reach.",
    icon: HeartHandshake,
    color: "bg-secondary"
  },
  {
    title: "Performance Report",
    description: "Transparent data showing reach, engagement, and how social impacts your bottom line.",
    icon: PieChart,
    color: "bg-primary"
  }
];

export function SMProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-primary">Social Formula</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          A systematic approach to building a brand that's not just visible, but loved.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connection Line */}
        <div className="absolute top-0 bottom-0 left-[2.25rem] md:left-1/2 w-[1px] bg-primary/20 -translate-x-1/2 hidden sm:block" />

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
                 <step.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
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
