"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import Image from "next/image";
import { 
  Search, 
  MousePointer2, 
  Settings, 
  Code, 
  BarChart3, 
  Sparkles,
  Layers,
  Presentation
} from "lucide-react";

const curriculum = [
  {
    title: "Mastering SEO",
    description: "Learn technical SEO, keyword research, and white-hat link building techniques that survive Google updates.",
    icon: Search,
    modules: ["On-Page SEO", "Off-Page Strategy", "Technical Audits", "Local SEO"]
  },
  {
    title: "Paid Ads (PPC)",
    description: "Run mathematical, conversion-focused campaigns on Google Search, YouTube, and Display networks.",
    icon: MousePointer2,
    modules: ["Keyword Bidding", "Display Ads", "Remarketing", "Smart Campaigns"]
  },
  {
    title: "Social Performance",
    description: "Drive Viral growth and scale Meta Ads (Facebook & Instagram) with creative strategy and funnel building.",
    icon: Settings,
    modules: ["Ad Manager Pro", "Creative Strategy", "Copywriting", "Influencer Hub"]
  },
  {
    title: "Website Mastery",
    description: "Build landing pages and websites using modern CMS and basic code to maximize conversions.",
    icon: Code,
    modules: ["Wordpress Expert", "Landing Page CRO", "HTML/CSS Basics", "Shopify Store"]
  },
  {
    title: "Data Analytics",
    description: "Master Google Analytics 4 (GA4) and Tag Manager to track every dollar of your marketing spend.",
    icon: BarChart3,
    modules: ["GA4 Reporting", "GTM Specialist", "Data Studio Maps", "Attribution"]
  },
  {
    title: "AI Tools & Future",
    description: "Leverage ChatGPT, Midjourney, and automation tools to 10x your productivity as a digital marketer.",
    icon: Sparkles,
    modules: ["AI Copywriting", "Prompt Engineering", "Automation Flow", "Voice Search"]
  }
];

export function CourseCurriculum() {
  return (
    <Section id="curriculum" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="lg:sticky lg:top-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            What You Will Learn
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The Most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Comprehensive Curriculum</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Our curriculum is built around the "Agency-Standard" workflow. We don't just teach theory; we show you how to execute like a pro.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4 items-center p-4 rounded-xl bg-card border border-border shadow-sm">
               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
               </div>
               <div className="text-sm font-bold">25+ Core Modules</div>
            </div>
            <div className="flex gap-4 items-center p-4 rounded-xl bg-card border border-border shadow-sm">
               <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-secondary" />
               </div>
               <div className="text-sm font-bold">Practical Labs</div>
            </div>
          </div>

          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
               alt="Digital Marketing Session"
               fill
               className="object-cover"
               sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </motion.div>

        <div className="space-y-6">
          {curriculum.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-muted/30 border border-border group hover:bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-6 mb-6">
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border/50">
                {item.modules.map((mod, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {mod}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
