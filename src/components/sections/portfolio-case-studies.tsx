"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

const caseStudies = [
  {
    client: "TechFlow Systems",
    industry: "SaaS Data Analytics",
    challenge: "High customer acquisition cost and stagnant organic growth due to legacy architecture.",
    solution: "Full Next.js replatforming paired with a programmatic SEO strategy targeting long-tail queries.",
    metrics: [
      { label: "Organic Traffic", value: "+310%", icon: TrendingUp },
      { label: "CPA Reduction", value: "-45%", icon: BarChart3 },
      { label: "New Leads", value: "850+", icon: Users }
    ],
    color: "bg-primary"
  },
  {
    client: "Apex Retail Group",
    industry: "E-Commerce",
    challenge: "Poor mobile conversion rates and a disjointed brand checkout experience.",
    solution: "Headless commerce redesign focusing on Mobile-First UX, resulting in a friction-free checkout flow.",
    metrics: [
      { label: "Mobile CVR", value: "+88%", icon: TrendingUp },
      { label: "Avg. Order Value", value: "+$42", icon: BarChart3 },
      { label: "Load Time", value: "-2.1s", icon: Users }
    ],
    color: "bg-secondary"
  }
];

export function PortfolioCaseStudies() {
  return (
    <Section className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-primary">Case Studies</span>
        </h2>
        <p className="text-lg text-muted-foreground opacity-80">
          Deep dives into complex challenges and the strategic solutions that drove measurable business growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-2xl"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-base font-bold text-primary uppercase tracking-wider">{study.client}</div>
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <div className="text-base text-muted-foreground">{study.industry}</div>
              </div>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-base font-bold text-muted-foreground uppercase tracking-widest mb-2">The Challenge</h4>
                  <p className="text-lg font-medium leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-base font-bold text-muted-foreground uppercase tracking-widest mb-2">The Solution</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-base font-bold text-primary group-hover:gap-3 transition-all self-start">
                Read Full Study <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Metrics Panel */}
            <div className={`lg:col-span-5 p-8 md:p-12 ${study.color} text-white flex flex-col justify-center relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">The Results</h3>
              <div className="space-y-8 relative z-10">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md shrink-0">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-black tracking-tight">{metric.value}</div>
                      <div className="text-base font-medium text-white/80">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
