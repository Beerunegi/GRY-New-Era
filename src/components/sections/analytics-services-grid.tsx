"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  BarChart4, 
  Code2, 
  Target, 
  MousePointerClick, 
  PieChart, 
  Lock
} from "lucide-react";

const analyticsServices = [
  {
    title: "Google Analytics 4 Setup",
    description: "Complete transition and configuration of GA4 properties tailored to your specific business model.",
    icon: BarChart4,
    details: ["Property Creation", "Data Streams", "Custom Dimensions", "Data Retention"]
  },
  {
    title: "Google Tag Manager (GTM)",
    description: "Clean, organized tag container deployment without hardcoding scripts into your website source code.",
    icon: Code2,
    details: ["Container Setup", "Datalayer Config", "Variable Mapping", "Trigger Logic"]
  },
  {
    title: "Conversion Tracking",
    description: "Pixel-perfect tracking for Google Ads, Meta Ads, LinkedIn, and TikTok to ensure accurate ROAS reporting.",
    icon: Target,
    details: ["Purchase Value", "Lead Capture", "Server-Side API", "Offline Conversions"]
  },
  {
    title: "Custom Event Tracking",
    description: "Tracking exactly how users interact with your site: video plays, scroll depth, file downloads, and clicks.",
    icon: MousePointerClick,
    details: ["Scroll Tracking", "Video Engagement", "Outbound Links", "Form Abandonment"]
  },
  {
    title: "Performance Reporting",
    description: "Building automated, visual Looker Studio (Data Studio) dashboards so you can see your KPIs at a glance.",
    icon: PieChart,
    details: ["Looker Studio", "KPI Dashboards", "Cross-Channel", "Automated Delivery"]
  },
  {
    title: "Data Privacy & Compliance",
    description: "Ensuring your tracking architecture adheres to GDPR, CCPA, and implements Consent Mode v2 correctly.",
    icon: Lock,
    details: ["Consent Mode V2", "Cookie Banners", "Data Redaction", "Compliance Audits"]
  }
];

export function AnalyticsServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Tracking <span className="text-primary">Architecture</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          We build robust, scalable data pipelines that capture every critical interaction while respecting user privacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analyticsServices.map((service, i) => (
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
