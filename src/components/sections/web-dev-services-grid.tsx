"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Monitor, 
  LayoutTemplate, 
  ShoppingCart, 
  Settings, 
  Zap, 
  Puzzle
} from "lucide-react";

const devServices = [
  {
    title: "Custom Website Development",
    description: "Unique, tailor-made websites built from scratch to match your specific brand identity and needs.",
    icon: Monitor,
    details: ["Tailwind CSS", "React/Next.js", "Clean Architecture", "API Integration"]
  },
  {
    title: "WordPress Development",
    description: "Enterprise-grade WordPress solutions with custom themes, plugins, and enhanced security.",
    icon: LayoutTemplate,
    details: ["Custom Themes", "Plugin Dev", "Speed Optimization", "LMS & Forums"]
  },
  {
    title: "eCommerce Development",
    description: "High-converting online stores built on Shopify, WooCommerce, or custom headless platforms.",
    icon: ShoppingCart,
    details: ["Payment Gateways", "Inventory Sync", "Dynamic Catalog", "Checkout Ops"]
  },
  {
    title: "Next.js Development",
    description: "Ultra-fast, SEO-friendly web applications using the latest React framework standards.",
    icon: Zap,
    details: ["Server Components", "Static Generation", "Edge Functions", "Full-Stack Ops"]
  },
  {
    title: "CMS Integration",
    description: "Empower your team with headless CMS solutions like Sanity, Strapi, or Contentful.",
    icon: Puzzle,
    details: ["Easy Workflow", "Multi-channel", "Content Modeling", "Dynamic Editing"]
  },
  {
    title: "Maintenance & Support",
    description: "Proactive management to keep your website secure, updated, and performing optimally.",
    icon: Settings,
    details: ["Security Patching", "Cloud Backups", "Uptime Monitoring", "Performance Audits"]
  }
];

export function WebDevServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Expert <span className="text-primary">Development Services</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          From simple business websites to complex enterprise applications, we provide end-to-end development services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devServices.map((service, i) => (
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
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-6 opacity-90">
              {service.description}
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/70">
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
