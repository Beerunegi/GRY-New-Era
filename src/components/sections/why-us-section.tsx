"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { LineChart, Users, BarChart3, Trophy } from "lucide-react";

const reasons = [
  {
    title: "Data-Driven Strategy",
    description: "Every decision we make is backed by rigorous data analysis, ensuring maximum ROI and minimized wasted spend.",
    icon: LineChart,
  },
  {
    title: "Experienced Team",
    description: "Our diverse team of specialists has decades of combined experience across all facets of digital marketing.",
    icon: Users,
  },
  {
    title: "Transparent Reporting",
    description: "Full visibility into your campaigns. No smoke and mirrors, just real-time dashboards and honest insights.",
    icon: BarChart3,
  },
  {
    title: "Proven Results",
    description: "We don't just promise results, we deliver them. Check out our case studies to see the multi-million dollar impacts.",
    icon: Trophy,
  },
];

export function WhyUsSection() {
  return (
    <Section id="why-us" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Why Ambitious Brands <br />
            <span className="text-primary">Choose New Digital Era</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            We operate as an extension of your own team. We care about your bottom line as much as you do, combining creativity with hardcore analytics to guarantee success.
          </p>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-10 mt-12">
            {[
              { stat: "98%", label: "Client Retention Rate" },
              { stat: "$250M+", label: "Client Revenue Generated" },
              { stat: "15+", label: "Years of Experience" },
              { stat: "50+", label: "Industry Awards" },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-4">
                <div className="text-3xl md:text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border bg-card ${index % 2 !== 0 ? "sm:translate-y-8" : ""}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
