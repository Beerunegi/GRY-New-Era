import { ContactHero } from "@/components/sections/contact-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | New Digital Era",
  description: "Get in touch with our expert digital marketing and development team. Let's discuss how we can accelerate your business growth today.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      {/* Reusing our robust contact section that contains the actual form */}
      <div className="pb-16 bg-background">
        <ContactSection />
      </div>
    </div>
  );
}
