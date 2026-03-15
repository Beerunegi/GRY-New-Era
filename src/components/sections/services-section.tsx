"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Optimization (AIO)",
    description: "Future-proof your brand for the era of AI search engines like Perplexity and Gemini.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    href: "/services/ai-optimization"
  },
  {
    title: "Conversion Rate Optimization",
    description: "Turn visitors into loyal customers with data-driven strategies and A/B testing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    href: "/services/conversion-rate-optimization"
  },
  {
    title: "SEO Optimization",
    description: "Dominate search rankings and drive organic traffic that converts into loyal customers.",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=600&auto=format&fit=crop",
    href: "/services/seo"
  },
  {
    title: "Social Media Marketing",
    description: "Engaging social campaigns that build brand authority and community across platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
    href: "/services/social-media"
  },
  {
    title: "Website Development",
    description: "Lightning-fast, scalable web applications built with modern frameworks and best practices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    href: "/services/website-development"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <Section id="services" className="bg-background relative py-20 lg:py-32 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Comprehensive Digital <br />
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end digital services to elevate your brand. Discover how we can help you grow sustainably.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="h-full"
          >
            <Link 
              href={service.href} 
              className="group flex flex-col h-full rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-card">
                <div className="absolute top-0 right-6 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 shadow-lg transition-all duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* View All Services Card */}
        <motion.div variants={itemVariants} className="h-full">
          <Link
            href="/services"
            className="group flex flex-col h-full rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300 overflow-hidden items-center justify-center p-8 text-center min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">View All Services</h3>
            <p className="text-muted-foreground">
              Explore our full suite of digital marketing and development solutions.
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
