"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, PlayCircle } from "lucide-react";
import Image from "next/image";

export function CoursePageHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-base mb-6">
              <GraduationCap className="w-4 h-4" /> New Digital Era Academy
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
              Master the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Growth & Data</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Launch your career in Digital Marketing with our 100% practical, offline classroom training in Ghaziabad. Learn from industry leaders and work on real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20">
                View All Programs <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm group">
                <PlayCircle className="w-5 h-5 mr-2 text-primary" /> Watch Trailer
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pb-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Student" width={40} height={40} />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white uppercase italic">
                  5k+
                </div>
              </div>
              <div className="text-base font-medium">
                <span className="text-primary">Trusted by 5,000+</span> satisfied students
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl skew-y-2 translate-x-2 border border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                alt="Students learning digital marketing" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-2xl border border-border shadow-2xl hidden md:block animate-bounce-slow">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Placement Support</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Separator */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
