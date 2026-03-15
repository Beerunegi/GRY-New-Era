"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { 
  Users, 
  MapPin, 
  Laptop, 
  FileCheck, 
  Briefcase, 
  MessagesSquare 
} from "lucide-react";

const features = [
  {
    title: "100% Offline Training",
    description: "Learn in a professional environment at our Ghaziabad institute with face-to-face interaction.",
    icon: MapPin,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Hands-on Practical",
    description: "No boring lectures. 80% of our course is spent working on live tools and real marketing accounts.",
    icon: Laptop,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    title: "Global Certification",
    description: "Get industry-recognized certificates from Google, Meta, Hubspot, and New Digital Era Academy.",
    icon: FileCheck,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Placement Assistance",
    description: "Dedicated HR wing to help you with resume building, mock interviews, and job placements.",
    icon: Briefcase,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    title: "Small Batch Sizes",
    description: "We limit batches to 15 students to ensure personalized attention for everyone.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Lifetime Support",
    description: "Join our alumni network and get support even after you complete the course.",
    icon: MessagesSquare,
    color: "text-secondary",
    bg: "bg-secondary/10"
  }
];

export function CourseFeatures() {
  return (
    <Section className="bg-muted/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Why Learn at <span className="text-primary">New Digital Era?</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          We provide more than just a course; we provide a career-launching ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-border flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
              <feature.icon className={`w-8 h-8 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
