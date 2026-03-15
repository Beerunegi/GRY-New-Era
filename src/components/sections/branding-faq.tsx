"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in a Brand Identity package?",
    answer: "A full brand identity package typically includes a primary logo, secondary marks, typography selection, color palette definition, brand guidelines (a PDF rulebook), and basic collateral like business card designs or letterheads."
  },
  {
    question: "Do we own the rights to the designs?",
    answer: "Yes. Once the final payment is made, full copyright ownership of the final selected logo and designs is transferred entirely to you. We provide all raw vector files (AI, EPS, SVG) for your control."
  },
  {
    question: "How long does a branding project take?",
    answer: "A standard logo and brand identity project takes between 3 to 6 weeks. This timeline ensures we have enough time for the research, design, and necessary feedback/revision loops."
  },
  {
    question: "Do you offer 'just a logo'?",
    answer: "We offer standalone logo design; however, we highly recommend investing in the visual identity framework (fonts, colors, rules) as a logo cannot do the heavy lifting of a brand on its own."
  },
  {
    question: "Can you rebrand an existing business?",
    answer: "Yes, rebranding is one of our specialties. We will analyze what visual equity is worth keeping from your old brand to avoid alienating existing customers, while modernizing your look for future growth."
  }
];

export function BrandingFAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Section variant="compact" className="bg-muted/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Branding <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Common questions about our creative process and deliverables.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${i}`} className="border-border/50 px-4">
                <AccordionTrigger className="text-left font-bold py-6 hover:text-primary transition-colors text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
