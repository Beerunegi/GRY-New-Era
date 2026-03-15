"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Camera, 
  MessageCircle, 
  Zap, 
  Users, 
  BarChart3,
  Globe
} from "lucide-react";

const smServices = [
  {
    title: "Content Creation",
    description: "Visual storytelling that stops the scroll. From Reels to professional photography.",
    icon: Camera,
    details: ["Video Production", "Graphic Design", "Copywriting", "Trend Analysis"]
  },
  {
    title: "Community Management",
    description: "We handle your inbox and comments to foster authentic connections with your fans.",
    icon: MessageCircle,
    details: ["Engagement", "Response Strategy", "Crisis Control", "Fan Loyalty"]
  },
  {
    title: "Paid Social Ads",
    description: "High-performing ad campaigns on Instagram, TikTok, and LinkedIn for targeted growth.",
    icon: Zap,
    details: ["Audience Setup", "Creative Testing", "Retargeting", "ROI Tracking"]
  },
  {
    title: "Influencer Marketing",
    description: "Connect with the right voices to amplify your brand message to a trusted audience.",
    icon: Users,
    details: ["Partnerships", "Negotiation", "Campaign Management", "Impact Audit"]
  },
  {
    title: "Social Strategy",
    description: "A tailored roadmap to ensure your social presence aligns with your business goals.",
    icon: Globe,
    details: ["Brand Voice", "Competitor Research", "Posting Schedule", "KPI Setting"]
  },
  {
    title: "Analytics & Insights",
    description: "Deep-dive data analysis to understand what works and how to scale your engagement.",
    icon: BarChart3,
    details: ["Monthly Reports", "Trend Spotting", "ROI Attribution", "Sentiment Analysis"]
  }
];

export function SMServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Social Media <span className="text-primary">Specialization</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          Unlock the power of social discovery with strategies that build community and drive measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {smServices.map((service, i) => (
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
