"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@newdigitalera.in";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
};

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const payload = new FormData();
    payload.append("firstName", formData.firstName.trim());
    payload.append("lastName", formData.lastName.trim());
    payload.append("name", `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim());
    payload.append("email", formData.email.trim());
    payload.append("service", formData.service);
    payload.append("message", formData.message.trim());
    payload.append("_subject", "New Digital Era contact form enquiry");
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
        message: "Your request has been sent successfully. We will get back to you shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not send your request right now. Please try again or email info@newdigitalera.in.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-base mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Start a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-balance">
            Whether you need a complete digital overhaul or targeted performance marketing, our experts are ready to strategize.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                <p className="text-muted-foreground">3rd floor, A-303, Sector 5<br/>Sahibabad, Ghaziabad, Uttar Pradesh 201005</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-muted-foreground">9871264699</p>
                <p className="text-base text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-muted-foreground">info@newdigitalera.in</p>
                <p className="text-base text-muted-foreground">We usually respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-base font-medium">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-base font-medium">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-medium">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-base font-medium">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground appearance-none"
              >
                <option value="">Select a service</option>
                <option value="seo">SEO & Content</option>
                <option value="ppc">Paid Ads (PPC)</option>
                <option value="smm">Social Media Marketing</option>
                <option value="web">Web Design & Dev</option>
                <option value="course">Digital Marketing Course</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us about your goals, current challenges, and timeline..."
              />
            </div>

            {status.type !== "idle" ? (
              <p
                className={`text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}
                aria-live="polite"
              >
                {status.message}
              </p>
            ) : null}

            <Button size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending Request..." : "Submit Request"}
              <Send className="w-5 h-5 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
