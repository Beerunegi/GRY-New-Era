"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Search, 
  MousePointerClick, 
  Share2, 
  PenTool, 
  Code2, 
  Sparkles 
} from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description: "Dominate search rankings and drive organic traffic that converts into loyal customers.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Google Ads / PPC",
    description: "High-ROI paid campaigns targeted mathematically to maximize your reach and revenue.",
    icon: MousePointerClick,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Social Media Marketing",
    description: "Engaging social campaigns that build brand authority and community across platforms.",
    icon: Share2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Website Design",
    description: "Stunning, conversion-focused UI/UX design tailored to represent your premium brand.",
    icon: PenTool,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "Website Development",
    description: "Lightning-fast, scalable web applications built with modern frameworks and best practices.",
    icon: Code2,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Branding & Creative",
    description: "Strategic brand identity development that resonates deeply with your target audience.",
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <Section id="services" className="bg-background relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Comprehensive Digital <br />
          <span className="text-primary">Solutions</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          We provide end-to-end digital services to elevate your brand. Discover how we can help you grow sustainably.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
          >
            <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </div>
            
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Hover subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
