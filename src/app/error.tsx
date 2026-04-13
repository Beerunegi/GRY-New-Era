"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-24">
      <div className="w-full max-w-xl rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          We hit an unexpected website error.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page failed to load completely. Please try again, or head back to the homepage while we recover.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>
            Try Again
          </Button>
          <Link href="/" className="inline-flex">
            <Button type="button" variant="outline" className="w-full sm:w-auto">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
