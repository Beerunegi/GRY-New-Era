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

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Generally, SEO is a long-term strategy. Most businesses start seeing significant improvements in rankings and traffic within 3 to 6 months of consistent optimization."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "Ethical SEO agencies do not guarantee specific rankings, as search algorithms are constantly evolving. However, we do guarantee a data-driven approach that significantly improves your visibility and competitive position."
  },
  {
    question: "What is the difference between On-Page and Off-Page SEO?",
    answer: "On-Page SEO involves optimizing elements within your website like content and structure. Off-Page SEO focuses on building authority through backlinks and external signals."
  },
  {
    question: "Is Local SEO important for my business?",
    answer: "If you have a physical location or serve a specific geographic area, Local SEO is critical. It helps you appear in 'near me' searches and Google Maps, driving high-intent local traffic."
  },
  {
    question: "How do you track the success of an SEO campaign?",
    answer: "We use advanced tools like Google Analytics 4, Search Console, and SEMrush to track KPIs such as organic traffic growth, keyword rankings, conversion rates, and ROI."
  }
];

export function SEOFAQ() {
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
            SEO <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Common questions about our SEO services and growth results.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </Section>
  );
}
