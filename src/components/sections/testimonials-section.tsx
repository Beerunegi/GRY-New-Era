"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "New Digital Era transformed our entire business model. Their paid social strategies alone 5x'd our revenue in less than a year. They are aggressive, analytical, and relentless.",
    author: "Sarah Jenkins",
    role: "CMO, E-Commerce Brand",
    rating: 5,
  },
  {
    quote: "The web design team didn't just build a beautiful site; they built a conversion machine. Our bounce rates dropped by 40% and leads increased instantly after launch.",
    author: "David Chen",
    role: "Founder, SaaS Startup",
    rating: 5,
  },
  {
    quote: "We've worked with 4 agencies before New Digital Era. None of them provided the transparency and ROI that this team delivers. True partners in every sense.",
    author: "Michael Ross",
    role: "VP Marketing, Enterprise Solutions",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Don't Just Take <br />
          <span className="text-primary">Our Word For It</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-muted/30 border border-border/50 relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            <p className="text-lg mb-8 leading-relaxed text-foreground">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold">{t.author}</div>
                <div className="text-base text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
