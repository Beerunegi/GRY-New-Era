"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";

const steps = [
  {
    num: "01",
    title: "Discovery & Research",
    description: "We dive deep into your brand, competitors, and target audience to uncover unique opportunities.",
  },
  {
    num: "02",
    title: "Strategic Planning",
    description: "Developing a tailored, multi-channel roadmap engineered for maximum growth and ROI.",
  },
  {
    num: "03",
    title: "Execution & Build",
    description: "Our specialists implement the strategy—from high-converting websites to targeted ad campaigns.",
  },
  {
    num: "04",
    title: "Data & Optimization",
    description: "Continuous A/B testing and algorithmic adjustments based on real-time performance data.",
  },
  {
    num: "05",
    title: "Scale & Growth",
    description: "Once we hit the winning formula, we exponentially scale ad spend and operational efforts.",
  },
];

export function ProcessSection() {
  return (
    <Section className="bg-primary text-primary-foreground overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-20 text-balance">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
          Our Proven Methodology
        </h2>
        <p className="text-primary-foreground/80 text-lg">
          Success isn't accidental. It's the result of a scientific, measurable framework that we apply to every client.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line for Desktop */}
        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/20 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Number Circle */}
              <div className="w-24 h-24 rounded-full bg-primary border-4 border-white flex items-center justify-center text-3xl font-bold mb-6 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-xl">
                {step.num}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
