import { MetadataRoute } from 'next';
import { getMetadataBase } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const metadataBase = getMetadataBase().toString();
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${metadataBase}/sitemap.xml`,
  };
}
