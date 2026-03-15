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
    question: "What is a good conversion rate for my industry?",
    answer: "Conversion rates vary significantly by industry, ranging from 1% to over 10%. We benchmark your site against industry standards and focus on continuous improvement from your current baseline."
  },
  {
    question: "How long does it take to see results from CRO?",
    answer: "Initial insights from behavioral analysis often appear within the first 2-3 weeks. However, significant conversion lift usually requires 2-3 months of iterative A/B testing to reach statistical significance."
  },
  {
    question: "Do I need a lot of traffic for CRO to be effective?",
    answer: "While more traffic allows for faster testing, CRO is effective for sites of all sizes. For lower traffic sites, we focus on high-impact UX improvements and qualitative user feedback to drive growth."
  },
  {
    question: "What tools do you use for conversion optimization?",
    answer: "We use a combination of industry-leading tools including Google Analytics 4, Hotjar, Microsoft Clarity, VWO, and custom A/B testing frameworks to gather and analyze data."
  },
  {
    question: "Will CRO interfere with my SEO strategy?",
    answer: "Not at all. In fact, CRO and SEO work hand-in-hand. Better user experience and engagement are positive signals for search engines, often leading to improved rankings."
  }
];

export function CROFAQ() {
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
            Conversion <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Answers to common questions about our conversion rate optimization process.
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
