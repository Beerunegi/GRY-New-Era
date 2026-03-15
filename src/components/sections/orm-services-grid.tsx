"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Star, 
  ArrowDownToLine, 
  Eye, 
  Wrench, 
  MapPin,
  MessageCircleWarning
} from "lucide-react";

const ormServices = [
  {
    title: "Review Management",
    description: "Automated systems to generate positive reviews while catching negative feedback internally before it hits the web.",
    icon: Star,
    details: ["Review Filtering", "Automated Invites", "Multi-Platform", "Response Strategy"]
  },
  {
    title: "Content Suppression",
    description: "Reverse-SEO strategies that flood the search engines with positive content to bury negative links and articles.",
    icon: ArrowDownToLine,
    details: ["Reverse SEO", "Asset Creation", "Link Dilution", "Page 1 Takeover"]
  },
  {
    title: "24/7 Brand Monitoring",
    description: "Real-time alerts whenever your brand or executives are mentioned online, allowing for rapid response.",
    icon: Eye,
    details: ["Social Listening", "Press Tracking", "Review Alerts", "Sentiment Analysis"]
  },
  {
    title: "Reputation Repair",
    description: "Strategic crisis management and PR campaigns aimed at recovering brand trust after a public setback.",
    icon: Wrench,
    details: ["Crisis Comms", "PR Outreach", "Apology Framing", "Rapid Recovery"]
  },
  {
    title: "Google Review Optimization",
    description: "Specifically targeting your Google Business Profile to improve local map rankings and conversion rates.",
    icon: MapPin,
    details: ["GBP Optimization", "Review Velocity", "Q&A Management", "Spam Removal"]
  },
  {
    title: "Crisis Intervention",
    description: "Immediate action plans deployed when a PR crisis hits, mitigating damage across social and search channels.",
    icon: MessageCircleWarning,
    details: ["War Room Ops", "Statement Prep", "Social Lockdown", "Damage Control"]
  }
];

export function ORMServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Complete Brand <span className="text-primary">Protection</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          Our specialized methodologies ensure that when people research your brand, they find exactly what you want them to see.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ormServices.map((service, i) => (
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
