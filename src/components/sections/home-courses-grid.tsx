"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Star,
  Layers,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { COURSES_DATA } from "@/lib/courses-data";

const categories = [
  { id: "all", label: "All 7 Courses", count: 7 },
  { id: "core", label: "Core Courses (6M)", count: 2 },
  { id: "bridge", label: "Bridge Courses (3M)", count: 2 },
  { id: "dedicated", label: "Dedicated Specialists (6M)", count: 3 },
];

export function HomeCoursesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allCourses = Object.values(COURSES_DATA);

  const filteredCourses = allCourses.filter((course) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "core") return course.category === "Core Courses";
    if (selectedCategory === "bridge") return course.category === "Bridge Courses";
    if (selectedCategory === "dedicated") return course.category === "Dedicated Courses";
    return true;
  });

  return (
    <Section id="courses-grid" className="bg-muted/10 border-b border-border/50">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
          <GraduationCap className="w-3.5 h-3.5" /> Career-Transforming Curriculum
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">7 Offline Programs</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Every course is 100% practical, conducted in our Sahibabad, Ghaziabad classroom labs, and backed by complete placement support.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, idx) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group relative"
          >
            <div>
              {/* Badges Top Bar */}
              <div className="flex justify-between items-center gap-2 mb-4">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider border border-primary/20">
                  {course.category}
                </span>
                <span className="text-xs font-bold text-foreground px-2.5 py-1 rounded-full bg-muted border border-border flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-secondary" /> {course.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {course.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {course.tagline}
              </p>

              {/* Highlight Pillars */}
              <div className="mb-6 pt-6 border-t border-border/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-primary" /> Key Curriculum Pillars:
                </div>
                <div className="space-y-2">
                  {course.curriculum.slice(0, 3).map((m, mIdx) => (
                    <div key={mIdx} className="text-xs text-foreground/90 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="truncate">{m.title}</span>
                    </div>
                  ))}
                  {course.curriculum.length > 3 && (
                    <div className="text-xs text-primary font-semibold pl-3.5">
                      + {course.curriculum.length - 3} more comprehensive months
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-muted/40 border border-border text-muted-foreground">
                  100% Offline Lab
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-muted/40 border border-border text-muted-foreground">
                  Live Project
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary font-bold">
                  Placement Support
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-border/50 mt-auto flex flex-col gap-3">
              <Link href={`/courses/${course.slug}`}>
                <Button className="w-full h-12 rounded-xl text-sm font-bold shadow-md shadow-primary/20 group/btn">
                  View Syllabus & Details <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#register">
                <Button variant="outline" className="w-full h-11 rounded-xl text-xs font-bold bg-muted/20 border-border hover:bg-muted text-muted-foreground hover:text-foreground">
                  Enquire for Next Batch
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
