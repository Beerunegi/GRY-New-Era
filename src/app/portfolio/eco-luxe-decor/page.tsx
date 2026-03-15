import Link from "next/link";
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Search, 
  Globe, 
  Lightbulb, 
  CheckCircle2,
  MonitorSmartphone,
  Gauge,
  Code,
  Layout
} from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Shopify SEO & eCommerce Growth for Eco Luxe Decor | Case Study",
  description: "Discover how we launched and grew Eco Luxe Decor from $0 to $2500/month in 6 months through custom Shopify design and strategic SEO.",
};

export default function EcoLuxeDecorCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
              Shopify & SEO Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Shopify SEO & eCommerce Growth for Eco Luxe Decor
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              How a ground-up Shopify build combined with an aggressive technical and product SEO strategy generated $2,500/month in organic sales within 6 months.
            </p>
            
            {/* Key Results Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">$2,500</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">Monthly Sales (0 to 6 mo)</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Search className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">Ranking</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">High Organic Traffic</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Layout className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">Custom</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">UX & Store Design</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Gauge className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">99/100</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">Performance Score</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* 2. Client Overview & 3. Challenges */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold border-transparent bg-secondary text-secondary-foreground mb-4">
                Client Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Eco Luxe Decor
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eco Luxe Decor is a premium online retailer specializing in modern lighting and contemporary home styling. Their extensive catalog includes elegant pendant lights, sophisticated chandeliers, minimalist ceiling lights, and architectural wall lighting solutions for modern interiors.
              </p>
              <div className="flex items-center gap-2 pt-4 text-primary font-medium">
                <Globe className="h-5 w-5" />
                <Link href="https://ecoluxedecor.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  ecoluxedecor.com
                </Link>
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 md:p-10 rounded-3xl border">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold border-destructive/20 bg-destructive/10 text-destructive mb-6">
                The Challenge
              </div>
              <h3 className="text-2xl font-bold mb-4">Starting from Scratch</h3>
              <ul className="space-y-4">
                {[
                  "Launching a brand new domain with absolutely zero initial domain authority or traffic.",
                  "Fierce competition in the premium home decor and lighting eCommerce space.",
                  "Need for an extremely visual, high-end shopping experience that instills buyer trust.",
                  "Complex product variants (sizes, materials, colors) requiring specialized technical SEO.",
                  "No existing customer base or brand recognition (Starting at $0 revenue)."
                ].map((challenge, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-background border flex items-center justify-center text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategy & Solutions */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Strategy & Solutions</h2>
            <p className="text-lg text-muted-foreground">
              We took a holistic approach, handling the entire technical build while simultaneously laying a foundation for aggressive organic search dominance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Layout className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shopify Website Design</h3>
              <p className="text-muted-foreground">
                Designed a premium, minimalist visual identity that allows the lighting products to take center stage, enhancing perceived value and brand luxury.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shopify Development</h3>
              <p className="text-muted-foreground">
                Built a robust, conversion-focused infrastructure with custom mega-menus, advanced filtering, and seamless cart functionality.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Search className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Product SEO</h3>
              <p className="text-muted-foreground">
                Optimized hundreds of individual product listings with targeted keywords, rich schemas, and search-intent-aligned product descriptions.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical SEO</h3>
              <p className="text-muted-foreground">
                Implemented dynamic sitemaps, canonical tags to prevent duplicate content, and clean URL structures to ensure perfect indexing by Google.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Gauge className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
              <p className="text-muted-foreground">
                Compressed high-resolution imagery, deferred non-critical scripts, and optimized server response times to pass Core Web Vitals flawlessly.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MonitorSmartphone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">UX Improvements</h3>
              <p className="text-muted-foreground">
                Created a frictionless mobile purchasing experience, integrating social proof and clear shipping/return policies directly on the product pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tools & Platforms / 6. Results & Visuals Combined */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Zero to Scale</h2>
                <p className="text-lg text-muted-foreground">
                  By treating technical infrastructure and organic search strategy as a unified discipline, we broke through the initial "trust barrier" for a new store, driving predictable monthly recurring revenue.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border">
                  <div className="p-3 bg-background rounded-lg shadow-sm">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$2,500/mo</div>
                    <div className="text-sm text-muted-foreground">Sales growth from $0 within 6 months</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border">
                  <div className="p-3 bg-background rounded-lg shadow-sm">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Organic Traffic</div>
                    <div className="text-sm text-muted-foreground">Dominating niche lighting keywords</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Shopify Plus", "Google Analytics 4", "Google Search Console", "Ahrefs", "Semrush", "Figma"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-muted text-foreground text-sm font-medium rounded-full border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Website Screenshots / Portfolio images */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
                
                {/* Visual placeholder - Using a dark, moody professional gradient placeholder to represent lighting products */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-stone-800 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  
                  {/* Decorative glowing light effect */}
                  <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent opacity-80" />
                  
                  {/* Mock Browser UI */}
                  <div className="w-full max-w-2xl bg-[#fafafa] rounded-xl border border-white/10 shadow-2xl overflow-hidden z-20 transition-transform duration-700 group-hover:scale-105">
                    <div className="h-8 bg-neutral-200 flex items-center px-4 gap-2 border-b">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <div className="mx-auto bg-white rounded px-24 py-1 flex items-center text-xs text-neutral-500 shadow-sm border border-neutral-200">
                        ecoluxedecor.com
                      </div>
                    </div>
                    
                    <div className="aspect-[16/9] bg-white relative flex flex-col">
                      {/* Fake header */}
                      <div className="h-16 border-b flex items-center justify-between px-8 bg-white">
                        <div className="font-serif text-xl tracking-widest text-neutral-900">ECO LUXE MENU</div>
                        <div className="flex gap-6 text-sm text-neutral-500 uppercase tracking-widest text-xs">
                          <span>Lighting</span>
                          <span>Decor</span>
                          <span className="text-amber-700">Cart (0)</span>
                        </div>
                      </div>

                      {/* Fake hero section - Minimalist typography & image */}
                      <div className="flex-1 flex bg-stone-50">
                        {/* Split layout common in high end decor */}
                        <div className="w-1/2 p-10 flex flex-col justify-center">
                          <div className="w-12 h-[1px] bg-neutral-300 mb-6" />
                          <div className="h-8 w-48 bg-neutral-800 rounded-sm mb-4" />
                          <div className="h-4 w-64 bg-neutral-300 rounded-sm mb-2" />
                          <div className="h-4 w-56 bg-neutral-300 rounded-sm mb-8" />
                          <div className="h-10 w-32 bg-amber-700 text-white rounded-sm" />
                        </div>
                        <div className="w-1/2 relative bg-stone-200 p-6 flex flex-col gap-4">
                           {/* Mock product shots */}
                           <div className="flex-1 bg-stone-300 rounded overflow-hidden relative">
                             {/* Mock pendant light shape */}
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-neutral-400" />
                             <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-16 rounded-b-full bg-neutral-500" />
                             <div className="absolute top-28 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-100/40 rounded-full blur-xl mix-blend-screen" />
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border shadow-sm text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Premium eCommerce Architecture
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl mix-blend-multiply" />
            </div>

          </div>
        </div>
      </section>

      {/* 8. Client Testimonial */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto text-primary-foreground/30 mb-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "Starting an eCommerce brand from $0 is incredibly daunting. The combination of a beautiful Shopify storefront and an aggressive SEO strategy gave us the foundation we needed to hit $2,500/month within just six months. The organic traffic continues to scale our business."
            </blockquote>
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xl font-bold mb-4 border border-primary-foreground/20">
                EL
              </div>
              <div className="font-bold text-lg">Founding Team</div>
              <div className="text-primary-foreground/70">Eco Luxe Decor</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 9. Strong CTA & Contact Sections */}
      <CTASection />
      <ContactSection />
    </div>
  );
}
