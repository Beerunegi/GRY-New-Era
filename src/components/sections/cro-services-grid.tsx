"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Layout, 
  FlaskConical, 
  Smartphone, 
  Filter, 
  LineChart, 
  Eye
} from "lucide-react";

const croServices = [
  {
    title: "Landing Page Optimization",
    description: "Designing and refining high-converting landing pages tailored to your specific audience and goals.",
    icon: Layout,
    details: ["Visual Hierarchy", "Compelling CTAs", "Message Mapping", "Speed Optimization"]
  },
  {
    title: "Multi-Variant A/B Testing",
    description: "Iteratively testing headlines, layouts, and elements to find the winning combination for your brand.",
    icon: FlaskConical,
    details: ["Statistical Analysis", "Hypothesis Driven", "Variable Isolation", "Growth Insights"]
  },
  {
    title: "UX/UI Enhancements",
    description: "Improving the user journey by removing friction points and simplifying complex interactions.",
    icon: Eye,
    details: ["User Flow Audit", "Accessibility Sync", "Modern Aesthetics", "Intuitive Nav"]
  },
  {
    title: "Sales Funnel Optimization",
    description: "Patching leaks in your sales funnel to ensure more leads move smoothly from discovery to purchase.",
    icon: Filter,
    details: ["Lead Capturing", "Checkout Flow", "Trust Building", "Retention Loops"]
  },
  {
    title: "Behavioral Analytics",
    description: "Using heatmaps, session recordings, and click data to see exactly how users experience your site.",
    icon: LineChart,
    details: ["Heatmap Sync", "Session Replay", "Clutter Removal", "Path Analysis"]
  },
  {
    title: "Mobile Conversion Focus",
    description: "Specialized optimization for the mobile-first era, ensuring seamless shopping on all devices.",
    icon: Smartphone,
    details: ["Thumb-Friendly", "Fast Interaction", "Device Specific", "Responsive Ops"]
  }
];

export function CROServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Core <span className="text-primary">CRO Services</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          We combine creative expertise with scientific methodology to turn your website into a conversion machine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {croServices.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-card border border-border group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-6 opacity-90">
              {service.description}
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-primary/70">
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
