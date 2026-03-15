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
    question: "Why do I need Google Tag Manager if I have Google Analytics?",
    answer: "Google Analytics (GA4) is where you view your data; Google Tag Manager (GTM) is how you send the data there. GTM allows us to deploy multiple tracking pixels (Meta, Google Ads, TikTok) and custom event tracking rapidly without needing developer intervention to edit website code."
  },
  {
    question: "Are you experienced with GA4 migrations?",
    answer: "Yes. With the complete deprecation of Universal Analytics, we specialize in building highly customized GA4 properties that replicate necessary historical reports while leveraging GA4's superior event-based tracking structure."
  },
  {
    question: "What is Server-Side Tracking?",
    answer: "Server-side tracking moves the tracking pixel from the user's browser (client-side) to a secure cloud server. This bypasses ad-blockers, improves website load speed, and ensures more accurate conversion data is sent back to ad platforms despite iOS update restrictions."
  },
  {
    question: "What is Google Consent Mode v2?",
    answer: "Consent Mode is a framework that allows your website's tracking tags to behave based on the consent choices of your users (like cookie banners). V2 is now mandatory for advertisers using Google Ads in certain regions to ensure compliance with privacy regulations like GDPR."
  },
  {
    question: "Can you fix my current tracking setup?",
    answer: "Absolutely. Most of our analytics engagements begin with a comprehensive audit of existing GTM containers and GA properties to fix double-counting, clean up naming conventions, and restore data integrity."
  }
];

export function AnalyticsFAQ() {
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
            Tracking <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Answers to common questions about GA4, GTM, and conversion tracking.
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
