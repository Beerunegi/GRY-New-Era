"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm.",
    detail: "+1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will reply within 24 hours.",
    detail: "hello@newdigitalera.com"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our HQ.",
    detail: "123 Innovation Dr, Tech City"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available during business hours.",
    detail: "Start a conversation"
  }
];

export function ContactHero() {
  return (
    <Section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm border border-primary/20">
            Let's Talk Growth
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">Level Up?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you need a comprehensive digital strategy, an SEO overhaul, or a stunning new website, our team of experts is ready to help you dominate your market.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {contactMethods.map((method, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-[2rem] bg-card/80 backdrop-blur-md border border-border group hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
              <method.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-xl mb-2">{method.title}</h3>
            <p className="text-base text-muted-foreground mb-4">{method.description}</p>
            <p className="font-bold text-foreground mt-auto">{method.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
