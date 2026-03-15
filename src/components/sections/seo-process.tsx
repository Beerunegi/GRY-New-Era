"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  ClipboardCheck, 
  Lightbulb, 
  Settings2, 
  Link2, 
  PieChart 
} from "lucide-react";

const steps = [
  {
    title: "Deep SEO Audit",
    description: "We analyze your website's technical health, backlink profile, and keyword rankings to identify opportunities.",
    icon: ClipboardCheck,
    color: "bg-blue-500"
  },
  {
    title: "Strategic Planning",
    description: "Our experts craft a customized roadmap focusing on the most profitable keywords for your business.",
    icon: Lightbulb,
    color: "bg-amber-500"
  },
  {
    title: "On-Page Optimization",
    description: "We optimize your content, meta tags, and site structure to ensure search engines love your pages.",
    icon: Settings2,
    color: "bg-emerald-500"
  },
  {
    title: "Authority Building",
    description: "Quality backlink acquisition and PR outreach to establish your brand as an industry leader.",
    icon: Link2,
    color: "bg-purple-500"
  },
  {
    title: "Reporting & Growth",
    description: "Monthly data-rich reports and strategy adjustments to ensure continuous ROI and ranking growth.",
    icon: PieChart,
    color: "bg-rose-500"
  }
];

export function SEOProcess() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Our <span className="text-primary">SEO Process</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          A proven, scientific approach to climbing search rankings and staying there.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connection Line */}
        <div className="absolute top-0 bottom-0 left-[2.25rem] md:left-1/2 w-[1px] bg-primary/20 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center text-white font-bold text-xs mb-4`}>
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
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
