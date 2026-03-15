"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Users, Target, Rocket, Lightbulb } from "lucide-react";

export function ContentOverview() {
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
            Strategic Storytelling <span className="text-primary">That Delivers</span> Results
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Content is no longer just about filling pages; it's about building trust and establishing authority. We create content ecosystems that guide your audience through the entire buyer's journey.
            </p>
            <p>
              By aligning deep audience research with SEO technicalities, we ensure your message doesn't just reach people—it resonates with them and drives action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Intent Focused</h4>
                   <p className="text-sm text-muted-foreground">Mapping content to specific user search intent.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Audience First</h4>
                   <p className="text-sm text-muted-foreground">Human-centric writing that builds loyalty.</p>
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
             
             <h3 className="text-2xl font-bold mb-8">The Power of Content</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">01</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Build Brand Authority</h4>
                      <p className="text-base text-muted-foreground">Position your business as a thought leader in your industry through expert insights.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">02</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Organic Link Building</h4>
                      <p className="text-base text-muted-foreground">High-quality content naturally attracts backlinks, boosting your overall domain rankings.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">03</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Improved Conversions</h4>
                      <p className="text-base text-muted-foreground">Educational content removes buying friction and empowers users to make decisions.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
