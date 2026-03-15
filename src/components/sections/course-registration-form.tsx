"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, PhoneCall, GraduationCap } from "lucide-react";

export function CourseRegistrationForm() {
  return (
    <Section id="register" className="bg-background">
      <div className="max-w-6xl mx-auto bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info Side */}
          <div className="p-8 md:p-16 bg-primary text-primary-foreground relative overflow-hidden">
             {/* Floating Elements Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Secure Your <br /> Future Today
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-12">
                Join Ghaziabad's #1 Digital Marketing Academy. Fill out the form and our career counselor will call you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold uppercase tracking-widest text-primary-foreground/60 mb-1">Direct Call</div>
                    <div className="text-xl font-bold">+91 9871264699</div>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold uppercase tracking-widest text-primary-foreground/60 mb-1">Our Campus</div>
                    <div className="text-lg font-medium leading-snug">
                       3rd floor, A-303, Sector 5, Sahibabad, Ghaziabad, UP 201005
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-16">
            <h3 className="text-2xl font-bold mb-8">Registration Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-base font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="h-12 bg-muted/30 border-border focus:ring-2 ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                  <Input placeholder="+91 9876543210" className="h-12 bg-muted/30 border-border focus:ring-2 ring-primary/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-base font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <Input placeholder="john@example.com" type="email" className="h-12 bg-muted/30 border-border focus:ring-2 ring-primary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-base font-bold uppercase tracking-wider text-muted-foreground">Choose Program</label>
                <Select>
                  <SelectTrigger className="h-14 bg-muted/30 border-border">
                    <SelectValue placeholder="Select a course program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3m">3-Month Certificate Course</SelectItem>
                    <SelectItem value="6m">6-Month Advanced Course</SelectItem>
                    <SelectItem value="1y">1-Year Diploma Course</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-base font-bold uppercase tracking-wider text-muted-foreground">Message (Optional)</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-muted/30 border-border focus:ring-2 ring-primary/20" />
              </div>

              <Button className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 group">
                Register for Free Consultation <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                By clicking "Register", you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
