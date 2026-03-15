"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Network, 
  BrainCircuit, 
  Zap, 
  Database, 
  Search,
  MessageSquare
} from "lucide-react";

const geoServices = [
  {
    title: "AI Search Optimization",
    description: "Tailoring your content to be picked up by AI answer engines like Perplexity and SearchGPT.",
    icon: BrainCircuit,
    details: ["LLM Compatibility", "Semantic Reach", "Citation Mining", "Model Testing"]
  },
  {
    title: "Structured Data for AI",
    description: "Advanced schema implementation that helps AI models understand your business entities.",
    icon: Database,
    details: ["JSON-LD Mastery", "Knowledge Graphing", "Entity Linking", "Data Scrubbing"]
  },
  {
    title: "Content for LLMs",
    description: "Developing authoritative content that Large Language Models find easily digestible.",
    icon: MessageSquare,
    details: ["Expert Tone", "Machine Readability", "Value Density", "Source Credibility"]
  },
  {
    title: "Knowledge Graph SEO",
    description: "Securing your spot in global knowledge bases used by generative AI systems.",
    icon: Network,
    details: ["Wiki Presence", "Entity Definition", "Global Data Hubs", "Fact Verification"]
  },
  {
    title: "Brand Citation Audits",
    description: "Tracking and analyzing how major AI models are representing your brand online.",
    icon: Search,
    details: ["Sentiment Analysis", "Mention Tracking", "Bias Monitoring", "Accuracy Checks"]
  },
  {
    title: "Rapid SGE Adaptation",
    description: "Optimizing for Google's Search Generative Experience to maintain visibility.",
    icon: Zap,
    details: ["SGE Analysis", "Snippet Control", "Follow-up Querying", "Rank Protection"]
  }
];

export function GEOServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Unleash <span className="text-primary">GEO Capabilities</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          Our specialized suite of services is designed to keep your brand at the forefront of the artificial intelligence revolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {geoServices.map((service, i) => (
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
