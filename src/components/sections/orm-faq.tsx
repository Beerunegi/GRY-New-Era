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
    question: "Can you delete bad reviews from Google or Yelp?",
    answer: "We cannot directly delete reviews unless they violate the platform's terms of service (e.g., fake reviews, hate speech). If they do, we flag and petition for removal. If they are legitimate, our strategy shifts to suppression by overwhelming the platform with genuine, positive reviews from your happy customers."
  },
  {
    question: "How long does reputation repair take?",
    answer: "Timelines vary drastically based on the severity of the negative content and the authority of the domains hosting it. Review generation can show impact in weeks, while suppressing a negative article from a high-authority news site via reverse-SEO can take 3 to 6 months."
  },
  {
    question: "What is Reverse-SEO (Suppression)?",
    answer: "Reverse SEO involves creating and ranking positive or neutral content (like new websites, social profiles, PR articles, and directory listings) to push negative search results off the first page of Google, where very few people ever look."
  },
  {
    question: "Do you respond to reviews on our behalf?",
    answer: "Yes. We work with you to develop a brand voice matrix and response templates. Our team can then monitor and respond to all positive and negative reviews across platforms like Google, Yelp, and Facebook, ensuring professional and timely communication."
  },
  {
    question: "Is reputation management a one-time fix?",
    answer: "While we can solve immediate crises, ORM is best treated as an ongoing insurance policy. Continuous monitoring and review generation ensure that your brand is protected against future attacks and algorithmic shifts."
  }
];

export function ORMFAQ() {
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
            Reputation <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-80">
            Common questions regarding content suppression and review management.
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
