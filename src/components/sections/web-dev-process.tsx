"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  ClipboardList, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    title: "Discovery & Planning",
    description: "Defining project scope, objectives, requirements, and information architecture.",
    icon: ClipboardList,
    color: "bg-primary"
  },
  {
    title: "Design & UX",
    description: "Creating intuitive user interfaces and premium visual designs for your brand.",
    icon: Palette,
    color: "bg-secondary"
  },
  {
    title: "Development",
    description: "Turning designs into reality using clean, scalable, and modern code standards.",
    icon: Code,
    color: "bg-primary"
  },
  {
    title: "QA & Testing",
    description: "Rigorous functional and performance testing to ensure zero-defect delivery.",
    icon: TestTube,
    color: "bg-secondary"
  },
  {
    title: "Launch & Optimize",
    description: "Final deployment and post-launch performance tuning for maximum impact.",
    icon: Rocket,
    color: "bg-primary"
  }
];

export function WebDevProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-primary">Development Lifecycle</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          A systematic, transparent process designed to deliver exceptional results on time and within budget.
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
                   <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Step 0{i+1}</div>
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
