"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/section";
import Image from "next/image";
import { ExternalLink, Search } from "lucide-react";

// Project categories
type Category = "All" | "SEO" | "Web Design" | "Development" | "Marketing";

const categories: Category[] = ["All", "SEO", "Web Design", "Development", "Marketing"];

const projects = [
  {
    id: 1,
    title: "Global FinTech Platform Redesign",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    stats: "+124% Conversion Rate"
  },
  {
    id: 2,
    title: "Eco-Brand Organic Dominance",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    stats: "2.1M Organic Monthly Visitors"
  },
  {
    id: 3,
    title: "Luxury Real Estate Portal",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    stats: "< 0.8s Page Load Time"
  },
  {
    id: 4,
    title: "SaaS Omnichannel Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    stats: "$4M Pipeline Generated"
  },
  {
    id: 5,
    title: "B2B Manufacturer Replatforming",
    category: "Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    stats: "Legacy to Next.js Migration"
  },
  {
    id: 6,
    title: "Local Services Franchise SEO",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop",
    stats: "Top 3 Map Pack in 40 Cities"
  },
  {
    id: 7,
    title: "Health & Wellness D2C Store",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    stats: "28% Decrease in Cart Abandonment"
  },
  {
    id: 8,
    title: "Tech Startup Series B Campaigns",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    stats: "75% Lower CPA"
  }
];

export function PortfolioGridFilter() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <Section className="bg-background pt-0">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-300 ${
              activeCategory === category 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Hover Badge */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold border border-white/10 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Project
              </div>

              <div className="absolute top-6 left-6 w-10 h-10 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                 <Search className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2 drop-shadow-md">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-base font-medium text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <ExternalLink className="w-4 h-4" />
                  {project.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
