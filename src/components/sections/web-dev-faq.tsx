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
    question: "How long does it take to develop a custom website?",
    answer: "Development timelines vary based on complexity. A standard business website typically takes 4-6 weeks, while complex web applications or eCommerce stores can take 8-12+ weeks from discovery to launch."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We primarily work with modern stacks including React, Next.js, and TypeScript for front-end performance. For CMS needs, we use WordPress, Shopify, or Headless CMS solutions like Sanity and Contentful."
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer: "Absolutely. Every website we build is fully responsive by default and follows strict SEO-friendly coding practices to ensure your brand is accessible and discoverable from day one."
  },
  {
    question: "Do you provide ongoing maintenance and post-launch support?",
    answer: "Yes, we offer monthly maintenance plans that cover security updates, cloud backups, speed optimization, and technical support to ensure your website continues to perform at its peak."
  },
  {
    question: "Can you help migrate my existing website to a new platform?",
    answer: "Yes, we specialize in seamless migrations from platforms like older WordPress versions, Magento, or custom legacy systems to modern architectures with full data and SEO integrity preservation."
  }
];

export function WebDevFAQ() {
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
            Development <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Everything you need to know about our web development process and standards.
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
