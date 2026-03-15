"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Eye, Network, Smartphone, MousePointerClick } from "lucide-react";

export function AnalyticsOverview() {
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
            See the Unseen. <span className="text-primary">Measure the Impact.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              In digital marketing, if you can't measure it, you can't manage it. Basic tracking often leaves massive data gaps, leading to blind spots in your customer journey and wasted advertising budgets.
            </p>
            <p>
              We view analytics not just as reporting, but as foundational infrastructure. By implementing advanced tracking protocols via GTM and GA4, we illuminate the entire funnel, ensuring clean, actionable, and centralized data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <Network className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Cross-Domain</h4>
                   <p className="text-sm text-muted-foreground">Track users seamlessly across all your digital assets.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <Eye className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Deep Visibility</h4>
                   <p className="text-sm text-muted-foreground">Go beyond page views to track specific interactions.</p>
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
             
             <h3 className="text-2xl font-bold mb-8">The Analytics Advantage</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">01</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">True ROI Attribution</h4>
                      <p className="text-base text-muted-foreground">Know exactly which ad click, email, or social post generated the final sale.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">02</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Friction Discovery</h4>
                      <p className="text-base text-muted-foreground">Identify exactly where users are abandoning your checkout or form sequence.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">03</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Algorithmic Feeding</h4>
                      <p className="text-base text-muted-foreground">Send high-quality conversion data back to Google & Meta to train their bidding algorithms.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
