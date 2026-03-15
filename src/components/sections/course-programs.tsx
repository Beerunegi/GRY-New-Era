"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Award, Star } from "lucide-react";

const programs = [
  {
    title: "3-Month Certificate",
    duration: "12 Weeks",
    level: "Foundation",
    price: "₹24,999",
    description: "Perfect for beginners and business owners wanting to understand the core digital ecosystem.",
    features: [
      "SEO Fundamentals",
      "Social Media Basics",
      "Google Ads Introduction",
      "Practical Case Studies",
      "Industry Certification"
    ],
    highlight: false,
    color: "border-primary/20",
    bg: "bg-primary/5"
  },
  {
    title: "6-Month Advanced",
    duration: "24 Weeks",
    level: "Intermediate to Pro",
    price: "₹44,999",
    description: "The gold standard for aspiring digital marketers looking for career transformation.",
    features: [
      "Everything in 3-Month",
      "Advanced Performance Marketing",
      "Content Strategy & Copywriting",
      "Google Analytics & GTM",
      "100% Placement Assistance"
    ],
    highlight: true,
    color: "border-primary",
    bg: "bg-primary/5"
  },
  {
    title: "1-Year Diploma",
    duration: "48 Weeks",
    level: "Master",
    price: "₹79,999",
    description: "Comprehensive masterclass covering design, dev, and full-stack digital leadership.",
    features: [
      "Everything in 6-Month",
      "Full Stack Web Development",
      "Brand Identity & UI/UX Design",
      "AI Tools & Automation",
      "Live Paid Ad Management",
      "Global Recognition"
    ],
    highlight: false,
    color: "border-secondary/20",
    bg: "bg-secondary/5"
  }
];

export function CoursePrograms() {
  return (
    <Section id="programs" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Choose Your <span className="text-primary">Learning Path</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Whether you're starting fresh or looking to master the latest AI-driven strategies, we have a program tailored for your career goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-3xl border ${program.color} bg-card flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-500 ${program.highlight ? "ring-2 ring-primary ring-offset-4 ring-offset-background md:-translate-y-4" : ""}`}
          >
            {program.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${program.bg} text-foreground font-bold text-sm flex items-center gap-2`}>
                  <Calendar className="w-4 h-4 text-primary" /> {program.duration}
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold text-foreground">4.9/5</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>

            <div className="mb-8 flex-1">
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">What's Included:</div>
              <ul className="space-y-4 text-sm">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-border/50">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black">{program.price}</span>
                <span className="text-sm text-muted-foreground">/ one-time</span>
              </div>
              <Button className={`w-full h-12 rounded-xl text-sm font-bold ${program.highlight ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                Download Brochure
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
