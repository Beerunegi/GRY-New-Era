"use client";

import { motion } from "framer-motion";

const GooglePartner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.5 20c0-.6.1-1.2.2-1.8l-5.6-4.3c-.6 1.2-1 2.6-1 4.1s.4 2.9 1 4.1l5.6-4.3c-.1-.6-.2-1.2-.2-1.8z" fill="#FBBC05"/>
    <path d="M20 14.5c1.6 0 3 .6 4.1 1.6l4-4C25.7 10 23 9 20 9c-4.1 0-7.7 2.3-9.5 5.7l5.6 4.3c.9-2.6 3.3-4.5 3.9-4.5z" fill="#EA4335"/>
    <path d="M20 25.5c-3.1 0-5.8-1.9-6.9-4.5l-5.6 4.3c1.8 3.4 5.4 5.7 9.5 5.7 2.9 0 5.6-1.1 7.7-2.9l-4.7-3.7c-.8.7-1.8 1.1-3 1.1z" fill="#34A853"/>
    <path d="M30.5 20c0-.8-.1-1.6-.2-2.4H20v4.7h5.9c-.3 1.5-1.1 2.7-2.3 3.5l4.7 3.7c2.8-2.6 4.2-6.5 4.2-9.5z" fill="#4285F4"/>
    <text x="42" y="27" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="#5F6368">Google Partner</text>
  </svg>
);

const MetaPartner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.5 15.6c-.7 0-1.4.1-2 .4-2.8 1-3.5 4.8-.8 7 1.5 1.2 3.8.9 5.2-.6.7-.7 1.1-1.4 1.1-1.4s.5.9 1.1 1.4c1.4 1.5 3.7 1.8 5.2.6 2.7-2.2 2-6-.8-7-.6-.2-1.3-.4-2-.4s-1.8.4-2.9 1.7c-1.1-1.3-2.1-1.7-2-1.7-1.1-1.3-2-1.7-2-1.7zm0 1.9c.7 0 1.4.4 2 1.2.1.2 1.4 2.8 1.4 2.8s.5-2 .5-2c0-.5-.5-1.6-.5-1.6.5-.8 1.2-1.2 2-1.2h.1c.9.1 1.6.9 1.6 2.1 0 1.2-1 2.1-2.1 2.1-1 0-1.8-.7-1.8-.7s-.5.8-1.1 1.4c-.2.2-.5.5-.9.7l-.3.2-.3-.2c-.4-.2-.7-.5-.9-.7-.6-.6-1.1-1.4-1.1-1.4s-.8.7-1.8.7c-1.1 0-2.1-.9-2.1-2.1 0-1.2.7-2 1.6-2.1h.1z" fill="#0668E1" stroke="#0668E1" strokeWidth="1.5"/>
    <text x="35" y="27" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="#1C1E21">Meta Partner</text>
  </svg>
);

const HubSpotPartner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="15" cy="20" r="10" stroke="#FF7A59" strokeWidth="2.5"/>
    <circle cx="15" cy="15" r="3" fill="#FF7A59"/>
    <circle cx="20" cy="23" r="3" fill="#2E475D"/>
    <circle cx="10" cy="23" r="3" fill="#2E475D"/>
    <text x="35" y="27" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="#2E475D">HubSpot Partner</text>
  </svg>
);

const ShopifyPartner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 12l3 1.5v13l-3 1.5h-14l-3-1.5v-13l3-1.5h14z" fill="#95BF47"/>
    <path d="M15 14v12m-4-12l8 12" stroke="white" strokeWidth="2.5"/>
    <text x="35" y="27" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="#212326">Shopify Partner</text>
  </svg>
);

const SEMrushAgency = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M25 20a10 10 0 11-20 0 10 10 0 0120 0z" fill="#FF642D"/>
    <path d="M13 16l4 8M17 16l-4 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="38" y="27" fontSize="16" fontWeight="700" fontFamily="sans-serif" fill="#424242">SEMrush Agency</text>
  </svg>
);

const partners = [
  <GooglePartner key="google" />,
  <MetaPartner key="meta" />,
  <HubSpotPartner key="hubspot" />,
  <ShopifyPartner key="shopify" />,
  <SEMrushAgency key="semrush" />,
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Our Certified Tech Stack</h3>
            <p className="text-muted-foreground text-base">We're proud partners with industry leaders to bring you the best-in-class solutions.</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-24 py-4"
          animate={{ x: [0, -1200] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <div className="bg-card px-8 py-5 rounded-2xl border border-border/50 shadow-sm flex items-center justify-center min-w-[220px]">
                {partner}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
