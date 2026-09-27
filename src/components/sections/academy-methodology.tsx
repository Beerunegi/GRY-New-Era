"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  BookOpen, 
  Laptop, 
  TrendingUp, 
  Award,
  ArrowRight,
  Sparkles
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Foundations & Cognitive Frameworks",
    desc: "Understand the core architecture, consumer psychology, algorithmic systems, and engineering fundamentals before touching any tools.",
    icon: BookOpen,
    tag: "Weeks 1-4",
  },
  {
    step: "02",
    title: "Hands-on Practical Tool Labs",
    desc: "Work on dedicated workstations with high-speed internet, configuring Google Ads, Meta Ads Manager, GA4, VS Code, Shopify, and GenAI models.",
    icon: Laptop,
    tag: "Weeks 5-12",
  },
  {
    step: "03",
    title: "Live Agency Projects & Real Budgets",
    desc: "Manage real brand ad spend, optimize actual crawl errors, build production Shopify storefronts, and work on active agency accounts.",
    icon: TrendingUp,
    tag: "Weeks 13-20",
  },
  {
    step: "04",
    title: "Capstone Defense & Placement Drives",
    desc: "Present your end-to-end capstone before agency directors, refine your GitHub & portfolio, and interview with partner companies.",
    icon: Award,
    tag: "Final 4 Weeks",
  },
];

export function AcademyMethodology() {
  return (
    <Section className="bg-background border-b border-border/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Agency-Grade Pedagogy
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Our 4-Step <span className="text-primary">Practical Learning Blueprint</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          How we transform complete beginners into confident, job-ready professionals and high-ticket freelancers in 3 to 6 months.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((st, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-muted/20 border border-border flex flex-col justify-between hover:bg-card hover:shadow-xl transition-all duration-300 relative group"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-black text-primary/40 group-hover:text-primary transition-colors">
                  {st.step}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
                  {st.tag}
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <st.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">{st.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 text-xs font-bold text-primary flex items-center gap-1">
              Step {i + 1} of 4 Complete <ArrowRight className="w-3.5 h-3.5 ml-auto" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
