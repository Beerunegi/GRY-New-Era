"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";
import { HelpCircle } from "lucide-react";

const academyFaqs = [
  {
    question: "Are these courses 100% offline classroom training in Ghaziabad?",
    answer:
      "Yes, all 7 programs are conducted 100% offline in our modern computer labs located at 3rd Floor, A-303, Sector 5, Sahibabad, Ghaziabad (Delhi NCR). You learn in person with dedicated workstations, high-speed agency lab infrastructure, and immediate face-to-face mentor guidance.",
  },
  {
    question: "Do I need any prior coding or marketing experience to join?",
    answer:
      "No prior experience is required. All our programs are structured from foundational concepts up to advanced execution. Whether you come from an Arts, Commerce, Science, or Engineering background, our agency mentors teach step-by-step with practical hands-on labs.",
  },
  {
    question: "How does the 100% placement assistance work?",
    answer:
      "Our dedicated HR placement wing supports you throughout your final month with professional resume rebuilding, LinkedIn optimization, mock technical and HR interview rounds, portfolio website reviews, and direct interview scheduling with our network of digital agencies, D2C brands, and tech companies across Delhi NCR.",
  },
  {
    question: "What are the batch timings and student-to-mentor ratios?",
    answer:
      "We offer both weekday morning/afternoon batches and dedicated weekend batches for working professionals. To guarantee individualized attention, we strictly limit each batch to a maximum of 15 students.",
  },
  {
    question: "Can I attend a free demo class or career counselling session?",
    answer:
      "Yes! We encourage every prospective student to visit our Sahibabad campus, inspect our computer lab facilities, review the comprehensive month-wise syllabus, and sit down with our senior academic counsellor for a free 1-on-1 career mapping session.",
  },
  {
    question: "Will I receive industry-recognized certifications upon completion?",
    answer:
      "Yes. Upon completing your practical assignments and defending your capstone project, you earn the New Digital Era Academy Diploma, along with preparation and alignment for global credentials from Google, Meta, HubSpot, Semrush, and Shopify.",
  },
];

export function AcademyFAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: academyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section id="faqs" className="bg-background border-b border-border/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Academy <span className="text-primary">FAQs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Frequently asked questions about our offline batches, campus facilities, curriculum, and placement assistance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {academyFaqs.map((faq, i) => (
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
        </motion.div>
      </div>

      <Script id="academy-faq-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </Section>
  );
}
