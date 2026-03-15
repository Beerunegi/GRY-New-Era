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
    question: "Do you provide industry-specific content writers?",
    answer: "Yes, we match your project with writers who have domain expertise in your specific niche, whether it's technology, healthcare, finance, or lifestyle."
  },
  {
    question: "How do you ensure the content is SEO-friendly?",
    answer: "Every piece of content undergoes a rigorous SEO audit including keyword placement, meta optimization, internal linking, and semantic entity analysis."
  },
  {
    question: "Can you help promote the content after it's published?",
    answer: "Certainly. We offer distribution services including social media promotion, email marketing integration, and strategic outreach for backlinks."
  },
  {
    question: "What is your typical turnaround time for a blog post?",
    answer: "Standard turnaround for a well-researched 1,500-word blog post is 3-5 business days from brief approval to final draft."
  },
  {
    question: "Do you offer content repurposing services?",
    answer: "Yes, we can turn a single high-impact blog post into social media snippets, email newsletters, and video scripts to maximize your ROI."
  }
];

export function ContentFAQ() {
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
            Content <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-80">
            Common questions about our content strategy and production process.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (

              <AccordionItem key={i} value={`item-${i}`} className="border-border/50 px-4">
                <AccordionTrigger className="text-left font-bold py-6 hover:text-primary transition-colors text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
          ))}
        </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}
