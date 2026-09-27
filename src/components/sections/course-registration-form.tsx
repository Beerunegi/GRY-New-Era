"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, PhoneCall, GraduationCap, MessageCircle, Sparkles } from "lucide-react";

const courseOptions = [
  "Digital Marketing + Generative AI (6 Months)",
  "Web Development + AI (6 Months)",
  "Social Media & Content Marketing (3 Months)",
  "Performance Marketing & Marketing Analytics (3 Months)",
  "SEO + AEO + GEO (6 Months)",
  "Generative AI + AI Automation (6 Months)",
  "WordPress + Shopify Development (6 Months)",
];

export function CourseRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: courseOptions[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const payload = new FormData();
    payload.append("name", formData.name.trim());
    payload.append("phone", formData.phone.trim());
    payload.append("email", formData.email.trim());
    payload.append("course", formData.course);
    payload.append("message", formData.message.trim() || `Course registration for ${formData.course}`);
    payload.append("_subject", `Academy Registration: ${formData.name.trim()} - ${formData.course}`);
    payload.append("_template", "table");
    payload.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@newdigitalera.in", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", course: courseOptions[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="register" className="bg-background">
      <div className="max-w-6xl mx-auto bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info Side */}
          <div className="p-8 md:p-16 bg-primary text-primary-foreground relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> 100% Offline Classroom Admissions
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Secure Your <br /> Future Today
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg mb-10 leading-relaxed">
                Join Delhi NCR's top practical digital academy. Submit your details below to schedule a free 1-on-1 career counselling session and campus lab visit.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-0.5">Direct Call Desk</div>
                    <a href="tel:+919871264699" className="text-xl font-bold hover:underline">+91 98712 64699</a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-0.5">WhatsApp Admission Helpline</div>
                    <a
                      href="https://wa.me/919871264699?text=Hi%20New%20Digital%20Era%20Academy%2C%20I%20am%20interested%20in%20visiting%20your%20campus%20for%20course%20counselling."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold hover:underline"
                    >
                      Chat with Counsellor →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-0.5">Offline Campus</div>
                    <div className="text-sm font-medium leading-snug">
                      3rd Floor, A-303, Sector 5, Sahibabad, Ghaziabad, UP 201005
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/15 text-xs text-primary-foreground/70">
              Batches limited to 15 students to ensure personalized mentor attention.
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-16">
            <h3 className="text-2xl font-bold mb-2">Book Free Counselling</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Select your course of interest. Our career mentor will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <Input
                    required
                    placeholder="e.g. Aman Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-muted/30 border-border"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 bg-muted/30 border-border"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <Input
                  required
                  type="email"
                  placeholder="aman@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-muted/30 border-border"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Choose Program</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full h-12 rounded-md border border-border bg-muted/30 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {courseOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-card text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message / Questions (Optional)</label>
                <Textarea
                  placeholder="Tell us about your background or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[100px] bg-muted/30 border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-14 text-base font-bold shadow-xl shadow-primary/20 group"
              >
                {status === "submitting" ? "Registering..." : (
                  <>Register for Free Consultation <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                )}
              </Button>

              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center font-medium">
                  ✓ Registration received! Our academic counsellor will call you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-medium">
                  Notice: Please connect directly via WhatsApp or call +91 98712 64699.
                </div>
              )}

              <p className="text-center text-xs text-muted-foreground">
                No fee required for consultation. 100% free career guidance session.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
