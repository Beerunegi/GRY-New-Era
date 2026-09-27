"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  ArrowRight, 
  MapPin, 
  Star, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  Users,
  Award
} from "lucide-react";
import Image from "next/image";

export function AcademyHero() {
  return (
    <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Academy Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider border border-secondary/20">
                <GraduationCap className="w-4 h-4" /> New Digital Era Academy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-muted-foreground font-semibold text-xs border border-border">
                <MapPin className="w-3.5 h-3.5 text-primary" /> Offline Campus • Ghaziabad, Delhi NCR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Master In-Demand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Digital Skills & AI
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              100% practical, offline classroom training in Ghaziabad. Learn Full-Stack Digital Marketing, Web Development, Generative AI, SEO, and Performance Marketing from active agency leaders with 100% placement support.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-10">
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 text-center">
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">Training Mode</div>
                <div className="text-sm font-bold text-primary">100% Offline</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 text-center">
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">Batch Limit</div>
                <div className="text-sm font-bold text-foreground">15 Students</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 text-center">
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">Projects</div>
                <div className="text-sm font-bold text-secondary">Live Client Spend</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 text-center">
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">Placements</div>
                <div className="text-sm font-bold text-primary">100% Support</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#courses-grid">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold shadow-xl shadow-primary/20 group">
                  Explore All 7 Courses <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-background/50 backdrop-blur-sm border-border hover:bg-card">
                  Book Free Counselling
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                    <Image src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Student" width={40} height={40} />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white uppercase italic">
                  5k+
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-0.5">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold text-foreground ml-1">4.9/5 Rating</span>
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Trusted by <span className="text-foreground font-bold">5,000+ graduates</span> across Delhi NCR
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group relative">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                alt="Students learning digital marketing and coding in Ghaziabad classroom" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> Ghaziabad Classroom Labs
                  </div>
                  <div className="text-sm font-bold text-foreground">
                    Hands-on workstations with dual displays & high-speed agency lab infrastructure.
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute badge 1 */}
            <div className="absolute -bottom-8 -left-6 bg-card p-5 rounded-2xl border border-border shadow-2xl hidden md:block">
              <div className="text-2xl font-black text-primary mb-0.5">100%</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Placement Support</div>
            </div>

            {/* Absolute badge 2 */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl border border-border shadow-2xl hidden md:block">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-xs font-bold text-foreground">Dual Certification</div>
                  <div className="text-[10px] text-muted-foreground">Academy + Industry Badges</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
