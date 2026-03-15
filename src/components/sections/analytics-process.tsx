"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Search, 
  Code, 
  LineChart, 
  Settings, 
  FileOutput
} from "lucide-react";

const steps = [
  {
    title: "Audit & Setup",
    description: "Reviewing existing architecture, defining KPIs, and setting up clean GA4 & GTM containers.",
    icon: Search,
    color: "bg-primary"
  },
  {
    title: "Implementation",
    description: "Installing datalayers, tags, triggers, and variables to capture defined user interactions.",
    icon: Code,
    color: "bg-secondary"
  },
  {
    title: "Data Verification",
    description: "Running rigorous QA testing using debug modes to ensure 100% data firing accuracy.",
    icon: LineChart,
    color: "bg-primary"
  },
  {
    title: "Optimization",
    description: "Feeding verified conversion data back into ad platforms (Google/Meta Ads) to train algorithms.",
    icon: Settings,
    color: "bg-secondary"
  },
  {
    title: "Dashboarding",
    description: "Connecting data sources to visual dashboards containing only the metrics that matter.",
    icon: FileOutput,
    color: "bg-primary"
  }
];

export function AnalyticsProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Deployment <span className="text-primary">Process</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          We follow a strict, QA-heavy methodology to ensure your data is perfectly clean from day one.
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
