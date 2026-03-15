"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  PenTool, 
  Palette, 
  Type, 
  Image as ImageIcon, 
  LayoutTemplate, 
  MonitorPlay
} from "lucide-react";

const brandingServices = [
  {
    title: "Logo Design & Identity",
    description: "Bespoke logo creation and comprehensive brand manuals including typography, color palettes, and usage rules.",
    icon: Palette,
    details: ["Primary/Secondary Logos", "Color Psychology", "Typography Rules", "Brand Guidelines"]
  },
  {
    title: "Graphic Design",
    description: "High-end visual communication materials for both print and digital applications that demand attention.",
    icon: PenTool,
    details: ["Brochures & Flyers", "Presentations", "Business Cards", "Packaging"]
  },
  {
    title: "Social Media Creatives",
    description: "Scroll-stopping graphics, carousel templates, and cover imagery optimized for all major platforms.",
    icon: ImageIcon,
    details: ["Instagram Grids", "Ad Creatives", "Cover Photos", "Motion Graphics"]
  },
  {
    title: "Marketing Materials",
    description: "Sales collateral, pitch decks, and whitepapers designed to support the sales team and close high-ticket deals.",
    icon: LayoutTemplate,
    details: ["Pitch Decks", "Whitepapers", "Case Studies", "Sales One-Pagers"]
  },
  {
    title: "Video & Animation",
    description: "Dynamic intro animations, explainer videos, and short-form content to capture modern audience engagement.",
    icon: MonitorPlay,
    details: ["Logo Animation", "Explainer Videos", "Reels/TikToks", "Video Advertising"]
  },
  {
    title: "Brand Voice & Copy",
    description: "Developing the tone, messaging pillars, and core narratives that accompany your new visual identity.",
    icon: Type,
    details: ["Messaging Pillars", "Tone Guidelines", "Taglines", "Value Props"]
  }
];

export function BrandingServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Creative <span className="text-primary">Capabilities</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          From the foundational logo to full-scale advertising creative, we are your end-to-end design partner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandingServices.map((service, i) => (
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
