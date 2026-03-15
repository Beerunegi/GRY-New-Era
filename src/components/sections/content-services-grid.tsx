"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  FileText, 
  Search, 
  Layout, 
  Share2, 
  Compass,
  Zap
} from "lucide-react";

const contentServices = [
  {
    title: "Blog & Article Writing",
    description: "Deeply researched, high-authority articles that educate your audience and rank on Google.",
    icon: FileText,
    details: ["Subject Research", "Thought Leadership", "Editorial Sync", "SEO Optimization"]
  },
  {
    title: "SEO Content Strategy",
    description: "Developing a roadmap that targets high-value keywords and covers topical clusters.",
    icon: Compass,
    details: ["Keyword Research", "Topic Mapping", "Competitor Gap", "Audit & Analysis"]
  },
  {
    title: "Website Copywriting",
    description: "Persuasive landing page copy that communicates your value and drives conversions.",
    icon: Layout,
    details: ["Value Props", "CTA Directives", "Brand Voice", "UX Writing"]
  },
  {
    title: "Social Media Content",
    description: "Engaging posts tailored for LinkedIn, Twitter, and Instagram to grow your community.",
    icon: Share2,
    details: ["Platform Specific", "Visual Hooking", "Viral Hooking", "Community Ops"]
  },
  {
    title: "Product Descriptions",
    description: "Compelling eCommerce copy that highlights benefits and pushes users to purchase.",
    icon: Zap,
    details: ["Feature Mapping", "Benefit Led", "Tone Consistency", "Sales Focused"]
  },
  {
    title: "Content Distribution",
    description: "Ensuring your message reaches the right eyes through multi-channel promotion.",
    icon: Search,
    details: ["Email Blasts", "PR Outreach", "Repurposing", "Syndication"]
  }
];

export function ContentServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Scalable <span className="text-primary">Content Services</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          We provide end-to-end content solutions designed to capture attention and build lasting brand authority.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentServices.map((service, i) => (
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
