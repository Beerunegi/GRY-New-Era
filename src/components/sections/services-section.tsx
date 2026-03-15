"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import Link from "next/link";
import { 
  Search, 
  MousePointerClick, 
  Share2, 
  PenTool, 
  Code2, 
  Sparkles,
  Bot,
  Target,
  Mail,
  ShieldCheck,
  BarChart3,
  Palette
} from "lucide-react";

const services = [
  {
    title: "AI Optimization (AIO)",
    description: "Future-proof your brand for the era of AI search engines like Perplexity and Gemini.",
    icon: Bot,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/ai-optimization"
  },
  {
    title: "Conversion Rate Optimization", // Added new service
    description: "Turn visitors into loyal customers with data-driven strategies and A/B testing.",
    icon: Target,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/conversion-rate-optimization"
  },
  {
    title: "Online Reputation Management",
    description: "Protect your brand image, suppress negative content, and build unshakeable trust.",
    icon: ShieldCheck,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/online-reputation-management"
  },
  {
    title: "Analytics & Tracking",
    description: "Measure performance, track conversions, and make data-driven decisions with GA4 & GTM.",
    icon: BarChart3,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/analytics-tracking"
  },
  {
    title: "Branding & Creative",
    description: "Visual identity, logo design, and marketing creatives that communicate authority and build trust.",
    icon: Palette,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/branding-creative"
  },
  {
    title: "SEO Optimization",
    description: "Dominate search rankings and drive organic traffic that converts into loyal customers.",
    icon: Search,
    color: "text-secondary",
    bg: "bg-secondary/10",
    href: "/services/seo"
  },
  {
    title: "Google Ads / PPC",
    description: "High-ROI paid campaigns targeted mathematically to maximize your reach and revenue.",
    icon: MousePointerClick,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/ppc"
  },
  {
    title: "Social Media Marketing",
    description: "Engaging social campaigns that build brand authority and community across platforms.",
    icon: Share2,
    color: "text-secondary",
    bg: "bg-secondary/10",
    href: "/services/social-media"
  },
  {
    title: "Website Design",
    description: "Stunning, conversion-focused UI/UX design tailored to represent your premium brand.",
    icon: PenTool,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/content-marketing"
  },
  {
    title: "Website Development",
    description: "Lightning-fast, scalable web applications built with modern frameworks and best practices.",
    icon: Code2,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "Branding & Creative",
    description: "Strategic brand identity development that resonates deeply with your target audience.",
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/website-development"
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description: "Scale your visibility in AI-powered search results like ChatGPT and Google AI Overviews.",
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
    href: "/services/generative-engine-optimization"
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
          >
            <Link 
              href={service.href || "#"} 
              className="group relative block p-8 rounded-2xl border border-border/50 bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden h-full"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover indicator link icon if it has a page */}
              {service.href && (
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              )}

              {/* Hover subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
