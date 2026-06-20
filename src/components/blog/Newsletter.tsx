import { ArrowRight, Mail } from "lucide-react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const id = compact ? "newsletter-email-compact" : "newsletter-email";
  return (
    <section className={compact ? "blog-newsletter blog-newsletter--compact" : "blog-newsletter"} aria-labelledby={`${id}-title`}>
      <div className="blog-newsletter__icon"><Mail aria-hidden="true" /></div>
      <div className="blog-newsletter__copy"><span className="blog-kicker">The growth brief</span><h2 id={`${id}-title`}>Smarter digital insights, delivered.</h2><p>One practical email on search, content, AI and conversion. No noise.</p></div>
      <form className="blog-newsletter__form" action="#" method="post"><label className="sr-only" htmlFor={id}>Work email</label><input id={id} name="email" type="email" placeholder="you@company.com" autoComplete="email" required /><button type="submit">Subscribe <ArrowRight size={17} aria-hidden="true" /></button></form>
    </section>
  );
}
