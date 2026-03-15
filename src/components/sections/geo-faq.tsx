"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Script from "next/script";

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "GEO is a strategy focused on optimizing your digital presence for generative AI engines like ChatGPT, Gemini, and Google AI Overviews. It ensures your brand is accurately cited and recommended in AI-generated responses."
  },
  {
    question: "How does GEO differ from traditional SEO?",
    answer: "While SEO focuses on ranking links on search engine results pages (SERPs), GEO focuses on being the primary source of truth that AI models use to generate direct answers for users."
  },
  {
    question: "Why should my business invest in GEO now?",
    answer: "Search behavior is shifting towards AI-powered chat interfaces. Adopting GEO early ensures you capture market share in these new discovery channels before your competitors do."
  },
  {
    question: "Can GEO and SEO work together?",
    answer: "Absolutely. In fact, a strong SEO foundation is often a prerequisite for effective GEO. We build strategies that target both traditional search ranking and AI visibility simultaneously."
  },
  {
    question: "How do you measure success in GEO?",
    answer: "We track brand mentions in AI outputs, sentiment and accuracy of those mentions, referral traffic from AI platforms, and overall visibility within generative engine responses."
  }
];

export function GEOFAQ() {
  // Construct JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Section variant="compact" className="bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            GEO <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-80">
            Answers to common questions about Generative Engine Optimization.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 text-left">
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

      {/* Structured Data */}
      <Script id="geo-faq-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </Section>
  );
}