"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import Image from "next/image";

export function CourseSection() {
  return (
    <Section id="courses" className="bg-muted/30 border-y border-border/50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border flex items-center justify-center relative shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Students collaborating on a digital marketing project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start text-left">
              <div className="w-16 h-16 bg-primary/90 text-primary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-md">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Master Digital Marketing</h3>
              <p className="text-foreground/80 text-sm max-w-[280px]">
                Join 500+ professionals who accelerated their career with our agency-led course.
              </p>
            </div>
            
            {/* Absolute positioning badge */}
            <div className="absolute -top-6 -right-6 bg-background border shadow-xl p-4 rounded-xl flex items-center gap-4 z-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-background flex items-center justify-center overflow-hidden">
                   <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" width={40} height={40} alt="Student" className="object-cover w-full h-full" />
                </div>
                <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-background flex items-center justify-center overflow-hidden">
                   <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" width={40} height={40} alt="Student" className="object-cover w-full h-full" />
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-background flex items-center justify-center text-xs font-bold text-purple-700">5k+</div>
              </div>
              <div>
                <div className="font-bold text-sm">Active Students</div>
                <div className="text-xs text-muted-foreground flex items-center text-yellow-500 gap-1">
                  <span>★★★★★</span> <span className="text-foreground/50 text-[10px]">(4.9)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
            <GraduationCap className="w-4 h-4" /> New Digital Era Academy
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-2">
            Learn from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry Experts</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Our exclusive comprehensive Digital Marketing Course gives you the exact blueprint and strategies we use daily to generate millions in ROI for our VIP clients.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Practical, hands-on live campaigns and projects.",
              "Learn advanced SEO, Performance Marketing & SMM.",
              "1-on-1 mentorship from seasoned agency directors.",
              "100% Placement assistance and interview prep."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-base">
              Enroll Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background">
              Download Syllabus
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
