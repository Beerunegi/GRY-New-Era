"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Vikram Sharma",
    role: "Founder & CEO",
    bio: "Over 15 years of experience in scaling digital brands and growth hacking.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    bio: "Specializes in full-funnel marketing strategies and consumer behavior analysis.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Marcus Chen",
    role: "Design Director",
    bio: "Award-winning UI/UX designer focused on creating premium digital experiences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "SEO Specialist",
    bio: "Technical SEO expert who has ranked over 500+ websites on the first page.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];

export function TeamSection() {
  return (
    <Section id="team" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Meet the <span className="text-primary">Experts</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Our team is composed of industry leaders who are passionate about data, design, and your success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-muted shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="flex gap-4">
                  <Link href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
