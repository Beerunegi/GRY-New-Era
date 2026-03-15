"use client";

import { motion } from "framer-motion";

const GlobalLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g className="fill-current">
      <path d="M12 20a8 8 0 1016 0 8 8 0 00-16 0zm-2 0a10 10 0 1120 0 10 10 0 01-20 0z" />
      <path d="M20 12a8 8 0 000 16M20 12a8 8 0 010 16" stroke="currentColor" strokeWidth="2" />
      <path d="M12 20h16" stroke="currentColor" strokeWidth="2" />
    </g>
    <text x="40" y="27" fontSize="20" fontWeight="800" fontFamily="sans-serif" fill="currentColor" letterSpacing="-0.02em">GLOBAL</text>
  </svg>
);

const NexusLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g className="fill-current">
      <path d="M10 10l10 20h10L20 10H10z" />
      <path d="M16 10l10 20h10L26 10H16z" opacity="0.5" />
    </g>
    <text x="45" y="27" fontSize="20" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" letterSpacing="0.1em">NEXUS</text>
  </svg>
);

const AcmeLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 30L10 12h7l5.5 10L28 12h7L25 30h-5z" fill="currentColor" />
    <text x="45" y="27" fontSize="22" fontWeight="900" fontFamily="sans-serif" fill="currentColor">ACME</text>
  </svg>
);

const QuantumLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="3.5" />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
    <text x="42" y="27" fontSize="19" fontWeight="600" fontFamily="sans-serif" fill="currentColor" letterSpacing="0.05em">QUANTUM</text>
  </svg>
);

const SynapseLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M20 12v16M12 20h16" stroke="currentColor" strokeWidth="2.5" />
    <text x="42" y="26" fontSize="19" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">SYNAPSE</text>
  </svg>
);

const VelocityLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 30l8-18h6l-8 18h-6z" fill="currentColor" />
    <path d="M18 30l8-18h6l-8 18h-6z" fill="currentColor" opacity="0.6" />
    <path d="M26 30l8-18h6l-8 18h-6z" fill="currentColor" opacity="0.3" />
    <text x="48" y="27" fontSize="22" fontStyle="italic" fontWeight="900" fontFamily="sans-serif" fill="currentColor">VELOCITY</text>
  </svg>
);

const clients = [
  <GlobalLogo key="global" className="h-10 w-auto" />,
  <AcmeLogo key="acme" className="h-10 w-auto" />,
  <NexusLogo key="nexus" className="h-10 w-auto" />,
  <QuantumLogo key="quantum" className="h-10 w-auto" />,
  <SynapseLogo key="synapse" className="h-10 w-auto" />,
  <VelocityLogo key="velocity" className="h-10 w-auto" />
];

export function ClientsMarquee() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-10 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Mask for smooth fade edge effects */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-20 py-4"
          animate={{ x: [0, -1450] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* Repeat the array to create infinite seamless scroll loop */}
          {[...clients, ...clients, ...clients, ...clients].map((logo, i) => (
            <div
              key={i}
              className="text-muted-foreground/40 hover:text-foreground/80 transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
