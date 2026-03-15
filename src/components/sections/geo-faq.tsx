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
    question: "What is the difference between SEO and GEO?",
    answer: "Traditional SEO focuses on ranking websites in a list of search results based on keywords. GEO (Generative Engine Optimization) focuses on getting your brand's information accurately synthesized and cited by AI models (like ChatGPT or Gemini) when a user asks a question."
  },
  {
    question: "How long does it take to see GEO results?",
    answer: "GEO is a continuous process. While some technical schema updates can show impact in a few weeks, model citation frequency typically requires 3-6 months of consistent data structuring and authority building."
  },
  {
    question: "Which AI models do you optimize for?",
    answer: "We optimize for all major Large Language Models (LLMs) including OpenAI (ChatGPT), Google (Gemini/SGE), Anthropic (Claude), and Meta (Llama), as well as dedicated AI answer engines like Perplexity."
  },
  {
    question: "Does GEO replace traditional SEO?",
    answer: "No, GEO complements SEO. While search habits are shifting to AI, traditional search still exists. Use GEO to future-proof your visibility while maintaining your current rankings."
  },
  {
    question: "What is Entity SEO and how does it relate to GEO?",
    answer: "Entity SEO is the practice of helping search engines and AI models understand 'things' (entities) rather than just 'strings' (keywords). It is the backbone of GEO because AI models rely on established knowledge graphs of entities."
  }
];

export function GEOFAQ() {
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
            GEO <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Answers to common questions about the future of search and AI optimization.
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
