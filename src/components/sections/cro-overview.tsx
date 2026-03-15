"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { BarChart3, Users, MousePointer2, PieChart } from "lucide-react";

export function CROOverview() {
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
            The Science of <span className="text-primary">More Conversions</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Conversion Rate Optimization (CRO) is the process of increasing the percentage of website visitors who take a desired action—be it making a purchase, signing up for a newsletter, or filling out a contact form.
            </p>
            <p>
              We don't guess. We use behavioral analytics, heatmaps, and rigorous A/B testing to understand exactly why your visitors aren't converting and how to fix it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <MousePointer2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">User Behavior</h4>
                   <p className="text-xs text-muted-foreground">Deep analysis of how users interact with your site.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <BarChart3 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Metric Focused</h4>
                   <p className="text-xs text-muted-foreground">Data-driven decisions to boost your bottom line.</p>
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
             
             <h3 className="text-2xl font-bold mb-8">Why CRO Matters</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">01</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Lower Customer Acquisition Cost</h4>
                      <p className="text-sm text-muted-foreground">Get more value from the traffic you already have without spending more on ads.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">02</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Enhanced User Experience</h4>
                      <p className="text-sm text-muted-foreground">A smoother, more intuitive site leads to happier customers and higher brand loyalty.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">03</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Data-Backed Growth</h4>
                      <p className="text-sm text-muted-foreground">Eliminate the guesswork and make changes based on proven user data and results.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
