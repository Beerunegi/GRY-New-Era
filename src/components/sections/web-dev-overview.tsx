"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Zap, Shield, Smartphone, PenTool } from "lucide-react";

export function WebDevOverview() {
  return (
    <Section variant="compact" className="bg-muted/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Engineering <span className="text-primary">Superior Digital</span> Experiences
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              In today's digital economy, your website is your most valuable asset. We combine cutting-edge technology with strategic design to build web solutions that stand out and scale.
            </p>
            <p>
              From custom SaaS platforms to high-converting eCommerce stores, our team focuses on clean code, exceptional performance, and seamless user experiences across all devices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Performance First</h4>
                   <p className="text-sm text-muted-foreground">Optimized for Core Web Vitals and speed.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <Smartphone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Mobile Optimized</h4>
                   <p className="text-sm text-muted-foreground">Flawless responsive design for every screen.</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
             
             <h3 className="text-2xl font-bold mb-8">Our Core Principles</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">01</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Strategic Planning</h4>
                      <p className="text-base text-muted-foreground">We align every line of code with your business objectives and user needs.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">02</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Scalable Architecture</h4>
                      <p className="text-base text-muted-foreground">Our solutions are built to grow alongside your business without technical debt.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">03</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">User-Centric Design</h4>
                      <p className="text-base text-muted-foreground">Interfaces designed for engagement, retention, and maximum conversion rates.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
