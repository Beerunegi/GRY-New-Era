"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Code2, 
  FileEdit, 
  Share2, 
  MapPin, 
  ShoppingCart,
  Zap
} from "lucide-react";

const seoServices = [
  {
    title: "Technical SEO",
    description: "Crucial site-wide optimizations for crawlability, indexability, and site speed.",
    icon: Code2,
    details: ["Schema Markup", "Sitemap Optimization", "Site Speed Upgrade", "Internal Linking"]
  },
  {
    title: "On-Page SEO",
    description: "Content and meta-level optimization to ensure your pages relevant for target keywords.",
    icon: FileEdit,
    details: ["Meta Diagnostics", "Content Strategy", "UX Enhancement", "Keyword Mapping"]
  },
  {
    title: "Off-Page (Authority)",
    description: "High-quality backlink building and digital PR to boost your domain authority.",
    icon: Share2,
    details: ["Link Acquisition", "Guest Outreach", "Brand Mentions", "competitor Analysis"]
  },
  {
    title: "Local SEO",
    description: "Dominating local search results and Google Maps for physical business locations.",
    icon: MapPin,
    details: ["GMB Optimization", "Local Citations", "Review Management", "Map Rankings"]
  },
  {
    title: "E-commerce SEO",
    description: "Specialized optimization for Shopify, WooCommerce, and custom store architectures.",
    icon: ShoppingCart,
    details: ["Product Optimization", "Category Hierarchy", "User Reviews", "Conversion Tracking"]
  },
  {
    title: "SEO Audits",
    description: "Comprehensive 150+ point checkups to find and fix hidden ranking bottlenecks.",
    icon: Zap,
    details: ["Health Checkups", "Penalty Recovery", "Risk Analysis", "Opportunity Mapping"]
  }
];

export function SEOServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Full-Stack <span className="text-primary">SEO Solutions</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          We cover every aspect of SEO to ensure your brand doesn't just rank, but dominates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seoServices.map((service, i) => (
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
