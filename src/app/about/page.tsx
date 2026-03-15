import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { TeamSection } from "@/components/sections/team-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | New Digital Era",
  description: "Learn about the mission, vision, and the expert team behind New Digital Era, a leading digital growth agency.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutStory />
      <WhyUsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
