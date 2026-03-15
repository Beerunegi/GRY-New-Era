"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Target, Eye, Award } from "lucide-react";
import Image from "next/image";

export function AboutStory() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl mb-12 lg:mb-0">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
              alt="Team collaborating" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card p-6 rounded-2xl border border-border shadow-2xl max-w-[200px] hidden md:block">
            <div className="text-4xl font-bold text-primary mb-1">150+</div>
            <div className="text-base font-medium text-muted-foreground">Successful Brand Partnerships</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Crafting Success through <br />
            <span className="text-primary">Passion & Precision</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Founded with a vision to redefine the digital landscape, **New Digital Era** started as a small team of passionate marketers with a singular goal: to deliver measurable results through data-driven strategies.
            </p>
            <p>
              Over the years, we've evolved into a full-service agency, partnering with brands ranging from dynamic startups to global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-muted/30 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-base">
                To empower brands with cutting-edge digital strategies that drive sustainable growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-muted/30 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-base">
                To be the most innovative and results-oriented digital growth partner globally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
