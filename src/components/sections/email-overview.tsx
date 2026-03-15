"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Repeat, HeartHandshake, MousePointerClick, MessageCircle } from "lucide-react";

export function EmailOverview() {
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
            Own Your Audience. <span className="text-primary">Drive Direct Sales.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Social media algorithms change daily, but your email list is an asset you own completely. Email marketing remains the most direct, personal, and profitable way to communicate with your customers.
            </p>
            <p>
              We craft personalized email journeys that deliver the right message at exactly the right time, nurturing leads into buyers and buyers into brand advocates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                   <Repeat className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Automation</h4>
                   <p className="text-sm text-muted-foreground">Set-and-forget sequences that sell 24/7.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                   <HeartHandshake className="w-5 h-5 text-secondary" />
                </div>
                <div>
                   <h4 className="font-bold mb-1">Retention</h4>
                   <p className="text-sm text-muted-foreground">Keep your brand top-of-mind consistently.</p>
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
             
             <h3 className="text-2xl font-bold mb-8">The Email Advantage</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">01</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Hyper-Personalization</h4>
                      <p className="text-base text-muted-foreground">Segment your audience to deliver highly relevant content that speaks to their specific needs.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0 font-bold">02</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Measurable Impact</h4>
                      <p className="text-base text-muted-foreground">Track exact open rates, click-throughs, and revenue generated from every single campaign.</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-bold">03</div>
                   <div>
                      <h4 className="font-bold mb-2 text-lg">Scalable Engagement</h4>
                      <p className="text-base text-muted-foreground">Reach ten or ten thousand people instantly with the exact same level of effort and cost.</p>
                   </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
