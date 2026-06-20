import type { Metadata } from "next";

export const business = {
  name: "New Digital Era",
  email: "info@newdigitalera.in",
  telephone: "+91 98712 64699",
  telephoneHref: "+919871264699",
  address: {
    streetAddress: "3rd Floor, A-303, Sector 5, Sahibabad",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201005",
    addressCountry: "IN",
  },
  areaServed: ["Ghaziabad", "Noida", "Delhi NCR", "India"],
} as const;

type PageSEO = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createMetadata({ title, description, path, keywords = [], type = "website" }: PageSEO): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: business.name, locale: "en_IN", type },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
  };
}

export function getBusinessSchemas(siteUrl: string) {
  const businessId = `${siteUrl}/#localbusiness`;
  return [
    {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": businessId,
      name: business.name,
      url: siteUrl,
      email: business.email,
      telephone: business.telephoneHref,
      priceRange: "₹₹",
      address: { "@type": "PostalAddress", ...business.address },
      areaServed: business.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
      knowsAbout: ["SEO", "AEO", "Generative engine optimization", "Local SEO", "Google Ads", "Social media marketing", "Website development", "Conversion rate optimization"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: business.name,
      publisher: { "@id": businessId },
      inLanguage: "en-IN",
    },
  ];
}
