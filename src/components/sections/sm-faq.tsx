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
    question: "Do you create the content or do we provide it?",
    answer: "We offer both! Most clients prefer our all-in-one package where we handle everything from photography to captions, but we can also manage accounts using your existing assets."
  },
  {
    question: "Which platforms should my business be on?",
    answer: "It depends on your target audience. B2B brands typically thrive on LinkedIn and Twitter, while e-commerce and lifestyle brands see the best results on Instagram and TikTok."
  },
  {
    question: "How often will you post on my channels?",
    answer: "Consistency is key. Our standard strategy involves 3-5 high-quality posts per week per platform, plus daily story engagement to keep your brand top-of-mind."
  },
  {
    question: "Do you handle influencer relationships?",
    answer: "Yes, we handle the entire process: from identifying the right influencers and negotiating contracts to managing the creative direction and reporting on the final impact."
  },
  {
    question: "How do you measure Social Media success?",
    answer: "We look beyond 'vanity metrics' like likes. We focus on engagement rates, story views, website click-throughs, and actual conversion attribution."
  }
];

export function SMFAQ() {
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
            Social <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Answers to common questions about our social media management and brand growth strategies.
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
      <Script id="sm-faq-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </Section>
  );
}
