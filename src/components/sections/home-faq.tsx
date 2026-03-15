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
    question: "What digital marketing services do you offer?",
    answer: "We offer a comprehensive suite of digital marketing services including SEO, PPC Advertising, Social Media Management, Content Marketing, Web Development, and Conversion Rate Optimization."
  },
  {
    question: "How do you measure the success of a digital marketing campaign?",
    answer: "We track key performance indicators such as website traffic, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), and overall ROI using advanced analytics tools and custom dashboards."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Timelines vary by service. SEO typically takes 3-6 months to show significant impact, while paid campaigns like PPC or Social Ads can generate targeted leads almost immediately."
  },
  {
    question: "Do you work with small businesses or only large enterprises?",
    answer: "We partner with businesses of all sizes. We tailor our strategies and budgets to fit your specific goals, whether you are a local startup or an expanding global brand."
  },
  {
    question: "Why should I choose your agency over others?",
    answer: "We combine data-driven strategies with creative excellence, offering transparent reporting, dedicated account managers, and a proven track record of driving measurable growth for our clients."
  },
  {
    question: "Can you help improve my website's conversion rate?",
    answer: "Absolutely. Our Conversion Rate Optimization (CRO) experts analyze user behavior, run A/B tests, and optimize your site's design and copy to turn more visitors into successful conversions."
  }
];

export function HomeFAQ() {
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
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-80">
            Common questions about our digital marketing services and process.
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
                <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
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
