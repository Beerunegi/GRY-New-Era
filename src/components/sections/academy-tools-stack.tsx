"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Sparkles, Laptop, Code2, Search, Cpu } from "lucide-react";

const toolCategories = [
  {
    category: "Paid Media & Analytics",
    icon: Laptop,
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Google Tag Manager", "Looker Studio", "Triple Whale", "Microsoft Clarity"],
  },
  {
    category: "Search & Technical SEO",
    icon: Search,
    tools: ["Google Search Console", "Screaming Frog", "Ahrefs", "SEMrush", "Sitebulb", "Schema App", "Google PageSpeed Insights"],
  },
  {
    category: "Web & E-Commerce Engineering",
    icon: Code2,
    tools: ["HTML5 / CSS3", "Modern JavaScript", "Tailwind CSS", "WordPress & Elementor", "WooCommerce", "Shopify & Liquid", "React.js / Next.js", "Git & GitHub"],
  },
  {
    category: "Generative AI & Automation",
    icon: Cpu,
    tools: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Midjourney v6", "Cursor AI", "v0.dev", "Make.com", "Zapier", "ElevenLabs", "Runway Gen-3", "Perplexity Pro"],
  },
];

export function AcademyToolsStack() {
  return (
    <Section className="bg-muted/10 border-b border-border/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Industry Tech & AI Suite
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Master 40+ Industry Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI Superpowers</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          You will work hands-on with the exact tech stack used by modern global marketing agencies and engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toolCategories.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {group.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1.5 rounded-xl bg-muted/40 border border-border/80 text-xs font-semibold text-foreground hover:border-primary/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
