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
    question: "How long until I see results from PPC?",
    answer: "Unlike SEO, PPC delivers almost instant traffic. Once your campaigns are live and approved, your ads will start appearing in front of your target audience immediately."
  },
  {
    question: "What is a good ROAS for my business?",
    answer: "A 'good' ROAS depends on your industry and profit margins. Generally, a 4:1 ROAS (meaning $4 revenue for every $1 spent) is considered healthy for most e-commerce businesses."
  },
  {
    question: "Do you manage my ad spend budget directly?",
    answer: "No, you pay the advertising platforms (Google, Meta, etc.) directly using your own billing method. We charge a separate management fee for our expert optimization services."
  },
  {
    question: "Can I track exactly where my money is going?",
    answer: "Absolutely. We provide real-time dashboards and monthly reports that show every cent spent, every click received, andทุก conversion generated down to the keyword level."
  },
  {
    question: "How do you prevent 'Click Fraud'?",
    answer: "We use advanced click fraud detection tools and monitor IP addresses to identify and block suspicious traffic, ensuring your budget is spent only on real potential customers."
  }
];

export function PPCFAQ() {
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
            PPC <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Common questions about our paid advertising services and how we handle your budget.
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
      <Script id="ppc-faq-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </Section>
  );
}
