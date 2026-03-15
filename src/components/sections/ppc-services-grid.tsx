"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Search, 
  Monitor, 
  RotateCcw, 
  ShoppingCart, 
  Youtube,
  LineChart
} from "lucide-react";

const ppcServices = [
  {
    title: "Google Search Ads",
    description: "Appear at the top of Google searches the moment your customers are looking for you.",
    icon: Search,
    details: ["Keyword Research", "Ad Copywriting", "Bid Management", "Quality Score"]
  },
  {
    title: "Display Advertising",
    description: "Capture attention across millions of websites with visually stunning banner ads.",
    icon: Monitor,
    details: ["Audience Targeting", "Visual Design", "Placement Audit", "Brand Awareness"]
  },
  {
    title: "Remarketing (Retargeting)",
    description: "Re-engage visitors who left your site without converting to bring them back to finish the deal.",
    icon: RotateCcw,
    details: ["Dynamic Ads", "Custom Audiences", "Cart Recovery", "Churn Reduction"]
  },
  {
    title: "Shopping Ads",
    description: "Showcase your products directly in Google Shopping results to drive e-commerce sales.",
    icon: ShoppingCart,
    details: ["Merchant Center", "Feed Optimization", "Competitor Pricing", "Product ROI"]
  },
  {
    title: "YouTube Advertising",
    description: "Engage your audience through video ads on the world's largest video platform.",
    icon: Youtube,
    details: ["Video Strategy", "In-Stream Ads", "Targeting", "Engagement Metrics"]
  },
  {
    title: "Performance Audit",
    description: "We analyze your existing campaigns to stop budget leakage and find growth opportunities.",
    icon: LineChart,
    details: ["Conversion Tracking", "Negative Keywords", "A/B Testing", "Structure Audit"]
  }
];

export function PPCServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Full-Stack <span className="text-secondary">PPC Solutions</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          Laser-targeted advertising strategies designed to turn clicks into customers and maximize your ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ppcServices.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-card border border-border group hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <service.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-6 opacity-90">
              {service.description}
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-secondary/70">
                  <div className="w-1 h-1 rounded-full bg-secondary/40" />
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
