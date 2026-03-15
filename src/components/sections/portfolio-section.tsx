"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    client: "FinTech App",
    category: "Paid Social & SEO",
    title: "Scaling user acquisition by 350% in 6 months",
    metrics: [
      { label: "CPA Reduction", value: "-42%" },
      { label: "New Users", value: "1.2M+" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    client: "E-Commerce Brand",
    category: "Full-Funnel Marketing",
    title: "From $2M to $15M Annual Recurring Revenue",
    metrics: [
      { label: "ROAS", value: "5.8x" },
      { label: "Conversion Rate", value: "+115%" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    client: "SaaS Enterprise",
    category: "B2B Lead Gen & Web Dev",
    title: "Revamping digital presence for enterprise leads",
    metrics: [
      { label: "Organic Traffic", value: "+210%" },
      { label: "MQLs Generated", value: "850+" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

export function PortfolioSection() {
  return (
    <Section id="portfolio" className="bg-muted/10 border-y border-border/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Work That Speaks <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Volumes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dive into our select case studies to see how we tackle complex digital challenges and deliver spectacular, measurable results.
          </p>
        </div>
        <Button variant="outline" className="hidden md:flex">
          View All Work <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Visual Image Header */}
            <div className={`h-56 w-full relative overflow-hidden flex items-center justify-center bg-muted`}>
              <Image 
                src={study.image} 
                alt={study.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-foreground border border-white/10 z-10">
                {study.category}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col pt-6 relative z-10">
              <div className="text-sm font-semibold text-primary mb-3">
                {study.client}
              </div>
              <h3 className="text-xl font-bold mb-6 line-clamp-2">
                {study.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-border/50">
                {study.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-black">{metric.value}</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover overlay static link icon */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-background rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl pointer-events-none z-20">
              <ExternalLink className="w-6 h-6 text-foreground" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-8 md:hidden">
        View All Work <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Section>
  );
}
