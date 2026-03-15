"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Compass, 
  Palette, 
  Workflow, 
  Newspaper, 
  BarChart, 
  ShieldCheck
} from "lucide-react";

const emailServices = [
  {
    title: "Campaign Strategy",
    description: "Developing comprehensive email roadmaps aligned with your sales cycles and marketing goals.",
    icon: Compass,
    details: ["Audience Profiling", "Journey Mapping", "Content Calendar", "Goal Setting"]
  },
  {
    title: "Email Template Design",
    description: "Designing beautiful, responsive, and brand-compliant HTML templates that render perfectly everywhere.",
    icon: Palette,
    details: ["Mobile Responsive", "Dark Mode Ready", "Brand Consistent", "Custom Graphics"]
  },
  {
    title: "Automation & Drip Campaigns",
    description: "Setting up triggered sequences that nurture leads, welcome new users, and recover abandoned carts.",
    icon: Workflow,
    details: ["Welcome Series", "Cart Abandonment", "Post-Purchase", "Win-back Campaigns"]
  },
  {
    title: "Newsletter Marketing",
    description: "Creating engaging weekly or monthly digests that keep your audience informed and entertained.",
    icon: Newspaper,
    details: ["Curated Content", "Company Updates", "Industry News", "Promotional Blasts"]
  },
  {
    title: "Performance Tracking",
    description: "Deep analytics tracking to continuously refine strategies and improve deliverability.",
    icon: BarChart,
    details: ["A/B Testing", "List Hygiene", "Open Rate Ops", "Revenue Tracking"]
  },
  {
    title: "Compliance & Deliverability",
    description: "Ensuring your emails hit the inbox, not the spam folder, while adhering to global privacy laws.",
    icon: ShieldCheck,
    details: ["CAN-SPAM Sync", "GDPR Compliance", "DKIM/DMARC", "Spam Testing"]
  }
];

export function EmailServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Comprehensive <span className="text-primary">Email Services</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          From strategic planning to flawless execution, we manage every aspect of your email marketing ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emailServices.map((service, i) => (
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
