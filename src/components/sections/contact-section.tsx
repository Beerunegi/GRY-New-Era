"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let's Start a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-balance">
            Whether you need a complete digital overhaul or targeted performance marketing, our experts are ready to strategize.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                <p className="text-muted-foreground">123 Innovation Drive, Suite 500<br/>San Francisco, CA 94103</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-muted-foreground">+1 (800) 555-0199</p>
                <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-muted-foreground">hello@newdigitalera.com</p>
                <p className="text-sm text-muted-foreground">We usually respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                <input id="firstName" className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                <input id="lastName" className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Work Email</label>
              <input id="email" type="email" className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@company.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
              <select id="service" className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground appearance-none">
                <option value="">Select a service</option>
                <option value="seo">SEO & Content</option>
                <option value="ppc">Paid Ads (PPC)</option>
                <option value="smm">Social Media Marketing</option>
                <option value="web">Web Design & Dev</option>
                <option value="course">Digital Marketing Course</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Project Details</label>
              <textarea id="message" rows={4} className="w-full p-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us about your goals, current challenges, and timeline..."></textarea>
            </div>

            <Button size="lg" className="w-full h-14 text-base">
              Submit Request <Send className="w-5 h-5 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
