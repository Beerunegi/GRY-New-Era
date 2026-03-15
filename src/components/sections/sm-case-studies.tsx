"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Heart, Users } from "lucide-react";

const results = [
  {
    brand: "Fashion Nova X",
    growth: "+500%",
    metric: "Engagement Rate",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    tags: ["E-commerce", "Influencer"]
  },
  {
    brand: "Tech Startup Z",
    growth: "250k+",
    metric: "New Followers",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    tags: ["B2B", "LinkedIn"]
  },
  {
    brand: "Gourmet Kitchen",
    growth: "+120%",
    metric: "Direct Sales",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    tags: ["Local", "Instagram"]
  }
];

export function SMCaseStudies() {
  return (
    <Section variant="compact" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Social <span className="text-primary">Impact</span>
        </h2>
        <p className="text-base text-muted-foreground opacity-80">
          Transforming digital presence into community-driven brand authority.
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
                     <span className="text-xl font-black text-secondary">{item.growth}</span>
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
      <div className="mt-12 p-10 rounded-[2.5rem] bg-primary text-white relative overflow-hidden shadow-xl">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="flex flex-col items-center">
               <TrendingUp className="w-8 h-8 mb-4 opacity-70" />
               <div className="text-4xl font-black mb-1">+400%</div>
               <div className="text-white/60 font-bold uppercase tracking-[0.2em] text-[9px]">Engagement Growth</div>
            </div>
            <div className="flex flex-col items-center">
               <Heart className="w-8 h-8 mb-4 opacity-70" />
               <div className="text-4xl font-black mb-1">50M+</div>
               <div className="text-white/60 font-bold uppercase tracking-[0.2em] text-[9px]">Lifetime Likes</div>
            </div>
            <div className="flex flex-col items-center">
               <Users className="w-8 h-8 mb-4 opacity-70" />
               <div className="text-4xl font-black mb-1">5M+</div>
               <div className="text-white/60 font-bold uppercase tracking-[0.2em] text-[9px]">Community Reach</div>
            </div>
         </div>
      </div>
    </Section>
  );
}
