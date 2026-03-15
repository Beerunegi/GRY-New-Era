"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Shapes, Eye, Heart, Target } from "lucide-react";

export function BrandingOverview() {
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
            Design is the Silent <span className="text-primary">Ambassador.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Your audience makes a subconscious judgment about your business within 50 milliseconds of seeing your logo, website, or ad. If your visual identity looks cheap, outdated, or confusing, they assume your services are too.
            </p>
            <p>
              True brand development goes beyond aesthetics. We align your color psychology, typography, and visual assets with your core business objectives, ensuring that every touchpoint tells a cohesive and compelling story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Strategic</h4>
                   <p className="text-xs text-muted-foreground">Every design choice is bound to a business goal.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <Heart className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Emotional</h4>
                   <p className="text-xs text-muted-foreground">Creating instant connections with your audience.</p>
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
             
             <h3 className="text-2xl font-bold mb-8">The Branding Trifecta</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">
                     <Eye className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Visual Recognition</h4>
                      <p className="text-sm text-muted-foreground">Establishing a distinct look that makes your brand instantly identifiable in a crowded marketplace.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">
                     <Shapes className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Consistency</h4>
                      <p className="text-sm text-muted-foreground">Applying strict brand guidelines across all channels—from social media to print materials to web.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">
                     <Heart className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Brand Equity</h4>
                      <p className="text-sm text-muted-foreground">Building long-term value, loyalty, and trust that allows you to command premium pricing.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
