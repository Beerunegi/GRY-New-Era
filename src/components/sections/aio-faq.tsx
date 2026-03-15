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
    question: "What is AI Optimization (AIO)?",
    answer: "AIO is the process of optimizing your digital presence specifically for AI search engines and Large Language Models. Unlike traditional SEO, which focuses on link clicks, AIO focuses on being cited as a source of truth in AI-generated answers."
  },
  {
    question: "Is AIO different from traditional SEO?",
    answer: "Yes. While technical health is shared, AIO focuses more on semantic relevance, entity clarity, and structured data that models like GPT-4 and Gemini can ingest easily."
  },
  {
    question: "How long does it take for AI models to pick up my brand?",
    answer: "AI models have different update frequencies. Some browse the live web (Perplexity), while others have training cutoffs. Our strategy ensures you are visible to live-browsing models within weeks while building long-term authority for core training data."
  },
  {
    question: "Does AIO replace my current SEO strategy?",
    answer: "No, AIO complements SEO. Traditional search is still huge, but AI search is growing twice as fast. A unified strategy (Search + AI) is the best way to ensure maximum digital dominance."
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is a subset of AIO specifically focused on generative summaries. We use linguistic and semantic techniques to ensure your brand is mentioned in the first few sentences of an AI's response."
  }
];

export function AIOFAQ() {
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
            AI Optimization <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Answers to common questions about the future of search and how your brand can stay ahead.
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
                <AccordionContent className="text-muted-foreground text-sm pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Structured Data */}
      <Script id="aio-faq-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </Section>
  );
}
