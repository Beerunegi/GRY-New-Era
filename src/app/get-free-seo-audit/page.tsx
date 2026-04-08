import type { Metadata } from "next";
import Image from "next/image";
import { Search, LineChart, CheckCircle2 } from "lucide-react";
import { AuditSection } from "@/components/sections/audit-section";

export const metadata: Metadata = {
  title: "Get Free SEO Audit | New Digital Era",
  description:
    "Request a free SEO audit from New Digital Era and discover ranking gaps, on-page issues, and fast organic growth opportunities.",
};

export default function GetFreeSEOAuditPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <section className="relative overflow-hidden pb-10 pt-10 md:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Search className="h-4 w-4" />
                Free SEO Audit
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                See What&apos;s Blocking Your Google Rankings
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
                We&apos;ll review your website for technical SEO gaps, on-page opportunities, and visibility issues so you know exactly where to improve first.
              </p>

              <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-muted/40 p-5">
                  <LineChart className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-semibold">Ranking opportunity scan</p>
                  <p className="mt-1 text-sm text-muted-foreground">Find keyword and competitor gaps worth targeting.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-muted/40 p-5">
                  <Search className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-semibold">On-page review</p>
                  <p className="mt-1 text-sm text-muted-foreground">Check metadata, content structure, and crawlability issues.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-muted/40 p-5">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-semibold">Action plan</p>
                  <p className="mt-1 text-sm text-muted-foreground">Get practical recommendations your team can act on.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-muted shadow-2xl shadow-primary/10">
                <Image
                  src="/images/services/seo-optimization-visual.svg?v=2"
                  alt="SEO dashboard illustration showing ranking growth and technical audit highlights"
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-primary/10" />
              </div>

              <div className="absolute -bottom-6 left-6 rounded-3xl border border-white/15 bg-background/80 px-5 py-4 shadow-xl backdrop-blur">
                <div className="text-2xl font-black text-primary">Free SEO Review</div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Technical, on-page, and visibility checks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuditSection
        id="seo-audit-form"
        badge="Get Free SEO Audit"
        title="Request an SEO audit built around rankings, traffic, and conversions."
        description="Share your website details and we'll evaluate technical SEO, on-page optimization, search visibility, and quick wins for stronger organic growth."
        formTitle="Claim Your Free SEO Audit"
        formDescription="Use the same audit form below and our SEO team will connect with you after the initial review."
        submitLabel="Request SEO Audit"
        successMessage="Your SEO audit request has been sent successfully. Our team will review your website and contact you soon."
        subject="New Digital Era free SEO audit request"
        features={[
          {
            icon: "search",
            eyebrow: "SEO analysis",
            text: "Technical, content, and ranking opportunity review",
          },
          {
            icon: "globe",
            eyebrow: "Site visibility",
            text: "Page performance, crawlability, and indexing signals",
          },
          {
            icon: "phone",
            eyebrow: "Expert follow-up",
            text: "An SEO strategist will discuss the findings with you",
          },
        ]}
      />
    </main>
  );
}
