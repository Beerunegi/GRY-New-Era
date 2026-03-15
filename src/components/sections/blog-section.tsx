"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "The Future of SEO: AI Search & Zero-Click Survival",
    category: "SEO Strategy",
    date: "March 12, 2026",
    author: "Alice Kim",
    excerpt: "How to adapt your digital strategy when generative AI engines answer queries directly on the search page.",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "10 Conversion Rate Optimization Tactics We Used to Double Sales",
    category: "CRO",
    date: "Feb 28, 2026",
    author: "James Miller",
    excerpt: "A deep dive into the exact A/B testing methodology we use for our $10M+ eCommerce clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Brand Storytelling on TikTok: What Actually Works",
    category: "Social Media",
    date: "Feb 15, 2026",
    author: "Sofia Torres",
    excerpt: "Stop making ads, start making TikToks. Here is our blueprint for driving massive B2C engagement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
  },
];

export function BlogSection() {
  return (
    <Section id="blog" className="bg-muted/10">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Insights & Strategy
          </h2>
          <p className="text-muted-foreground text-lg">
            Thoughts, tactics, and frameworks from our digital marketing experts.
          </p>
        </div>
        <Button variant="outline" className="hidden sm:flex whitespace-nowrap">
          Read All Articles <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Image Thumbnail */}
            <Link href="#" className="overflow-hidden block relative h-56 w-full border-b border-border/50 bg-muted">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider shadow-sm border border-white/20">
                {post.category}
              </div>
            </Link>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-medium">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
              </div>
              
              <Link href="#" className="group-hover:text-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 leading-snug">{post.title}</h3>
              </Link>
              
              <p className="text-muted-foreground text-base mb-6 flex-1 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link href="#" className="text-primary font-medium text-base inline-flex items-center hover:underline mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-8 sm:hidden">
        Read All Articles <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Section>
  );
}
