"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";

const results = [
  {
    brand: "HealthTech Solutions",
    growth: "+240%",
    metric: "Organic Traffic",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["E-commerce", "Local SEO"]
  },
  {
    brand: "Global Edu Hub",
    growth: "+180%",
    metric: "Lead Generation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["B2B", "Technical SEO"]
  },
  {
    brand: "Art & Decor",
    growth: "+310%",
    metric: "Sales Revenue",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tags: ["Retail", "Content Strategy"]
  }
];

export function SEOCaseStudies() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Data-Driven <span className="text-primary">Success</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          Explore how our SEO expertise transformed search performance for our partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((item, i) => (
          <motion.div
            key={i}
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: i * 0.05 }}
             viewport={{ once: true }}
             className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
              <Image 
                src={item.image} 
                alt={item.brand} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                   <h3 className="text-lg font-bold text-white mb-1">{item.brand}</h3>
                   <div className="flex items-center gap-2">
                     <span className="text-xl font-black text-primary">{item.growth}</span>
                     <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{item.metric}</span>
                   </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                   <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Overview stats */}
      <div className="mt-12 p-10 rounded-[2.5rem] bg-primary text-primary-foreground relative overflow-hidden shadow-xl">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="flex flex-col items-center">
               <TrendingUp className="w-8 h-8 mb-4 opacity-70" />
               <div className="text-4xl font-black mb-1">95%</div>
               <div className="text-primary-foreground/60 font-bold uppercase tracking-[0.2em] text-[9px]">Client Retention</div>
            </div>
            <div className="flex flex-col items-center">
               <Target className="w-8 h-8 mb-4 opacity-70" />
               <div className="text-4xl font-black mb-1">500k+</div>
               <div className="text-primary-foreground/60 font-bold uppercase tracking-[0.2em] text-[9px]">Keywords Ranked</div>
            </div>
            <div className="flex flex-col items-center">
               <Users className="w-8 h-8 mb-4 opacity-70" />
               <div className="text-4xl font-black mb-1">1M+</div>
               <div className="text-primary-foreground/60 font-bold uppercase tracking-[0.2em] text-[9px]">Organic Visits</div>
            </div>
         </div>
      </div>
    </Section>
  );
}
