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

const aioServices = [
  {
    title: "LLM Optimization",
    description: "Structuring your data to ensure Large Language Models (LLMs) accurately represent your brand.",
    icon: BrainCircuit,
    details: ["Data Structuring", "Semantic Mapping", "Citation Mining", "Accuracy Audit"]
  },
  {
    title: "Answer Engine Visibility",
    description: "Optimizing for AI answer engines like Perplexity, Gemini, and SearchGPT.",
    icon: Search,
    details: ["Direct Citations", "Source Authority", "Query Targeting", "Snippet Control"]
  },
  {
    title: "GEO (Generative Engine Optimization)",
    description: "The new SEO. We optimize content for generative AI summaries and recommendations.",
    icon: Zap,
    details: ["Summary Placement", "Brand Mentions", "Authority Building", "Concept Linking"]
  },
  {
    title: "Knowledge Graph Integration",
    description: "Securing your brand's spot in global knowledge graphs used by AI models.",
    icon: Network,
    details: ["Schema Markup", "Wiki Integration", "Entity Definition", "Data Fed Hubs"]
  },
  {
    title: "AI-Friendly Content Strategy",
    description: "Producing content that AI models find authoritative, helpful, and easy to parse.",
    icon: MessageSquare,
    details: ["Semantic Hubs", "Expert Content", "Machine Readability", "Value Density"]
  },
  {
    title: "Model Presence Monitoring",
    description: "Real-time tracking of how major AI models are talking about your business.",
    icon: Database,
    details: ["Sentiment Analysis", "Citation Tracking", "Bias Monitoring", "Presence Reports"]
  }
];

export function AIOServicesGrid() {
  return (
    <Section variant="compact" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Future of <span className="text-primary">Optimization</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          Unlock visibility in the generative era with specialized strategies designed for the world's most intelligent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aioServices.map((service, i) => (
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
