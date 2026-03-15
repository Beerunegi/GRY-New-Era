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
    question: "What email marketing platforms do you work with?",
    answer: "We are platform-agnostic and work with all major ESPs including Klaviyo, Mailchimp, HubSpot, ActiveCampaign, and Omnisend, selecting the best fit for your specific business needs."
  },
  {
    question: "How do you avoid ending up in the spam folder?",
    answer: "We implement strict technical protocols (DKIM, DMARC, SPF), maintain clean subscriber lists, avoid spam-trigger words, and ensure high engagement rates—which tells ESPs your emails are wanted."
  },
  {
    question: "Do you provide the content and design for the emails?",
    answer: "Yes, our service is end-to-end. Our copywriters craft the messaging, our designers create the visual assets, and our strategists handle the technical build and deployment."
  },
  {
    question: "What are automated flow campaigns?",
    answer: "Flows are automated sequences triggered by user behavior. Examples include a 3-part welcome series when someone subscribes, or a sequence aimed at recovering a cart they abandoned on your site."
  },
  {
    question: "How do you grow my email subscriber list?",
    answer: "We implement conversion rate optimization on your website, utilizing lead magnets, strategic pop-ups, embedded forms, and targeted landing pages to ethically and legally capture visitor emails."
  }
];

export function EmailFAQ() {
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
            Email Strategy <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-base text-muted-foreground opacity-80">
            Common questions regarding our email marketing and automation services.
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
