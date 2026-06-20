import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { TeamSection } from "@/components/sections/team-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "About Our Ghaziabad Digital Marketing Team", description: "Meet New Digital Era, a Ghaziabad digital marketing team helping businesses across Delhi NCR and India grow through accountable strategy, technology and creative execution.", path: "/about", keywords: ["digital marketing company Ghaziabad", "New Digital Era Ghaziabad", "digital marketing team Delhi NCR"] });

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
