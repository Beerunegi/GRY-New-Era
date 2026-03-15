"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Brain, Layers, Share2, Target } from "lucide-react";

export function GEOOverview() {
  return (
    <Section variant="compact" className="bg-muted/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            What is <span className="text-primary">Generative Engine Optimization?</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Generative Engine Optimization (GEO) is the new SEO. As search evolves from a list of links to AI-generated answers, your brand needs to be part of the response.
            </p>
            <p>
              We don't just optimize for algorithms; we optimize for Large Language Models (LLMs). Our strategies ensure that AI models recognize your brand as an authoritative source, leading to direct citations and recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">LLM Training Data</h4>
                   <p className="text-xs text-muted-foreground">Structuring content for machine ingestion.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Citation Accuracy</h4>
                   <p className="text-xs text-muted-foreground">Ensuring AI cites your business correctly.</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
             
             <h3 className="text-2xl font-bold mb-8">Why GEO Matters Now</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">01</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">AI-First Discovery</h4>
                      <p className="text-sm text-muted-foreground">Users are increasingly using ChatGPT and Perplexity for product discovery instead of traditional search.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">02</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Trust & Authority</h4>
                      <p className="text-sm text-muted-foreground">Being cited by an AI model provides immediate authority and trust to your brand identity.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">03</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Zero-Click Search</h4>
                      <p className="text-sm text-muted-foreground">Google SGE (Search Generative Experience) answers queries directly, making top organic spots less visible.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
