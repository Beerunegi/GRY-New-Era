import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Target, 
  Globe, 
  Lightbulb, 
  CheckCircle2,
  MonitorSmartphone,
  BarChart,
  Search,
  Megaphone
} from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Shopify eCommerce Growth for Motherland Groceries | Case Study",
  description: "Discover how we increased sales by 45% and website traffic by 30% for Motherland Groceries through optimal Shopify setup, Google Ads, and SEO.",
};

export default function MotherlandGroceriesCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
              eCommerce Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Shopify eCommerce Growth for Motherland Groceries
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              How a strategic approach to Shopify optimization, Google Shopping, and SEO transformed an online African and international grocery store.
            </p>
            
            {/* Key Results Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">+45%</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">Increase in Sales</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">+30%</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">Website Traffic</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <ShoppingCart className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">Optimized</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">Shopify Store</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Target className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">High ROI</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">Google Shopping</p>
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
                Motherland Groceries
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motherland Groceries is a premier online grocery store specializing in authentic African and international food products. Their mission is to bring a taste of home to diaspora communities while introducing diverse global flavors to new customers.
              </p>
              <div className="flex items-center gap-2 pt-4 text-primary font-medium">
                <Globe className="h-5 w-5" />
                <Link href="https://motherlandgroceries.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  motherlandgroceries.com
                </Link>
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 md:p-10 rounded-3xl border">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold border-destructive/20 bg-destructive/10 text-destructive mb-6">
                The Challenge
              </div>
              <h3 className="text-2xl font-bold mb-4">Obstacles to Scale</h3>
              <ul className="space-y-4">
                {[
                  "Low conversion rates despite having high-quality niche products.",
                  "Poor product visibility on search engines, relying heavily on word-of-mouth.",
                  "Unoptimized product feeds causing Google Merchant Center disapprovals.",
                  "Inefficient Google Ads campaigns leading to wasted ad spend.",
                  "A Shopify setup that lacked crucial conversion rate optimization (CRO) elements."
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
              We implemented a comprehensive digital transformation strategy tailored specifically for their eCommerce model, focusing on infrastructure stability and high-intent customer acquisition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ShoppingCart className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shopify Optimization</h3>
              <p className="text-muted-foreground">
                Overhauled the Shopify store architecture to improve site speed, simplify navigation, and implement an intuitive checkout flow to significantly reduce cart abandonment.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Target className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Merchant Center</h3>
              <p className="text-muted-foreground">
                Configured and optimized the Google Merchant Center setup. Fixed critical errors, structured product data variants, and ensuring 100% feed approval rate.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Megaphone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Shopping Ads</h3>
              <p className="text-muted-foreground">
                Launched highly segmented Google Shopping campaigns to target users actively searching for specific African grocery items, maximizing Return on Ad Spend (ROAS).
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Search className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Improvements</h3>
              <p className="text-muted-foreground">
                Conducted deep keyword research and optimized product titles, meta descriptions, and category pages to increase organic visibility for hard-to-find ethnic products.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BarChart className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
              <p className="text-muted-foreground">
                Implemented robust Analytics tracking to measure precise user journeys, attributing conversions accurately, and enabling data-driven campaign adjustments.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MonitorSmartphone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">UX Enhancement</h3>
              <p className="text-muted-foreground">
                Redesigned key touchpoints across mobile and desktop interfaces to ensure a seamless, high-converting experience for all users regardless of device.
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Impact</h2>
                <p className="text-lg text-muted-foreground">
                  By restructuring their digital presence and driving high-intent traffic, Motherland Groceries saw immediate improvements in both top-line revenue and overall site engagement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border">
                  <div className="p-3 bg-background rounded-lg shadow-sm">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+45% Sales</div>
                    <div className="text-sm text-muted-foreground">Year-Over-Year Revenue Growth</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border">
                  <div className="p-3 bg-background rounded-lg shadow-sm">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+30% Traffic</div>
                    <div className="text-sm text-muted-foreground">Increase in Organic & Paid Visits</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Shopify", "Google Merchant Center", "Google Ads", "Google Analytics 4", "Semrush"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-muted text-foreground text-sm font-medium rounded-full border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
                
                {/* Visual placeholder - Using a dark, professional gradient placeholder if no image exists */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 text-center relative">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-2xl" />
                  
                  {/* Mock Browser UI */}
                  <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden mt-8 z-20 transition-transform duration-700 group-hover:scale-105">
                    <div className="h-8 bg-black/40 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <div className="mx-auto bg-white/10 rounded px-24 py-1 flex items-center text-xs text-white/50">
                        motherlandgroceries.com
                      </div>
                    </div>
                    <div className="aspect-[16/9] bg-white relative flex flex-col">
                      {/* Fake header */}
                      <div className="h-12 border-b flex items-center justify-between px-6 bg-slate-50">
                        <div className="font-bold text-slate-800">Motherland Groceries</div>
                        <div className="flex gap-4 text-sm text-slate-500">
                          <span>Categories</span>
                          <span>Deals</span>
                          <span>Cart (3)</span>
                        </div>
                      </div>
                      {/* Fake hero image space */}
                      <div className="h-32 bg-green-900/10 flex items-center px-8">
                        <div className="space-y-2">
                          <div className="h-6 w-48 bg-green-900/20 rounded" />
                          <div className="h-4 w-64 bg-slate-200 rounded" />
                        </div>
                      </div>
                      {/* Fake product grid */}
                      <div className="flex-1 p-6 grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="flex flex-col gap-2">
                            <div className="aspect-square bg-slate-100 rounded-lg" />
                            <div className="h-3 w-full bg-slate-200 rounded" />
                            <div className="h-3 w-2/3 bg-slate-200 rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border shadow-sm text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    High-Converting Design
                  </div>
                </div>
              </div>
              
              {/* Optional Decoration */}
              <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl mix-blend-multiply" />
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
              "The transformation in our online business has been incredible. 
              Not only does our Shopify store look better, but the strategic Google Shopping 
              and SEO campaigns have driven consistent, high-quality traffic. Seeing a 45% increase in sales 
              speaks volumes about their expertise."
            </blockquote>
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xl font-bold mb-4 border border-primary-foreground/20">
                MG
              </div>
              <div className="font-bold text-lg">Management Team</div>
              <div className="text-primary-foreground/70">Motherland Groceries</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 9. Strong CTA & Contact Sections */}
      <CTASection />
      <ContactSection />
    </div>
  );
}
