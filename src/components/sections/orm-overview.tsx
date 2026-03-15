"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { SearchX, Star, ShieldCheck, HeartHandshake } from "lucide-react";

export function ORMOverview() {
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
            Perception is <span className="text-primary">Reality.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              In today's digital landscape, a single negative review or misleading article can wipe out years of hard work. 93% of consumers say online reviews impact their purchasing decisions.
            </p>
            <p>
              Online Reputation Management (ORM) isn't just damage control; it's proactive brand building. We combine SEO tactics, content creation, and PR strategies to ensure that when people search for you, they see your best side.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <SearchX className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Defense</h4>
                   <p className="text-sm text-muted-foreground">Burying harmful content effectively.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <Star className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Offense</h4>
                   <p className="text-sm text-muted-foreground">Highlighting positive customer stories.</p>
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
             
             <h3 className="text-2xl font-bold mb-8">The ORM Framework</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Proactive Protection</h4>
                      <p className="text-base text-muted-foreground">We secure key digital assets so competitors and detractors can't define your brand narrative.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">
                     <SearchX className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Strategic Suppression</h4>
                      <p className="text-base text-muted-foreground">Using advanced reverse-SEO techniques, we push negative and outdated search results off page one.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">
                     <HeartHandshake className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Trust Cultivation</h4>
                      <p className="text-base text-muted-foreground">We help you organically generate and showcase positive reviews that convert researchers into buyers.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
