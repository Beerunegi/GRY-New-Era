"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, Phone, Search } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@newdigitalera.in";

type AuditFeature = {
  icon: "globe" | "search" | "phone";
  eyebrow: string;
  text: string;
};

type AuditSectionProps = {
  id?: string;
  badge?: string;
  title?: string;
  description?: string;
  formTitle?: string;
  formDescription?: string;
  submitLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  subject?: string;
  features?: AuditFeature[];
};

type AuditFormData = {
  name: string;
  websiteUrl: string;
  mobileNumber: string;
  email: string;
};

const initialFormData: AuditFormData = {
  name: "",
  websiteUrl: "",
  mobileNumber: "",
  email: "",
};

const defaultFeatures: AuditFeature[] = [
  {
    icon: "globe",
    eyebrow: "Website review",
    text: "SEO, UX, and performance signals",
  },
  {
    icon: "search",
    eyebrow: "Actionable findings",
    text: "Clear next steps your team can use",
  },
  {
    icon: "phone",
    eyebrow: "Quick follow-up",
    text: "A strategist will reach out directly",
  },
];

function getFeatureIcon(icon: AuditFeature["icon"]) {
  if (icon === "globe") {
    return Globe;
  }

  if (icon === "phone") {
    return Phone;
  }

  return Search;
}

export function AuditSection({
  id = "free-audit",
  badge = "Free Website Audit",
  title = "Find the growth leaks holding your website back.",
  description = "Share your details and we'll review your website for visibility, speed, conversion gaps, and quick-win improvements.",
  formTitle = "Get Your Free Audit",
  formDescription = "Fill in the form below and our team will get back to you with an initial audit review.",
  submitLabel = "Request Free Audit",
  successMessage = "Your audit request has been sent. Our team will review it and contact you soon.",
  errorMessage = "We could not send your audit request right now. Please try again or email info@newdigitalera.in.",
  subject = "New Digital Era free audit request",
  features = defaultFeatures,
}: AuditSectionProps) {
  const [formData, setFormData] = useState<AuditFormData>(initialFormData);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const payload = new FormData();
    payload.append("name", formData.name.trim());
    payload.append("websiteUrl", formData.websiteUrl.trim());
    payload.append("mobileNumber", formData.mobileNumber.trim());
    payload.append("email", formData.email.trim());
    payload.append("_subject", subject);
    payload.append("_template", "table");
    payload.append("_captcha", "false");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message: successMessage,
      });
    } catch {
      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id={id} className="relative overflow-hidden bg-muted/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Search className="h-4 w-4" />
            {badge}
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          <p className="mb-8 text-lg text-muted-foreground text-balance">{description}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = getFeatureIcon(feature.icon);

              return (
                <div key={feature.eyebrow} className="rounded-2xl border border-white/10 bg-background/70 p-5">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">{feature.eyebrow}</p>
                  <p className="mt-1 font-semibold">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-background/85 p-6 shadow-2xl shadow-primary/10 backdrop-blur sm:p-8"
        >
          <h3 className="mb-2 text-2xl font-bold">{formTitle}</h3>
          <p className="mb-6 text-muted-foreground">{formDescription}</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="audit-name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="audit-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-muted/70 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="audit-website" className="text-sm font-medium">
                Website URL
              </label>
              <input
                id="audit-website"
                name="websiteUrl"
                type="url"
                value={formData.websiteUrl}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-muted/70 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="audit-mobile" className="text-sm font-medium">
                Mobile Number
              </label>
              <input
                id="audit-mobile"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-muted/70 px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="audit-email" className="text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="audit-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-muted/70 pl-11 pr-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {status.type !== "idle" ? (
              <p
                className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
                aria-live="polite"
              >
                {status.message}
              </p>
            ) : null}

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : submitLabel}
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
