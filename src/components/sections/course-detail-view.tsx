"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Briefcase,
  Users,
  Award,
  Layers,
  Code,
  Laptop,
  Check,
  Send,
  Star,
  TrendingUp,
  FileCheck,
  HelpCircle,
  Zap,
  Globe,
} from "lucide-react";
import type { CourseData } from "@/lib/courses-data";

export function CourseDetailView({ course }: { course: CourseData }) {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const payload = new FormData();
    payload.append("name", formData.name.trim());
    payload.append("phone", formData.phone.trim());
    payload.append("email", formData.email.trim());
    payload.append("course", course.title);
    payload.append("message", formData.message.trim() || `Enquiry for ${course.title}`);
    payload.append("_subject", `New Enquiry: ${course.title}`);
    payload.append("_template", "table");
    payload.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@newdigitalera.in", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.tagline,
    provider: {
      "@type": "Organization",
      name: "New Digital Era Academy",
      sameAs: "https://newdigitalera.in",
    },
    educationalCredentialAwarded: course.certification.title,
    timeRequired: course.duration,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Offline",
      location: {
        "@type": "Place",
        name: "New Digital Era Academy Sahibabad Campus",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3rd Floor, A-303, Sector 5, Sahibabad",
          addressLocality: "Ghaziabad",
          addressRegion: "Uttar Pradesh",
          postalCode: "201005",
          addressCountry: "IN",
        },
      },
    },
  };

  const whatsappMessage = encodeURIComponent(
    `Hi New Digital Era Academy, I am interested in joining the "${course.title}" (${course.duration} Offline Classroom Course). Please share upcoming batch dates and admission details.`
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b border-border/50">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/10 blur-[130px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-secondary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Course Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20">
                  <GraduationCap className="w-3.5 h-3.5" /> {course.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider border border-secondary/20">
                  <Calendar className="w-3.5 h-3.5" /> {course.duration} ({course.durationWeeks})
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-muted-foreground font-semibold text-xs border border-border">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Offline Classroom • Ghaziabad
                </span>
              </div>

              {/* Course Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.15]">
                {course.title.split("+")[0]}
                {course.title.includes("+") && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block mt-1">
                    +{course.title.split("+").slice(1).join("+")}
                  </span>
                )}
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {course.tagline}
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-10">
                <div className="p-3.5 rounded-2xl bg-card border border-border/70 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Duration</div>
                  <div className="text-base font-bold text-foreground">{course.duration}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-card border border-border/70 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Training Mode</div>
                  <div className="text-base font-bold text-primary">100% Offline</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-card border border-border/70 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Placement</div>
                  <div className="text-base font-bold text-secondary">100% Support</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-card border border-border/70 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Campus</div>
                  <div className="text-base font-bold text-foreground">Sahibabad</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                <a href="#enquire" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold shadow-xl shadow-primary/20 group">
                    Book Free Counselling <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a
                  href={`https://wa.me/919871264699?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-background/60 border-border hover:bg-card">
                    <MessageCircle className="w-5 h-5 mr-2 text-green-500" /> WhatsApp Admission Desk
                  </Button>
                </a>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-foreground ml-1.5">{course.rating}</span>
                </div>
                <span>•</span>
                <span>{course.reviewCount}</span>
                <span>•</span>
                <span className="font-medium text-foreground">{course.enrolledCount}</span>
              </div>
            </motion.div>

            {/* Right Column: Quick Application Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Fast-Track Admission
                </div>
                <h3 className="text-2xl font-bold mb-2">Book 1-on-1 Career Counselling</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Visit our Ghaziabad campus or speak with our academic counsellor to review the syllabus & batch dates.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Your Full Name</label>
                    <Input
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-muted/30 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Phone Number (WhatsApp)</label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 bg-muted/30 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Email Address</label>
                    <Input
                      required
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-muted/30 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Current Status</label>
                    <select
                      className="w-full h-12 rounded-md border border-border bg-muted/30 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    >
                      <option value="College Student / Graduate">College Student / Recent Graduate</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Career Switcher">Career Switcher</option>
                      <option value="Business Owner / Founder">Business Owner / Founder</option>
                      <option value="Freelancer">Freelancer</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full h-14 text-base font-bold shadow-lg shadow-primary/20 mt-2"
                  >
                    {formStatus === "submitting" ? "Sending Request..." : "Request Call Back & Syllabus"}
                  </Button>

                  {formStatus === "success" && (
                    <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center font-medium">
                      ✓ Thank you! Our career counselor will call you within 24 hours.
                    </div>
                  )}
                  {formStatus === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-medium">
                      Notice: Please reach us directly at +91 98712 64699.
                    </div>
                  )}

                  <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <a href="tel:+919871264699" className="hover:text-primary flex items-center gap-1.5 font-semibold">
                      <PhoneCall className="w-3.5 h-3.5 text-primary" /> +91 98712 64699
                    </a>
                    <span>Sahibabad, Ghaziabad</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STICKY QUICK-LINKS SUB-NAV */}
      <nav className="sticky top-[68px] z-30 bg-background/95 backdrop-blur-md border-b border-border hidden md:block">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-semibold">
            <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Overview</a>
            <a href="#eligibility" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Who Should Join</a>
            <a href="#outcomes" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Key Outcomes</a>
            <a href="#curriculum" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Month-wise Curriculum</a>
            <a href="#tools" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Tools & AI Stack</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Live Projects & Capstone</a>
            <a href="#career" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Career & Placements</a>
            <a href="#faqs" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">FAQs</a>
            <a href="#enquire" className="ml-auto text-primary hover:underline font-bold flex items-center gap-1 whitespace-nowrap">
              Enquire Now →
            </a>
          </div>
        </div>
      </nav>

      {/* 2. COURSE OVERVIEW */}
      <Section id="overview" className="bg-muted/10 border-b border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6">
              {course.overview.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {course.overview.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {course.overview.description}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              {course.overview.extendedDescription}
            </p>

            <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">Offline Classroom Environment in Ghaziabad</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Located at 3rd Floor, A-303, Sector 5, Sahibabad, Ghaziabad. High-speed labs, dedicated workstations, and direct access to instructors for instant doubt resolution.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.overview.metrics.map((metric, i) => (
              <div key={i} className="p-6 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{metric.label}</div>
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                    {metric.value}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. WHO SHOULD JOIN & ELIGIBILITY */}
      <Section id="eligibility" className="bg-background border-b border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider mb-4">
            Audience & Prerequisites
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Who Should Join & <span className="text-primary">Eligibility</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you are stepping into the digital ecosystem for the first time or looking to specialize in high-value capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Target Audience Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {course.whoShouldJoin.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-muted/20 border border-border hover:bg-card hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.target}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Eligibility Panel */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-card border border-border shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{course.eligibility.title}</h3>
                <span className="text-xs text-muted-foreground font-medium">Clear, accessible entry requirements</span>
              </div>
            </div>

            <ul className="space-y-4">
              {course.eligibility.items.map((criterion, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{criterion}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/50 bg-muted/20 p-4 rounded-2xl">
              <div className="text-xs font-bold text-foreground mb-1">Need Clarification?</div>
              <p className="text-xs text-muted-foreground mb-3">
                Talk to our academic team to assess whether this course fits your career aspirations.
              </p>
              <a href="tel:+919871264699" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Call +91 98712 64699 →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. KEY LEARNING OUTCOMES */}
      <Section id="outcomes" className="bg-muted/10 border-b border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
            Master High-Impact Skills
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Key Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Outcomes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What you will be equipped to execute with confidence upon completing this program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.keyOutcomes.map((outcome, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 font-black text-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-bold text-primary">
                <CheckCircle2 className="w-4 h-4" /> Agency-Verified Outcome
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. COMPLETE MONTH-WISE CURRICULUM */}
      <Section id="curriculum" className="bg-background border-b border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
            Structured Month-By-Month Progression
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Complete Month-Wise <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deeply specialized, non-repetitive modules designed around actual agency workflows and real-world execution.
          </p>
        </div>

        {/* Month Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {course.curriculum.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMonthIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMonthIndex === idx
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {m.month}: {m.title.length > 25 ? `${m.title.slice(0, 25)}...` : m.title}
            </button>
          ))}
        </div>

        {/* Active Month Detail Box */}
        <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                {course.curriculum[activeMonthIndex].month} • {course.curriculum[activeMonthIndex].hours}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                {course.curriculum[activeMonthIndex].title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {course.curriculum[activeMonthIndex].summary}
            </p>
          </div>

          {/* Modules List inside Active Month */}
          <div className="space-y-6">
            {course.curriculum[activeMonthIndex].modules.map((mod, mIdx) => (
              <div key={mIdx} className="p-6 rounded-2xl bg-muted/20 border border-border">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-black">
                    {mIdx + 1}
                  </span>
                  {mod.name}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-8">
                  {mod.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Bottom Action */}
          <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              Questions about this curriculum? Visit our Ghaziabad campus for a demo class.
            </div>
            <a href="#enquire">
              <Button variant="outline" className="h-11 px-6 text-sm font-bold bg-background">
                Download Detailed Syllabus PDF
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* 6. TOOLS & TECHNOLOGIES + AI TOOLS */}
      <Section id="tools" className="bg-muted/10 border-b border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
            The Complete Modern Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Industry Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI Workflows</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn with the exact software, platforms, and AI tools used daily by top agencies and global tech teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Industry Tools Grid */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-card border border-border shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Standard Industry Tools</h3>
                <span className="text-xs text-muted-foreground">Enterprise-grade platforms</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {course.tools.map((tool, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-muted/20 border border-border flex flex-col">
                  <span className="text-sm font-bold text-foreground">{tool.name}</span>
                  <span className="text-xs text-muted-foreground">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Grid */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-card border border-primary/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dedicated AI Superpowers</h3>
                <span className="text-xs text-secondary font-semibold">Generative AI tools integrated into training</span>
              </div>
            </div>

            <div className="space-y-3">
              {course.aiTools.map((ai, i) => (
                <div key={i} className="p-4 rounded-2xl bg-muted/30 border border-border flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <div>
                    <div className="text-sm font-bold text-foreground">{ai.name}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{ai.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. PRACTICAL ASSIGNMENTS, LIVE PROJECTS & CASE STUDIES */}
      <Section id="projects" className="bg-background border-b border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider mb-4">
            Hands-On Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Assignments, Live Projects & <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No dry theory. Work on live campaigns, analyze real client metrics, and build proof-of-work.
          </p>
        </div>

        {/* Practical Assignments */}
        <div className="mb-14">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" /> Hands-On Lab Assignments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.assignments.map((asgn, i) => (
              <div key={i} className="p-6 rounded-3xl bg-muted/20 border border-border hover:bg-card transition-all">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Assignment 0{i + 1}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{asgn.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{asgn.objective}</p>
                <div className="p-3 rounded-xl bg-card border border-border/60 text-xs text-muted-foreground flex items-center gap-2">
                  <span className="font-bold text-foreground">Deliverable:</span> {asgn.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Projects & Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Live Projects */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-primary" /> Live Client Projects
            </h3>
            <div className="space-y-6">
              {course.liveProjects.map((proj, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-bold text-foreground">{proj.title}</h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {proj.clientType}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{proj.objective}</p>
                  <div className="text-xs font-semibold text-secondary flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {proj.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Case Studies */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" /> Industry Case Studies Analyzed
            </h3>
            <div className="space-y-6">
              {course.caseStudies.map((cs, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-bold text-foreground">{cs.title}</h4>
                    <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {cs.metric}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cs.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8. FINAL CAPSTONE PROJECT */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-card via-card to-primary/5 border border-primary/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4 border border-primary/30">
              <Award className="w-3.5 h-3.5" /> Graduation Capstone Project
            </div>
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              {course.capstoneProject.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              {course.capstoneProject.description}
            </p>

            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Capstone Required Deliverables:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.capstoneProject.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
              <span className="px-3 py-1.5 rounded-xl bg-card border border-border">Timeline: {course.capstoneProject.timeline}</span>
              <span className="px-3 py-1.5 rounded-xl bg-card border border-border">Evaluated by Agency Directors</span>
              <span className="px-3 py-1.5 rounded-xl bg-card border border-border">Included in Student Portfolio</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. CERTIFICATION & CAREER OPPORTUNITIES */}
      <Section id="career" className="bg-muted/10 border-b border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
            Credential & Placement
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Certification & <span className="text-primary">Career Pathways</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Graduate with an agency-backed credential and access high-demand job roles and freelance opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Certification Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-card border border-border shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <FileCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{course.certification.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {course.certification.description}
            </p>

            <div className="space-y-3 mb-6">
              {course.certification.accreditations.map((acc, aIdx) => (
                <div key={aIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 border border-border/50 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
              Issued by <strong className="text-foreground">{course.certification.issuer}</strong> upon successful capstone defense and lab assessments.
            </div>
          </div>

          {/* Job Roles & Salary Packages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> Target Job Roles & Salary Benchmarks
              </h3>

              <div className="space-y-4">
                {course.career.roles.map((job, jIdx) => (
                  <div key={jIdx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-muted/20 border border-border gap-2">
                    <div>
                      <div className="text-base font-bold text-foreground">{job.role}</div>
                      <div className="text-xs text-muted-foreground font-medium">{job.exp}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-primary">{job.salaryRange}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Expected Package</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Freelancing Box */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary" /> Global Freelancing & Remote Gigs
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Earning Potential: <strong className="text-foreground">{course.career.freelancing.earningPotential}</strong>
              </p>

              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">High-Ticket Services You Can Offer:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.career.freelancing.typicalServices.map((serv, sIdx) => (
                    <div key={sIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground font-bold">Platforms:</span>
                {course.career.freelancing.platforms.map((plat, pIdx) => (
                  <span key={pIdx} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted border border-border text-foreground">
                    {plat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 10. INTERVIEW & PLACEMENT SUPPORT */}
        <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-black mb-2">100% Placement & Interview Preparation</h3>
            <p className="text-sm text-muted-foreground">
              Our dedicated career team helps you bridge the gap between classroom training and your first appointment letter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {course.career.placement.steps.map((step, stIdx) => (
              <div key={stIdx} className="p-6 rounded-2xl bg-muted/20 border border-border flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mb-4">
                    Step {stIdx + 1}
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-border/50">
            {course.career.placement.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. FAQS */}
      <Section id="faqs" className="bg-background border-b border-border/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Course <span className="text-primary">FAQs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about duration, curriculum, campus, and placements.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {course.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* 12. STRONG ENQUIRY & CONTACT CTA SECTION */}
      <section id="enquire" className="py-24 relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 bg-foreground overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 blur-[140px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4 text-primary" /> Admissions Open for Upcoming Batches
              </div>
              <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight text-white">
                Launch Your Career in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {course.title}
                </span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Take the first step toward high-income skills. Meet our mentors, inspect our lab facilities in Sahibabad (Ghaziabad), and book a free career counselling session today.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">Direct Admission Desk</div>
                    <a href="tel:+919871264699" className="text-xl font-bold text-white hover:text-primary transition-colors">
                      +91 98712 64699
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">Campus Address</div>
                    <div className="text-sm font-medium text-white/80">
                      3rd Floor, A-303, Sector 5, Sahibabad, Ghaziabad, UP 201005
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Registration Card */}
            <div className="lg:col-span-6 p-8 md:p-10 rounded-3xl bg-card text-foreground border border-border shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Book Your Free Counselling Seat</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill the quick form below. Our academic counsellor will reach out within 24 hours.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Full Name</label>
                    <Input
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-muted/30 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Phone Number</label>
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

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Email Address</label>
                  <Input
                    required
                    type="email"
                    placeholder="priya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-muted/30 border-border"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Select Program</label>
                  <Input
                    readOnly
                    value={`${course.title} (${course.duration})`}
                    className="h-12 bg-muted/50 border-border text-foreground font-semibold"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full h-14 text-base font-bold shadow-xl shadow-primary/20"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Submit Application"}
                  </Button>
                  <a
                    href={`https://wa.me/919871264699?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full sm:w-auto h-14 px-6 text-sm font-bold bg-muted/30 border-border hover:bg-muted"
                    >
                      <MessageCircle className="w-5 h-5 text-green-500 mr-2" /> WhatsApp
                    </Button>
                  </a>
                </div>

                {formStatus === "success" && (
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center font-medium">
                    ✓ Thank you! Your counselling request has been received. Our team will contact you shortly.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-medium">
                    Please call us directly at +91 98712 64699 or WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data Schemas */}
      <Script id={`course-faq-schema-${course.slug}`} type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id={`course-info-schema-${course.slug}`} type="application/ld+json">
        {JSON.stringify(courseJsonLd)}
      </Script>
    </div>
  );
}
